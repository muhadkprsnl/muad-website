import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import story1 from "@/assets/Story/story1.png";
import story2 from "@/assets/Story/story2.png";
import story3 from "@/assets/Story/story3.png";
import story4 from "@/assets/Story/story4.png";

const images = [story1, story2, story3, story4];

const Story = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const startX = useRef(0);

  // ----------------------------
  // Desktop Buttons
  // ----------------------------
  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setAnimate(true);
    }, 200);
  };

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setAnimate(true);
    }, 200);
  };

  // Function to open PDF in new tab
  const openPdf = () => {
    const pdfPath = "/documents/muhad-story.pdf";
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  // ----------------------------
  // Mobile/Tablet Swipe
  // ----------------------------
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide(); // swipe left → next
      else prevSlide();          // swipe right → prev
    }
  };

  return (
    <section id="story" className="py-10 sm:py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-muted-foreground mb-1 text-sm sm:text-base">Discover</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">MUHAD'S STORY</h2>
          <div className="w-10 sm:w-16 md:w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Image + Buttons */}
        <div className="relative max-w-4xl mx-auto">

          {/* Image Container */}
          <div
            className="
              overflow-hidden rounded-xl shadow-lg relative
              h-64 sm:h-80 md:h-[450px] lg:h-[500px]
            "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[currentIndex]}
              alt="story images"
              className={`
                absolute inset-0 w-full h-full 
                object-cover sm:object-contain
                transition-all duration-500 ease-in-out
                ${animate ? "opacity-100" : "opacity-0"}
              `}
            />
          </div>

          {/* Desktop Buttons (Hidden on Mobile/Tablet) */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute -left-4 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground border"
          // className="
          //   hidden md:flex absolute top-1/2 -translate-y-1/2 left-2 
          //   bg-black/40 hover:bg-black/60 text-white 
          //   p-3 rounded-full shadow-xl transition
          // "
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute -right-4 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground border"
          // className="
          //   hidden md:flex absolute top-1/2 -translate-y-1/2 right-2 
          //   bg-black/40 hover:bg-black/60 text-white 
          //   p-3 rounded-full shadow-xl transition
          // "
          >
            ❯
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition
                ${currentIndex === idx ? "bg-red-900" : "bg-gray-400"}
              `}
            ></div>
          ))}
        </div>

        {/* View Button */}
        <div className="text-center mt-6 sm:mt-8">

          {/* <Button
            size="lg"
            className="
              bg-gray-900 hover:bg-gray-800 text-white
              px-8 sm:px-10 md:px-12
              py-3 sm:py-4 md:py-5
              text-sm sm:text-base md:text-lg font-semibold
            "
          >
            VIEW
          </Button> */}
          <button
            onClick={openPdf}
            className="px-4 sm:px-8 py-1.5 sm:py-3 bg-red-600 text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-red-700 transition-colors duration-300 rounded-lg"
          >
            VIEW MORE STORY
          </button>
        </div>
      </div>
    </section >
  );
};

export default Story;











// import { useState, useEffect } from "react";
// import { Card } from "@/components/ui/card";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils";
// import story1 from "@/assets/Story/story1.png";
// import story2 from "@/assets/Story/story2.png";
// import story3 from "@/assets/Story/story3.png";
// import story4 from "@/assets/Story/story4.png";

// const images = [story1, story2, story3, story4];

// const Story = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [touchStart, setTouchStart] = useState<number | null>(null);
//   const [touchEnd, setTouchEnd] = useState<number | null>(null);
//   const [[page, direction], setPage] = useState([0, 0]);

//   useEffect(() => {
//     const preloadImages = () => {
//       images.forEach((src) => {
//         const img = new Image();
//         img.src = src;
//       });
//     };
//     preloadImages();
//     setIsLoading(false);
//   }, []);

//   const nextImage = () => {
//     setPage([page + 1, 1]);
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setPage([page - 1, -1]);
//     setCurrentIndex((prev) => (prev - 1 + images.length) % prev);
//   };

//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextImage();
//     } else if (isRightSwipe) {
//       prevImage();
//     }
//   };

//   // Function to open PDF in new tab
//   const openPdf = () => {
//     const pdfPath = "/documents/muhad-story.pdf";
//     window.open(pdfPath, "_blank", "noopener,noreferrer");
//   };

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//       scale: 0.9,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//       scale: 0.9,
//     }),
//   };

//   // 35vh height for mobile
//   const getCardHeight = () => {
//     return 'min-h-[35vh] sm:min-h-[450px]';
//   };

//   if (isLoading) {
//     return (
//       <section id="story" className="py-6 sm:py-16 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
//           <div className="max-w-4xl mx-auto rounded-lg bg-gray-200 animate-pulse"
//             style={{ height: '35vh' }} />
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="story" className="py-6 sm:py-16 md:py-20 bg-gray-50">
//       <div className="container mx-auto bg-white">
//         <div className="text-center mb-4 sm:mb-16">
//           <p className="text-muted-foreground mb-1 text-sm sm:text-base">Discover</p>
//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">MUHAD'S STORY</h2>
//           <div className="w-10 sm:w-16 md:w-20 h-1 bg-red-600 mx-auto"></div>
//         </div>

//         <div className="max-w-6xl mx-auto relative">
//           {/* Navigation Arrows - Only on desktop */}
//           <button
//             onClick={prevImage}
//             className="hidden sm:flex absolute -left-4 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground border"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
//           </button>

//           <button
//             onClick={nextImage}
//             className="hidden sm:flex absolute -right-4 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground border"
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
//           </button>

//           {/* Single Card Container - 35vh height on mobile */}
//           <div className="relative min-h-[35vh] sm:min-h-[450px] px-2">
//             <AnimatePresence custom={direction} mode="popLayout">
//               <motion.div
//                 key={`story-${currentIndex}`}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: "spring", stiffness: 300, damping: 30 },
//                   opacity: { duration: 0.2 },
//                   scale: { duration: 0.2 }
//                 }}
//                 className="h-full"
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//               >
//                 <Card className={cn("border-2 rounded-3xl hover:shadow-lg transition-all duration-300 h-full cursor-grab active:cursor-grabbing overflow-hidden", getCardHeight())}>
//                   <div className="flex flex-col h-full">
//                     {/* Header - Very compact on mobile */}
//                     <div className="p-1 sm:p-4 border-b">
//                       <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-center">
//                         Part {currentIndex + 1}
//                       </h3>
//                     </div>

//                     {/* Image Container - Takes most space */}
//                     <div className="flex-1 flex items-center justify-center">
//                       <img
//                         src={images[currentIndex]}
//                         alt={`Part ${currentIndex + 1} of MUHAD's Story`}
//                         className="w-full h-full object-contain"
//                         style={{
//                           transform: 'translateZ(0)',
//                           backfaceVisibility: 'hidden',
//                         }}
//                       />
//                     </div>

//                     {/* Footer - Minimal on mobile */}
//                     <div className="p-1 sm:p-3 border-t">
//                       <p className="text-xs text-muted-foreground text-center">
//                         {currentIndex + 1} of {images.length}
//                       </p>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Dots Indicator - Reduced margin */}
//           <div className="flex justify-center mt-2 sm:mt-8 space-x-2 sm:space-x-3">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   const newDirection = index > currentIndex ? 1 : -1;
//                   setPage([page + newDirection, newDirection]);
//                   setCurrentIndex(index);
//                 }}
//                 className={cn(
//                   "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
//                   index === currentIndex
//                     ? 'bg-primary scale-125'
//                     : 'bg-muted hover:bg-primary/50'
//                 )}
//                 aria-label={`Go to part ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* View More Button - Reduced margin */}
//           <div className="text-center mt-2 sm:mt-6">
//             <button
//               onClick={openPdf}
//               className="px-4 sm:px-8 py-1.5 sm:py-3 bg-red-600 text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-red-700 transition-colors duration-300 rounded-lg"
//             >
//               VIEW MORE STORY
//             </button>
//           </div>

//           {/* Mobile Swipe Hint - Smaller and closer */}
//           <div className="block sm:hidden text-center mt-1">
//             <p className="text-xs text-gray-500">
//               Swipe to navigate
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Story;
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import story1 from "@/assets/Story/story1.png";
// import story2 from "@/assets/Story/story2.png";
// import story3 from "@/assets/Story/story3.png";
// import story4 from "@/assets/Story/story4.png";

// const images = [story1, story2, story3, story4];

// const Story = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimate(false); // fade-out current image
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//         setAnimate(true); // fade-in next image
//       }, 300);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setAnimate(true); // animate first image
//   }, []);

//   return (
//     <section id="story" className="py-12 sm:py-16 md:py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
//         {/* Heading */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-1">
//           {/* <div className="text-center mb-4 sm:mb-6 md:mb-8"> */}
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
//             MUHAD'S STORY
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
//             BEHIND THE JOURNEY
//           </p>
//         </div>

//         {/* Image Container with fixed height to avoid button jump */}
//         <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg h-[500px] relative">
//           <img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Part ${currentIndex + 1} of MUHAD's Story`}
//             className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out transform
//               ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
//           />
//         </div>

//         {/* View Button (positioned normally, won’t glitch) */}
//         <div className="text-center mt-6 sm:mt-8">
//           <Button
//             size="lg"
//             className="bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold"
//           >
//             VIEW
//           </Button>
//         </div>
//       </div>
//     </section >
//   );
// };

// export default Story;
