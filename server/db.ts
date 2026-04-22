import { eq, and, gte, lte, asc, desc } from "drizzle-orm";
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

export async function getReservationById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(reservations).where(eq(reservations.id, id)).limit(1);
  return result[0] || null;
}

// --- PROMOTIONS (Ако ги ползваш отделно) ---
export async function createPromotion(data: InsertPromotion) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(promotions).values(data);
}

export async function getPromotions() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.select().from(promotions).orderBy(desc(promotions.createdAt));
}

// --- EVENTS (ОБНОВЕНИ ЗА ЮНИ ПРОМОЦИЯТА) ---

export async function getEvents() {
  const db = await getDb();
  if (!db) return [];
  // Подреждаме ги по начална дата, най-новите отгоре
  // ВНИМАНИЕ: Увери се, че в schema.ts полето е startDate, а не eventDate
  return await db.select().from(events).orderBy(desc(events.startDate));
}

export async function createEvent(data: InsertEvent) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  // Drizzle автоматично ще вкара title, description, originalPrice, 
  // discountedPrice, discountPercentage, imageUrl, startDate, endDate и status
  return await db.insert(events).values(data);
}

export async function deleteEvent(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(events).where(eq(events.id, id));
}
