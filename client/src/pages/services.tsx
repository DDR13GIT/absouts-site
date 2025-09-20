import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, ServerCog, Server, GraduationCap, Rocket, BarChart, SquareArrowOutUpLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

// Import background image
import servicesHeroBackground from "@assets/pexels-tima-miroshnichenko-6694543aa_1758365400181.jpg";

export default function Services() {
  const { t } = useTranslation();

  const servicePillars = [
    {
      icon: Users,
      title: t.services.pillars.clientRelationship.title,
      description: t.services.pillars.clientRelationship.description
    },
    {
      icon: ServerCog,
      title: t.services.pillars.serviceDelivery.title,
      description: t.services.pillars.serviceDelivery.description
    },
    {
      icon: Server,
      title: t.services.pillars.technology.title, 
      description: t.services.pillars.technology.description
    },
    {
      icon: GraduationCap,
      title: t.services.pillars.talent.title,
      description: t.services.pillars.talent.description
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: t.services.benefits.vendorManagement.title,
      description: t.services.benefits.vendorManagement.description
    },
    {
      icon: BarChart,
      title: t.services.benefits.efficiency.title, 
      description: t.services.benefits.efficiency.description
    },
    {
      icon: SquareArrowOutUpLeft,
      title: t.services.benefits.scalability.title,
      description: t.services.benefits.scalability.description
    }
  ];

  return (
    <div className="pt-16" data-testid="services-page">
      <section 
        className="py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${servicesHeroBackground})`
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">{t.services.badge}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg" data-testid="services-title">{t.services.title}</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto drop-shadow-md" data-testid="services-description">
              {t.services.description}
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* BPO Services */}
            <div className="group service-card bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden" data-testid="bpo-services-card">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                <i className="fas fa-chart-line text-3xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">{t.services.bpo.title}</h2>
              <p className="text-white/90 mb-6 text-lg leading-relaxed relative z-10">
                {t.services.bpo.description}
              </p>
              <Link href="/services/bpo">
                <Button className="group/btn bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative z-10" data-testid="button-explore-bpo">
                  {t.services.bpo.button}
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </Link>
            </div>

            {/* Software Services */}
            <div className="group service-card bg-gradient-to-br from-accent to-secondary rounded-xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden" data-testid="software-services-card">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                <i className="fas fa-code text-3xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">{t.services.software.title}</h2>
              <p className="text-white/90 mb-6 text-lg leading-relaxed relative z-10">
                {t.services.software.description}
              </p>
              <Link href="/services/software">
                <Button className="group/btn bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative z-10" data-testid="button-explore-software">
                  {t.services.software.button}
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Service Pillars */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">{t.services.pillars.badge}</span>
              </div>
              <h2 className="text-4xl font-bold text-primary" data-testid="service-pillars-title">{t.services.pillars.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="group text-center p-6 rounded-xl hover:bg-white/70 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid={`pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-blue-600 transition-colors duration-300">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid="benefits-section">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-primary mb-8 text-center group-hover:text-blue-600 transition-colors duration-300 relative z-10">{t.services.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center" data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
