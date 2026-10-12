import { Link } from "react-router-dom";
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

function RedefinedBradleyTerry() {
    const [isLoading, setIsLoading] = useState(true);
    const projectTitle = "REDEFINED BRADLEY TERRY DUAL MODEL";

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

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
            <section className="pt-0 pb-20 md:pb-28 bg-white">
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 pt-0">
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src={aerialdual}
                                alt="Aerial Dual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src={grounddual}
                                alt="Ground Dual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src={throwin}
                                alt="Throw In"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                        <div className="flex items-center justify-between">
                            <Link to="/cv#research">
                                <Button variant="ghost" className="hover:bg-accent">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Go Back
                                </Button>
                            </Link>

                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link to="/cv#research" className="text-base">Research</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-base font-medium">{projectTitle}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            REDEFINED BRADLEY–<br />TERRY DUAL MODEL
                        </h1>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            The Bradley–Terry (BT) model has long served as a foundational statistical framework for evaluating paired comparisons, particularly in contexts such as 1v1 duels in football. Its ability to estimate player ability based on win–loss outcomes and opponent strength has made it a valuable tool for measuring individual performance fairness. However, as the modern game continues to evolve, the BT model's traditional formulation struggles to capture the contextual richness of football's tactical and situational variability. Factors such as spatial zones, match tempo, game state, and role-specific responsibilities play a decisive role in determining duel outcomes, yet remain unaccounted for in the classical model structure. This creates a need for an evolved analytical framework that integrates both data-driven precision and tactical understanding.
                        </p>
                        <p>
                            This study proposes an enhanced BT Duel Model tailored for the complexity of modern football analytics. The redefined approach introduces contextual weighting for spatial importance, dynamic ability estimation, and event-linked outcome evaluation, moving beyond binary duel results. By embedding temporal, positional, and stylistic dimensions, the model better reflects the realities of player performance within varied tactical environments. The enhanced BT framework not only refines individual evaluation accuracy but also strengthens its application in player scouting, tactical optimization, and developmental analytics, ultimately bridging the gap between statistical modeling and real-world football intelligence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            LIMITATIONS OF THE<br />CURRENT BT MODEL
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            While the classical BT model provides a fair estimate of duel ability by accounting for opponent strength,
                            several shortcomings remain when applied directly to football contexts.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">Binary Outcome Dependency:</strong> The model only considers win/loss outcomes, ignoring follow-up actions
                            such as possession retention or chance creation.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">Lack of Spatial Context:</strong> Duels in different pitch zones (defensive third vs. attacking third)
                            are weighted equally, despite their tactical significance varying greatly.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">No Temporal or Match-State Adjustment:</strong> It fails to differentiate duels occurring during
                            high-pressure phases (e.g., defending a lead) from low-stakes periods.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">Ignores Team Tactical Structure:</strong> Individual duel outcomes are modeled in isolation without
                            accounting for collective systems such as pressing shape, overloads, or defensive support.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">Static Ability Estimation:</strong> Player abilities are treated as constant across time,
                            disregarding form, fatigue, and adaptation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-28 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            ENHANCING THE <br /> BT DUEL MODEL
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            To address these gaps, the following modifications are proposed for a Modern BT Duel Evaluation Framework:
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">SPATIAL WEIGHTING OF DUELS:</strong> Incorporate x,y pitch coordinates to adjust duel importance based on tactical zones (defensive, midfield, attacking third).
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">MATCH-STATE & TEMPORAL CONTEXT:</strong> Factor in scoreline, time remaining, and game intensity to reflect psychological and situational difficulty.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">EVENT-LINKED OUTCOME INTEGRATION:</strong> Extend beyond win/loss by including Expected Duel Impact (xD) — measuring whether the duel leads to possession retention, progression, or threat creation.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">STYLISTIC MATCHUP ANALYSIS:</strong> Classify duel types (e.g., aerial, physical, tactical, or technical) to model performance consistency across different opponent profiles.
                        </p>

                        <p>
                            <strong className="font-bold text-gray-900">DYNAMIC ABILITY TRACKING:</strong> Introduce a temporal dimension that updates player duel ratings based on form trends, fatigue, and season progression.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            ATHLETE PERFORMANCE<br />ANALYTICS
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={DataCollection}
                            alt="Athlete Performance Analytics"
                            className="w-full max-w-4xl mx-auto shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:brightness-105"
                        />
                    </div>
                </div>
            </section>

            <section
                className="py-20 md:py-28 text-white bg-cover bg-center relative"
                style={{
                    backgroundColor: 'rgba(175, 24, 54, 1)',
                    backgroundBlendMode: 'multiply'
                }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        <WritingText
                            text="CONCLUSION OF ENHANCED MODEL"
                            inView={true}
                            transition={{
                                type: "spring",
                                bounce: 0,
                                duration: 1,
                                delay: 0.2
                            }}
                        />
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                        The redefined BT Duel Model aims to bridge the gap between traditional statistical fairness and the tactical complexity of modern football. By incorporating spatial, temporal, and behavioral context, the model moves beyond static evaluation to provide a more dynamic and comprehensive understanding of player performance. This approach improves analytical accuracy while offering practical benefits for scouting, tactical planning, and player development within professional football environments.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link to="/cv#research">
                        <Button className="bg-gray-900 hover:bg-gray-800">
                            BACK TO CV
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default RedefinedBradleyTerry;
