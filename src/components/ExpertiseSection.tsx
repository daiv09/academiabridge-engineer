import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Layers, Settings, Target, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable Counter component
function Counter({ target, prefix = "", suffix = "", duration = 2000 }: { target: number, prefix?: string, suffix?: string, duration?: number }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const incrementTime = 30; // interval in ms
    const steps = Math.ceil(duration / incrementTime);
    const stepValue = target / steps; // ensures all counters reach their target at the same time

    const counter = setInterval(() => {
      start += stepValue;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start)); // use Math.floor to avoid decimals
    }, incrementTime);

    return () => clearInterval(counter);
  }, [inView, target, duration]);

  return <div ref={ref}>{prefix}{count}{suffix}</div>;
}


const expertiseAreas = [
  {
    icon: Cog,
    title: "CAD & Design",
    skills: ["SolidWorks", "Creo", "GD&T", "DFx", "UGNX"],
    description: "Advanced proficiency in computer-aided design and geometric dimensioning & tolerancing"
  },
  {
    icon: Target,
    title: "NPD & Project Management",
    skills: ["Product Development", "Prototyping", "Project Planning", "Risk Management"],
    description: "End-to-end new product development from concept to market launch"
  },
  {
    icon: Zap,
    title: "ODC & COE Development",
    skills: [
      "Offshore Development Centers",
      "Center of Excellence",
      "Onshite Deployment",
      "Competency Development",
    ],
    description: "Building ODCs and COEs for OEMs"
  }, {
    icon: Users,
    title: "Vehicle Integration",
    skills: ["System Integration", "Testing", "Validation", "Compliance"],
    description: "Comprehensive vehicle integration and testing expertise"
  },
  {
    icon: Settings,
    title: "Manufacturing Processes",
    skills: ["Process Design", "Quality Control", "Lean Manufacturing", "Cost Optimization"],
    description: "Deep understanding of manufacturing workflows and optimization techniques"
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
    <section className="py-20 bg-gradient-to-b from-background to-secondary" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-engineering-blue">Skill Set</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            25+ years of hands-on expertise in heavy engineering industry practices,
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

        <div className="mt-16 relative p-10 rounded-2xl  shadow-xl border border-engineering-blue/30 text-white
        bg-gradient-to-r from-engineering-blue to-engineering-blue-light text-primary-foreground hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5
        ">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight">
              Industry Accomplishments
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              <div className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-extrabold text-white">
                  <Counter target={50} suffix="+" duration={2000} />
                </div>
                <div className="mt-2 text-sm font-medium opacity-90">
                  Projects Completed
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-extrabold text-white">
                  <Counter target={25} suffix="+" duration={2000} />
                </div>
                <div className="mt-2 text-sm font-medium opacity-90">
                  Product Launches
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-extrabold text-white">
                  <Counter target={10} prefix="$ " suffix="M+" duration={2000} />
                </div>
                <div className="mt-2 text-sm font-medium opacity-90">
                  Projects Worth
                </div>
              </div>
            </div>

          </div>

          {/* background glow for style */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-engineering-accent/20 to-transparent blur-3xl rounded-2xl"></div>
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;