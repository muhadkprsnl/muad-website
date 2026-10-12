import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ResearchDetail() {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center max-w-md px-6">
                <h1 className="text-3xl font-bold mb-4">Research Project</h1>
                <p className="text-muted-foreground mb-6">
                    The research project "{id}" page is not found. Please view the research section on your CV page.
                </p>
                <Link to="/cv#research">
                    <Button className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Research
                    </Button>
                </Link>
            </div>
        </div>
    );
}
