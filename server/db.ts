// --- EVENTS (НОВОТО) ---

export async function getEvents() {
  const db = await getDb();
  if (!db) {
    console.error("[Database] getEvents: database not available");
    return [];
  }
  // Връщаме събитията подредени по дата (най-скорошните първи)
  return await db.select().from(events).orderBy(asc(events.eventDate));
}

export async function createEvent(data: InsertEvent) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  // ДОБАВЯМЕ await ТУК - критично е за Railway!
  const result = await db.insert(events).values(data);
  return result;
}

export async function deleteEvent(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  return await db.delete(events).where(eq(events.id, id));
}
