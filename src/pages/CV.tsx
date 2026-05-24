import { Mail, Github, Linkedin, Instagram, ArrowLeft, Download, ArrowRight, Check, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarsSpinner } from "@/components/ui/barspinner";
import { Spinner } from "@/components/ui/spinner";
import { useState, useEffect } from "react";
import profilePic from "@/assets/profile-pic(15).png";

const CV = () => {
    const [isLoading, setIsLoading] = useState(true);

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
            {/* Header */}
            {/* Header */}
            <header className="">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/">
                            <Button variant="ghost" className="-ml-4 hover:bg-accent">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <Button onClick={handleDownload} className="gap-2">
                            <Download className="w-4 h-4" />
                            Download CV
                        </Button>
                    </div>
                    <div className="float-right ml-6 mb-4">
                        <img
                            src={profilePic}
                            alt="Muhad K"
                            className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover "
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Muhad K</h1>
                    <p className="text-xl text-muted-foreground mb-4">
                        Software Automation Engineer | Data Scientist | Sports Enthusiast
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                        Computer Science • Passionate about Sports Technology
                    </p>

                    {/* Responsive Contact Links */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        {/* First Row - Email and GitHub */}
                        {/* Responsive Contact Links - Flex Wrap */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="mailto:muhadkprsnl@gmail.com"
                                className="flex items-center gap-2 text-sm hover:text-primary transition-colors flex-shrink-0"
                            >
                                <Mail className="w-4 h-4" />
                                Contact via Email
                            </a>
                            <a
                                href="https://github.com/muhadkprsnl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-primary transition-colors flex-shrink-0"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/muhadk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-primary transition-colors flex-shrink-0"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href="https://instagram.com/mu_aadk.12/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-primary transition-colors flex-shrink-0"
                            >
                                <Instagram className="w-4 h-4" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 pb-12">
                {/* About Section */}
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">About</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                        <p>
                            I'm Muhad K, a sports enthusiast, QA engineer, and data science explorer driven by the idea of
                            blending technology with the world of sport. My background in computer science laid the foundation,
                            but my true motivation has always been to use technology to understand, improve, and innovate within
                            athletic performance. Over time, I've combined my skills in QA automation, full-stack development, and
                            data analysis to build solutions that simplify workflows,
                            enhance decision-making, and uncover meaningful insights from data.
                        </p>
                        <p>
                            I've worked on projects like Dartle, an academy management platform designed to help sports institutions
                            track and develop young talent, and research focused on machine learning-based player scouting and AI-driven
                            football performance models using tools like Python, Go, and YOLO. My goal is simple — to create technology
                            that makes a real difference: empowering coaches, analysts, and athletes through data-driven insights and
                            building a smarter, more connected future for sport.
                        </p>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tech Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* QA Skills */}
                        <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
                            <h3 className="text-lg font-semibold mb-4">Quality Assurance</h3>
                            <ul className="space-y-2">
                                {techStack.qa.map((skill) => (
                                    <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Full Stack Skills */}
                        <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
                            <h3 className="text-lg font-semibold mb-4">Full Stack</h3>
                            <ul className="space-y-2">
                                {techStack.fullstack.map((skill) => (
                                    <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Data Science Skills */}
                        <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
                            <h3 className="text-lg font-semibold mb-4">Data Science</h3>
                            <ul className="space-y-2">
                                {techStack.dataScience.map((skill) => (
                                    <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                < section >
                    <h2 className="text-3xl font-bold mb-6">Experience</h2>
                    <div className="space-y-16">
                        {experiences.map((experience, index) => (
                            <div key={index} className="space-y-8">
                                {/* Company Header */}
                                <div className="pb-2 ">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
                                            {experience.category && (
                                                <p className="text-lg text-muted-foreground">{experience.category}</p>
                                            )}
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-muted-foreground">{experience.period}</p>
                                            <p className="text-sm text-muted-foreground">{experience.type}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Positions */}
                                <div className="space-y-10">
                                    {experience.positions.map((position, posIndex) => (
                                        <div key={posIndex} className="border-l-4 border-primary pl-6 pb-6">
                                            <div className="mb-4">
                                                <h4 className="text-xl font-semibold mb-2">{position.title}</h4>
                                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                    <span>{position.period}</span>
                                                </div>
                                            </div>

                                            {/* Key Achievements */}
                                            <div className="mb-6">
                                                <h5 className="text-lg font-medium mb-4">Key Achievements</h5>
                                                <ul className="space-y-3">
                                                    {position.achievements.map((achievement, achievementIndex) => (
                                                        <li key={achievementIndex} className="flex gap-3">
                                                            <span className="text-muted-foreground mt-1">•</span>
                                                            <span className="text-muted-foreground leading-relaxed">
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies Used */}
                                            <div>
                                                <h5 className="text-lg font-medium mb-4">Technologies Used</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {position.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section >

                {/* Research Projects Section */}
                <section>
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
                        {researchProjects.map((project) => (
                            <Card key={project.id} className="p-4 sm:p-6 border border-border hover:shadow-lg transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                        <Link
                                            to={`/research/${project.id}`}
                                            state={{ from: "/cv", fromLabel: "CV" }}
                                        >
                                            <Button variant="outline" className="gap-2">
                                                View Details
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </Link>
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
            </main>

            <footer className="border-t mt-12 sm:mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-sm text-muted-foreground">
                    <p>© 2025 Muhad K. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default CV;
