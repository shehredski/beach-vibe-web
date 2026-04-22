import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { 
  createReservation, 
  getReservations, 
  getReservationById, 
  createPromotion, 
  getPromotions, 
  getActivePromotions, 
  getPromotionById, 
  updatePromotion, 
  deletePromotion,
  getEvents,
  createEvent,    // Използваме името от вашия db.ts
  deleteEvent     // Използваме името от вашия db.ts
} from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
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

  promotions: router({
    list: publicProcedure.query(async () => {
      return getPromotions();
    }),
    active: publicProcedure.query(async () => {
      return getActivePromotions();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return getPromotionById(input.id);
      }),
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string(),
        originalPrice: z.string(),
        discountedPrice: z.string(),
        discountPercentage: z.number(),
        imageUrl: z.string().optional(),
        startDate: z.date(),
        endDate: z.date(),
        status: z.enum(["active", "inactive", "expired"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Only admins can create promotions");
        }
        return createPromotion({
          title: input.title,
          description: input.description,
          originalPrice: input.originalPrice as any,
          discountedPrice: input.discountedPrice as any,
          discountPercentage: input.discountPercentage,
          imageUrl: input.imageUrl,
          startDate: input.startDate,
          endDate: input.endDate,
          status: input.status,
        });
      }),
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        originalPrice: z.string().optional(),
        discountedPrice: z.string().optional(),
        discountPercentage: z.number().optional(),
        imageUrl: z.string().optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
        status: z.enum(["active", "inactive", "expired"]).optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Only admins can update promotions");
        }
        const { id, ...data } = input;
        return updatePromotion(id, data as any);
      }),
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Only admins can delete promotions");
        }
        return deletePromotion(input.id);
      }),
  }),

  events: router({
    list: publicProcedure.query(async () => {
      return getEvents();
    }),
    create: publicProcedure
      .input(z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        imageUrl: z.string().optional(),
        adminPassword: z.string(),
      }))
      .mutation(async ({ input }) => {
        if (input.adminPassword !== "beachvibe2024") {
          throw new Error("Невалидна парола!");
        }

        return createEvent({
          title: input.title,
          description: input.description,
          eventDate: new Date(input.date),
          imageUrl: input.imageUrl || "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
        });
      }),
    delete: publicProcedure
      .input(z.object({ 
        id: z.number(), 
        adminPassword: z.string() 
      }))
      .mutation(async ({ input }) => {
        if (input.adminPassword !== "beachvibe2024") {
          throw new Error("Невалидна парола!");
        }
        return deleteEvent(input.id);
      }),
  }),
});

export type AppRouter = typeof appRouter;
