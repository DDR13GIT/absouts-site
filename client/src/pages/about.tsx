import { Star, Lightbulb, Handshake, Trophy, Users, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We consistently deliver high-quality services, continuously improving and using best practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation", 
      description: "We use the latest technology and creative methods to deliver advanced solutions."
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "We always operate honestly, transparently, and responsibly, protecting client data."
    },
    {
      icon: Trophy,
      title: "Client Success",
      description: "We understand our clients' unique needs and deliver solutions that directly support their business objectives."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We build strong relationships with clients and partners, working together towards shared success."
    },
    {
      icon: Globe,
      title: "Global Partnership",
      description: "We are committed to building trusted, long-term relationships with clients around the world."
    }
  ];

  const leaders = [
    {
      initials: "KR",
      name: "K D Roy, FCA (ICAB), ACA (ICAEW)",
      position: "Chief Executive Officer",
      description: "Leads the entity by setting its overall direction and goals. Responsible for developing new business opportunities worldwide and ensuring that the entity's activities support both its objectives and client success. Has extensive hands-on experience managing virtual accounting and payroll services for US-based companies.",
      bgColor: "bg-primary"
    },
    {
      initials: "RK",
      name: "Razwan Kader",
      position: "Chief Technology Officer", 
      description: "A seasoned technology leader with deep expertise in software engineering and system architecture. Drives the company's technology vision, aligning technical strategy with business objectives. Excels at building high-performing teams and delivering scalable, reliable solutions.",
      bgColor: "bg-secondary"
    },
    {
      initials: "SI", 
      name: "Mohammed Shariful Islam, FCA",
      position: "Chief Operating Officer",
      description: "Ensures smooth daily operations by refining processes, guiding cross-functional teams, and enforcing quality and compliance. Delivers reliable BPO and software services that drive company growth while fostering continuous improvement and accountability.",
      bgColor: "bg-accent"
    },
    {
      initials: "PD",
      name: "Pritam Kumar Das", 
      position: "Head of Business Development",
      description: "Drives the seamless delivery of all BPO and software solutions by overseeing every project to meet international quality and compliance standards. Closely monitors daily operations and upholds excellence so clients consistently receive reliable and efficient services.",
      bgColor: "bg-primary"
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
              <span className="text-sm font-medium text-gray-700">Global Outsourcing Leader</span>
            </div>
            
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="about-title">About Absouts</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="about-description">
              A global outsourcing entity focused on Cloud Accounting, Business Process Outsourcing (BPO), and Software Development & IT Solutions, simplifying business processes and technology management for clients worldwide.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid="mission-card">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                <i className="fas fa-bullseye text-2xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                To provide integrated accounting, BPO, and software outsourcing solutions that empower businesses worldwide to operate efficiently, innovate and grow sustainably.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid="vision-card">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                <i className="fas fa-eye text-2xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                To become a trusted global leader known for solving business and technology challenges through reliable outsourcing services.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Core Values</span>
              </div>
              <h2 className="text-4xl font-bold text-primary" data-testid="values-title">Our Values</h2>
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
                <span className="text-sm font-medium text-gray-700">Leadership Team</span>
              </div>
              <h2 className="text-4xl font-bold text-primary" data-testid="leadership-title">Our Leadership</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-8" data-testid={`leader-${leader.initials.toLowerCase()}`}>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className={`w-20 h-20 ${leader.bgColor} rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {leader.initials}
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
            
            <h2 className="text-3xl font-bold text-primary mb-6 group-hover:text-blue-600 transition-colors duration-300 relative z-10">Our Foundation & Partnership</h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed relative z-10">
              Absouts is owned by K D Roy & CO, a dedicated wing of the renowned Chartered Accountancy firm Adhikary Roy & Co., in strategic collaboration with LTR Consultants, a prominent consultancy and legal advisory firm based in Bangladesh.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
              This partnership leverages extensive professional experience, industry leadership and an established reputation to deliver comprehensive outsourcing and consulting solutions globally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
