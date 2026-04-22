import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  users, 
  reservations, 
  promotions, 
  events,
  InsertUser,
  InsertReservation,
  InsertPromotion,
  InsertEvent
} from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      _db = null;
    }
  }
  return _db;
}

// --- USERS ---
export async function upsertUser(user: InsertUser) {
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

// --- RESERVATIONS ---
export async function createReservation(data: InsertReservation) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(reservations).values(data);
}

export async function getReservations() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.select().from(reservations).orderBy(desc(reservations.createdAt));
}

// ТАЗИ ФУНКЦИЯ ЛИПСВАШЕ И ЧУПЕШЕ BUILD-A
export async function getReservationById(id: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(reservations).where(eq(reservations.id, id)).limit(1);
  return result[0] || null;
}

// --- PROMOTIONS ---
export async function getPromotions() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(promotions).orderBy(desc(promotions.createdAt));
}

// ТАЗИ ФУНКЦИЯ СЪЩО ЛИПСВАШЕ
export async function updatePromotion(id: number, data: Partial<InsertPromotion>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(promotions).set(data).where(eq(promotions.id, id));
}

// --- EVENTS ---
export async function getEvents() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(events).orderBy(desc(events.eventDate));
}

export async function createEvent(data: InsertEvent) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(events).values(data);
}
