import { useState, useEffect } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { Linkedin, Instagram, Github } from "lucide-react";
import muhadnewpic from "@/assets/muhadnewpic.jpg";
import SplitText from "@/components/ui/splitext";
import ShinyText from "@/components/ui/shiny-text";
import TextPressure from "@/components/ui/shadcn-io/text-pressure";
import { motion } from "framer-motion";

// Dynamically import all jpg, png, jpeg images from the assets folder
const images = import.meta.glob('@/assets/images/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
const heroImages = Object.values(images) as string[];

const TRANSITION_DURATION = 300;

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setNextImage((currentImage + 1) % heroImages.length);
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setIsSliding(false);
      }, TRANSITION_DURATION);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, heroImages.length]);

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    setIsAnimationComplete(true);
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariant = {
    hidden: { x: -80, opacity: 0, filter: "blur(4px)" },
    show: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hockey-black pt-14 sm:pt-16 lg:pt-20">

      {/* Current Image & Sliding Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImages[currentImage]}
          alt=""
          className={`w-full h-full object-cover opacity-60
            ${isSliding ? "slide-out" : "slide-in"}
          `}
          style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
        />
        {isSliding && (
          <img
            src={heroImages[nextImage]}
            alt=""
            className="w-full h-full object-cover opacity-60 slide-in-next"
            style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-hockey-black/80 via-hockey-black/40 to-hockey-black/80" />
      </div>

      {/* Geometric Red Shapes */}
      <div className="absolute left-0 top-0 w-24 sm:w-48 md:w-56 lg:w-64 h-full bg-primary geometric-shape opacity-90 z-10" />
      <div className="absolute right-0 top-0 w-24 sm:w-48 md:w-56 lg:w-64 h-full bg-primary geometric-shape opacity-90 z-10 transform scale-x-[-1]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <motion.h1
            className="hero-title text-2xl max-[512px]:text-[0.875rem] sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl tracking-tighter text-white mb-4 sm:mb-6"
            style={{ lineHeight: 1 }}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={itemVariant}
              className="inline-motion text-primary"
              aria-hidden={false}
              style={{ marginRight: 12 }}
            >
              <span className="shiny-wrapper">#12.</span>
            </motion.span>

            <motion.span variants={itemVariant} className="inline-motion">
              <ShinyText
                text="PROFESSIONAL."
                disabled={false}
                speed={3}
                className="shiny-wrapper text-white"
                style={{ display: "inline-block" }}
              />
            </motion.span>

            <br />

            <motion.span
              variants={itemVariant}
              className="inline-motion"
              style={{ display: "inline-flex", justifyContent: "center" }}
            >
              <ShinyText
                text="DATA ENTHUSIAST."
                disabled={false}
                speed={3}
                className="shiny-wrapper text-white"
                style={{ display: "inline-block" }}
              />
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <CustomButton href="/cv" className="text-[0.875rem] max-[512px]:text-[0.75rem] sm:text-xs px-4 max-[512px]:px-3 sm:px-6 md:px-8 py-2 max-[512px]:py-1.5">
            VIEW RESUME
          </CustomButton>

          <CustomButton href="#contact" className="text-[0.875rem] max-[512px]:text-[0.75rem] sm:text-xs px-4 max-[512px]:px-3 sm:px-6 md:px-8 py-2 max-[512px]:py-1.5">
            CONTACT INFO
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

// import { useState, useEffect, useMemo } from "react";
// import { CustomButton } from "@/components/ui/custom-button";
// import { Linkedin, Instagram, Github } from "lucide-react";
// import muhadnewpic from "@/assets/muhadnewpic.jpg";
// import SplitText from "@/components/ui/splitext";
// import ShinyText from "@/components/ui/shiny-text";
// import TextPressure from "@/components/ui/shadcn-io/text-pressure";
// import { motion } from "framer-motion";

// // Dynamically import all jpg, png, jpeg images from the assets folder
// const images = import.meta.glob('@/assets/images/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
// const heroImages = Object.values(images) as string[];

// const TRANSITION_DURATION = 300; // ms, adjust for faster transition

// const HeroSection = () => {

//   const [currentImage, setCurrentImage] = useState(0);
//   const [nextImage, setNextImage] = useState(1);
//   const [isSliding, setIsSliding] = useState(false);

//   useEffect(() => {
//     if (heroImages.length <= 1) return;
//     const interval = setInterval(() => {
//       setNextImage((currentImage + 1) % heroImages.length);
//       setIsSliding(true);
//       setTimeout(() => {
//         setCurrentImage((prev) => (prev + 1) % heroImages.length);
//         setIsSliding(false);
//       }, TRANSITION_DURATION);
//     }, 3000); // 3s per image
//     return () => clearInterval(interval);
//   }, [currentImage, heroImages.length]);


//   const [isAnimationComplete, setIsAnimationComplete] = useState(false);

//   const handleAnimationComplete = () => {
//     console.log('All letters have animated!');
//     setIsAnimationComplete(true);
//   };

//   const containerVariants = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.12,
//       },
//     },
//   };

//   const itemVariant = {
//     hidden: { x: -80, opacity: 0, filter: "blur(4px)" },
//     show: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: { duration: 0.6, ease: "easeOut" as const },
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hockey-black pt-14 sm:pt-16 lg:pt-20">

//       {/* Current Image & Sliding Background */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img
//           src={heroImages[currentImage]}
//           alt=""
//           className={`w-full h-full object-cover opacity-60
//             ${isSliding ? "slide-out" : "slide-in"}
//           `}
//           style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
//         />
//         {/* Next Image (only during sliding) */}
//         {isSliding && (
//           <img
//             src={heroImages[nextImage]}
//             alt=""
//             className="w-full h-full object-cover opacity-60 slide-in-next"
//             style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
//           />
//         )}
//         <div className="absolute inset-0 bg-gradient-to-r from-hockey-black/80 via-hockey-black/40 to-hockey-black/80" />

//       </div>


//       {/* Geometric Red Shapes - Responsive */}
//       <div className="absolute left-0 top-0 w-32 sm:w-48 md:w-56 lg:w-64 h-full bg-primary geometric-shape opacity-90 z-10" />
//       <div className="absolute right-0 top-0 w-32 sm:w-48 md:w-56 lg:w-64 h-full bg-primary geometric-shape opacity-90 z-10 transform scale-x-[-1]" />

//       {/* Content */}



//       <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
//         <div className="mb-6 sm:mb-8">
//           {/* Parent motion container — controls stagger for children */}
//           <motion.h1
//             className="hero-title font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter text-white mb-4 sm:mb-6"
//             style={{ lineHeight: 1 }}
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//           >
//             {/* #12 — keep text-primary but animate and align with rest */}
//             <motion.span
//               variants={itemVariant}
//               className="inline-motion text-primary font-bebas"
//               aria-hidden={false}
//               /* keep inline spacing between number and text */
//               style={{ marginRight: 12 }}
//             >
//               {/* Use a wrapper span to ensure same font & inline-block behavior */}
//               <span className="shiny-wrapper">#12.</span>
//             </motion.span>

//             {/* PROFESSIONAL. on same line */}
//             <motion.span variants={itemVariant} className="inline-motion">
//               {/* ShinyText should render inline-block text; see note below if needed */}
//               <ShinyText
//                 text="PROFESSIONAL."
//                 disabled={false}
//                 speed={3}
//                 className="shiny-wrapper text-white font-bebas"
//                 style={{ display: "inline-block", fontFamily: "'Bebas Neue', sans-serif" }}
//               />
//             </motion.span>

//             {/* break line for second line */}
//             <br />

//             {/* SPORTS ENTHUSIAST. on its own line */}
//             <motion.span
//               variants={itemVariant}
//               className="inline-motion"
//               style={{ display: "inline-flex", justifyContent: "center" }}
//             >
//               <ShinyText
//                 text="SPORTS ENTHUSIAST."
//                 disabled={false}
//                 speed={3}
//                 className="shiny-wrapper text-white font-bebas"
//                 style={{ display: "inline-block", fontFamily: "'Bebas Neue', sans-serif" }}
//               />
//             </motion.span>
//           </motion.h1>
//         </div>

//         <motion.div
//           className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.1, duration: 0.6 }}
//         >
//           <CustomButton
//             href="/cv"
//             className="text-xs"
//             style={{ fontFamily: "'Bebas Neue', sans-serif" }} // Inline font family for button
//           >
//             VIEW RESUME
//           </CustomButton>

//           <CustomButton
//             href="/meet-ju"
//             className="text-xs"
//             style={{ fontFamily: "'Bebas Neue', sans-serif" }} // Inline font family for button
//           >
//             CONTACT INFO
//           </CustomButton>
//         </motion.div>
//       </div>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
//         `}
//       </style>

//     </section >
//   );
// };

// export default HeroSection;



