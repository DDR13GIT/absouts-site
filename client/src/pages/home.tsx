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

  const handleDownloadProfile = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/attached_assets/Absouts Booklet_1757063950321.pdf';
    link.download = 'Absouts-Company-Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 pt-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-8 relative z-10">
              {/* Main Hero Content */}
              <div className="space-y-6 animate-in slide-in-from-left duration-700">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Trusted by 100+ companies</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" data-testid="hero-title">
                  In Need of Highly Skilled Developers at a Lower Cost?
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed" data-testid="hero-description">
                  We provide you with a dedicated remote development team with some of the 
                  top developers in <span className="font-semibold text-primary">Bangladesh!</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleExploreServices} 
                    className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    data-testid="button-explore-services"
                  >
                    Let's talk development
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                  
                  <Button 
                    onClick={handleDownloadProfile} 
                    variant="outline"
                    className="group border-2 border-primary/20 bg-white/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-white px-8 py-3 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    data-testid="button-download-profile"
                  >
                    Download company profile
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">↓</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Image Column - Larger */}
            <div className="lg:col-span-3 relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                  alt="Professional development team collaboration - diverse group of skilled developers working together in modern office"
                  className="relative w-full h-auto rounded-lg shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Section - Overlapping */}
          <div className="mt-16 relative">
            <div className="max-w-5xl mx-auto relative">
              <div className="relative overflow-hidden">
                {/* Testimonial Container with Carousel */}
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="group bg-white/80 backdrop-blur-md border border-white/20 p-4 py-3 rounded-tl-3xl rounded-tr-lg rounded-br-lg rounded-bl-lg relative max-w-4xl mx-auto lg:mx-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        {/* Large Quote Marks */}
                        <div className="text-4xl font-bold text-primary leading-none mb-2 select-none group-hover:scale-110 transition-transform duration-300">"</div>
                        
                        {/* Testimonial Content */}
                        <div className="space-y-2">
                          <blockquote className="text-sm text-gray-700 leading-relaxed">
                            {testimonial.quote}
                          </blockquote>
                          
                          <div className="flex items-center space-x-3">
                            <div>
                              <p className="text-xs font-semibold text-gray-900">
                                {testimonial.author}
                              </p>
                              <p className="text-xs text-gray-500">
                                {testimonial.position}
                              </p>
                            </div>
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {testimonial.author.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Carousel Indicators */}
                <div className="flex space-x-2 mt-4 justify-center lg:justify-start">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                        index === currentTestimonial 
                          ? 'bg-primary border-primary shadow-lg' 
                          : 'bg-transparent border-primary/40 hover:border-primary/70'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                      data-testid={`carousel-indicator-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Comprehensive Solutions</span>
            </div>
            
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
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl font-bold text-primary mb-6" data-testid="why-choose-title">Why Choose Absouts?</h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="why-choose-description">
                With extensive experience and a commitment to excellence, we deliver integrated solutions that help businesses achieve efficiency, innovation, and growth.
              </p>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/70 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-global-reach">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">Global Reach</h3>
                    <p className="text-muted-foreground">Serving clients across USA, UK, Europe, MENA, and globally</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/70 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-expert-leadership">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">Expert Leadership</h3>
                    <p className="text-muted-foreground">Led by chartered accountants and technology experts</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/70 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-trusted-partnership">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">Trusted Partnership</h3>
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
