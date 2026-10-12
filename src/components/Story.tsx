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
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-red-700 transition-colors duration-300 text-center"
          >
            VIEW MORE STORY
          </button>
        </div>
      </div>
    </section >
  );
};

export default Story;






