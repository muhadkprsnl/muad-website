import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Elite Hockey Player Performance Analysis",
      year: "2023-2024",
      category: "Ice Hockey",
      participants: "25 Players",
      focus: "GPS Tracking & Load Management",
      outcome: "15% Injury Reduction",
      status: "completed"
    },
    {
      id: 2,
      title: "F1 Driver Telemetry & Mental Performance",
      year: "2023",
      category: "Formula 1",
      participants: "8 Drivers",
      focus: "Cognitive Load Analysis",
      outcome: "0.3s Lap Time Improvement",
      status: "completed"
    },
    {
      id: 3,
      title: "Football Academy Youth Development",
      year: "2022-2023",
      category: "Football",
      participants: "50 Youth Players",
      focus: "Technical Skill Assessment",
      outcome: "40% Progression Rate",
      status: "completed"
    },
    {
      id: 4,
      title: "Multi-Sport Injury Prevention Program",
      year: "2024",
      category: "Cross-Sport",
      participants: "100+ Athletes",
      focus: "Biomechanical Screening",
      outcome: "Ongoing Data Collection",
      status: "ongoing"
    },
    {
      id: 5,
      title: "Wearable Technology Integration Study",
      year: "2024",
      category: "Technology",
      participants: "15 Teams",
      focus: "Data Analytics Platform",
      outcome: "Platform Development",
      status: "ongoing"
    },
    {
      id: 6,
      title: "Recovery Optimization Protocol",
      year: "2024-2025",
      category: "Recovery Science",
      participants: "TBD",
      focus: "Sleep & Nutrition Tracking",
      outcome: "Study Design Phase",
      status: "yet-to-start"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "ongoing":
        return "secondary";
      case "yet-to-start":
        return "outline";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "ongoing":
        return "Ongoing";
      case "yet-to-start":
        return "Upcoming";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Button variant="ghost" className="mb-8 -ml-4 hover:bg-accent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              CASE STUDIES
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-red-600 mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
              Comprehensive research studies and real-world applications across multiple sports disciplines. 
              Each case study demonstrates evidence-based approaches to athlete development, performance optimization, 
              and injury prevention through data-driven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-12 bg-white flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Study Title</TableHead>
                  <TableHead className="font-bold">Year</TableHead>
                  <TableHead className="font-bold">Category</TableHead>
                  <TableHead className="font-bold">Participants</TableHead>
                  <TableHead className="font-bold">Research Focus</TableHead>
                  <TableHead className="font-bold">Key Outcome</TableHead>
                  <TableHead className="font-bold text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {caseStudies.map((study) => (
                  <TableRow key={study.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{study.title}</TableCell>
                    <TableCell>{study.year}</TableCell>
                    <TableCell>{study.category}</TableCell>
                    <TableCell>{study.participants}</TableCell>
                    <TableCell>{study.focus}</TableCell>
                    <TableCell>{study.outcome}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getStatusVariant(study.status)}>
                        {getStatusLabel(study.status)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Summary Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
              <p className="text-gray-600">Total Studies</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Athletes Involved</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5</h3>
              <p className="text-gray-600">Sports Disciplines</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;