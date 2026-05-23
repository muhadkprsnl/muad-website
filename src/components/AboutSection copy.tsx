


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import muhadnewpic from "@/assets/muhadnewpic.jpg";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <section id="about" ref={aboutRef}>
            {/* About ME Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight transition-all duration-700 ease-out ${isVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8'
                                    }`}>
                                    ABOUT ME <br />
                                </h2>
                                <div className={`w-16 sm:w-20 md:w-24 h-1 bg-red-600 mb-4 sm:mb-6 transition-all duration-700 ease-out delay-300 ${isVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8'
                                    }`}></div>
                                <p className="text-xs sm:text-sm font-semibold text-gray-600 tracking-wide mb-3 sm:mb-4">
                                    SOFTWARE AUTOMATION ENGINEER // DATA SCIENTIST // SPORTS ENTHUSIAST
                                </p>
                            </div>
                            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                                <p>
                                    I'm Muhad K, a Sports Enthusiast, QA engineer, and data science explorer. My journey began in computer science,
                                    but my true passion has always been finding ways to bring technology into sport.
                                </p>
                                <p>
                                    I believe academies are more than training grounds —
                                    they are places where talent, discipline, and creativity come
                                    together. My mission is to build systems that help coaches scout smarter, players grow stronger, and communities stay connected.
                                </p>
                                <p>
                                    Through projects like Dartle (an academy management platform) and my research in machine learning for player scouting, I'm working to shape a future where data-driven insights fuel athletic development.

                                    At the heart of it all, my vision is simple: to leave behind something unique and purposeful, creating pathways for the next generation of athletes.
                                </p>

                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                                <a
                                    href="/Research"
                                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-red-700 transition-colors duration-300 text-center"
                                >
                                    RESEARCH
                                </a>
                                <Link
                                    to="/Blog"
                                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900 text-white font-semibold text-xs sm:text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300 text-center"
                                >
                                    MORE
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={muhadnewpic}
                                alt="Muhad K"
                                className="w-full h-auto shadow-2xl rounded-lg "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutSection;