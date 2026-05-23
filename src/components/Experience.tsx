import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [[page, direction], setPage] = useState([0, 0]);

    const qaSkills = [
        { name: "Cypress", level: "Intermediate" },
        { name: "REST API Testing (Postman)", level: "Intermediate" },
        { name: "Cucumber (BDD)", level: "Basic" },
        { name: "Git", level: "Intermediate" },
        { name: "CI/CD (GitHub Actions)", level: "Basic" },
        { name: "SQL (Database Validation)", level: "Intermediate" },
    ];

    const fullstackSkills = [
        { name: "React JS", level: "Intermediate" },
        { name: "Responsive Design (Bootstrap / Tailwind)", level: "Basic" },
        { name: "Go lang", level: "Intermediate" },
        { name: "REST API Development", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Git & GitHub", level: "Intermediate" },
    ];

    const dsSkills = [
        { name: "Python (NumPy, Pandas)", level: "Intermediate" },
        { name: "SQL (Data Querying)", level: "Intermediate" },
        { name: "Matplotlib / Seaborn", level: "Intermediate" },
        { name: "Tableau / Power BI", level: "Basic" },
        { name: "Scikit-learn", level: "Intermediate" },
        { name: "TensorFlow / PyTorch", level: "Basic" },
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "Jupyter Notebook", level: "Intermediate" },
    ];

    const skillCategories = [
        {
            title: "Quality Assurance",
            skills: qaSkills,
        },
        {
            title: "Full Stack",
            skills: fullstackSkills,
        },
        {
            title: "Data Science",
            skills: dsSkills,
        },
    ];

    const nextCard = () => {
        setPage([page + 1, 1]);
        setCurrentIndex((prevIndex) =>
            prevIndex === skillCategories.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevCard = () => {
        setPage([page - 1, -1]);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? skillCategories.length - 1 : prevIndex - 1
        );
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50; // Minimum swipe distance
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextCard();
        } else if (isRightSwipe) {
            prevCard();
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9,
        }),
    };

    // Calculate minimum height based on the tallest card
    const getCardHeight = () => {
        return 'min-h-[500px] sm:min-h-[450px]'; // Fixed height for consistency
    };

    return (
        <section
            id="experience"
            className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-white"
        >
            <div className="container mx-auto bg-white">
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-muted-foreground mb-2 text-sm sm:text-base">Explore My</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">EXPERIENCE</h2>
                    <div className="w-12 sm:w-16 md:w-20 h-1 bg-red-600 mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
                    <button
                        onClick={prevCard}
                        className="hidden sm:flex absolute -left-4 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground border"
                        aria-label="Previous card"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={nextCard}
                        className="hidden sm:flex absolute -right-4 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground border"
                        aria-label="Next card"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Cards Container */}
                    <div className="relative min-h-[500px] sm:min-h-[450px]">
                        <AnimatePresence custom={direction} mode="popLayout">
                            {/* Mobile: Single Card with Swipe Gestures */}
                            <div className="block sm:hidden">
                                <motion.div
                                    key={`mobile-${skillCategories[currentIndex].title}-${currentIndex}`}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 },
                                        scale: { duration: 0.2 }
                                    }}
                                    className="h-full"
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <Card className={cn("p-6 border-2 rounded-3xl hover:shadow-lg transition-all duration-300 h-full cursor-grab active:cursor-grabbing", getCardHeight())}>
                                        <h3 className="text-xl font-bold text-center mb-6">{skillCategories[currentIndex].title}</h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {skillCategories[currentIndex].skills.map((skill) => (
                                                <div key={skill.name} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-sm">{skill.name}</h4>
                                                        <p className="text-xs text-muted-foreground">{skill.level}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Swipe Hint for Mobile */}
                                        <div className="text-center mt-6">
                                            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                                                <span className="hidden sm:inline">Swipe</span>
                                                <span className="sm:hidden">Swipe left/right to navigate</span>
                                            </p>
                                        </div>
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Desktop/Tablet: Two Cards */}
                            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {[currentIndex, (currentIndex + 1) % skillCategories.length].map((categoryIndex, cardIndex) => (
                                    <motion.div
                                        key={`desktop-${skillCategories[categoryIndex].title}-${categoryIndex}`}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                            scale: { duration: 0.2 }
                                        }}
                                        className="h-full"
                                    >
                                        <Card className={cn("p-6 md:p-8 border-2 rounded-3xl hover:shadow-lg transition-all duration-300 h-full", getCardHeight())}>
                                            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">{skillCategories[categoryIndex].title}</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                                {skillCategories[categoryIndex].skills.map((skill) => (
                                                    <div key={skill.name} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 md:mt-1 text-green-500" />
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-sm md:text-base">{skill.name}</h4>
                                                            <p className="text-xs md:text-sm text-muted-foreground">{skill.level}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
                        {skillCategories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    const newDirection = index > currentIndex ? 1 : -1;
                                    setPage([page + newDirection, newDirection]);
                                    setCurrentIndex(index);
                                }}
                                className={cn(
                                    "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                                    index === currentIndex
                                        ? 'bg-primary scale-125'
                                        : 'bg-muted hover:bg-primary/50'
                                )}
                                aria-label={`Go to ${skillCategories[index].title}`}
                            />
                        ))}
                    </div>

                    {/* Current Position Indicator */}
                    <div className="text-center mt-4">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            {currentIndex + 1} / {skillCategories.length}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;