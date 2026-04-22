import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
// Внасяме функциите за базата данни от db.ts
import { createEvent, getEvents } from "../db"; 

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Конфигуриране на body parser за работа с JSON и по-големи файлове
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // OAuth маршрути
  registerOAuthRoutes(app);

  // --- REST API МАРШРУТИ ЗА СЪБИТИЯ (EVENTS) ---
  
  // 1. Вземане на всички събития
  app.get("/api/events", async (_req, res) => {
    try {
      const events = await getEvents();
      res.json(events);
    } catch (err: any) {
      console.error("Грешка при FETCH на събития:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // 2. Създаване на ново събитие (с парола)
  app.post("/api/events", async (req, res) => {
    try {
      // Проверка за парола
      if (req.body.adminPassword !== "beachvibe2024") {
        return res.status(401).json({ message: "Невалидна парола!" });
      }

      const { adminPassword, ...eventData } = req.body;
      
      // Подготвяме обекта за createEvent функцията в db.ts
      const result = await createEvent({
        ...eventData,
        startDate: new Date(eventData.startDate),
        endDate: eventData.endDate ? new Date(eventData.endDate) : null,
        status: "active"
      });
      
      res.json(result);
    } catch (err: any) {
      console.error("Грешка при INSERT на събитие:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // --- КРАЙ НА МАРШРУТИТЕ ЗА СЪБИТИЯ ---

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // Работа с Vite в dev среда или статични файлове в production
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
