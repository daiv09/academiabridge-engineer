import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-engineering.jpeg";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-engineering-gray" id="home">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col">
  <span className="text-engineering-blue flex items-center gap-2">
    Design <FaArrowRight className="mt-3 inline w-16 h-16" /> Delivery
  </span>
</h1>

              <p className="text-xl lg:text-2xl text-engineering-steel font-medium">
                25+ Years in Engineering, Design & NPD
              </p>
            </div>

            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-engineering-blue/20">
              <p className="text-lg font-semibold text-engineering-blue mb-2">
                "Bridging the Gap Between Industry & Academia"
              </p>
              <p className="text-muted-foreground">
                Helping professionals build confidence, understand industry workflows,
                and prepare for real-world engineering challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button variant="professional" size="lg" className="text-lg px-8 py-6">
                  Schedule a Session
                </Button>
              </a>
              <a href="#experience">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View Experience
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl mx-auto">
              <div className="aspect-[16/9]">
                <img
                  src={heroImage}
                  alt="Professional engineering consultant in modern office environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-engineering-blue/20 to-transparent"></div>
            </div>


            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-lg p-4 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-engineering-blue">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card rounded-lg p-4 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-engineering-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-engineering-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSection;