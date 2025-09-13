import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Car, Cog, Layers, Factory } from "lucide-react";

const projects = [
  {
    icon: Car,
    title: "Crawlers – Emission & Design Innovations",
    category: "Crawlers",
    description: "Revolutionized crawler design meeting emission norms with innovative cooling, grille, fan, and heavy-duty components.",
    technologies: ["V-Type Cooling Package", "Hydraulic Engine Fan", "Pivoted Grille", "Heavy Duty Blades", "Push Beams", "Cross-Members"],
    impact: "Enhanced performance, durability, and operator comfort"
  },
  {
    icon: Cog,
    title: "Dump Trucks – Sheet Metal & Frame Engineering",
    category: "Dump Trucks",
    description: "Full ownership of BIW, dumper body, frames, and sheet metal design with high-strength steel and integrated systems.",
    technologies: ["High Alloy Steel Body", "Chassis Design", "Engine Hood", "Dumper Body Ducting", "On-Board Weighing System"],
    impact: "Superior strength, rigidity, and operational efficiency"
  },
  {
    icon: Layers,
    title: "Off-Highway Equipment – Crawlers & Wheel Loaders",
    category: "Equipment Design",
    description: "Led product design, prototyping, VA/VE, CI, and drawing releases for crawlers and wheel loaders, including ROPS/FOPS cabins.",
    technologies: ["Hexagonal ROPS/FOPS Cabin", "Leyland Engine Integration", "Gearbox & Radiator Design", "Hydraulic Winch", "Multi/Single Shank Rippers"],
    impact: "Reduced import costs, optimized performance, and enhanced safety"
  },
  {
    icon: Factory,
    title: "Operators Cabin & Comfort Enhancements",
    category: "Cabin Design",
    description: "Designed spacious operator cabins with hinged side shields, ergonomic controls, and improved visibility.",
    technologies: ["Spacious Cabin Layout", "Hinged Side Shields", "Ergonomic Controls", "Operator Comfort Optimization"],
    impact: "Improved operator comfort, safety, and productivity"
  }
];

const ProjectsSection = () => {
  return (
    <section className="pt-20 from-secondary to-background" id="experience">
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

      </div>
    </section>
  );
};

export default ProjectsSection;