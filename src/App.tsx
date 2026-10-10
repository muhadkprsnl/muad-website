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
import Index from "./pages/Home/Index";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/Common/NotFound";
import ResearchDetail from "./pages/CV/Research/ResearchDetail";
import PerformanceAnalytics from "./pages/CV/Research/Projects/PerformanceAnalytics";
import CV from "./pages/CV/CV";
import ExperienceDetail from "./pages/Experience/ExperienceDetail";
import CaseStudies from "./pages/Cases/CaseStudies";
import AcademyDevelopmentModels from "./pages/CV/Research/Projects/AcademyDevelopmentModels";
import ProjectTrackingSystem from "./pages/CV/Research/Projects/ProjectTrackingSystem";
import RedefinedBradleyTerry from "./pages/CV/Research/Projects/RedefinedBradleyTerry";
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
          <Route path="/cv" element={<CV />} />
          {/* Specific research routes BEFORE generic :id route */}
          <Route path="/cv/research/redefined-bradley-terry" element={<RedefinedBradleyTerry />} />
          <Route path="/cv/research/performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="/cv/research/academy-development" element={<AcademyDevelopmentModels />} />
          <Route path="/cv/research/project-tracking" element={<ProjectTrackingSystem />} />
          <Route path="/cv/research/:id" element={<ResearchDetail />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
