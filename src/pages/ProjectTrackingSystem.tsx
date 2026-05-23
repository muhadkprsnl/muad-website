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
import { useState, useEffect, useRef } from "react";

import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

function ProjectTrackingSystem() {
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

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
                    <p className="text-gray-600">Loading project details...</p>
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
                                            <Link to="/" className="text-base">Home</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link to="/research" className="text-base">Research</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-base font-medium">
                                            Project Tracking System
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            SIMPLIFIED PROJECT<br />& ISSUE TRACKING SYSTEM
                        </h1>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built a scalable, full-stack issue tracking system combining Go lang, and React to simplify project management through automation, analytics, and secure collaboration.
                        </p>
                    </div>

                    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">

                        <div className="flex justify-between items-center mb-8">
                            <strong className="font-bold text-gray-900 uppercase">DESCRIPTION</strong>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                                Completed
                            </Badge>
                        </div>

                        <p>
                            A lightweight, custom-built project management and bug-tracking platform inspired by Jira, designed to simplify issue management, workflow automation, and team collaboration. Developed with a modern full-stack architecture, the system focuses on essential Agile functionalities like issue tracking, customizable workflows, analytics, and secure role-based access — all optimized for performance and usability.
                        </p>

                        {/* Core Functions Section */}
                        <div className="mt-12">
                            <div className="flex justify-between items-center mb-8">
                                <strong className="font-bold text-gray-900 uppercase">CORE FUNCTIONS</strong>
                            </div>

                            <div className="space-y-8">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <strong className="font-bold text-gray-900 uppercase">ISSUE & BUG TRACKING</strong>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Create, assign, and monitor tasks, bugs, and feature requests in real time</li>
                                        <li>Track progress across customizable stages for clear visibility</li>
                                        <li>Support comments, attachments, and audit trails for each issue</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <strong className="font-bold text-gray-900 uppercase">WORKFLOW CUSTOMIZATION</strong>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Define and modify workflows according to team or project requirements</li>
                                        <li>Automate state transitions and task updates with minimal configuration</li>
                                        <li>Visualize progress through intuitive task boards and status tracking</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <strong className="font-bold text-gray-900 uppercase">REPORTING & ANALYTICS</strong>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Generate project reports summarizing open, closed, and in-progress issues</li>
                                        <li>Provide progress charts and completion statistics for sprint tracking</li>
                                        <li>Enable data-driven decisions through simple analytics dashboards</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-orange-500 pl-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <strong className="font-bold text-gray-900 uppercase">INTEGRATION & AUTOMATION</strong>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Integrate seamlessly with external tools such as Git or CI/CD pipelines</li>
                                        <li>Automate repetitive updates, notifications, and assignments</li>
                                        <li>Offer REST APIs for external system communication and data exchange</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-red-500 pl-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <strong className="font-bold text-gray-900 uppercase">ROLE-BASED ACCESS & COLLABORATION</strong>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Implement secure access using JWT Authentication for different user roles</li>
                                        <li>Support admin, developer, and tester roles with defined permissions</li>
                                        <li>Facilitate team communication through mentions and shared task discussions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Section */}
                        <div className="mt-12">
                            <div className="flex justify-between items-center mb-6">
                                <strong className="font-bold text-gray-900 uppercase">TECH STACK</strong>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <strong className="font-bold text-gray-900 uppercase text-sm">FRONTEND</strong>
                                        <p className="text-gray-700 mt-1">React.js</p>
                                    </div>
                                    <div>
                                        <strong className="font-bold text-gray-900 uppercase text-sm">BACKEND</strong>
                                        <p className="text-gray-700 mt-1"> Golang Mux (for microservice logic and API handling)</p>
                                    </div>
                                    <div>
                                        <strong className="font-bold text-gray-900 uppercase text-sm">DATABASE</strong>
                                        <p className="text-gray-700 mt-1">MongoDB</p>
                                    </div>
                                    <div>
                                        <strong className="font-bold text-gray-900 uppercase text-sm">API ARCHITECTURE</strong>
                                        <p className="text-gray-700 mt-1">REST API</p>
                                    </div>
                                    <div>
                                        <strong className="font-bold text-gray-900 uppercase text-sm">AUTHENTICATION</strong>
                                        <p className="text-gray-700 mt-1">JWT (JSON Web Token)</p>
                                    </div>
                                    <div>
                                        <strong className="font-bold text-gray-900 uppercase text-sm">OTHER TOOLS</strong>
                                        <p className="text-gray-700 mt-1">Git, Postman, Docker (optional for deployment)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-20">
                        <Link to="/research">
                            <button className="inline-flex items-center px-4 py-2 bg-transparent text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-300 rounded-md">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Go Back
                            </button>
                        </Link>

                        <div className="flex items-center space-x-2 text-sm">
                            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                            <span className="text-gray-400">/</span>
                            <Link
                                to="/Research"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Research
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-900 font-medium">Project Tracking System</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ProjectTrackingSystem;
