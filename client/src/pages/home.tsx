import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { Globe, Award, Shield } from "lucide-react";

export default function Home() {
  const handleExploreServices = () => {
    window.location.href = "/services";
  };

  const handleGetStarted = () => {
    window.location.href = "/contact";
  };

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="hero-image min-h-screen flex items-center justify-center text-white pt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="hero-title">
            Global Outsourcing <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="hero-description">
            Empowering businesses worldwide through Cloud Accounting, BPO, and Software Development
          </p>
          <div className="space-x-4">
            <Button 
              onClick={handleExploreServices} 
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-3"
              data-testid="button-explore-services"
            >
              Explore Services
            </Button>
            <Button 
              onClick={handleGetStarted} 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" data-testid="services-title">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
              Comprehensive outsourcing solutions designed to streamline your business operations and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Business Process Outsourcing"
              description="Streamline essential business functions including cloud accounting, payroll management, tax services, and back-office support."
              features={[
                "Cloud Accounting Services",
                "Payroll Management", 
                "Tax Services",
                "Image Editing"
              ]}
              icon="fas fa-chart-line"
              variant="primary"
              onLearnMore={() => window.location.href = "/services/bpo"}
            />
            
            <ServiceCard
              title="Software Outsourcing & IT Solutions"
              description="Custom software development, mobile applications, cloud infrastructure optimization, and specialized solutions for various industries."
              features={[
                "Custom Software Development",
                "Mobile Applications",
                "Cloud Infrastructure",
                "Test Automation"
              ]}
              icon="fas fa-code"
              variant="secondary"
              onLearnMore={() => window.location.href = "/services/software"}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6" data-testid="why-choose-title">Why Choose Absouts?</h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="why-choose-description">
                With extensive experience and a commitment to excellence, we deliver integrated solutions that help businesses achieve efficiency, innovation, and growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="feature-global-reach">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Serving clients across USA, UK, Europe, MENA, and globally</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="feature-expert-leadership">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Expert Leadership</h3>
                    <p className="text-muted-foreground">Led by chartered accountants and technology experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="feature-trusted-partnership">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Trusted Partnership</h3>
                    <p className="text-muted-foreground">Built on integrity, excellence, and client success</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaboration" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="team-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6" data-testid="cta-title">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200" data-testid="cta-description">
            Let's discuss how our integrated solutions can help you achieve efficiency, innovation, and growth.
          </p>
          <Link href="/contact">
            <Button 
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-3 text-lg"
              data-testid="button-start-journey"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
