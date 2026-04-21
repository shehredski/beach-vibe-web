import EventsPage from "@/components/EventsPage";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "./components/ErrorBoundary";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={MenuPage} />
      <Route component={NotFound} />
      <Route path="/events" component={EventsPage} />
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
