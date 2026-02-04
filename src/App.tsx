import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ProjectScreenshots from "./pages/ProjectScreenshots";
import ProjectDesign from "./pages/ProjectDesign";
import BriefingTheater from "./pages/BriefingTheater";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Global scroll restoration component
function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Check if we should restore scroll position
    const scrollKey = `scroll_${location.key}`;
    const savedPosition = sessionStorage.getItem(scrollKey);
    
    if (savedPosition) {
      // Restore scroll position after a brief delay to ensure DOM is ready
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: parseInt(savedPosition, 10), behavior: 'instant' });
        }, 50);
      });
    }

    // Save scroll position before navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem(scrollKey, window.scrollY.toString());
    };

    // Save scroll position on scroll (debounced)
    let scrollTimeout: number;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        sessionStorage.setItem(scrollKey, window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Save final scroll position when leaving this route
      sessionStorage.setItem(scrollKey, window.scrollY.toString());
    };
  }, [location.key]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:slug/screenshots" element={<ProjectScreenshots />} />
          <Route path="/project/:slug/design" element={<ProjectDesign />} />
          <Route path="/briefing/:slug" element={<BriefingTheater />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
