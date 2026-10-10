interface TechStackProps {
    techStack: {
        qa: string[];
        fullstack: string[];
        dataScience: string[];
    };
}

export const CVTechStack = ({ techStack }: TechStackProps) => {
    return (
        <section id="tech-stack">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* QA Skills */}
                <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
                    <h3 className="text-lg font-semibold mb-4">Quality Assurance</h3>
                    <ul className="space-y-2">
                        {techStack.qa.map((skill) => (
                            <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="text-primary">•</span>
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
                            <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="text-primary">•</span>
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
                            <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="text-primary">•</span>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
