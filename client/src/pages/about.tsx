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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="about-title">About Absouts</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="about-description">
              A global outsourcing entity focused on Cloud Accounting, Business Process Outsourcing (BPO), and Software Development & IT Solutions, simplifying business processes and technology management for clients worldwide.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-muted rounded-xl p-8" data-testid="mission-card">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To provide integrated accounting, BPO, and software outsourcing solutions that empower businesses worldwide to operate efficiently, innovate and grow sustainably.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-8" data-testid="vision-card">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To become a trusted global leader known for solving business and technology challenges through reliable outsourcing services.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary text-center mb-12" data-testid="values-title">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center" data-testid={`value-${value.title.toLowerCase()}`}>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary text-center mb-12" data-testid="leadership-title">Our Leadership</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8" data-testid={`leader-${leader.initials.toLowerCase()}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-20 h-20 ${leader.bgColor} rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4`}>
                      {leader.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                      <p className="text-accent font-semibold">{leader.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Foundation */}
          <div className="bg-muted rounded-xl p-8" data-testid="foundation-card">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Foundation & Partnership</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Absouts is owned by K D Roy & CO, a dedicated wing of the renowned Chartered Accountancy firm Adhikary Roy & Co., in strategic collaboration with LTR Consultants, a prominent consultancy and legal advisory firm based in Bangladesh.
            </p>
            <p className="text-muted-foreground text-lg">
              This partnership leverages extensive professional experience, industry leadership and an established reputation to deliver comprehensive outsourcing and consulting solutions globally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
