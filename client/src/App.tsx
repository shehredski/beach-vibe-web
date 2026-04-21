import EventsPage from "@/components/EventsPage";
import { Route, Switch } from "wouter";
import Home from "./components/Home"; // СМЕНЕНО: Използваме файла в components, който редактирахме
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "./components/ErrorBoundary";

function Router() {
  return (
    <Switch>
      {/* Начална страница - вече без секцията Events */}
      <Route path="/" component={Home} />
      
      {/* Страница с менюто */}
      <Route path="/menu" component={MenuPage} />
      
      {/* Новата страница за събития */}
      <Route path="/events" component={EventsPage} /> 
      
      {/* ВАЖНО: NotFound трябва да е ВИНАГИ най-отдолу. 
          Ако е над /events, той ще "улови" заявката и ще покаже 404.
      */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
