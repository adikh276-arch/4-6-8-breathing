import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroScreen from "./pages/IntroScreen";
import ActiveBreathing from "./pages/ActiveBreathing";
import CompletionScreen from "./pages/CompletionScreen";
import NotFound from "./pages/NotFound";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageSwitcher />
      <BrowserRouter basename="/4_6_8_breathing">
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/breathe" element={<ActiveBreathing />} />
          <Route path="/complete" element={<CompletionScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
