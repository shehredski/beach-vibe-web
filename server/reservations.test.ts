import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(isAdmin = false): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "test",
    role: isAdmin ? "admin" : "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return { ctx };
}

describe("reservations", () => {
  describe("create", () => {
    it("should create a reservation with valid input", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.reservations.create({
        date: "2026-05-15",
        time: "19:00",
        partySize: 4,
        name: "John Doe",
        email: "john@example.com",
        phone: "+359 88 123 4567",
      });

      expect(result).toBeDefined();
    });

    it("should reject invalid email", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.reservations.create({
          date: "2026-05-15",
          time: "19:00",
          partySize: 4,
          name: "John Doe",
          email: "invalid-email",
          phone: "+359 88 123 4567",
        })
      ).rejects.toThrow();
    });

    it("should accept reservations with valid data", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.reservations.create({
        date: "2026-05-15",
        time: "19:00",
        partySize: 4,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+359 88 123 4567",
      });

      expect(result).toBeDefined();
    });

    it("should accept various party sizes", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.reservations.create({
        date: "2026-05-16",
        time: "20:00",
        partySize: 8,
        name: "Group Booking",
        email: "group@example.com",
        phone: "+359 88 999 8888",
      });

      expect(result).toBeDefined();
    });
  });

  describe("list", () => {
    it("should require authentication", async () => {
      const ctx: TrpcContext = {
        user: null,
        req: {
          protocol: "https",
          headers: {},
        } as TrpcContext["req"],
        res: {} as TrpcContext["res"],
      };

      const caller = appRouter.createCaller(ctx);

      await expect(caller.reservations.list()).rejects.toThrow();
    });

    it("should return reservations for authenticated user", async () => {
      const { ctx } = createAuthContext(true);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.reservations.list();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("getById", () => {
    it("should require authentication", async () => {
      const ctx: TrpcContext = {
        user: null,
        req: {
          protocol: "https",
          headers: {},
        } as TrpcContext["req"],
        res: {} as TrpcContext["res"],
      };

      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.reservations.getById({ id: 1 })
      ).rejects.toThrow();
    });

    it("should return null for non-existent reservation", async () => {
      const { ctx } = createAuthContext(true);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.reservations.getById({ id: 99999 });
      expect(result).toBeNull();
    });
  });
});
