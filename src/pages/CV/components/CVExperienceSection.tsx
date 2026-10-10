interface Experience {
    id: string;
    company: string;
    category: string;
    period: string;
    type: string;
    positions: Position[];
}

interface Position {
    title: string;
    period: string;
    achievements: string[];
    technologies: string[];
}

interface CVExperienceSectionProps {
    experiences: Experience[];
}

export const CVExperienceSection = ({ experiences }: CVExperienceSectionProps) => {
    return (
        <section id="experience">
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
        </section>
    );
};
