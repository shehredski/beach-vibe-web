import React from "react";
import EventsPage from "@/components/EventsPage";
import { Route, Switch } from "wouter";
import Home from "@/components/Home";
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "./components/ErrorBoundary";
import AdminEvents from "./pages/AdminEvents";
// ИМПОРТИРАМЕ ПРОВАЙДЪРА ОТ ОТДЕЛНИЯ ФАЙЛ
import { LanguageProvider } from "./contexts/LanguageContext"; 

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/events" component={EventsPage} /> 
      <Route path="/admin-events" component={AdminEvents} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      {/* Първо обвиваме с езика, после всичко останало */}
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
