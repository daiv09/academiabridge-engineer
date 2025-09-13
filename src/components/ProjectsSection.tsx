import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Car, Cog, Layers, Factory } from "lucide-react";

const projects = [
  {
    icon: Car,
    title: "Heavy Vehicle Integration Project",
    category: "Vehicle Systems",
    description: "Complete integration and testing of heavy commercial vehicle systems, including powertrain optimization, chassis design validation, and performance testing protocols.",
    technologies: ["CAD Design", "FE Analysis", "Testing & Validation", "System Integration"],
    impact: "40% reduction in development time, improved fuel efficiency by 15%"
  },
  {
    icon: Cog,
    title: "Manufacturing Process Optimization",
    category: "Process Engineering", 
    description: "Redesigned manufacturing workflows for automotive components, implementing lean principles and advanced quality control systems to enhance production efficiency.",
    technologies: ["Process Design", "Quality Systems", "Lean Manufacturing", "Cost Analysis"],
    impact: "25% cost reduction, 99.5% quality improvement"
  },
  {
    icon: Layers,
    title: "Product Development Framework",
    category: "NPD Methodology",
    description: "Developed comprehensive NPD framework for complex mechanical systems, incorporating design thinking, rapid prototyping, and iterative testing methodologies.",
    technologies: ["NPD Strategy", "Prototyping", "Design Thinking", "Project Management"],
    impact: "50% faster time-to-market, enhanced innovation pipeline"
  },
  {
    icon: Factory,
    title: "Smart Manufacturing Initiative", 
    category: "Industry 4.0",
    description: "Led digital transformation of traditional manufacturing processes, integrating IoT sensors, data analytics, and predictive maintenance systems.",
    technologies: ["IoT Integration", "Data Analytics", "Predictive Maintenance", "Digital Twins"],
    impact: "30% reduction in downtime, improved OEE by 20%"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects & <span className="text-engineering-blue">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of major projects demonstrating expertise in vehicle integration, 
            FE analysis, prototyping, and manufacturing workflows across diverse engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-engineering-blue/20 hover:border-engineering-blue/40">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-engineering-blue/10 rounded-lg group-hover:bg-engineering-blue/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-engineering-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-engineering-blue transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2 bg-engineering-accent/10 text-engineering-accent">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-engineering-blue transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-engineering-blue">Technologies & Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-engineering-blue/30 text-engineering-steel"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-engineering-blue/5 rounded-lg border-l-4 border-engineering-blue">
                    <h4 className="font-semibold text-sm text-engineering-blue mb-2">Project Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Studies Call-to-Action */}
        <div className="text-center bg-engineering-blue/5 rounded-xl p-8 border border-engineering-blue/20">
          <h3 className="text-2xl font-bold mb-4 text-engineering-blue">
            Detailed Case Studies Available
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Comprehensive documentation of methodologies, challenges, solutions, and outcomes 
            for each project, perfect for educational purposes and industry insights.
          </p>
          <Button variant="professional" size="lg">
            Access Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;