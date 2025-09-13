import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection id="home" />
      <ExpertiseSection id="skills" />
      <ProjectsSection id="experience" />
      <ServicesSection id="services" />
      <ContactSection id="contact" />
    </div>
  );
};

export default Index;
