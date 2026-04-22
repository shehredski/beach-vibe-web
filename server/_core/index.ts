import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
// Внасяме всички необходими функции
import { createEvent, getEvents, getPromotions } from "../db"; 

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

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  registerOAuthRoutes(app);

  // --- REST API МАРШРУТИ ---
  
  // 1. Вземане на събития
  app.get("/api/events", async (_req, res) => {
    try {
      const data = await getEvents();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // 2. Вземане на промоции (ВАЖНО - за да се виждат в EventsPage)
  app.get("/api/promotions", async (_req, res) => {
    try {
      const data = await getPromotions();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // 3. Създаване на събитие
  app.post("/api/events", async (req, res) => {
    try {
      if (req.body.adminPassword !== "beachvibe2024") {
        return res.status(401).json({ message: "Невалидна парола!" });
      }

      const { adminPassword, ...eventData } = req.body;
      
      // КОРЕКЦИЯ: Използваме eventDate, за да съвпадне със схемата ти
      const result = await createEvent({
        ...eventData,
        eventDate: new Date(eventData.eventDate || eventData.startDate), 
      });
      
      res.json(result);
    } catch (err: any) {
      console.error("Грешка при запис:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
