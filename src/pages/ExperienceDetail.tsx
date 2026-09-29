import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarsSpinner } from "@/components/ui/barspinner";
import { useState, useEffect } from "react";

interface Position {
  title: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

interface Experience {
  id: string;
  company: string;
  category?: string;
  positions: Position[];
}

const experiences: Record<string, Experience> = {
  "dartle-experience": {
    id: "dartle-experience",
    company: "Dartle - Academy Management Platform",
    category: "Sports Tech & Full Stack Development",
    positions: [
      {
        title: "Data Scientist & ML Research",
        period: "2023 - Present",
        type: "Full-time",
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
        type: "Full-time",
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
        type: "Full-time",
        achievements: [
          "Designed and executed end-to-end manual and automated test cases for Dartle's web and mobile platforms, ensuring stability and high-quality user experience.",
          "Implemented test automation frameworks using Cypress, reducing regression testing time and improving release efficiency.",
          "Developed and maintained API test scripts in Postman, verifying integrations between academy, player, and parent modules.",
          "Collaborated with the development team to identify, document, and resolve critical bugs, leading to a 90% reduction in reported defects over one year.",
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
      },
    ],
  },
  "ml-research": {
    id: "ml-research",
    company: "Final Year Project",
    category: "Research",
    positions: [
      {
        title: "ML Researcher",
        period: "2022 - 2023",
        type: "Full-time",
        achievements: ["Collected and preprocessed medical datasets, ensuring clean and balanced data for accurate cancer prediction modeling.",
          "Implemented machine learning algorithms such as Logistic Regression, Random Forest, and SVM to classify cancerous and non-cancerous cases.",
          "Performed feature selection and statistical analysis to identify key biomarkers influencing prediction accuracy.",
          "Evaluated model performance using metrics like accuracy, precision, recall, and ROC-AUC to ensure clinical reliability.",
          "Developed a user-friendly web interface using Flask to allow real-time cancer prediction based on input patient data."],
        technologies: ["Logistic Regression", "Random Forest", "SVM", "Flask"],
      },
    ],
  },
};

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const experience = id ? experiences[id] : null;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  // Move the loading check to the very end, after all hooks
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BarsSpinner size="lg" className="mb-4" />
          <p className="text-muted-foreground">Loading experience details...</p>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
          <Link to="/cv" className="text-primary hover:underline">
            ← Back to CV
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          to="/cv"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <Button variant="ghost" className="-ml-4 hover:bg-accent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to CV
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{experience.company}</h1>
          {experience.category && (
            <p className="text-xl text-muted-foreground mb-6">{experience.category}</p>
          )}
        </div>

        {/* Positions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Positions</h2>
          <div className="space-y-12">
            {experience.positions.map((position, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 pb-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span>{position.period}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>

                {/* Key Achievements for this position */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
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

                {/* Technologies Used for this position */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
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
        </section>

        {/* Bottom Back Link */}
        <Link
          to="/cv"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to CV
        </Link>
      </div>
    </div>
  );
};

export default ExperienceDetail;