import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

/**
 * ПОТРЕБИТЕЛИ
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * РЕЗЕРВАЦИИ
 */
export const reservations = mysqlTable("reservations", {
  id: int("id").autoincrement().primaryKey(),
  date: varchar("date", { length: 10 }).notNull(), // Формат: YYYY-MM-DD
  time: varchar("time", { length: 5 }).notNull(),  // Формат: HH:mm
  partySize: int("partySize").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  status: mysqlEnum("status", ["pending", "confirmed", "cancelled"]).default("pending").notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Reservation = typeof reservations.$inferSelect;
export type InsertReservation = typeof reservations.$inferInsert;

/**
 * МЕНЮ (КОКТЕЙЛИ)
 */
export const cocktails = mysqlTable("cocktails", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  imageUrl: varchar("imageUrl", { length: 500 }),
  price: varchar("price", { length: 50 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Cocktail = typeof cocktails.$inferSelect;
export type InsertCocktail = typeof cocktails.$inferInsert;

/**
 * ПРОМОЦИИ
 */
export const promotions = mysqlTable("promotions", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  originalPrice: decimal("originalPrice", { precision: 10, scale: 2 }).notNull(),
  discountedPrice: decimal("discountedPrice", { precision: 10, scale: 2 }).notNull(),
  discountPercentage: int("discountPercentage").notNull(),
  imageUrl: varchar("imageUrl", { length: 500 }),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate").notNull(),
  status: mysqlEnum("status", ["active", "inactive", "expired"]).default("active").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Promotion = typeof promotions.$inferSelect;
export type InsertPromotion = typeof promotions.$inferInsert;

/**
 * СЪБИТИЯ (EVENTS)
 * Добавено поле imageUrl за визуализация на събитията
 */
export const events = mysqlTable("events", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  eventDate: timestamp("eventDate").notNull(),
  imageUrl: varchar("imageUrl", { length: 500 }), // Вече съществува тук
  location: varchar("location", { length: 255 }).default("Beach Vibe"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type BeachEvent = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;
