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

function PerformanceAnalytics() {
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
        if (isLoading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    if (videoRef.current) {
                        videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                        setIsVideoPlaying(true);
                    }
                } else {
                    if (videoRef.current) {
                        videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                        setIsVideoPlaying(false);
                    }
                }
            },
            {
                threshold: 0.5,
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
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <BarsSpinner size="lg" className="mb-4" />
                    <p className="text-gray-600">Loading performance analytics...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Section */}
            <section className="pt-0 pb-16 sm:pb-20 md:pb-28 bg-white">
                <div className="relative">
                    {/* Responsive Hero Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 pt-0 px-2 sm:px-4">
                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
                            <img
                                src={mldetection}
                                alt="AI Analytics 1"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
                            <img
                                src={fieldtracking}
                                alt="AI Analytics 2"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg sm:rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
                            <img
                                src={playerdetection}
                                alt="AI Analytics 3"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Responsive Navigation */}
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8 sm:pb-12">
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
                                <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">AI Performance System</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                            AI-BASED<br />FOOTBALL PERFORMANCE<br />INTELLIGENCE
                        </h1>
                        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                    </div>

                    <div className="space-y-6 sm:space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            Integrating YOLOv11 with advanced tracking algorithms to automate player detection,
                            tactical analysis, and performance evaluation. The system transforms live match video into structured data,
                            enabling coaches, analysts, and scouts to access real-time insights on player movement, team shape, and tactical efficiency.
                        </p>
                        <p>
                            This project focuses on building a computer vision–driven analytics system that
                            processes live or recorded football footage to extract meaningful performance data. Using YOLOv11 for player
                            detection and object tracking algorithms such as DeepSORT or ByteTrack, the system identifies each player's positional
                            coordinates across frames, generating metrics
                            such as distance covered, speed, heatmaps, and passing lanes.
                        </p>
                        <p>
                            By combining these positional datasets with event tagging (passes, tackles, duels, etc.), the
                            system provides a comprehensive breakdown of team structure and individual performance — all in real
                            time or post-match analysis.
                        </p>
                    </div>
                </div>
            </section >

            {/* Core Objectives Section */}
            < section ref={sectionRef} className="py-16 sm:py-20 md:py-28 bg-gray-50" >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    CORE OBJECTIVES
                                </h2>
                                <div className="w-20 sm:w-24 h-1 bg-red-600 mb-6"></div>
                            </div>
                            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                                <p>
                                    The AI-Based Football Performance Intelligence System is designed to revolutionize football analytics through advanced computer vision and machine learning technologies.
                                </p>

                                <p>
                                    <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">AUTOMATE PLAYER AND BALL DETECTION:</strong> Implement YOLOv11 for real-time object detection and tracking of players and ball movement throughout the match.
                                </p>

                                <p>
                                    <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">TRACK PLAYER MOVEMENT:</strong> Compute comprehensive metrics including speed, distance covered, acceleration, and zone coverage for tactical analysis.
                                </p>

                                <p>
                                    <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">GENERATE TACTICAL MAPS:</strong> Create dynamic heatmaps and formation visualizations to analyze player influence areas and team tactical patterns.
                                </p>

                                <p>
                                    <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">INTEGRATE DUEL ANALYTICS:</strong> Incorporate the enhanced BT Duel Model for contextual analysis of 1v1 situations and player performance evaluation.
                                </p>

                                <p>
                                    <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">VISUALIZE DATA:</strong> Develop interactive dashboards for coaches, scouts, and performance analysts to access real-time insights and historical performance data.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* YouTube Video with Auto-play on Scroll */}
                            <iframe
                                ref={videoRef}
                                className="w-full aspect-video"
                                src="https://www.youtube.com/embed/KWZbV1OfHqw"
                                title="AI Football Performance System Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                            <div className="text-center mt-2 text-xs sm:text-sm text-gray-500">
                                {isVideoPlaying ? 'Video playing...' : 'Video paused'}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Applications Section */}
            < section className="py-16 sm:py-20 md:py-28" >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            APPLICATIONS
                        </h2>
                        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            The AI Performance Intelligence System delivers practical value across multiple football domains, from coaching to broadcasting.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">PERFORMANCE ANALYSIS:</strong> Identify high-intensity players, fatigue trends, and tactical discipline through comprehensive movement analysis.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">SCOUTING:</strong> Evaluate player movements and positional intelligence in real match conditions with objective data metrics.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">TACTICAL RESEARCH:</strong> Analyze formation transitions, player coordination patterns, and team shape dynamics throughout matches.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">BROADCAST ENHANCEMENT:</strong> Generate automated visual overlays and real-time analytics for live sports coverage and commentary.
                        </p>
                    </div>
                </div>
            </section >

            {/* Technology Stack Section */}
            < section className="py-16 sm:py-20 md:py-28 bg-gray-50" >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TECHNOLOGY STACK
                        </h2>
                        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Powered by cutting-edge technologies for comprehensive football analytics
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {/* YOLOv11 */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-500 group-hover:shadow-2xl">
                                <img src={YoloIcon} alt="YOLOv11" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">YOLOv11</p>
                        </div>

                        {/* OpenCV */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-green-500 group-hover:shadow-2xl">
                                <img src={OpenCV} alt="OpenCV" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">OpenCV</p>
                        </div>

                        {/* Pandas */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-yellow-500 group-hover:shadow-2xl">
                                <img src={Pandas} alt="Pandas" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">Pandas</p>
                        </div>

                        {/* NumPy */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-blue-400 group-hover:shadow-2xl">
                                <img src={NumPy} alt="NumPy" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-blue-400 transition-colors">NumPy</p>
                        </div>

                        {/* Scikit-learn */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-orange-500 group-hover:shadow-2xl">
                                <img src={ScikitLearn} alt="Scikit-learn" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">Scikit-learn</p>
                        </div>

                        {/* Matplotlib */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-green-400 group-hover:shadow-2xl">
                                <img src={Matplotlib} alt="Matplotlib" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-green-400 transition-colors">Matplotlib</p>
                        </div>

                        {/* Plotly */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-500 group-hover:shadow-2xl">
                                <img src={Ploty} alt="Plotly" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-purple-500 transition-colors">Plotly</p>
                        </div>

                        {/* FastAPI */}
                        <div className="tech-icon group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-green-500 group-hover:shadow-2xl">
                                <img src={FastAPI} alt="FastAPI" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">FastAPI</p>
                        </div>
                    </div>

                    {/* Responsive Back Navigation */}
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
                            <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">AI Performance System</span>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}

export default PerformanceAnalytics;


// import { Link, useParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { BarsSpinner } from "@/components/ui/barspinner";
// import { useState, useEffect, useRef } from "react";

// // Import your available icons
// import FastAPI from "@/components/ui/icons/FastAPI.svg";
// import Matplotlib from "@/components/ui/icons/Matplotlib.svg";
// import NumPy from "@/components/ui/icons/NumPy.svg";
// import OpenCV from "@/components/ui/icons/OpenCV.svg";
// import Pandas from "@/components/ui/icons/Pandas.svg";
// import Ploty from "@/components/ui/icons/Ploty.svg";
// import YoloIcon from "@/components/ui/icons/YoloIcon.svg";
// import ScikitLearn from "@/components/ui/icons/scikit-learn.svg";
// import DataCollection from "@/assets/research1/Data collection.jpg";
// import playerdetection from "@/assets/AI system/player detection.webp";
// import mldetection from "@/assets/AI system/ml detection.jpeg"
// import fieldtracking from "@/assets/AI system/field tracking.png"
// import Footer from "@/components/Footer";

// function PerformanceAnalytics() {
//     const [isLoading, setIsLoading] = useState(true);
//     const videoRef = useRef(null);
//     const sectionRef = useRef(null);
//     const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);

//         return () => clearTimeout(timeout);
//     }, []);

//     useEffect(() => {
//         // Only set up the intersection observer after loading is complete
//         if (isLoading) return;

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 const [entry] = entries;
//                 if (entry.isIntersecting) {
//                     // Play video when section is in view
//                     if (videoRef.current) {
//                         videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//                         setIsVideoPlaying(true);
//                     }
//                 } else {
//                     // Pause video when section is out of view
//                     if (videoRef.current) {
//                         videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//                         setIsVideoPlaying(false);
//                     }
//                 }
//             },
//             {
//                 threshold: 0.5, // Trigger when 50% of section is visible
//                 rootMargin: '0px'
//             }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, [isLoading]); // Add isLoading as dependency

//     // Move the loading check to the very end, after all hooks
//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-white flex items-center justify-center">
//                 <div className="text-center">
//                     <BarsSpinner size="lg" className="mb-4" />
//                     <p className="text-gray-600">Loading research details...</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Main Content Section */}
//             <section className="pt-0 pb-20 md:pb-28 bg-white">
//                 <div className="relative">
//                     {/* Hero Images Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 pt-0">
//                         <div className="h-64 md:h-80 overflow-hidden">
//                             <img
//                                 src={mldetection}
//                                 alt="AI Analytics 1"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="h-64 md:h-80 overflow-hidden">
//                             <img
//                                 src={fieldtracking}
//                                 alt="AI Analytics 2"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="h-64 md:h-80 overflow-hidden">
//                             <img
//                                 src={playerdetection}
//                                 alt="AI Analytics 3"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>

//                     {/* Navigation */}
//                     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
//                         <div className="flex items-center justify-between">
//                             <Link to="/research">
//                                 <Button variant="ghost" className="hover:bg-accent">
//                                     <ArrowLeft className="w-4 h-4 mr-2" />
//                                     Go Back
//                                 </Button>
//                             </Link>

//                             <Breadcrumb>
//                                 <BreadcrumbList>
//                                     <BreadcrumbItem>
//                                         <BreadcrumbLink asChild>
//                                             <Link to="/research" className="text-base">Research</Link>
//                                         </BreadcrumbLink>
//                                     </BreadcrumbItem>
//                                     <BreadcrumbSeparator />
//                                     <BreadcrumbItem>
//                                         <BreadcrumbPage className="text-base font-medium">
//                                             AI Football Performance System
//                                         </BreadcrumbPage>
//                                     </BreadcrumbItem>
//                                 </BreadcrumbList>
//                             </Breadcrumb>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//                             AI-BASED<br />FOOTBALL PERFORMANCE INTELLIGENCE
//                         </h1>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//                     </div>

//                     <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
//                         <p>Integrating YOLOv11 with advanced tracking algorithms to automate player detection,
//                             tactical analysis, and performance evaluation. The system transforms live match video into structured data,
//                             enabling coaches,
//                             analysts, and scouts to access real-time insights on player movement, team shape, and tactical efficiency.
//                         </p>
//                         <p>
//                             This project focuses on building a computer vision–driven analytics system that
//                             processes live or recorded football footage to extract meaningful performance data. Using YOLOv11 for player
//                             detection and object tracking algorithms such as DeepSORT or ByteTrack, the system identifies each player's positional
//                             coordinates across frames, generating metrics
//                             such as distance covered, speed, heatmaps, and passing lanes.
//                         </p>

//                         <p>By combining these positional datasets with event tagging (passes, tackles, duels, etc.), the
//                             system provides a comprehensive breakdown of team structure and individual performance — all in real
//                             time or post-match analysis.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <div>
//                                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                                     CORE OBJECTIVES
//                                 </h2>
//                                 <div className="w-24 h-1 bg-red-600 mb-6"></div>
//                             </div>
//                             <div className="space-y-4 text-gray-700 leading-relaxed">
//                                 <p>
//                                     The AI-Based Football Performance Intelligence System is designed to revolutionize football analytics through advanced computer vision and machine learning technologies.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900 uppercase">AUTOMATE PLAYER AND BALL DETECTION:</strong> Implement YOLOv11 for real-time object detection and tracking of players and ball movement throughout the match.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900 uppercase">TRACK PLAYER MOVEMENT:</strong> Compute comprehensive metrics including speed, distance covered, acceleration, and zone coverage for tactical analysis.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900 uppercase">GENERATE TACTICAL MAPS:</strong> Create dynamic heatmaps and formation visualizations to analyze player influence areas and team tactical patterns.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900 uppercase">INTEGRATE DUEL ANALYTICS:</strong> Incorporate the enhanced BT Duel Model for contextual analysis of 1v1 situations and player performance evaluation.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900 uppercase">VISUALIZE DATA:</strong> Develop interactive dashboards for coaches, scouts, and performance analysts to access real-time insights and historical performance data.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="relative">
//                             {/* YouTube Video with Auto-play on Scroll */}
//                             <div className="w-full max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
//                                 <iframe
//                                     ref={videoRef}
//                                     className="w-full aspect-video"
//                                     src="https://www.youtube.com/embed/xo1fK1gTprE?si=bLReTxH3zoF35L3k&enablejsapi=1&version=3&playerapiid=ytplayer"
//                                     title="AI Football Performance System Demo"
//                                     frameBorder="0"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                 />
//                             </div>
//                             <div className="text-center mt-2 text-sm text-gray-500">
//                                 {isVideoPlaying ? 'Video playing...' : 'Video paused'}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 md:py-28 ">
//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                             APPLICATIONS
//                         </h2>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//                     </div>
//                     <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//                         <p>
//                             The AI Performance Intelligence System delivers practical value across multiple football domains, from coaching to broadcasting.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">PERFORMANCE ANALYSIS:</strong> Identify high-intensity players, fatigue trends, and tactical discipline through comprehensive movement analysis.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">SCOUTING:</strong> Evaluate player movements and positional intelligence in real match conditions with objective data metrics.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">TACTICAL RESEARCH:</strong> Analyze formation transitions, player coordination patterns, and team shape dynamics throughout matches.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">BROADCAST ENHANCEMENT:</strong> Generate automated visual overlays and real-time analytics for live sports coverage and commentary.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Technology Stack Section with Available Icons */}
//             <section className="py-20 md:py-28 bg-gray-50">
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                             TECHNOLOGY STACK
//                         </h2>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//                         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                             Powered by cutting-edge technologies for comprehensive football analytics
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         {/* YOLOv11 */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-500 group-hover:shadow-2xl">
//                                 <img src={YoloIcon} alt="YOLOv11" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">YOLOv11</p>
//                         </div>

//                         {/* OpenCV */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-green-500 group-hover:shadow-2xl">
//                                 <img src={OpenCV} alt="OpenCV" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">OpenCV</p>
//                         </div>

//                         {/* Pandas */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-yellow-500 group-hover:shadow-2xl">
//                                 <img src={Pandas} alt="Pandas" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">Pandas</p>
//                         </div>

//                         {/* NumPy */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-blue-400 group-hover:shadow-2xl">
//                                 <img src={NumPy} alt="NumPy" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-blue-400 transition-colors">NumPy</p>
//                         </div>

//                         {/* Scikit-learn */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-orange-500 group-hover:shadow-2xl">
//                                 <img src={ScikitLearn} alt="Scikit-learn" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">Scikit-learn</p>
//                         </div>

//                         {/* Matplotlib */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-green-400 group-hover:shadow-2xl">
//                                 <img src={Matplotlib} alt="Matplotlib" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-green-400 transition-colors">Matplotlib</p>
//                         </div>

//                         {/* Plotly */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-500 group-hover:shadow-2xl">
//                                 <img src={Ploty} alt="Plotly" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-purple-500 transition-colors">Plotly</p>
//                         </div>

//                         {/* FastAPI */}
//                         <div className="tech-icon group">
//                             <div className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 bg-white rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-green-500 group-hover:shadow-2xl">
//                                 <img src={FastAPI} alt="FastAPI" className="w-10 h-10 group-hover:scale-110 transition-transform" />
//                             </div>
//                             <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">FastAPI</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-between mt-20">
//                         <Link to="/research">
//                             <button className="inline-flex items-center px-4 py-2 bg-transparent text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-300 rounded-md">
//                                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                                 </svg>
//                                 Go Back
//                             </button>
//                         </Link>

//                         <div className="flex items-center space-x-2 text-sm">
//                             <a href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">Research</a>
//                             <span className="text-gray-400">/</span>
//                             <span className="text-gray-900 font-medium">AI Performance System</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Back Navigation
//             <section className="py-12 bg-gray-50">
//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
//                     <div className="flex items-center justify-between">
//                         <Link to="/research">
//                             <button className="inline-flex items-center px-4 py-2 bg-transparent text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-300 rounded-md">
//                                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                                 </svg>
//                                 Go Back
//                             </button>
//                         </Link>

//                         <div className="flex items-center space-x-2 text-sm">
//                             <a href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">Research</a>
//                             <span className="text-gray-400">/</span>
//                             <span className="text-gray-900 font-medium">AI Performance System</span>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}
//             <Footer />
//         </div >
//     );
// }

// export default PerformanceAnalytics;
