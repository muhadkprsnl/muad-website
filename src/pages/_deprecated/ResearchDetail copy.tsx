
// export default Research;
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
import { BarsSpinner } from "@/components/ui/barspinner"; // Import the custom spinner
import { useState, useEffect } from "react";
import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import DataCollection from "@/assets/research1/Data collection.jpg";

const researchProjects = [
    {
        id: "paying-it-back",
        title: "Redefined Bradley–TerryDual Model",
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

    // Handle image loading
    const handleImageLoad = () => {
        setImagesLoaded(prev => prev + 1);
    };

    // Check if all content is loaded
    useEffect(() => {
        // If project not found, stop loading
        if (!currentProject && id) {
            setIsLoading(false);
            return;
        }

        // If all 3 hero images are loaded, stop loading
        if (imagesLoaded >= 3) {
            setIsLoading(false);
        }

        // Fallback: stop loading after 3 seconds max to prevent infinite loading
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [imagesLoaded, currentProject, id]);

    // MODIFY THIS PART - Loading State
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

    // MODIFY THIS PART - Add onLoad to all hero images
    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Section */}
            <section className="pt-0 pb-20 md:pb-28 bg-white">
                <div className="relative">
                    {/* Hero Images Grid - MODIFY: Add onLoad to each image */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 pt-0">
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Community Work 1"
                                className="w-full h-full object-cover"
                                onLoad={handleImageLoad} // ADD THIS
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Community Work 2"
                                className="w-full h-full object-cover"
                                onLoad={handleImageLoad} // ADD THIS
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Community Work 3"
                                className="w-full h-full object-cover"
                                onLoad={handleImageLoad} // ADD THIS
                            />
                        </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-3 pt-0">
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/5384610/pexels-photo-5384610.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Duel Analytics 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/8853500/pexels-photo-8853500.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Duel Analytics 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-64 md:h-80 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/4061676/pexels-photo-4061676.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Duel Analytics 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Navigation with padding */}
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                        <div className="flex items-center justify-between">
                            <Link to="/research">
                                <Button variant="ghost" className="hover:bg-accent">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Go Back
                                </Button>
                            </Link>

                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link to="/research" className="text-base">Research</Link>
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            REDEFINED  BRADELY–<br />TERRY DUAL MODEL

                            {/* Redefined Bradley–TerryDual Model */}
                        </h1>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>

                    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                        <p>
                            The Bradley–Terry (BT) model has long served as a foundational statistical framework for evaluating paired comparisons, particularly in contexts such as 1v1 duels in football. Its ability to estimate player ability based on win–loss outcomes and opponent strength has made it a valuable tool for measuring individual performance fairness. However, as the modern game continues to evolve, the BT model’s traditional formulation struggles to capture the contextual richness of football’s tactical and situational variability. Factors such as spatial zones, match tempo, game state, and role-specific responsibilities play a decisive role in determining duel outcomes, yet remain unaccounted for in the classical model structure. This creates a need for an evolved analytical framework that integrates both data-driven precision and tactical understanding.
                        </p>
                        <p>
                            This study proposes an enhanced BT Duel Model tailored for the complexity of modern football analytics. The redefined approach introduces contextual weighting for spatial importance, dynamic ability estimation, and event-linked outcome evaluation, moving beyond binary duel results. By embedding temporal, positional, and stylistic dimensions, the model better reflects the realities of player performance within varied tactical environments. The enhanced BT framework not only refines individual evaluation accuracy but also strengthens its application in player scouting, tactical optimization, and developmental analytics, ultimately bridging the gap between statistical modeling and real-world football intelligence.
                        </p>
                    </div>
                </div>
            </section >

            {/* Rest of your sections */}
            {/* < section className="py-20 md:py-28 bg-gray-50" >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    LIMITATIONS OF THE<br />CURRENT BT MODEL

                                </h2>
                                <div className="w-24 h-1 bg-red-600 mb-6"></div>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    The Bradley–Terry (BT) Model provides an advanced analytical framework for evaluating
                                    duel performance in football by comparing players based on the outcomes of their individual contests.
                                    Unlike traditional duel success rates that treat every opponent as equal, the BT-Model incorporates the relative
                                    strength of opponents involved in each 1v1 action. This allows clubs and analysts to estimate a player’s true underlying duel
                                    ability, highlighting those who perform consistently well even against top-level competition. The model is
                                    particularly valuable for assessing both aerial and ground duels,
                                    where context plays a major role in determining success.
                                </p> */}

            {/* Concluding paragraph */}
            {/* <p>
                                    In the modern tactical landscape, where pressing intensity and positional matchups drive game
                                    outcomes, BT-Model metrics provide deeper insight into where and how a player’s 1v1 dominance impacts the team.
                                    By adjusting for situational difficulty and opponent quality, the BT-Model uncovers hidden strengths, identifies undervalued
                                    talent, and improves decision-making for recruitment, player development, and tactical planning. It ensures that a player’s value is
                                    recognized not just by the number of duels they win — but by who they beat and in what moments.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://i.ibb.co/KKv7mVJ/flowchart-placeholder.png"
                                alt="CDPI Flowchart"
                                className="w-full max-w-3xl mx-auto shadow-lg rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section > */}

            {/* Rest of your sections */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    LIMITATIONS OF THE<br />CURRENT BT MODEL
                                </h2>
                                <div className="w-24 h-1 bg-red-600 mb-6"></div>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
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
                                {/* 
                                <p>
                                    <strong className="font-bold text-gray-900">Uniform Opponent Assumption:</strong> Does not capture varying duel types or style mismatches
                                    (e.g., aerial vs. ground, physical vs. technical).
                                </p> */}

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
                        <div className="relative">
                            <img
                                src="https://i.ibb.co/KKv7mVJ/flowchart-placeholder.png"
                                alt="CDPI Flowchart"
                                className="w-full max-w-3xl mx-auto shadow-lg rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Red Wings for Reading Section */}
            {/* < section className="py-20 md:py-28 bg-white" >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <img
                                src="https://i.ibb.co/KXxKDgn/bar-chart-placeholder.png"
                                alt="CDPI Player Ranking"
                                className="w-full max-w-3xl mx-auto shadow-lg rounded-lg"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    ENHANCING THE <br /> BT DUEL MODEL

                                </h2>
                                <div className="w-20 h-1 bg-red-600 mb-6"></div>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    While the Bradley–Terry duel model has proven extremely useful for evaluating 1v1 performance,
                                    modern football introduces additional tactical and contextual layers that can further enhance its accuracy.
                                    Today’s game requires the inclusion of spatial importance, such as whether duels occur in dangerous attacking zones or
                                    in low-risk buildup areas. Weighting duels based on match state (leading vs. trailing), game phase (transition vs. settled play),
                                    and tactical roles allows the model to reflect the true value of a duel outcome. Integrating event tracking and body-orientation data
                                    also helps distinguish dominant actions created by technique, anticipation,
                                    and positioning—not just physical combat.
                                </p>
                                <p>
                                    Another key improvement is incorporating predictive elements that go beyond win/loss results.
                                    Expected duel impact (xD), follow-up actions (ball retention, progressive outcomes), and opponent manipulation
                                    through feints or pressing triggers can all be quantified and layered into the BT framework. Additionally, adjustments
                                    for stylistic matchups—such as aggressive vs. passive defenders, wide-area isolation vs. central congestion, or aerial specialists vs.
                                    technical dribblers—enable analysts to model success based on specific tactical environments. By evolving the BT Duel Model with these
                                    advanced data inputs, clubs can more accurately evaluate a player’s
                                    contribution to modern, high-speed football and make smarter decisions in scouting, development, and game preparation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section > */}



            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <img
                                src="https://i.ibb.co/KXxKDgn/bar-chart-placeholder.png"
                                alt="CDPI Player Ranking"
                                className="w-full max-w-3xl mx-auto shadow-lg rounded-lg"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    ENHANCING THE <br /> BT DUEL MODEL
                                </h2>
                                <div className="w-20 h-1 bg-red-600 mb-6"></div>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
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

                                {/* <p>
                                    <strong className="font-bold text-gray-900">ROLE & ZONE-BASED NORMALIZATION:</strong> Normalize duel results according to player position and tactical role to enable fair cross-role comparison (e.g., center-backs vs. wingers).
                                </p> */}

                                <p>
                                    <strong className="font-bold text-gray-900">STYLISTIC MATCHUP ANALYSIS:</strong> Classify duel types (e.g., aerial, physical, tactical, or technical) to model performance consistency across different opponent profiles.
                                </p>

                                <p>
                                    <strong className="font-bold text-gray-900">DYNAMIC ABILITY TRACKING:</strong> Introduce a temporal dimension that updates player duel ratings based on form trends, fatigue, and season progression.
                                </p>

                                {/* <p>
                                    <strong className="font-bold text-gray-900">INTEGRATION WITH TRACKING DATA:</strong> Combine Opta/StatsPerform event feeds with positional tracking data to evaluate body orientation, reaction timing, and off-ball influence.
                                </p>

                                <p>
                                    <strong className="font-bold text-gray-900">PREDICTIVE LAYERING:</strong> Build machine learning extensions over BT estimates to forecast duel outcomes and matchup probabilities under different tactical formations.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Quote Section */}
            {/* < section className="py-20 md:py-28 bg-red-600 text-white" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        "ACADEMY<br />DEVELOPMENT<br />MODELS."
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Academy development models explore how structured training, supported by data, can help young players progress systematically. By tracking academic balance, athletic milestones, and social growth, these models ensure that development is holistic and sustainable. Each athlete has a clear pathway to follow, with measurable goals and timely feedback.
                    </p>
                </div>
            </section > */}

            {/* Community Impact Section */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
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


            < section
                className="py-20 md:py-28 text-white bg-cover bg-center relative"
                style={{
                    backgroundColor: 'rgba(175, 24, 54, 1)',
                    backgroundBlendMode: 'multiply'
                }}
            >

                < div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
                    <p className="text-lg md:text-xl mb-8 leading-relaxed">
                        The redefined BT Duel Model aims to bridge the gap between traditional statistical fairness and modern football’s tactical complexity. By embedding context — spatial, temporal, and behavioral — the model transforms from a static evaluation tool into a dynamic performance intelligence system. This evolution not only enhances analytical accuracy but also provides practical value in scouting, tactical planning, and player development pipelines within professional football environments.
                    </p>
                </div >
            </section >


            {/* Community Impact Section */}
            < section className="py-20 md:py-28 bg-gray-50" >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            ATHLETE PERFORMANCE<br />ANALYTICS
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Performance analytics focuses on collecting and interpreting both physical and mental data points from athletes. Key areas such as stamina, adaptability, tactical awareness, and mental resilience can be tracked to build a complete performance profile. This creates deeper insights into areas where players excel or need additional support.
                        </p>
                        <p>
                            Such data empowers coaches to design targeted programs rather than one-size-fits-all sessions. Athletes benefit from training that directly addresses their needs, leading to steady improvement over time. By combining traditional coaching wisdom with scientific analysis, performance analytics creates a balanced framework for growth.
                        </p>
                        <p>
                            By actively engaging with his community, Justin demonstrates that success is measured not just by
                            personal achievements, but by the positive difference you make in the lives of others. His
                            philanthropic work continues to inspire both young and old throughout the state of Michigan.
                        </p>
                    </div>
                </div>
            </section >

            {/* Book CTA Section */}
            < section className="py-20 md:py-28 bg-white" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        FUTURE PATHWAYS IN SPORT-TECH
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Future-focused research looks at how artificial intelligence, data science, and sports science can merge to create advanced development systems. These pathways include tools for player identification, academy management, and global talent exchange. The aim is to design scalable solutions that adapt to different regions and sporting needs.

                        Such innovations can prepare athletes for the demands of modern sport while giving coaches tools that are both efficient and insightful. By creating frameworks that blend human expertise with technological precision, sport-tech can shape a new era of growth. This approach ensures that athletes at all levels benefit from the same opportunities for development.
                    </p>
                    <a
                        href="#book"
                        className="inline-block px-10 py-4 bg-red-600 text-white font-bold text-sm tracking-wide hover:bg-red-700 transition-colors duration-300"
                    >
                        GET THE BOOK
                    </a>
                </div>
            </section >

            {/* Back Navigation */}
            < section className="py-12 bg-gray-50" >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <a
                        href="/"
                        className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold text-sm tracking-wide hover:bg-gray-800 transition-colors duration-300"
                    >
                        BACK TO HOME
                    </a>
                </div>
            </section >
        </div >
    );
}


export default Research;

