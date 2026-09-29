import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BarsSpinner } from "@/components/ui/barspinner";
import { useState, useEffect, useRef } from "react";

// Import your available icons
import FastAPI from "@/components/ui/icons/FastAPI.svg";
import Matplotlib from "@/components/ui/icons/Matplotlib.svg";
import NumPy from "@/components/ui/icons/NumPy.svg";
import OpenCV from "@/components/ui/icons/OpenCV.svg";
import Pandas from "@/components/ui/icons/Pandas.svg";
import Ploty from "@/components/ui/icons/Ploty.svg";
import YoloIcon from "@/components/ui/icons/YoloIcon.svg";
import ScikitLearn from "@/components/ui/icons/scikit-learn.svg";
import DataCollection from "@/assets/research1/Data collection.jpg";
import playerdetection from "@/assets/AI system/player detection.webp";
import mldetection from "@/assets/AI system/ml detection.jpeg"
import fieldtracking from "@/assets/AI system/field tracking.png"
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

function DataDrivenPlayerScouting() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const locationState = location.state as { from?: string; fromLabel?: string } | null;
    const backTo = locationState?.from === "/cv" ? "/cv" : "/research";
    const backLabel = locationState?.from === "/cv" ? locationState.fromLabel || "CV" : "Research";

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        // Only set up the intersection observer after loading is complete
        if (isLoading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    // Play video when section is in view
                    if (videoRef.current) {
                        videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                        setIsVideoPlaying(true);
                    }
                } else {
                    // Pause video when section is out of view
                    if (videoRef.current) {
                        videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                        setIsVideoPlaying(false);
                    }
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of section is visible
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isLoading]); // Add isLoading as dependency

    // Move the loading check to the very end, after all hooks
    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <BarsSpinner size="lg" className="mb-4" />
                    <p className="text-gray-600">Loading scouting project details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Section */}
            <section className="pt-0 pb-20 md:pb-28 bg-white">
                <div className="relative">
                    {/* Hero Images Grid */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 pt-0">
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src={mldetection}
                                alt="Player Statistics Analysis"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src={fieldtracking}
                                alt="Match Data Visualization"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src={playerdetection}
                                alt="Machine Learning Scouting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div> */}

                    {/* Navigation */}
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0  sm:mt-20">
                            <Link to={backTo} className="w-full sm:w-auto">
                                <Button variant="ghost" className="hover:bg-accent w-full sm:w-auto justify-center sm:justify-start">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Go Back
                                </Button>
                            </Link>

                            <div className="flex items-center space-x-2 text-xs sm:text-sm">
                                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                                <span className="text-gray-400">/</span>
                                <Link
                                    to={backTo}
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {backLabel}
                                </Link>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">Data-Driven Player Scouting</span>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            DATA-DRIVEN<br />PLAYER SCOUTING
                        </h1>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>

                    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">

                        <div className="flex justify-between items-center mb-8">
                            <strong className="font-bold text-gray-900 uppercase">ABSTRACT</strong>
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                                Yet to Start
                            </Badge>
                        </div>

                        <p>
                            The Data-Driven Player Scouting system is designed to revolutionize the player identification process by integrating data analytics, machine learning, and tactical intelligence. Traditional scouting often relies on subjective judgment and limited visual assessment, leading to inefficiencies in identifying the right players for specific positions or playing styles. This project aims to create an objective, analytics-based scouting model that evaluates athletes using quantifiable performance metrics, positional data, and formation-based suitability.
                        </p>

                        <p>
                            The system processes match data — including technical performance, physical outputs, and spatial behavior — to calculate player effectiveness within different tactical systems. By applying machine learning algorithms and AI-driven evaluation frameworks, it identifies patterns that align player profiles with team requirements. The model emphasizes contextual analysis, considering role-specific demands and opposition quality to ensure fair comparison. Ultimately, this scouting framework helps clubs and academies make evidence-based recruitment and development decisions, reducing bias and uncovering hidden potential in both professional and youth football environments.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-12 sm:mt-20">
                        <Link to={backTo} className="w-full sm:w-auto">
                            <Button variant="ghost" className="hover:bg-accent w-full sm:w-auto justify-center sm:justify-start">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Go Back
                            </Button>
                        </Link>

                        <div className="flex items-center space-x-2 text-xs sm:text-sm">
                            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                            <span className="text-gray-400">/</span>
                            <Link
                                to={backTo}
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {backLabel}
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">Data-Driven Player Scouting</span>
                        </div>
                    </div>
                </div>
            </section >

            {/* Back Navigation */}
            {/* <section className="py-12 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                    <div className="flex items-center justify-between">
                        <Link to="/research">
                            <button className="inline-flex items-center px-4 py-2 bg-transparent text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-300 rounded-md">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Go Back
                            </button>
                        </Link>

                        <div className="flex items-center space-x-2 text-sm">
                            <a href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">Research</a>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-900 font-medium">Data-Driven Scouting</span>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </div >
    );
}

export default DataDrivenPlayerScouting;
