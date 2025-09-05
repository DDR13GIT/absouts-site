import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, ServerCog, Server, GraduationCap, Rocket, BarChart, SquareArrowOutUpLeft } from "lucide-react";

export default function Services() {
  const servicePillars = [
    {
      icon: Users,
      title: "Client Relationship Management",
      description: "Active engagement from consultation to completion and continuous support."
    },
    {
      icon: ServerCog,
      title: "Service Delivery",
      description: "Comprehensive execution utilizing standardized processes and advanced technologies."
    },
    {
      icon: Server,
      title: "Technology & Infrastructure", 
      description: "Advanced technological infrastructure ensuring data security and compliance."
    },
    {
      icon: GraduationCap,
      title: "Talent Development",
      description: "Strategic recruitment and continuous training for a skilled workforce."
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Streamlined Vendor Management",
      description: "Simplified management with integrated solutions"
    },
    {
      icon: BarChart,
      title: "Increased Efficiency", 
      description: "Enhanced operational efficiency across all functions"
    },
    {
      icon: SquareArrowOutUpLeft,
      title: "Robust Scalability",
      description: "Solutions that grow with your business needs"
    }
  ];

  return (
    <div className="pt-16" data-testid="services-page">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="services-title">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="services-description">
              Comprehensive outsourcing solutions designed to meet the diverse operational and technological demands of businesses today
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* BPO Services */}
            <div className="service-card bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white" data-testid="bpo-services-card">
              <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-3xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Business Process Outsourcing</h2>
              <p className="text-white/90 mb-6 text-lg">
                Streamline essential business functions and enhance operational efficiency with our comprehensive BPO services.
              </p>
              <Link href="/services/bpo">
                <Button className="bg-white text-primary hover:bg-gray-100" data-testid="button-explore-bpo">
                  Explore BPO Services
                </Button>
              </Link>
            </div>

            {/* Software Services */}
            <div className="service-card bg-gradient-to-br from-accent to-secondary rounded-xl p-8 text-white" data-testid="software-services-card">
              <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-code text-3xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Software Outsourcing & IT Solutions</h2>
              <p className="text-white/90 mb-6 text-lg">
                Custom software development and IT solutions tailored for various industries and business needs.
              </p>
              <Link href="/services/software">
                <Button className="bg-white text-primary hover:bg-gray-100" data-testid="button-explore-software">
                  Explore IT Solutions
                </Button>
              </Link>
            </div>
          </div>

          {/* Service Pillars */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary text-center mb-12" data-testid="service-pillars-title">Our Integrated Service Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="text-center" data-testid={`pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-muted rounded-xl p-8" data-testid="benefits-section">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Our Services Stand Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center" data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
