import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, BookOpen, Users2, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const LandingPage = () => {
  const features = [
    {
      icon: Users2,
      title: "Connect with Peers",
      description: "Join a vibrant community of students, faculty, and clubs across universities",
    },
    {
      icon: Calendar,
      title: "Discover Events",
      description: "Never miss campus events, workshops, and club activities",
    },
    {
      icon: BookOpen,
      title: "Share Resources",
      description: "Access and share academic materials, notes, and study guides",
    },
    {
      icon: TrendingUp,
      title: "Stay Active",
      description: "Track your engagement and climb the university leaderboard",
    },
    {
      icon: Award,
      title: "Rate Courses",
      description: "Help others make informed decisions with course reviews",
    },
    {
      icon: Users,
      title: "Build Your Network",
      description: "Connect with students from your department and beyond",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">UniConnect</span>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/auth">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/auth">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero -z-10" />
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Connect. Collaborate.{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Succeed Together.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                UniConnect brings students, faculty, and clubs together in one vibrant platform.
                Share ideas, discover events, and build meaningful connections across universities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/auth">
                  <Button size="lg" className="gradient-primary text-lg">
                    Join Your University
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="lg" variant="outline" className="text-lg">
                    Sign In
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Universities</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Active Clubs</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="University students collaborating"
                className="relative rounded-2xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              UniConnect provides all the tools you need to make the most of your university experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-2">
                  <CardContent className="pt-6">
                    <div className="mb-4 h-12 w-12 rounded-lg gradient-secondary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-primary text-primary-foreground shadow-hover">
            <CardContent className="py-16 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of students already connecting on UniConnect
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="text-lg">
                  Create Your Account
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">UniConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 UniConnect. Connecting universities, one student at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
