import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
// Внасяме и createPromotion
import { createEvent, getEvents, getPromotions, createPromotion } from "../db"; 

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  registerOAuthRoutes(app);

  // --- GET МАРШРУТИ ---
  app.get("/api/events", async (_req, res) => {
    try {
      const data = await getEvents();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/api/promotions", async (_req, res) => {
    try {
      const data = await getPromotions();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // --- POST МАРШРУТИ (РАЗДЕЛЕНИ) ---

  // 1. Само за СЪБИТИЯ
  app.post("/api/events", async (req, res) => {
    try {
      if (req.body.adminPassword !== "beachvibe2024") {
        return res.status(401).json({ message: "Invalid password" });
      }
      const { adminPassword, ...eventData } = req.body;
      
      // Записваме в таблица EVENTS
      const result = await createEvent({
        title: eventData.title,
        description: eventData.description,
        imageUrl: eventData.imageUrl,
        location: eventData.location || "Beach Vibe",
        eventDate: new Date(eventData.eventDate || eventData.startDate),
      });
      res.json(result);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // 2. Само за ПРОМОЦИИ (Добави това!)
  app.post("/api/promotions", async (req, res) => {
    try {
      if (req.body.adminPassword !== "beachvibe2024") {
        return res.status(401).json({ message: "Invalid password" });
      }
      const { adminPassword, ...promoData } = req.body;
      
      // Записваме в таблица PROMOTIONS
      const result = await createPromotion({
        title: promoData.title,
        description: promoData.description,
        imageUrl: promoData.imageUrl,
        originalPrice: promoData.originalPrice?.toString(),
        discountedPrice: promoData.discountedPrice?.toString(),
        discountPercentage: parseInt(promoData.discountPercentage),
        startDate: new Date(promoData.startDate || promoData.eventDate),
        status: "active"
      });
      res.json(result);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.use("/api/trpc", createExpressMiddleware({ router: appRouter, createContext }));

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

startServer().catch(console.error);
