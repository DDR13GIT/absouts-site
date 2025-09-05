import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { Globe, Award, Shield, Quote } from "lucide-react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Cefalo understood what we were looking for and found skilled developers for us. We gained quick access to the right qualifications for the project we were about to start. It's worth its weight in gold!",
      author: "Eivind Olsen",
      position: "Director of Customer Deliveries at Prokom"
    },
    {
      quote: "Working with Absouts has been a game-changer for our business. Their team delivered exceptional results and exceeded our expectations in every way.",
      author: "Sarah Johnson",
      position: "CTO at TechVision Inc"
    },
    {
      quote: "The quality of work and professionalism shown by the Absouts team is remarkable. They truly understand business needs and deliver solutions that work.",
      author: "Michael Chen",
      position: "Founder at InnovateLabs"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleExploreServices = () => {
    window.location.href = "/services";
  };

  const handleGetStarted = () => {
    window.location.href = "/contact";
  };

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="bg-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content Column */}
            <div className="space-y-8">
              {/* Main Hero Content */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" data-testid="hero-title">
                  In Need of Highly Skilled Developers at a Lower Cost?
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed" data-testid="hero-description">
                  We provide you with a dedicated remote development team with some of the 
                  top developers in <span className="font-semibold text-primary">Bangladesh!</span>
                </p>
                
                <Button 
                  onClick={handleExploreServices} 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-base font-semibold rounded-md"
                  data-testid="button-explore-services"
                >
                  Let's talk development
                </Button>
              </div>

              {/* Testimonial Section */}
              <div className="mt-12 pt-8">
                <div className="relative overflow-hidden">
                  {/* Testimonial Container with Carousel */}
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="bg-gray-100 p-6 rounded-tl-3xl rounded-tr-lg rounded-br-lg rounded-bl-lg relative">
                          {/* Large Quote Marks */}
                          <div className="text-6xl font-bold text-primary leading-none mb-4 select-none">"</div>
                          
                          {/* Testimonial Content */}
                          <div className="space-y-4">
                            <blockquote className="text-base text-gray-700 leading-relaxed">
                              {testimonial.quote}
                            </blockquote>
                            
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {testimonial.author}
                              </p>
                              <p className="text-sm text-gray-500">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel Indicators */}
                  <div className="flex space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full border-2 transition-all ${
                          index === currentTestimonial 
                            ? 'bg-primary border-primary' 
                            : 'bg-transparent border-primary/40'
                        }`}
                        onClick={() => setCurrentTestimonial(index)}
                        data-testid={`carousel-indicator-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:pl-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=700" 
                  alt="Professional development team collaboration - diverse group of skilled developers working together in modern office"
                  className="w-full h-auto rounded-lg shadow-lg"
                  data-testid="hero-image"
                />
              </div>
            </div>
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
