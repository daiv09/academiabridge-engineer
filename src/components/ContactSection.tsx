import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Calendar, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-engineering-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-engineering-blue">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bridge the gap between academia and industry? 
            Reach out to schedule a session or discuss collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-engineering-blue">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-engineering-blue/20">
                  <Mail className="h-5 w-5 text-engineering-blue" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">contact@industry-academia.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-engineering-blue/20">
                  <Phone className="h-5 w-5 text-engineering-blue" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+91 XXXXX XXXXX</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-engineering-blue/20">
                  <Linkedin className="h-5 w-5 text-engineering-blue" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-muted-foreground">Connect for professional updates</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-engineering-blue/20">
                  <MapPin className="h-5 w-5 text-engineering-blue" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Available for visits across India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="text-center border-engineering-blue/20 hover:border-engineering-blue/40 transition-colors">
                <CardHeader className="pb-3">
                  <Calendar className="h-8 w-8 text-engineering-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Institutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book guest lectures for your students
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-engineering-blue/20 hover:border-engineering-blue/40 transition-colors">
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-engineering-blue mx-auto mb-2" />
                  <CardTitle className="text-lg">Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get personalized mentoring sessions
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Book Mentoring
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-engineering-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-engineering-blue">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Institution/Organization</Label>
                <Input id="institution" placeholder="Your institution or organization" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Guest Lecture Request / Mentoring / Consultation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your requirements, preferred dates, student group size, or specific topics of interest..."
                  rows={5}
                />
              </div>

              <Button variant="professional" size="lg" className="w-full">
                Send Message
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Looking forward to a call and positive feedback from institutions and students alike.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;