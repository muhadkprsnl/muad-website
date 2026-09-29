import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  category?: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Record<string, Experience> = {
  "qa-engineer": {
    id: "qa-engineer",
    title: "QA Engineer & Data Science Explorer",
    company: "Current Focus",
    period: "2022 - Present",
    type: "Remote",
    category: "Software Testing & Data Analysis",
    achievements: [
      "Designed and executed end-to-end manual and automated test cases for Dartle’s web and mobile platforms, ensuring stability and high-quality user experience.",
      "Implemented test automation frameworks using Cypress, reducing regression testing time and improving release efficiency.",
      "Developed and maintained API test scripts in Postman, verifying integrations between academy, player, and parent modules.",
      "Collaborated with the development team to identify, document, and resolve critical bugs, leading to a 90% reduction in reported defects over one year.",
      "Contributed to feature validation and performance testing, ensuring scalability for multiple academies and user groups.",
      "Participated in requirement analysis and sprint planning to align QA priorities with product development goals.",
      "Helped set up QA automation pipelines for CI/CD integration, enhancing deployment accuracy and consistency.",
      "Provided analytical insights for improving player data accuracy and academy performance reports, connecting QA work with data-driven decision-making.",
      "Supported the Community App module testing, ensuring seamless communication between parents, coaches, and players."
    ],
    technologies: [
      "Cypress",
      "Postman",
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Git",
      "GitHub Actions",
      "Cucumber (BDD)",
      "REST API",
      "MongoDB",
      "Jupyter Notebook",
    ],
  },
  "sports-tech": {
    id: "sports-tech",
    title: "Sports Technology Projects",
    company: "Dartle - Academy Management Platform",
    period: "2023 - Present",
    type: "Project",
    category: "Sports Tech & Full Stack Development",
    achievements: [
      "Architected and developed Dartle, a full-stack academy management platform using React and MongoDB, serving coaches and players with data-driven insights for talent development and performance tracking.",
      "Implemented responsive design with Tailwind CSS and Bootstrap, ensuring seamless user experience across desktop and mobile devices for coaches accessing player data in various environments.",
      "Built RESTful APIs using Go lang for efficient data processing and real-time updates, enabling coaches to track player metrics and academy operations with minimal latency.",
      "Integrated data visualization tools to present complex player statistics and development trends in an accessible format, helping coaches make informed decisions about training and scouting.",
      "Designed database schemas in MongoDB to efficiently store and retrieve player profiles, training sessions, and performance metrics, supporting scalable growth as academies expand.",
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
      "Node.js",
    ],
  },
  "ml-research": {
    id: "ml-research",
    title: "ML Research",
    company: "Player Scouting Systems",
    period: "2023 - Present",
    type: "Research",
    category: "Machine Learning & Sports Analytics",
    achievements: [
      "Conducted research on machine learning applications for player scouting, developing predictive models using Scikit-learn to identify promising talent based on performance metrics and physical attributes.",
      "Applied deep learning techniques with TensorFlow and PyTorch to analyze player movement patterns and biomechanical data, contributing to injury prevention strategies and performance optimization.",
      "Created data pipelines using Python (Pandas, NumPy) to process and clean large datasets of player statistics from various sources, ensuring high-quality input for ML models.",
      "Developed visualization dashboards using Matplotlib and Seaborn to communicate research findings to coaches and academy staff, translating complex ML insights into actionable scouting strategies.",
      "Explored advanced analytics techniques inspired by Formula 1 telemetry systems, adapting real-time data monitoring concepts to football and other sports for enhanced player development tracking.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "SQL",
      "Tableau",
      "Power BI",
    ],
  },
};

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const experience = id ? experiences[id] : null;

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
          {/* <ArrowLeft className="w-4 h-4" /> */}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{experience.title}</h1>
          <p className="text-xl text-muted-foreground mb-3">{experience.company}</p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>{experience.period}</span>
            <span>•</span>
            <span>{experience.type}</span>
            {experience.category && (
              <>
                <span>•</span>
                <span>{experience.category}</span>
              </>
            )}
          </div>
        </div>

        {/* Key Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
          <ul className="space-y-4">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <span className="text-muted-foreground leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm"
              >
                {tech}
              </span>
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