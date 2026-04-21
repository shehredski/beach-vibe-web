import EventsPage from "@/components/EventsPage";
import { Route, Switch } from "wouter";
// ИЗПОЛЗВАМЕ @, за да намерим Home.tsx, който е в папка components
import Home from "@/components/Home"; 
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "./components/ErrorBoundary";

function Router() {
  return (
    <Switch>
      {/* Главната страница вече сочи към правилния компонент */}
      <Route path="/" component={Home} />
      
      {/* Страница с менюто */}
      <Route path="/menu" component={MenuPage} />
      
      {/* Страница за събития */}
      <Route path="/events" component={EventsPage} /> 
      
      {/* 404 страница */}
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
