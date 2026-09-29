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

import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

function AcademyDevelopmentModels() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const locationState = location.state as { from?: string; fromLabel?: string } | null;
    const backTo = locationState?.from === "/cv" ? "/cv" : "/research";
    const backLabel = locationState?.from === "/cv" ? locationState.fromLabel || "CV" : "Research";

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    // Move the loading check to the very end, after all hooks
    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <BarsSpinner size="lg" className="mb-4" />
                    <p className="text-gray-600">Loading academy development models...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Section */}
            <section className="pt-0 pb-20 md:pb-28 bg-white">
                <div className="relative">
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
                                <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">Academy Development Models</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            ACADEMY<br />DEVELOPMENT MODELS
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
                            The Academy Development Models project focuses on building structured, data-driven frameworks that enhance athlete growth through a balance of technical, tactical, physical, and psychological development. Traditional academy systems often rely on uniform training methods that overlook individual progress variations and contextual performance factors. This model introduces a scientific and analytical approach to athlete development, combining performance data tracking, workload analysis, and personalized feedback systems to optimize long-term player growth.
                        </p>

                        <p>
                            Using integrated data from training sessions, match performance, and wellness metrics, the system enables academies to design customized training plans aligned with each athlete's strengths, weaknesses, and developmental stage. By applying machine learning insights and performance analytics, coaches can monitor progression trends, predict potential fatigue or injury risks, and make informed training adjustments. The ultimate goal is to create holistic player profiles that go beyond physical output — incorporating decision-making, mental resilience, and tactical understanding — to build complete athletes ready for the demands of modern football.
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
                            <span className="text-gray-900 font-medium">Academy Development Models</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default AcademyDevelopmentModels;
