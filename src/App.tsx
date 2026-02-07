import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import ArchitectureDetail from "./pages/ArchitectureDetail";
import ProjectScreenshots from "./pages/ProjectScreenshots";
import ProjectDesign from "./pages/ProjectDesign";
import BriefingTheater from "./pages/BriefingTheater";
import ResumePage from "./pages/ResumePage";
import NotFound from "./pages/NotFound";
import { PageTransition } from "@/components/PageTransition";

const queryClient = new QueryClient();

// Global scroll restoration component
function ScrollRestoration() {
  const location = useLocation();
  const prevKeyRef = useRef<string>(location.key);

  useEffect(() => {
    const scrollKey = `scroll_${location.key}`;
    const savedPosition = sessionStorage.getItem(scrollKey);

    if (savedPosition) {
      // Restore after DOM settles
      const raf = requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: parseInt(savedPosition, 10), behavior: 'instant' });
        }, 80);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      // New forward navigation — scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.key]);

  // Continuously save scroll position for current route
  useEffect(() => {
    const scrollKey = `scroll_${location.key}`;

    let scrollTimeout: number;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        sessionStorage.setItem(scrollKey, window.scrollY.toString());
      }, 100);
    };

    const handleBeforeUnload = () => {
      sessionStorage.setItem(scrollKey, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Do NOT save here — by now the route has changed and scrollY is wrong
    };
  }, [location.key]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/project/:slug/screenshots" element={<PageTransition><ProjectScreenshots /></PageTransition>} />
        <Route path="/project/:slug/design" element={<PageTransition><ProjectDesign /></PageTransition>} />
        <Route path="/briefing/:slug" element={<PageTransition><BriefingTheater /></PageTransition>} />
        <Route path="/architecture/:slug" element={<PageTransition><ArchitectureDetail /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><ResumePage /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollRestoration />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
