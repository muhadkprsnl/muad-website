
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, Play, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarsSpinner } from "@/components/ui/barspinner";
import { useState, useEffect } from "react";

const researchProjects = [
    {
        id: "paying-it-back",
        title: "REDEFINED BRADELY TERRY DUAL MODEL",
        description: "Integrating advanced statistical models with football data to redefine fairness in duel performance evaluation.",
        status: "ongoing" as const,
        category: "Community Impact",
    },
    {
        id: "performance-analytics",
        title: "AI-BASED FOOTBALL PERFORMANCE INTELLIGENCE SYSTEM",
        description: "Integrating YOLOv11 with advanced tracking algorithms to automate player detection, tactical analysis, and performance evaluation.",
        status: "ongoing" as const,
        category: "Data Science",
    },
    {
        id: "data-driven-scouting",
        title: "DATA-DRIVEN PLAYER SCOUTING",
        description: "Using statistics, match analysis, and machine learning to identify talent in a structured and fair way.",
        status: "yet to start" as const,
        category: "Talent Identification",
        route: "/research/data-driven-scouting"
    },
    {
        id: "project-tracking",
        title: "SIMPLIFIED PROJECT & ISSUE TRACKING SYSTEM",
        description: "A lightweight, custom-built project management and bug-tracking platform inspired by Jira.",
        status: "completed" as const,
        category: "Software Development",
        route: "/research/project-tracking"
    },
    {
        id: "academy-development",
        title: "ACADEMY DEVELOPMENT MODELS",
        description: "Structured training systems that support holistic athlete growth using data-driven insights.",
        status: "yet to start" as const,
        category: "Youth Development",
    },
];

const statusConfig = {
    completed: {
        label: "Completed",
        className: "bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:text-white border-green-600",
        icon: <Check className="w-3 h-3" />
    },
    ongoing: {
        label: "Ongoing",
        className: "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white border-blue-600",
        icon: <Spinner className="w-3 h-3" />
    },
    "yet to start": {
        label: "Yet to Start",
        className: "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-600 dark:text-white border-gray-600",
        icon: <Clock className="w-3 h-3" />
    },
};

function Research() {
    const [isLoading, setIsLoading] = useState(true);

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
                    <p className="text-gray-600">Loading research projects...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link to="/">
                        <Button variant="ghost" className="mb-6 sm:mb-8 -ml-2 sm:-ml-4 hover:bg-accent w-full sm:w-auto justify-center sm:justify-start mt-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>

                    {/* Hero Content */}
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                            RESEARCH & PROJECTS
                        </h1>
                        <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-red-600 mb-3 sm:mb-4 md:mb-6"></div>
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl">
                            Exploring the intersection of sports, technology, and data science to transform athlete development and performance.
                        </p>
                    </div>

                    {/* Research List */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4 sm:space-y-6">
                            {researchProjects.map((project) => (
                                <Card key={project.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
                                    {/* Mobile Layout: Stacked */}
                                    <div className="block sm:hidden">
                                        <div className="space-y-3">
                                            {/* Title and Description */}
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Category and Badge */}
                                            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                                <p className="text-xs text-muted-foreground">{project.category}</p>
                                                <Badge
                                                    className={`text-xs flex items-center gap-1.5 px-2.5 py-1 border ${statusConfig[project.status].className}`}
                                                >
                                                    {statusConfig[project.status].icon}
                                                    {statusConfig[project.status].label}
                                                </Badge>
                                            </div>

                                            {/* View Button for Mobile */}
                                            <div className="pt-2">
                                                <Link to={`/research/${project.id}`}>
                                                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                                                        View Details
                                                        <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Layout: Side by Side */}
                                    <div className="hidden sm:flex justify-between items-start">
                                        {/* Left side - Title and Description */}
                                        <div className="flex-1 pr-4 sm:pr-6 text-left">

                                            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                            <Link to={`/research/${project.id}`}>
                                                <Button className="bg-red-600 hover:bg-red-700 text-white">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </Link>
                                        </div>

                                        {/* Right side - Category and Badge */}
                                        <div className="text-right flex-shrink-0 min-w-[120px] flex flex-col items-end">
                                            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                                                {project.category}
                                            </p>
                                            <Badge
                                                className={`text-xs sm:text-sm flex items-center gap-1.5 px-3 py-1.5 border mb-4 ${statusConfig[project.status].className}`}
                                            >
                                                {statusConfig[project.status].icon}
                                                {statusConfig[project.status].label}
                                            </Badge>
                                        </div>
                                    </div>

                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Research;











