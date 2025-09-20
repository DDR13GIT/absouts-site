import { Star, Lightbulb, Handshake, Trophy, Users, Globe } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

// Import leadership team photos
import kdRoyPhoto from "@assets/k_d_roy_1757771450330.jpeg";
import enamKhanPhoto from "@assets/PHOTO-2025-09-19-15-52-54_1758373122811.jpg";
import pritamKumarPhoto from "@assets/pritam_kumar_das_1757771450332.png";
import razwanKaderPhoto from "@assets/razwan_kader_1757771450332.png";

// Import custom icons for mission and vision
import lightbulbIcon from "@assets/Asset 3_1757767623439.png";
import globeIcon from "@assets/Asset 1_1757767623438.png";

export default function About() {
  const { t } = useTranslation();
  const values = [
    {
      icon: Star,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title, 
      description: t.about.values.innovation.description
    },
    {
      icon: Handshake,
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description
    },
    {
      icon: Trophy,
      title: t.about.values.clientSuccess.title,
      description: t.about.values.clientSuccess.description
    },
    {
      icon: Users,
      title: t.about.values.collaboration.title,
      description: t.about.values.collaboration.description
    },
    {
      icon: Globe,
      title: t.about.values.globalPartnership.title,
      description: t.about.values.globalPartnership.description
    }
  ];

  const leaders = [
    {
      initials: "KR",
      name: "K D Roy, FCA (ICAB), ACA (ICAEW)",
      position: "Chief Executive Officer",
      description: "Leads the entity by setting its overall direction and goals. Responsible for developing new business opportunities worldwide and ensuring that the entity's activities support both its objectives and client success. Has extensive hands-on experience managing virtual accounting and payroll services for US-based companies.",
      bgColor: "bg-primary",
      photo: kdRoyPhoto
    },
    {
      initials: "RK",
      name: "Razwan Kader",
      position: "Chief Technology Officer", 
      description: "A seasoned technology leader with deep expertise in software engineering and system architecture. Drives the company's technology vision, aligning technical strategy with business objectives. Excels at building high-performing teams and delivering scalable, reliable solutions.",
      bgColor: "bg-secondary",
      photo: razwanKaderPhoto
    },
    {
      initials: "EK", 
      name: "Enam H. Khan, FCA (ICAB), ACA (ICAEW), FCCA",
      position: "Chief Operating Officer",
      description: "Ensures smooth daily operations by refining processes, guiding cross-functional teams, and enforcing quality and compliance. Delivers reliable BPO and software services that drive company growth while fostering continuous improvement and accountability.",
      bgColor: "bg-accent",
      photo: enamKhanPhoto
    },
    {
      initials: "PD",
      name: "Pritam Kumar Das", 
      position: "Head of Business Development",
      description: "Drives the seamless delivery of all BPO and software solutions by overseeing every project to meet international quality and compliance standards. Closely monitors daily operations and upholds excellence so clients consistently receive reliable and efficient services.",
      bgColor: "bg-primary",
      photo: pritamKumarPhoto
    }
  ];

  return (
    <div className="pt-16" data-testid="about-page">
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">{t.about.badge}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="about-title">{t.about.title}</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="about-description">
              {t.about.description}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid="mission-card">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                <img 
                  src={lightbulbIcon} 
                  alt="Mission icon" 
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10">{t.about.mission.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                {t.about.mission.description}
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid="vision-card">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                <img 
                  src={globeIcon} 
                  alt="Vision icon" 
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10">{t.about.vision.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                {t.about.vision.description}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">{t.about.values.badge}</span>
              </div>
              <h2 className="text-4xl font-bold text-primary" data-testid="values-title">{t.about.values.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="group text-center p-6 rounded-xl hover:bg-white/70 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid={`value-${value.title.toLowerCase()}`}>
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">{t.about.leadership.badge}</span>
              </div>
              <h2 className="text-4xl font-bold text-primary" data-testid="leadership-title">{t.about.leadership.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid={`leader-${leader.initials.toLowerCase()}`}>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-20 h-20 rounded-full mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg overflow-hidden">
                      <img 
                        src={leader.photo} 
                        alt={leader.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-blue-600 transition-colors duration-300">{leader.name}</h3>
                      <p className="text-accent font-semibold">{leader.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Foundation */}
          <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid="foundation-card">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-primary mb-6 group-hover:text-blue-600 transition-colors duration-300 relative z-10">{t.about.foundation.title}</h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed relative z-10">
              {t.about.foundation.description1}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
              {t.about.foundation.description2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
