import { describe, expect, it, beforeEach } from "vitest";
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

describe("promotions", () => {
  describe("list", () => {
    it("should return all promotions", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.promotions.list();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("active", () => {
    it("should return only active promotions", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.promotions.active();
      expect(Array.isArray(result)).toBe(true);
      // All returned promotions should have active status
      if (result.length > 0) {
        result.forEach((promo) => {
          expect(promo.status).toBe("active");
        });
      }
    });
  });

  describe("getById", () => {
    it("should return null for non-existent promotion", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.promotions.getById({ id: 99999 });
      expect(result).toBeNull();
    });
  });

  describe("create", () => {
    it("should reject non-admin users", async () => {
      const { ctx } = createAuthContext(false);
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.promotions.create({
          title: "Summer Special",
          description: "Limited time offer",
          originalPrice: "15.00",
          discountedPrice: "10.00",
          discountPercentage: 33,
          imageUrl: "https://example.com/image.jpg",
          startDate: new Date(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          status: "active",
        })
      ).rejects.toThrow("Only admins can create promotions");
    });

    it("should allow admin users to create promotions", async () => {
      const { ctx } = createAuthContext(true);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.promotions.create({
        title: "Summer Special",
        description: "Limited time offer",
        originalPrice: "15.00",
        discountedPrice: "10.00",
        discountPercentage: 33,
        imageUrl: "https://example.com/image.jpg",
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: "active",
      });

      expect(result).toBeDefined();
    });
  });

  describe("update", () => {
    it("should reject non-admin users", async () => {
      const { ctx } = createAuthContext(false);
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.promotions.update({
          id: 1,
          title: "Updated Title",
        })
      ).rejects.toThrow("Only admins can update promotions");
    });
  });

  describe("delete", () => {
    it("should reject non-admin users", async () => {
      const { ctx } = createAuthContext(false);
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.promotions.delete({ id: 1 })
      ).rejects.toThrow("Only admins can delete promotions");
    });
  });
});
