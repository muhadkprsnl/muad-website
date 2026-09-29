// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
// import Story from "@/components/Story";
// import Doingnow from "@/components/WhatImdoing";
// import Footer from "@/components/Footer";
// import Experience from "@/components/Experience";
// import ContactSection from "@/components/Contactmail";
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Index = () => {
//   const location = useLocation();

//   useEffect(() => {
//     // Handle hash navigation when coming from other pages
//     if (location.hash) {
//       const element = document.querySelector(location.hash);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, [location]);

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <HeroSection />
//       <AboutSection />
//       <Doingnow />
//       <Experience />
//       <Story />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// };
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Story from "@/components/Story";
import Doingnow from "@/components/WhatImdoing";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import ContactSection from "@/components/Contactmail";
import HeroLoading from "@/components/HeroLoading";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BarsSpinner } from "@/components/ui/barspinner";

const Index = () => {
  const location = useLocation();
  const [loaderType, setLoaderType] = useState<"hero" | "quick" | null>(null);
  const isLoading = loaderType !== null;
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const handleHashNavigation = () => {
      if (location.hash) {
        console.log("Hash detected:", location.hash);

        // Wait for content to load and then scroll
        const scrollToSection = () => {
          const element = document.querySelector(location.hash);
          if (element) {
            console.log("Element found, scrolling to:", location.hash);
            // Small delay to ensure page is fully rendered
            setTimeout(() => {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
              setHasScrolled(true);
            }, 800);
          } else {
            console.log("Element not found:", location.hash);
            // Retry after a short delay if element not found immediately
            if (!hasScrolled) {
              setTimeout(scrollToSection, 100);
            }
          }
        };

        scrollToSection();
      }
    };

    if (!isLoading) {
      handleHashNavigation();
    }
  }, [location, isLoading, hasScrolled]);

  useEffect(() => {
    // Initialize loader type once on mount. Do NOT rerun on isLoading changes.
    try {
      const showHome = sessionStorage.getItem("showHomeLoader");
      if (showHome) {
        setLoaderType("quick");
      } else {
        setLoaderType("hero");
      }
    } catch (e) {
      setLoaderType("hero");
    }
  }, []);

  // Manage body overflow when loader visibility changes
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  // If asked to show a quick home loader, auto-hide it after a short time
  useEffect(() => {
    if (loaderType === "quick") {
      const t = setTimeout(() => {
        try { sessionStorage.removeItem("showHomeLoader"); } catch { }
        setLoaderType(null);
      }, 300);

      return () => clearTimeout(t);
    }
  }, [loaderType]);

  const handleLoadingComplete = () => {
    console.log("Loading completed, showing main content");
    // Do not persist heroLoadingSeen so the hero shows on every full reload (Option A)
    setLoaderType(null);
  };

  return (
    <div className="min-h-screen">
      {/* Loading Screen */}
      {isLoading && loaderType === "hero" && (
        <HeroLoading onLoadingComplete={handleLoadingComplete} />
      )}

      {isLoading && loaderType === "quick" && (
        <div className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center`}>
          <div className="text-center">
            <BarsSpinner size="lg" className="mb-4" />
            <p className="text-gray-600">Loading home...</p>
          </div>
        </div>
      )}

      {/* Main Content - Show immediately when not loading */}
      {!isLoading && (
        <>
          <Header />
          <HeroSection />
          <AboutSection />
          <Doingnow />
          <Experience />
          <Story />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;