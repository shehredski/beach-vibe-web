import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createReservation, getReservations, getReservationById } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  reservations: router({
    create: publicProcedure
      .input(z.object({
        date: z.string(),
        time: z.string(),
        partySize: z.number(),
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
      }))
      .mutation(async ({ input }) => {
        const result = await createReservation({
          date: input.date,
          time: input.time,
          partySize: input.partySize,
          name: input.name,
          email: input.email,
          phone: input.phone,
          status: "pending",
        });

        // Send owner notification
        await notifyOwner({
          title: "New Reservation",
          content: `New reservation from ${input.name} for ${input.partySize} guests on ${input.date} at ${input.time}. Contact: ${input.email} / ${input.phone}`,
        });

        return result;
      }),
    list: protectedProcedure.query(async () => {
      return getReservations();
    }),
    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return getReservationById(input.id);
      }),
  }),
});

export type AppRouter = typeof appRouter;
