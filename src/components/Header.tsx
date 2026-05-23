import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text/index";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "ABOUT ME", href: "#about", isExternal: false },
    // { name: "VISION", href: "/", isExternal: false },
    // { name: "CASE STUDY", href: "/case-studies", isExternal: false },
    { name: "RESEARCH", href: "/Research", isExternal: false },
    { name: "BLOG", href: "/Blog", isExternal: false },
    { name: "EXPERIENCE", href: "#experience", isExternal: false },
    { name: "STORY", href: "#story", isExternal: false },
    { name: "CONTACT", href: "#contact", isExternal: false },
  ];

  const handleAnchorClick = (href: string) => {
    setIsMenuOpen(false);

    // If we're already on the home page, scroll to section
    if (location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/${href}`);
    }
  };

  const handleMobileLinkClick = (item: { href: string; isExternal: boolean }) => {
    setIsMenuOpen(false);

    if (item.href.startsWith('#')) {
      handleAnchorClick(item.href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary flex items-center justify-center geometric-shape flex-shrink-0">
              <span className="text-primary-foreground font-black text-sm sm:text-base lg:text-xl">MK12</span>
            </div>
            <span className="ml-2 sm:ml-3 text-sm sm:text-base lg:text-xl font-bold tracking-tight flex items-center">
              <GradientText
                text="MUHAD K"
                gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
              />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleAnchorClick(item.href)}
                  className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="https://linkedin.com/in/muhadk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-linkedin-square text-lg"></i>
            </a>
            <a
              href="https://github.com/muhadkprsnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-github text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/mu_aadk.12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-instagram text-lg"></i>
            </a>
            {/* <a
              href="https://w.medium.com/muhadk12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className="fa fa-medium text-lg"></i>
            </a> */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border mt-2 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleMobileLinkClick(item)}
                    className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide py-2 text-left bg-transparent border-none cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header >
  );
};

export default Header;


// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { GradientText } from "@/components/ui/shadcn-io/gradient-text/index";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navItems = [
//     { name: "ABOUT ME", href: "#about", isExternal: false },
//     { name: "VISION", href: "/", isExternal: false },
//     { name: "CASE STUDY", href: "/case-studies", isExternal: false },
//     { name: "RESEARCH", href: "/Research", isExternal: false },
//     { name: "BLOG", href: "/Blog", isExternal: false },
//     { name: "EXPERIENCE", href: "#experience", isExternal: false },
//     { name: "STORY", href: "#story", isExternal: false },
//     { name: "CONTACT", href: "#contact", isExternal: false },
//   ];

//   const handleAnchorClick = (href: string) => {
//     setIsMenuOpen(false);

//     // If we're already on the home page, scroll to section
//     if (location.pathname === '/') {
//       const element = document.querySelector(href);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       // If we're on another page, navigate to home with hash
//       navigate(`/${href}`);
//     }
//   };

//   const handleMobileLinkClick = (item: { href: string; isExternal: boolean }) => {
//     setIsMenuOpen(false);

//     if (item.href.startsWith('#')) {
//       handleAnchorClick(item.href);
//     }
//   };

//   return (
//     <>
//       {/* Import Bebas Neue font */}
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}
//       </style>

//       <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-border">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
//             {/* Logo */}
//             <div className="flex items-center">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary flex items-center justify-center geometric-shape flex-shrink-0">
//                 <span className="text-primary-foreground font-black text-sm sm:text-base lg:text-xl">MK12</span>
//               </div>
//               <span className="ml-2 sm:ml-3 text-sm sm:text-base lg:text-xl font-bold tracking-tight flex items-center">
//                 <GradientText
//                   text="MUHAD K"
//                   gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
//                 />
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-4">
//               {navItems.map((item) => (
//                 item.href.startsWith('#') ? (
//                   <button
//                     key={item.name}
//                     onClick={() => handleAnchorClick(item.href)}
//                     className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide bg-transparent border-none cursor-pointer"
//                     style={{ fontFamily: "'Bebas Neue', sans-serif" }} // Apply Bebas Neue
//                   >
//                     {item.name}
//                   </button>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide"
//                     style={{ fontFamily: "'Bebas Neue', sans-serif" }} // Apply Bebas Neue
//                   >
//                     {item.name}
//                   </Link>
//                 )
//               ))}
//             </nav>
//             <div className="hidden lg:flex items-center space-x-1">
//               <a
//                 href="www.linkedin.com/in/muhadk"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-primary transition-colors duration-200"
//               >
//                 <i className="fa fa-linkedin-square text-lg"></i>
//               </a>
//               <a
//                 href="https://github.com/muhadkprsnl"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-primary transition-colors duration-200"
//               >
//                 <i className="fa fa-github text-lg"></i>
//               </a>
//               <a
//                 href="https://www.instagram.com/mu_aadk.12/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-primary transition-colors duration-200"
//               >
//                 <i className="fa fa-instagram text-lg"></i>
//               </a>
//               <a
//                 href="https://w.medium.com/muhadk12"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-primary transition-colors duration-200"
//               >
//                 <i className="fa fa-medium text-lg"></i>
//               </a>
//               <link
//                 rel="stylesheet"
//                 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//               />
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="sm"
//               className="lg:hidden p-2 text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </Button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <nav className="lg:hidden pb-4 border-t border-border mt-2">
//               <div className="flex flex-col space-y-3 pt-4">
//                 {navItems.map((item) => (
//                   item.href.startsWith('#') ? (
//                     <button
//                       key={item.name}
//                       onClick={() => handleMobileLinkClick(item)}
//                       className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide py-2 text-left bg-transparent border-none cursor-pointer"
//                       style={{ fontFamily: "'Bebas Neue', sans-serif" }} // Apply Bebas Neue
//                     >
//                       {item.name}
//                     </button>
//                   ) : (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-200 tracking-wide py-2"
//                       onClick={() => setIsMenuOpen(false)}
//                       style={{ fontFamily: "'Bebas Neue', sans-serif" }} // Apply Bebas Neue
//                     >
//                       {item.name}
//                     </Link>
//                   )
//                 ))}
//               </div>
//             </nav>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
