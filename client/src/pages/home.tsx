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
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grain Effect */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.3%22/%3E%3C/svg%3E')]"></div>
          
          {/* Blurry Circular Gradients */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/40 to-green-500/40 rounded-full blur-3xl opacity-60 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            {/* Status Chip */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 group cursor-pointer">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">Trusted by 100+ Global Companies</span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white/60 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 max-w-5xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent leading-[1.1] tracking-tight animate-in slide-in-from-bottom duration-1000" data-testid="hero-title">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-accent via-blue-400 to-primary bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000 delay-200">
                  Expert Outsourcing Solutions
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-400" data-testid="hero-description">
                Streamline operations, reduce costs, and scale efficiently with our comprehensive 
                <span className="text-accent font-semibold"> Cloud Accounting, BPO, and Software Development</span> services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in slide-in-from-bottom duration-1000 delay-600">
              <Button 
                onClick={handleExploreServices} 
                className="group relative px-8 py-4 bg-gradient-to-r from-accent via-blue-500 to-primary text-white text-lg font-semibold rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm overflow-hidden"
                data-testid="button-explore-services"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <span>Start Your Journey</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-sm">→</span>
                  </div>
                </div>
              </Button>
              
              <Button 
                onClick={handleDownloadProfile} 
                variant="outline"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:bg-white/20 hover:border-white/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
                data-testid="button-download-profile"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <span>Download Profile</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:animate-bounce">
                    <span className="text-sm">↓</span>
                  </div>
                </div>
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-ping animation-delay-1000 hidden lg:block"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-accent/60 rounded-full animate-ping animation-delay-2000 hidden lg:block"></div>
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-primary/40 rounded-full animate-ping animation-delay-3000 hidden lg:block"></div>
          </div>

          {/* Modern Testimonial Carousel */}
          <div className="mt-20 relative animate-in slide-in-from-bottom duration-1000 delay-800">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer">
                        {/* Quote Icon */}
                        <div className="text-5xl font-bold text-accent/60 leading-none mb-6 select-none group-hover:text-accent/80 transition-colors duration-300">"</div>
                        
                        {/* Testimonial Content */}
                        <div className="space-y-4">
                          <blockquote className="text-lg text-white/90 leading-relaxed">
                            {testimonial.quote}
                          </blockquote>
                          
                          <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {testimonial.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-semibold text-white">
                                {testimonial.author}
                              </p>
                              <p className="text-white/60 text-sm">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Carousel Indicators */}
                <div className="flex space-x-3 mt-8 justify-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === currentTestimonial 
                          ? 'bg-accent shadow-lg shadow-accent/50 scale-110' 
                          : 'bg-white/30 hover:bg-white/50'
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

        {/* Mouse Interaction Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2"></div>
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
