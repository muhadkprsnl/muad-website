import { Mail, Github, Linkedin, Instagram, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profilePic from "@/assets/profile-pic(15).png";

interface CVHeaderProps {
    onDownload: () => void;
}

export const CVHeader = ({ onDownload }: CVHeaderProps) => {
    return (
        <header className="">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-6">
                    <Link to="/">
                        <Button variant="ghost" className="-ml-4 hover:bg-accent">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <Button onClick={onDownload} className="gap-2">
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
                    Software Engineer | Data Scientist | Sports Enthusiast
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                    Computer Science • Passionate about Sports Technology
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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
    );
};
