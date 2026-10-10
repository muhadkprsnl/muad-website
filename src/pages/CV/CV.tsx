import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BarsSpinner } from "@/components/ui/barspinner";
import { CVHeader } from "./components/CVHeader";
import { CVAboutSection } from "./components/CVAboutSection";
import { CVTechStack } from "./components/CVTechStack";
import { CVExperienceSection } from "./components/CVExperienceSection";
import { CVResearchSection } from "./components/CVResearchSection";

const CV = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.hash && !isLoading) {
            const scrollToElement = () => {
                const element = document.querySelector(location.hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setHasScrolled(true);
                    }, 100);
                } else if (!hasScrolled) {
                    setTimeout(scrollToElement, 100);
                }
            };
            scrollToElement();
        }
    }, [location, isLoading, hasScrolled]);

    const techStack = {
        qa: [
            "Cypress",
            "REST API Testing (Postman)",
            "Cucumber (BDD)",
            "Git",
            "CI/CD (GitHub Actions)",
            "SQL (Database Validation)",
        ],
        fullstack: [
            "React JS",
            "Responsive Design (Bootstrap / Tailwind)",
            "Go lang",
            "REST API Development",
            "MongoDB",
            "Git & GitHub",
        ],
        dataScience: [
            "Python (NumPy, Pandas)",
            "SQL (Data Querying)",
            "Matplotlib / Seaborn",
            "Power BI",
            "Scikit-learn",
            // "TensorFlow / PyTorch",
            "Git & GitHub",
            "Jupyter Notebook",
        ],
    };

    const experiences = [
        {
            id: "dartle-experience",
            company: "Dartle - Academy Management Platform",
            category: "Sports Tech & Full Stack Development",
            period: "2022 - Present",
            type: "Full-time",
            positions: [
                {
                    title: "Data Scientist & ML Research",
                    period: "2023 - Present",
                    achievements: [
                        "Collected, cleaned, and analyzed player and academy data to generate actionable insights for performance improvement and business decision-making.",
                        "Developed predictive models to evaluate player potential, injury risk, and training effectiveness based on historical and real-time data.",
                        "Collaborated with coaches and management to design data-driven reports and dashboards that visualize player progress and operational trends.",
                        "Integrated machine learning algorithms into the Dartle platform to support scouting, match analysis, and personalized training recommendations.",
                        "Conducted research on new data science methods and AI techniques to enhance Dartle's analytical capabilities and product intelligence.",
                    ],
                    technologies: [
                        "Python",
                        "Scikit-learn",
                        "TensorFlow",
                        "Pandas",
                        "NumPy",
                        "Matplotlib",
                        "Seaborn",
                        "Jupyter Notebook",
                        "SQL",
                        "Power BI",
                    ],
                },
                {
                    title: "Full Stack Developer",
                    period: "2023 - 2024",
                    achievements: [
                        "Integrated the Dartle platform with third-party systems to enable seamless data synchronization, payments, communication, and analytics across multiple services.",
                        "Created a simplified Jira-like issue tracking system to manage internal tasks, workflows, and bug reporting for better project coordination.",
                        "Developed a powerful admin panel that centralizes management functions, including academy operations, CRM, revenue tracking, roles, and sales management.",
                        "Built a comprehensive management dashboard providing real-time visibility into player data, financial performance, and academy activity.",
                        "Implemented role-based access and hierarchical management, ensuring structured control for administrators, coaches, and staff.",
                        "Added CRM and revenue automation modules to simplify lead management, billing, and financial reporting.",
                        "Introduced a data-driven player development system that helps academies monitor progress, analyze performance, and improve training outcomes.",
                    ],
                    technologies: [
                        "React",
                        "Go lang",
                        "MongoDB",
                        "Tailwind CSS",
                        "Bootstrap",
                        "REST API",
                        "Git",
                        "GitHub",
                        "Data Visualization",
                        "Docker"
                    ],
                },
                {
                    title: "QA Engineer",
                    period: "2022 - 2023",
                    achievements: [
                        "Designed and executed end-to-end manual and automated test cases for Dartle's web and mobile platforms, ensuring stability and high-quality user experience.",
                        "Implemented test automation frameworks using Cypress, reducing regression testing time and improving release efficiency.",
                        "Developed and maintained API test scripts in Postman, verifying integrations between academy, player, and parent modules.",
                        "Collaborated with the development team to identify, document, and resolve critical bugs, leading to 90% reduction in reported defects over one year.",
                        "Contributed to feature validation and performance testing, ensuring scalability for multiple academies and user groups.",
                        "Participated in requirement analysis and sprint planning to align QA priorities with product development goals.",
                        "Helped set up QA automation pipelines for CI/CD integration, enhancing deployment accuracy and consistency.",
                        "Provided analytical insights for improving player data accuracy and academy performance reports, connecting QA work with data-driven decision-making.",
                        "Supported the Community App module testing, ensuring seamless communication between parents, coaches, and players.",
                    ],
                    technologies: [
                        "Selenium",
                        "Cypress",
                        "Postman",
                        "Jasmine",
                        "Git",
                        "GitHub Actions",
                        "Cucumber (BDD)",
                        "REST API",
                        "TestNG",
                        "Clarity"
                    ],
                }
            ]
        },
        {
            id: "ml-research",
            company: "Final Year Project",
            category: "Research",
            period: "2022 - 2023",
            type: "Research",
            positions: [
                {
                    title: "ML Researcher",
                    period: "2022 - 2023",
                    achievements: [
                        "Collected and preprocessed medical datasets, ensuring clean and balanced data for accurate cancer prediction modeling.",
                        "Implemented machine learning algorithms such as Logistic Regression, Random Forest, and SVM to classify cancerous and non-cancerous cases.",
                        "Performed feature selection and statistical analysis to identify key biomarkers influencing prediction accuracy.",
                        "Developed a user-friendly web interface using Flask to allow real-time cancer prediction based on input patient data.",
                    ],
                    technologies: ["Logistic Regression", "Random Forest", "SVM", "Flask", "Python", "Scikit-learn"]
                }
            ]
        }
    ];

    const researchProjects = [
        {
            id: "redefined-bradley-terry",
            title: "REDEFINED BRADLEY TERRY DUAL MODEL",
            description: "Integrating advanced statistical models with football data to redefine fairness in duel performance evaluation.",
            status: "ongoing" as const,
            category: "Community Impact",
        },
        {
            id: "performance-analytics",
            title: "AI-BASED FOOTBALL PLAYERS TRACKING SYSTEM",
            description: "Integrating YOLOv11 with advanced tracking algorithms to automate player detection, tactical analysis, and performance evaluation.",
            status: "completed" as const,
            category: "Data Science",
        },
        {
            id: "data-driven-scouting",
            title: "DATA-DRIVEN PLAYER SCOUTING",
            description: "Using statistics, match analysis, and machine learning to identify talent in a structured and fair way.",
            status: "yet to start" as const,
            category: "Talent Identification",
        },
        {
            id: "project-tracking",
            title: "SIMPLIFIED PROJECT & ISSUE TRACKING SYSTEM",
            description: "A lightweight, custom-built project management and bug-tracking platform inspired by Jira.",
            status: "completed" as const,
            category: "Software Development",
        },
        {
            id: "academy-development",
            title: "ACADEMY DEVELOPMENT MODELS",
            description: "Structured training systems that support holistic athlete growth using data-driven insights.",
            status: "yet to start" as const,
            category: "Youth Development",
        },
    ];

    const handleDownload = () => {
        window.print();
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <BarsSpinner size="lg" className="mb-4" />
                    <p className="text-muted-foreground">Loading CV...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <CVHeader onDownload={handleDownload} />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 pb-12">
                <CVAboutSection />
                <CVTechStack techStack={techStack} />
                <CVExperienceSection experiences={experiences} />
                <CVResearchSection projects={researchProjects} />
            </main>

            <footer className="border-t mt-12 sm:mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-sm text-muted-foreground">
                    <p>© 2026 Muhad K. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default CV;
