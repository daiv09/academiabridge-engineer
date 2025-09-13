import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Layers, Settings, Target, Users, Zap } from "lucide-react";

const expertiseAreas = [
  {
    icon: Cog,
    title: "CAD & Design",
    skills: ["SolidWorks", "AutoCAD", "GD&T", "DFx", "3D Modeling"],
    description: "Advanced proficiency in computer-aided design and geometric dimensioning & tolerancing"
  },
  {
    icon: Target,
    title: "NPD & Project Management",
    skills: ["Product Development", "Prototyping", "Project Planning", "Risk Management"],
    description: "End-to-end new product development from concept to market launch"
  },
  {
    icon: Settings,
    title: "Manufacturing Processes",
    skills: ["Process Design", "Quality Control", "Lean Manufacturing", "Cost Optimization"],
    description: "Deep understanding of manufacturing workflows and optimization techniques"
  },
  {
    icon: Layers,
    title: "FE Analysis & Simulation",
    skills: ["ANSYS", "Structural Analysis", "Thermal Analysis", "Optimization"],
    description: "Finite element analysis for design validation and performance optimization"
  },
  {
    icon: Users,
    title: "Vehicle Integration",
    skills: ["System Integration", "Testing", "Validation", "Compliance"],
    description: "Comprehensive vehicle integration and testing expertise"
  },
  {
    icon: Zap,
    title: "Industry Best Practices",
    skills: ["Standards", "Regulations", "Documentation", "Quality Systems"],
    description: "Adherence to industry standards and regulatory requirements"
  }
];

const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Career & <span className="text-engineering-blue">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            20+ years of hands-on expertise in heavy engineering industry practices, 
            with a proven track record of designing, developing, and delivering complex projects end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-engineering-blue/20 hover:border-engineering-blue/40">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-engineering-blue/10 rounded-lg group-hover:bg-engineering-blue/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-engineering-blue" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-engineering-blue/10 text-engineering-blue hover:bg-engineering-blue/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-engineering-blue/5 rounded-xl border border-engineering-blue/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-engineering-blue">Industry Accomplishments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-engineering-blue">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-engineering-blue">25+</div>
                <div className="text-muted-foreground">Product Launches</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-engineering-blue">500+</div>
                <div className="text-muted-foreground">Students Mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;