import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-engineering-blue text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Industry-Academia Connect</h3>
            <p className="text-engineering-blue-light">
              Bridging the gap between industry expertise and academic learning 
              through professional guidance and mentorship.
            </p>
            <div className="text-sm text-engineering-blue-light">
              20+ Years • 500+ Students Mentored • 150+ Projects
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2 text-engineering-blue-light">
              <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="h-4 w-4" />
                <span>Guest Lectures</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="h-4 w-4" />
                <span>Student Mentoring</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="h-4 w-4" />
                <span>Industry Workshops</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="h-4 w-4" />
                <span>Career Guidance</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-engineering-blue-light">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>contact@industry-academia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Professional Profile</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-engineering-blue-light/30" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-engineering-blue-light">
            © 2024 Industry-Academia Connect. Professional Engineering Consulting & Mentorship.
          </div>
          <div className="text-sm text-engineering-blue-light">
            Looking forward to a call and positive feedback from institutions and students alike.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;