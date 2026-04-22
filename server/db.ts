import { eq, and, gte, lte, asc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  reservations, 
  InsertReservation, 
  promotions, 
  InsertPromotion,
  events,        
  InsertEvent    
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// --- USERS ---
export async function upsertUser(user: InsertUser): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(users).values(user).onDuplicateKeyUpdate({ set: user });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

// --- RESERVATIONS (ВАЖНО - провери дали тези имена съвпадат с лога) ---
export async function createReservation(data: InsertReservation) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(reservations).values(data);
}

export async function getReservations() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.select().from(reservations).orderBy((t) => t.createdAt);
}

export async function getReservationById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(reservations).where(eq(reservations.id, id)).limit(1);
  return result[0] || null;
}

// --- PROMOTIONS ---
export async function createPromotion(data: InsertPromotion) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(promotions).values(data);
}

export async function getPromotions() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.select().from(promotions).orderBy((t) => t.createdAt);
}

export async function getActivePromotions() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const now = new Date();
  return await db.select().from(promotions).where(
    and(
      eq(promotions.status, "active"),
      lte(promotions.startDate, now),
      gte(promotions.endDate, now)
    )
  );
}

export async function getPromotionById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(promotions).where(eq(promotions.id, id)).limit(1);
  return result[0] || null;
}

export async function updatePromotion(id: number, data: Partial<InsertPromotion>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(promotions).set(data).where(eq(promotions.id, id));
}

export async function deletePromotion(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(promotions).where(eq(promotions.id, id));
}

// --- EVENTS ---
export async function getEvents() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(events).orderBy(asc(events.eventDate));
}

export async function createEvent(data: InsertEvent) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(events).values(data);
}

export async function deleteEvent(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(events).where(eq(events.id, id));
}
