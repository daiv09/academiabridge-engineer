import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/jaganath-harihar.jpg";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-engineering-blue/5"  id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-engineering-blue">Connect</span>
          </h2>
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
                    <div className="text-muted-foreground">jaganathharihar@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-engineering-blue/20">
                  <Phone className="h-5 w-5 text-engineering-blue" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+91 98908 06636</div>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/jaganathharihar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-engineering-blue/20 hover:border-engineering-blue/40 hover:bg-engineering-blue/5 transition-colors cursor-pointer">
                    <Linkedin className="h-5 w-5 text-engineering-blue" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-muted-foreground">Connect for professional updates</div>
                    </div>
                  </div>
                </a>

              </div>
            </div>

            {/* Quick Profile Section */}
            <div className="flex items-center space-x-8 p-6 bg-card rounded-lg border border-engineering-blue/20 shadow-lg ">
              <img
                src={heroImage}
                alt="Jaganath Harihar"
                className="w-40 h-40 rounded-full object-cover border-4 border-engineering-blue shadow-xl"
              />
              <div>
                <h3 className="text-2xl font-bold text-engineering-blue">Jaganath Harihar</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  PMP Certified Engineering Professional <br />
                  25+ Years in NPD, Design & Manufacturing <br />
                  Onsite Experience in USA, Kuwait & Germany
                </p>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <Card className="border-engineering-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-engineering-blue">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://getform.io/f/bwnyvxea"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="institution">Institution/Organization</Label>
                  <Input id="institution" name="institution" placeholder="Your institution or organization" />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Guest Lecture Request / Mentoring / Consultation" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your requirements, preferred dates, student group size, or specific topics of interest..."
                    rows={1}
                    required
                  />
                </div>

                <Button type="submit" variant="professional" size="lg" className="w-full">
                  Send Message
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Looking forward to a call and positive feedback from institutions and students alike.
                </div>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;