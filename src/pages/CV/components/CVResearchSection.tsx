import { ArrowRight, Check, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Github } from "lucide-react";

interface ResearchProject {
    id: string;
    title: string;
    description: string;
    status: "completed" | "ongoing" | "yet to start";
    category: string;
}

interface CVResearchSectionProps {
    projects: ResearchProject[];
}

export const CVResearchSection = ({ projects }: CVResearchSectionProps) => {
    const statusConfig = {
        completed: {
            label: "Completed",
            className: "bg-green-500 text-white hover:bg-green-600 border-green-600",
            icon: <Check className="w-3 h-3" />,
        },
        ongoing: {
            label: "Ongoing",
            className: "bg-blue-500 text-white hover:bg-blue-600 border-blue-600",
            icon: <Spinner className="w-3 h-3" />,
        },
        "yet to start": {
            label: "Yet to Start",
            className: "bg-gray-500 text-white hover:bg-gray-600 border-gray-600",
            icon: <Clock className="w-3 h-3" />,
        },
    };

    return (
        <section id="research">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">Research Projects</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
                    <p className="text-sm text-muted-foreground max-w-3xl">
                        A curated collection of research initiatives that combine sports, analytics, and machine learning to deliver smarter performance insights.
                    </p>
                </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
                {projects.map((project) => (
                    <Card key={project.id} className="p-4 sm:p-6 border border-border hover:shadow-lg transition-shadow">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <Link
                                        to={`/cv/research/${project.id}`}
                                        state={{ from: "/cv#research", fromLabel: "CV" }}
                                    >
                                        <Button variant="outline" className="gap-2">
                                            View Details
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                    {project.id === "performance-analytics" && (
                                        <a
                                            href="https://github.com/muhadkprsnl/Player-tracking.git"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" className="gap-2">
                                                <Github className="w-4 h-4" />
                                                GitHub
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="flex-shrink-0 min-w-[140px] flex flex-col items-start sm:items-end gap-3">
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    {project.category}
                                </p>
                                <Badge className={`text-xs sm:text-sm flex items-center gap-1.5 px-3 py-1.5 border ${statusConfig[project.status].className}`}>
                                    {statusConfig[project.status].icon}
                                    {statusConfig[project.status].label}
                                </Badge>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};
