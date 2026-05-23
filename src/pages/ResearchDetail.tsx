import { Link, useParams } from "react-router-dom";
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
import { useState, useEffect } from "react";
import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import DataCollection from "@/assets/research1/Data collection.jpg";
import aerialdual from "@/assets/research1/aerialdual.jpg";
import grounddual from "@/assets/research1/grounddual.jpg";
import throwin from "@/assets/research1/throwin.png";
import Footer from "@/components/Footer";

const researchProjects = [
    {
        id: "paying-it-back",
        title: "Redefined Bradley–Terry Dual Model",
    },
    {
        id: "data-driven-scouting",
        title: "Data-Driven Player Scouting",
    },
    {
        id: "injury-prevention",
        title: "Injury Prediction & Prevention",
    },
    {
        id: "academy-development",
        title: "Academy Development Models",
    },
    {
        id: "performance-analytics",
        title: "Athlete Performance Analytics",
    },
    {
        id: "sport-tech-future",
        title: "Future Pathways in Sport-Tech",
    },
];

function Research() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const currentProject = researchProjects.find(p => p.id === id);
    const projectTitle = currentProject?.title || "Research Project";
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageLoad = () => {
        setImagesLoaded(prev => prev + 1);
    };

    useEffect(() => {
        if (!currentProject && id) {
            setIsLoading(false);
            return;
        }

        if (imagesLoaded >= 3) {
            setIsLoading(false);
        }

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [imagesLoaded, currentProject, id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <BarsSpinner size="lg" className="mb-4" />
                    <p className="text-gray-600">Loading research details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Section */}
            <section className="pt-0 pb-20 md:pb-28 bg-white">
                <div className="relative">
                    {/* Responsive Hero Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 pt-0 px-2 sm:px-4">
                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
                            <img
                                src={aerialdual}
                                alt="Aerial Dual"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        </div>
                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg sm:rounded-xl shadow-sm">
                            <img
                                src={grounddual}
                                alt="Ground Dual"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        </div>
                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg sm:rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
                            <img
                                src={throwin}
                                alt="Set piece"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>

                    {/* Responsive Navigation */}
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                        <div className="flex items-center justify-between mt-2">
                            <Link to="/research">
                                <Button variant="ghost" className="hover:bg-accent ">
                                    <ArrowLeft className="w-4 h-4 " />
                                    Go Back
                                </Button>
                            </Link>

                            <div className="flex items-center space-x-2 text-sm">
                                {/* <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                                <span className="text-gray-400">/</span> */}
                                <Link
                                    to="/Research"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Research
                                </Link>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-900 font-medium ">BT Dual Model</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16 mt-2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                            REDEFINED<br className="sm:hidden" /> BRADLEY–<br className="hidden sm:block" />TERRY DUAL MODEL
                        </h1>
                        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                    </div>

                    <div className="space-y-6 sm:space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            The Bradley–Terry (BT) model has long served as a foundational statistical framework for evaluating paired comparisons, particularly in contexts such as 1v1 Duals in football. Its ability to estimate player ability based on win–loss outcomes and opponent strength has made it a valuable tool for measuring individual performance fairness. However, as the modern game continues to evolve, the BT model's traditional formulation struggles to capture the contextual richness of football's tactical and situational variability. Factors such as spatial zones, match tempo, game state, and role-specific responsibilities play a decisive role in determining Dual outcomes, yet remain unaccounted for in the classical model structure. This creates a need for an evolved analytical framework that integrates both data-driven precision and tactical understanding.
                        </p>
                        <p>
                            This study proposes an enhanced BT Dual Model tailored for the complexity of modern football analytics. The redefined approach introduces contextual weighting for spatial importance, dynamic ability estimation, and event-linked outcome evaluation, moving beyond binary Dual results. By embedding temporal, positional, and stylistic dimensions, the model better reflects the realities of player performance within varied tactical environments. The enhanced BT framework not only refines individual evaluation accuracy but also strengthens its application in player scouting, tactical optimization, and developmental analytics, ultimately bridging the gap between statistical modeling and real-world football intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Limitations Section */}
            <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            LIMITATIONS OF THE<br />CURRENT BT MODEL
                        </h2>
                        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            While the classical BT model provides a fair estimate of Dual ability by accounting for opponent strength,
                            several shortcomings remain when applied directly to football contexts.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">BINARY OUTCOME DEPENDENCY:</strong> The model only considers win/loss outcomes, ignoring follow-up actions
                            such as possession retention or chance creation.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">LACK OF SPATIAL CONTEXT:</strong> Duals in different pitch zones (defensive third vs. attacking third)
                            are weighted equally, despite their tactical significance varying greatly.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">NO TEMPORAL OR MATCH-STATE ADJUSTMENT:</strong> It fails to differentiate Duals occurring during
                            high-pressure phases (e.g., defending a lead) from low-stakes periods.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">IGNORES TEAM TACTICAL STRUCTURE:</strong> Individual Dual outcomes are modeled in isolation without
                            accounting for collective systems such as pressing shape, overloads, or defensive support.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">STATIC ABILITY ESTIMATION:</strong> Player abilities are treated as constant across time,
                            disregarding form, fatigue, and adaptation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Enhancement Section */}
            <section className="py-16 sm:py-20 md:py-28 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            ENHANCING THE BRADLEY–
                            <br />TERRY (BT) DUAL MODEL
                        </h2>
                        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            To address these gaps, the following modifications are proposed for a Modern BT Dual Evaluation Framework:
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">SPATIAL WEIGHTING OF DUALS:</strong> Incorporate x,y pitch coordinates to adjust Dual importance based on tactical zones (defensive, midfield, attacking third).
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">MATCH-STATE & TEMPORAL CONTEXT:</strong> Factor in scoreline, time remaining, and game intensity to reflect psychological and situational difficulty.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">EVENT-LINKED OUTCOME INTEGRATION:</strong> Extend beyond win/loss by including Expected Dual Impact (xD) — measuring whether the Dual leads to possession retention, progression, or threat creation.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">STYLISTIC MATCHUP ANALYSIS:</strong> Classify Dual types (e.g., aerial, physical, tactical, or technical) to model performance consistency across different opponent profiles.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900 uppercase text-sm sm:text-base">DYNAMIC ABILITY TRACKING:</strong> Introduce a temporal dimension that updates player Dual ratings based on form trends, fatigue, and season progression.
                        </p>
                    </div>
                </div>
            </section>

            {/* Workflow Diagram Section */}
            <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            WORKFLOW DIAGRAM
                        </h2>
                        <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={DataCollection}
                            alt="Athlete Performance Analytics"
                            className="w-full max-w-4xl mx-auto rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-105 cursor-zoom-in"
                            onClick={() => setIsModalOpen(true)}
                        />
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="relative max-w-7xl max-h-full animate-scaleIn">
                        <button
                            className="absolute -top-12 sm:-top-16 right-0 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors duration-200 bg-gray-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ✕
                        </button>
                        <img
                            src={DataCollection}
                            alt="Workflow Diagram - Enlarged View"
                            className="max-w-full max-h-[70vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-white text-center mt-3 sm:mt-4 text-xs sm:text-sm">Click anywhere outside the image to close</p>
                    </div>
                </div>
            )}

            {/* Conclusion Section */}
            <section
                className="py-16 sm:py-20 md:py-28 text-white bg-cover bg-center relative"
                style={{
                    backgroundColor: 'rgba(175, 24, 54, 1)',
                    backgroundBlendMode: 'multiply'
                }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        <WritingText
                            text="CONCLUSION OF ENHANCED MODEL"
                            inView={true}
                            transition={{
                                type: "spring",
                                bounce: 0,
                                duration: 2,
                                delay: 0.2
                            }}
                        />
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
                        The redefined BT Dual Model aims to bridge the gap between traditional statistical fairness and modern football's tactical complexity. By embedding context — spatial, temporal, and behavioral — the model transforms from a static evaluation tool into a dynamic performance intelligence system. This evolution not only enhances analytical accuracy but also provides practical value in scouting, tactical planning, and player development pipelines within professional football environments.
                    </p>
                </div>
            </section>

            {/* Back Navigation */}
            {/* Back Navigation */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                    {/* References Section */}
                    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">REFERENCES</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <span className="text-gray-500 mr-3 mt-1">•</span>
                                <a
                                    href="https://en.wikipedia.org/wiki/Bradley%E2%80%93Terry_model"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                                >
                                    Bradley Terry Model
                                </a>
                            </div>
                            <div className="flex items-start">
                                <span className="text-gray-500 mr-3 mt-1">•</span>
                                <a
                                    href="https://www.statsperform.com/resource/a-new-metric-for-evaluating-1v1-ability/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600  hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                                >
                                    A New Metric for Evaluating 1v1 Ability
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                        <Link to="/research">
                            <Button variant="ghost" className="hover:bg-accent ">
                                <ArrowLeft className="w-4 h-4 " />
                                Go Back
                            </Button>
                        </Link>

                        <div className="flex items-center space-x-2 text-sm">
                            <Link
                                to="/Research"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Research
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-900 font-medium">BT Dual Model</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Research;


// // export default Research;
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
// import { BarsSpinner } from "@/components/ui/barspinner"; // Import the custom spinner
// import { useState, useEffect } from "react";
// import { WritingText } from "@/components/ui/shadcn-io/writing-text";
// import DataCollection from "@/assets/research1/Data collection.jpg";
// import aerialdual from "@/assets/research1/aerialdual.jpg";
// import grounddual from "@/assets/research1/grounddual.jpg";
// import throwin from "@/assets/research1/throwin.png";
// import Footer from "@/components/Footer";

// const researchProjects = [
//     {
//         id: "paying-it-back",
//         title: "Redefined Bradley–Terry Dual Model",
//     },
//     {
//         id: "data-driven-scouting",
//         title: "Data-Driven Player Scouting",
//     },
//     {
//         id: "injury-prevention",
//         title: "Injury Prediction & Prevention",
//     },
//     {
//         id: "academy-development",
//         title: "Academy Development Models",
//     },
//     {
//         id: "performance-analytics",
//         title: "Athlete Performance Analytics",
//     },
//     {
//         id: "sport-tech-future",
//         title: "Future Pathways in Sport-Tech",
//     },
// ];

// function Research() {
//     const { id } = useParams();
//     const [isLoading, setIsLoading] = useState(true);
//     const [imagesLoaded, setImagesLoaded] = useState(0);
//     const currentProject = researchProjects.find(p => p.id === id);
//     const projectTitle = currentProject?.title || "Research Project";
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Handle image loading
//     const handleImageLoad = () => {
//         setImagesLoaded(prev => prev + 1);
//     };

//     // Check if all content is loaded
//     useEffect(() => {
//         // If project not found, stop loading
//         if (!currentProject && id) {
//             setIsLoading(false);
//             return;
//         }

//         // If all 3 hero images are loaded, stop loading
//         if (imagesLoaded >= 3) {
//             setIsLoading(false);
//         }

//         // Fallback: stop loading after 3 seconds max to prevent infinite loading
//         const timeout = setTimeout(() => {
//             setIsLoading(false);
//         }, 3000);

//         return () => clearTimeout(timeout);
//     }, [imagesLoaded, currentProject, id]);

//     // MODIFY THIS PART - Loading State
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

//     // MODIFY THIS PART - Add onLoad to all hero images
//     return (

//         <div className="min-h-screen bg-white">
//             {/* Main Content Section */}
//             <section className="pt-0 pb-20 md:pb-28 bg-white">
//                 <div className="relative">
//                     {/* Hero Images Grid - MODIFY: Add onLoad to each image */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 pt-0">
//                         <div className="h-64 md:h-80 overflow-hidden">
//                             <img
//                                 src={aerialdual}
//                                 alt="Aerial Dual"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="h-64 md:h-80 overflow-hidden">
//                             <img
//                                 src={grounddual}
//                                 alt="Ground Dual"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="h-64 md:h-80 overflow-hidden">
//                             <img
//                                 src={throwin}
//                                 alt="set piece"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>

//                     {/* Navigation with padding */}
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
//                                         <BreadcrumbPage className="text-base font-medium">{projectTitle}</BreadcrumbPage>
//                                     </BreadcrumbItem>
//                                 </BreadcrumbList>
//                             </Breadcrumb>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//                             REDEFINED  BRADELY–<br />TERRY DUAL MODEL

//                             {/* Redefined Bradley–TerryDual Model */}
//                         </h1>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//                     </div>

//                     <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
//                         <p>
//                             The Bradley–Terry (BT) model has long served as a foundational statistical framework for evaluating paired comparisons, particularly in contexts such as 1v1 Duals in football. Its ability to estimate player ability based on win–loss outcomes and opponent strength has made it a valuable tool for measuring individual performance fairness. However, as the modern game continues to evolve, the BT model’s traditional formulation struggles to capture the contextual richness of football’s tactical and situational variability. Factors such as spatial zones, match tempo, game state, and role-specific responsibilities play a decisive role in determining Dual outcomes, yet remain unaccounted for in the classical model structure. This creates a need for an evolved analytical framework that integrates both data-driven precision and tactical understanding.
//                         </p>
//                         <p>
//                             This study proposes an enhanced BT Dual Model tailored for the complexity of modern football analytics. The redefined approach introduces contextual weighting for spatial importance, dynamic ability estimation, and event-linked outcome evaluation, moving beyond binary Dual results. By embedding temporal, positional, and stylistic dimensions, the model better reflects the realities of player performance within varied tactical environments. The enhanced BT framework not only refines individual evaluation accuracy but also strengthens its application in player scouting, tactical optimization, and developmental analytics, ultimately bridging the gap between statistical modeling and real-world football intelligence.
//                         </p>
//                     </div>
//                 </div>
//             </section >



//             {/* Rest of your sections - when have time update with image */}
//             {/* <section className="py-20 md:py-28 bg-gray-50">
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <div>
//                                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                                     LIMITATIONS OF THE<br />CURRENT BT MODEL
//                                 </h2>
//                                 <div className="w-24 h-1 bg-red-600 mb-6"></div>
//                             </div>
//                             <div className="space-y-4 text-gray-700 leading-relaxed">
//                                 <p>
//                                     While the classical BT model provides a fair estimate of Dual ability by accounting for opponent strength,
//                                     several shortcomings remain when applied directly to football contexts.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900">Binary Outcome Dependency:</strong> The model only considers win/loss outcomes, ignoring follow-up actions
//                                     such as possession retention or chance creation.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900">Lack of Spatial Context:</strong> Duals in different pitch zones (defensive third vs. attacking third)
//                                     are weighted equally, despite their tactical significance varying greatly.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900">No Temporal or Match-State Adjustment:</strong> It fails to differentiate Duals occurring during
//                                     high-pressure phases (e.g., defending a lead) from low-stakes periods.
//                                 </p> */}
//             {/*
//                                 <p>
//                                     <strong className="font-bold text-gray-900">Uniform Opponent Assumption:</strong> Does not capture varying Dual types or style mismatches
//                                     (e.g., aerial vs. ground, physical vs. technical).
//                                 </p> */}

//             {/* <p>
//                 <strong className="font-bold text-gray-900">Ignores Team Tactical Structure:</strong> Individual Dual outcomes are modeled in isolation without
//                 accounting for collective systems such as pressing shape, overloads, or defensive support.
//             </p>

//             <p>
//                 <strong className="font-bold text-gray-900">Static Ability Estimation:</strong> Player abilities are treated as constant across time,
//                 disregarding form, fatigue, and adaptation.
//             </p>
//         </div>
//                         </div >
//         <div className="relative">
//             <img
//                 src="https://i.ibb.co/KKv7mVJ/flowchart-placeholder.png"
//                 alt="CDPI Flowchart"
//                 className="w-full max-w-3xl mx-auto shadow-lg rounded-lg"
//             />
//         </div>
//                     </div >
//                 </div >
//             </section > */}


//             <section className="py-20 md:py-28 bg-gray-50">
//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                             LIMITATIONS OF THE<br />CURRENT BT MODEL
//                         </h2>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//                     </div>
//                     <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//                         <p>
//                             While the classical BT model provides a fair estimate of Dual ability by accounting for opponent strength,
//                             several shortcomings remain when applied directly to football contexts.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">BINARY OUTCOME DEPENDENCY:</strong> The model only considers win/loss outcomes, ignoring follow-up actions
//                             such as possession retention or chance creation.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">LACK OF SPATIAL CONTEXT:</strong> Duals in different pitch zones (defensive third vs. attacking third)
//                             are weighted equally, despite their tactical significance varying greatly.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">NO TEMPORAL OR MATCH-STATE ADJUSTMENT:</strong> It fails to differentiate Duals occurring during
//                             high-pressure phases (e.g., defending a lead) from low-stakes periods.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">IGNORES TEAM TACTICAL STRUCTURE:</strong> Individual Dual outcomes are modeled in isolation without
//                             accounting for collective systems such as pressing shape, overloads, or defensive support.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">STATIC ABILITY ESTIMATION:</strong> Player abilities are treated as constant across time,
//                             disregarding form, fatigue, and adaptation.
//                         </p>
//                     </div>
//                 </div>
//             </section>



//             {/* enhancement -  thisis theactail */}
//             {/* <section className="py-20 md:py-28 bg-white">
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="order-2 md:order-1 relative">
//                             <img
//                                 src="https://i.ibb.co/KXxKDgn/bar-chart-placeholder.png"
//                                 alt="CDPI Player Ranking"
//                                 className="w-full max-w-3xl mx-auto shadow-lg rounded-lg"
//                             />
//                         </div>
//                         <div className="order-1 md:order-2 space-y-6">
//                             <div>
//                                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                                     ENHANCING THE <br /> BT Dual MODEL
//                                 </h2>
//                                 <div className="w-20 h-1 bg-red-600 mb-6"></div>
//                             </div>
//                             <div className="space-y-4 text-gray-700 leading-relaxed">
//                                 <p>
//                                     To address these gaps, the following modifications are proposed for a Modern BT Dual Evaluation Framework:
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900">SPATIAL WEIGHTING OF DualS:</strong> Incorporate x,y pitch coordinates to adjust Dual importance based on tactical zones (defensive, midfield, attacking third).
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900">MATCH-STATE & TEMPORAL CONTEXT:</strong> Factor in scoreline, time remaining, and game intensity to reflect psychological and situational difficulty.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900">EVENT-LINKED OUTCOME INTEGRATION:</strong> Extend beyond win/loss by including Expected Dual Impact (xD) — measuring whether the Dual leads to possession retention, progression, or threat creation.
//                                 </p>
//                                 <p>
//                                     <strong className="font-bold text-gray-900">STYLISTIC MATCHUP ANALYSIS:</strong> Classify Dual types (e.g., aerial, physical, tactical, or technical) to model performance consistency across different opponent profiles.
//                                 </p>

//                                 <p>
//                                     <strong className="font-bold text-gray-900">DYNAMIC ABILITY TRACKING:</strong> Introduce a temporal dimension that updates player Dual ratings based on form trends, fatigue, and season progression.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}

//             <section className="py-20 md:py-28 bg-white">
//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                             ENHANCING THE BRADELY–
//                             <br />  TERRY (BT) Dual MODEL

//                         </h2>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//                     </div>
//                     <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
//                         <p>
//                             To address these gaps, the following modifications are proposed for a Modern BT Dual Evaluation Framework:
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">SPATIAL WEIGHTING OF DualS:</strong> Incorporate x,y pitch coordinates to adjust Dual importance based on tactical zones (defensive, midfield, attacking third).
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">MATCH-STATE & TEMPORAL CONTEXT:</strong> Factor in scoreline, time remaining, and game intensity to reflect psychological and situational difficulty.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">EVENT-LINKED OUTCOME INTEGRATION:</strong> Extend beyond win/loss by including Expected Dual Impact (xD) — measuring whether the Dual leads to possession retention, progression, or threat creation.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">STYLISTIC MATCHUP ANALYSIS:</strong> Classify Dual types (e.g., aerial, physical, tactical, or technical) to model performance consistency across different opponent profiles.
//                         </p>

//                         <p>
//                             <strong className="font-bold text-gray-900 uppercase">DYNAMIC ABILITY TRACKING:</strong> Introduce a temporal dimension that updates player Dual ratings based on form trends, fatigue, and season progression.
//                         </p>
//                     </div>
//                 </div>
//             </section>


//             {/* Workflow Diagram Section */}
//             <section className="py-20 md:py-28 bg-gray-50">
//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                             WORKFLOW DIAGRAM
//                         </h2>
//                         <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src={DataCollection}
//                             alt="Athlete Performance Analytics"
//                             className="w-full max-w-4xl mx-auto shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:brightness-105 cursor-zoom-in"
//                             onClick={() => setIsModalOpen(true)}
//                         />
//                     </div>
//                 </div>
//             </section>

//             {
//                 isModalOpen && (
//                     <div
//                         className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
//                         onClick={() => setIsModalOpen(false)}
//                     >
//                         <div className="relative max-w-7xl max-h-full animate-scaleIn">
//                             <button
//                                 className="absolute -top-16 right-0 text-white text-3xl hover:text-gray-300 transition-colors duration-200 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-10"
//                                 onClick={() => setIsModalOpen(false)}
//                             >
//                                 ✕
//                             </button>
//                             <img
//                                 src={DataCollection}
//                                 alt="Workflow Diagram - Enlarged View"
//                                 className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
//                                 onClick={(e) => e.stopPropagation()}
//                             />
//                             <p className="text-white text-center mt-4 text-sm">Click anywhere outside the image to close</p>
//                         </div>
//                     </div>
//                 )
//             }


//             < section
//                 className="py-20 md:py-28 text-white bg-cover bg-center relative"
//                 style={{
//                     backgroundColor: 'rgba(175, 24, 54, 1)',
//                     backgroundBlendMode: 'multiply'
//                 }}
//             >

//                 < div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
//                         <WritingText
//                             text="CONCLUSION OF ENHANCED MODEL"
//                             inView={true}
//                             transition={{
//                                 type: "spring",
//                                 bounce: 0,
//                                 duration: 2,
//                                 delay: 0.2
//                             }}
//                         />
//                     </h2>
//                     <p className="text-lg md:text-xl mb-8 leading-relaxed">
//                         The redefined BT Dual Model aims to bridge the gap between traditional statistical fairness and modern football’s tactical complexity. By embedding context — spatial, temporal, and behavioral — the model transforms from a static evaluation tool into a dynamic performance intelligence system. This evolution not only enhances analytical accuracy but also provides practical value in scouting, tactical planning, and player development pipelines within professional football environments.
//                     </p>
//                 </div >
//             </section >

//             {/* Back Navigation */}
//             <section className="py-12 bg-gray-50">
//                 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
//                     {/* References Section */}
//                     <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
//                         <h3 className="text-xl font-bold text-gray-900 mb-4">REFERENCES</h3>
//                         <div className="space-y-3">
//                             <div className="flex items-start">
//                                 <span className="text-gray-500 mr-3 mt-1">•</span>
//                                 <a
//                                     href="https://en.wikipedia.org/wiki/Bradley%E2%80%93Terry_model"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-gray-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
//                                 >
//                                     Bradley Terry Model
//                                 </a>
//                             </div>
//                             <div className="flex items-start">
//                                 <span className="text-gray-500 mr-3 mt-1">•</span>
//                                 <a
//                                     href="https://www.statsperform.com/resource/a-new-metric-for-evaluating-1v1-ability/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-gray-600  hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
//                                 >
//                                     A New Metric for Evaluating 1v1 Ability
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navigation */}
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
//                              <Link
//                             <span className="text-gray-400">/</span>
//                             <span className="text-gray-900 font-medium">BT Dual Model</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div >
//     );
// }


// export default Research;



