import { eq, desc, and, gte } from "drizzle-orm";
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

// --- ПОТРЕБИТЕЛИ ---
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

// --- РЕЗЕРВАЦИИ ---
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

export async function getReservationById(id: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(reservations).where(eq(reservations.id, id)).limit(1);
  return result[0] || null;
}

// --- ПРОМОЦИИ (ВСИЧКИ ЛИПСВАЩИ ФУНКЦИИ) ---

export async function getPromotions() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(promotions).orderBy(desc(promotions.createdAt));
}

export async function getActivePromotions() {
  const db = await getDb();
  if (!db) return [];
  // Връща само активните промоции
  return await db.select().from(promotions).where(eq(promotions.status, "active"));
}

export async function createPromotion(data: InsertPromotion) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(promotions).values(data);
}

export async function updatePromotion(id: number, data: Partial<InsertPromotion>) {
  const db = await db.fetch(); // Поправка за Railway среда ако е нужно
  const database = await getDb();
  if (!database) throw new Error("Database not available");
  return await database.update(promotions).set(data).where(eq(promotions.id, id));
}

export async function deletePromotion(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(promotions).where(eq(promotions.id, id));
}

// --- СЪБИТИЯ ---
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

export async function deleteEvent(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(events).where(eq(events.id, id));
}
