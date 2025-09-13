import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, Target, Lightbulb, Briefcase } from "lucide-react";

const guestLectureTopics = [
  "New Product Development & Design",
  "Engineering Fundamentals & Applications", 
  "CAD, GD&T, and Design for Manufacturing/Assembly (DFx)",
  "Prototyping & Manufacturing Processes",
  "Industry workflows: How products are produced in real engineering environments",
  "Project Management for Engineers",
  "Preparing for Internships & Cracking Interviews"
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Guest Lectures Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Guest Lectures & <span className="text-engineering-blue">Workshops</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive sessions designed for B.Tech Mechanical Engineering students 
              (Pre-Final/Final year) to bridge the gap between academic theory and industry practice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-engineering-blue/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-engineering-blue" />
                    <CardTitle>Session Format</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    1-2 hour interactive sessions combining theory with real-world case studies, 
                    hands-on demonstrations, and Q&A sessions.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-engineering-blue">
                    <Users className="h-4 w-4" />
                    <span>Ideal for groups of 30-100 students</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-engineering-blue/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-engineering-blue" />
                    <CardTitle>Target Audience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    B.Tech Mechanical Engineering students in their pre-final and final years, 
                    ready to transition from academic learning to professional engineering practice.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-engineering-blue">Focus Areas</h3>
              <div className="space-y-3">
                {guestLectureTopics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-engineering-blue/5 border border-engineering-blue/10">
                    <BookOpen className="h-5 w-5 text-engineering-blue mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mentoring Section */}
        <div className="bg-gradient-to-r from-engineering-blue/5 to-engineering-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mentoring & <span className="text-engineering-blue">Coaching</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Personalized guidance to help aspiring engineers align their academic learning 
              with industry expectations and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-engineering-blue/20">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-engineering-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-engineering-blue" />
                </div>
                <CardTitle>Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strategic advice for students aspiring to join the engineering industry, 
                  including career path planning and skill development roadmaps.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-engineering-blue/20">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-engineering-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-engineering-blue" />
                </div>
                <CardTitle>Skill Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Coaching sessions to boost both technical and soft skills, 
                  focusing on industry-relevant competencies and professional development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-engineering-blue/20">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-engineering-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-engineering-blue" />
                </div>
                <CardTitle>Industry Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Help students understand and bridge the gap between academic concepts 
                  and real-world engineering applications and workflows.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Book a Mentoring Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;