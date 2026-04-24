import React, { createContext, useState, useContext } from "react";
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

// 1. Създаваме контекст за езика, за да е достъпен навсякъде
export type Language = 'bg' | 'en';
export const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: 'bg', setLang: () => {} });

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
  // 2. Стейт за езика - по подразбиране е български
  const [lang, setLang] = useState<Language>('bg');

  return (
    <ErrorBoundary>
      {/* 3. Опаковаме всичко в LanguageContext.Provider */}
      <LanguageContext.Provider value={{ lang, setLang }}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageContext.Provider>
    </ErrorBoundary>
  );
}

// 4. Помощна кука, която ще ползваш в Home, About и Navbar
export const useLanguage = () => useContext(LanguageContext);
