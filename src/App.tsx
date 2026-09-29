import { Toaster } from "@/components/ui/toaster";
import {
  Toaster as Sonner
} from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  QueryClient, QueryClientProvider
} from "@tanstack/react-query";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ResearchDetail from "./pages/ResearchDetail";
import PerformanceAnalytics from "./pages/PerformanceAnalytics";
import Research from "./pages/Research";
import CV from "./pages/CV";
import ExperienceDetail from "./pages/ExperienceDetail";
import CaseStudies from "./pages/CaseStudies";
import DataDrivenPlayerScouting from "./pages/Data-Driven Player";
import AcademyDevelopmentModels from "./pages/AcademyDevelopmentModels";
import ProjectTrackingSystem from "./pages/ProjectTrackingSystem";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/research/performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="/research/data-driven-scouting" element={<DataDrivenPlayerScouting />} />
          <Route path="/research/academy-development" element={<AcademyDevelopmentModels />} />
          <Route path="/research/project-tracking" element={<ProjectTrackingSystem />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          < Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
