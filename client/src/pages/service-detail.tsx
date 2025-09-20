import { useLocation } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

// Import technology logos
import restApiLogo from "@assets/1_82q9fbZA3OHhyoQ48qOypQ_1757087238421.webp";
import joutLogo from "@assets/1_XkmnsJ6Joa6EDFVGUw0tfA_1757087238421.png";
import tensorFlowLogo from "@assets/7a11b0b0-f7b3-4c57-b79b-7ec4e27ff193_1757087238422.png";
import angularJsLogo from "@assets/62a79606e42d729d928b175f_1757087238422.png";
import sqlServerLogo from "@assets/6129e6c89b8f206f530029e0f221066b_1757087238422.png";
import postgreSQLLogo from "@assets/acc45903ce91d3c1708b04a2e9d083c8_1757087238422.png";
import awsLogo from "@assets/Amazon_Web_Services_Logo.svg_1757087238422.png";
import jmeterLogo from "@assets/Apache_JMeter_1757087238422.png";
import appiumLogo from "@assets/appium-logo_1757087238422.jpg";
import aspNetLogo from "@assets/ASP.NET__1757087238422.png";
import css3Logo from "@assets/CSS3_logo_and_wordmark.svg_1757087238423.png";
import djangoLogo from "@assets/Daco_4430861_1757087238423.png";
import oracleLogo from "@assets/Daco_4533338_1757087238423.png";
import graphQLLogo from "@assets/Daco_5229551_1757087238423.png";
import dockerLogo from "@assets/Docker_logo_1757087238423.png";
import elasticsearchLogo from "@assets/Elasticsearch_logo.svg_1757087238423.png";
import firebaseLogo from "@assets/Firebase_Logo.svg_1757087238423.png";
import geminiLogo from "@assets/Gemini-Logo-500x281_1757087238423.png";
import gitLabLogo from "@assets/GitLab_logo.svg_1757087238424.png";
import goLogo from "@assets/Go_Logo_Blue.svg_1757087238424.png";

// Import new icons for service cards
import globeIcon from "@assets/Asset 1_1757767623438.png";
import peopleIcon from "@assets/Asset 2_1757767623439.png";
import lightbulbIcon from "@assets/Asset 3_1757767623439.png";
import cloudIcon from "@assets/Asset 4_1757767623439.png";
import gearsIcon from "@assets/Asset 5_1757767623439.png";
import thumbsUpIcon from "@assets/Asset 6_1757767623439.png";
import buildingIcon from "@assets/Asset 7_1757767623439.png";
import searchIcon from "@assets/Asset 8_1757767623439.png";
import documentIcon from "@assets/Asset 9_1757767623440.png";
import bankIcon from "@assets/Asset 10_1757767623440.png";
import calculatorIcon from "@assets/Asset 11_1757767623440.png";
import scaleIcon from "@assets/Asset 12_1757767623440.png";
import handsIcon from "@assets/Asset 13_1757767623440.png";
import shieldIcon from "@assets/Asset 14_1757767623440.png";
import mediaIcon from "@assets/Asset 15_1757767623440.png";
import networkIcon from "@assets/Asset 16_1757767623440.png";
import teamIcon from "@assets/Asset 17_1757767623440.png";
import reportIcon from "@assets/Asset 18_1757767623441.png";
import clockIcon from "@assets/Asset 19_1757767623441.png";

export default function ServiceDetail() {
  const [location] = useLocation();
  const serviceSlug = location.split('/').pop();

  // Handle specific service slugs
  const servicePages = {
    'ecommerce': EcommerceDetail,
    'mobile': MobileAppDetail,
    'cloud': CloudInfrastructureDetail,
    'testing': TestAutomationDetail,
    'legaltech': LegalTechDetail,
    'webportal': WebPortalDetail,
    'fintech': FintechDetail,
    'ai': AIDetail,
    'bpo': BPOServiceDetail,
    'software': SoftwareServiceDetail
  };

  const ServiceComponent = servicePages[serviceSlug as keyof typeof servicePages] || NotFoundService;
  return <ServiceComponent />;
}

function NotFoundService() {
  const { t } = useTranslation();
  
  return (
    <div className="pt-16" data-testid="service-not-found">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Service Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <Button className="text-accent hover:text-accent/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.common.backToServices}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function BPOServiceDetail() {
  const cloudAccountingServices = [
    {
      logoSrc: cloudIcon,
      title: "Virtual Accounting",
      description: "Remote accounting services providing flexibility and reducing need for in-house staff."
    },
    {
      logoSrc: calculatorIcon, 
      title: "Book-keeping",
      description: "Recording financial transactions (sales, expenses, payments) for accurate financial records."
    },
    {
      logoSrc: scaleIcon,
      title: "Bank Reconciliation", 
      description: "Matching company records with bank statements to ensure accuracy and detect discrepancies."
    },
    {
      logoSrc: reportIcon,
      title: "MIS Reporting",
      description: "Generating management reports for business insights and strategic decision-making."
    },
    {
      logoSrc: bankIcon,
      title: "Accounts Payable & Receivable",
      description: "Tracking outgoing and incoming payments to maintain healthy cash flow."
    },
    {
      logoSrc: documentIcon,
      title: "Inventory Management", 
      description: "Monitoring stock levels and tracking purchases/sales for efficient supply chain operations."
    }
  ];

  const imageEditingServices = [
    { logoSrc: shieldIcon, title: "Background Removal" },
    { logoSrc: mediaIcon, title: "Color Correction" },
    { logoSrc: peopleIcon, title: "Face Swapping" },
    { logoSrc: shieldIcon, title: "Image Masking" },
    { logoSrc: lightbulbIcon, title: "Photo Manipulation" },
    { logoSrc: clockIcon, title: "Shadow Creation" },
    { logoSrc: networkIcon, title: "Reflection Creation" },
    { logoSrc: searchIcon, title: "Model Touch-up" }
  ];

  return (
    <div className="pt-16" data-testid="bpo-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="bpo-title">Business Process Outsourcing</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="bpo-description">
              Our BPO services streamline essential business functions and enhance operational efficiency, enabling clients to focus on their core competencies and drive growth.
            </p>
          </div>

          {/* Cloud Accounting Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8" data-testid="cloud-accounting-title">Cloud Accounting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudAccountingServices.map((service, index) => (
                <div key={index} className="bg-muted rounded-xl p-6" data-testid={`cloud-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src={service.logoSrc} 
                      alt={`${service.title} logo`} 
                      className="w-8 h-8 object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other BPO Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Payroll Management */}
            <div className="bg-white rounded-xl shadow-lg p-8" data-testid="payroll-management-card">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <img 
                  src={teamIcon} 
                  alt="Payroll Management logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Payroll Management</h3>
              <p className="text-muted-foreground mb-6">
                Processing employee salaries, tax deductions, and benefits. Ensures accurate and timely payroll processing, maintaining employee satisfaction and compliance with changing tax laws and labour regulations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Employee salary processing</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Tax deductions and compliance</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Benefits administration</li>
              </ul>
            </div>

            {/* Tax Services */}
            <div className="bg-white rounded-xl shadow-lg p-8" data-testid="tax-services-card">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <img 
                  src={calculatorIcon} 
                  alt="Tax Services logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Tax Services</h3>
              <p className="text-muted-foreground mb-6">
                Preparing direct and indirect tax returns (Income-Tax, GST, VAT). Ensures accurate and on-time tax compliance, minimising risk. Expert guidance helps identify deductions and credits to optimise tax liabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Income tax return preparation</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> GST and VAT compliance</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Tax optimization strategies</li>
              </ul>
            </div>
          </div>

          {/* Image Editing Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8" data-testid="image-editing-title">Image Editing Services</h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="image-editing-description">
              Enhancing and manipulating images for various business needs, especially in marketing and e-commerce to create visually appealing and professional imagery.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {imageEditingServices.map((service, index) => (
                <div key={index} className="text-center" data-testid={`image-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <img 
                      src={service.logoSrc} 
                      alt={`${service.title} logo`} 
                      className="w-10 h-10 object-contain" 
                    />
                  </div>
                  <h4 className="font-semibold text-primary">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Back Office Support */}
          <div className="bg-muted rounded-xl p-8" data-testid="back-office-support">
            <h2 className="text-3xl font-bold text-primary mb-6">Back-Office Support Services</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Essential administrative and operational tasks that support business functions, freeing up internal resources to focus on core, revenue-generating activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div data-testid="document-management">
                <h3 className="text-xl font-semibold text-primary mb-3">Document Management</h3>
                <p className="text-muted-foreground">Organizing, storing, and retrieving files/records to ensure efficient access to important information.</p>
              </div>
              <div data-testid="order-processing">
                <h3 className="text-xl font-semibold text-primary mb-3">Order Processing & Fulfillment</h3>
                <p className="text-muted-foreground">Managing orders, updating databases, and coordinating shipments for smooth operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SoftwareServiceDetail() {
  const { t } = useTranslation();

  const serviceCards = [
    {
      logoSrc: globeIcon,
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with modern platforms, payment integration, and user-friendly interfaces.",
      slug: "ecommerce",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      logoSrc: gearsIcon,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
      slug: "mobile",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      logoSrc: cloudIcon,
      title: "Cloud Infrastructure Optimization",
      description: "Scalable cloud solutions, migration services, and infrastructure optimization for enhanced performance.",
      slug: "cloud",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      logoSrc: gearsIcon,
      title: "Test Automation",
      description: "Comprehensive testing frameworks, automated testing solutions, and quality assurance services.",
      slug: "testing",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      logoSrc: scaleIcon,
      title: "LegalTech Solutions",
      description: "Legal case management, document automation, compliance solutions, and legal workflow optimization.",
      slug: "legaltech",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      logoSrc: globeIcon,
      title: "Web Portal Development",
      description: "Enterprise portals, customer portals, and content management systems with modern architecture.",
      slug: "webportal",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      logoSrc: bankIcon,
      title: "Fintech Solutions",
      description: "Financial applications, banking solutions, payment processing, and financial technology platforms.",
      slug: "fintech",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      logoSrc: lightbulbIcon,
      title: "AI Solutions",
      description: "Artificial intelligence applications, machine learning models, and intelligent automation solutions.",
      slug: "ai",
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600"
    }
  ];

  const industries = [
    {
      logoSrc: globeIcon,
      title: "E-commerce",
      description: "Online retail platforms, payment gateways, inventory management systems"
    },
    {
      logoSrc: bankIcon,
      title: "Fintech", 
      description: "Financial applications, banking solutions, payment processing systems"
    },
    {
      logoSrc: scaleIcon,
      title: "Legal Tech",
      description: "Legal case management, document automation, compliance solutions"
    },
    {
      logoSrc: networkIcon,
      title: "Web Portals",
      description: "Enterprise portals, customer portals, content management systems"
    }
  ];


  // First row of technologies (moves right to left)
  const techStackRow1 = [
    { logo: restApiLogo, name: "REST API" },
    { logo: joutLogo, name: "JOUT" },
    { logo: tensorFlowLogo, name: "TensorFlow" },
    { logo: angularJsLogo, name: "AngularJS" },
    { logo: sqlServerLogo, name: "SQL Server" },
    { logo: postgreSQLLogo, name: "PostgreSQL" },
    { logo: awsLogo, name: "AWS" },
    { logo: jmeterLogo, name: "Apache JMeter" },
    { logo: appiumLogo, name: "Appium" },
    { logo: aspNetLogo, name: "ASP.NET" }
  ];

  // Second row of technologies (moves left to right)  
  const techStackRow2 = [
    { logo: css3Logo, name: "CSS3" },
    { logo: djangoLogo, name: "Django" },
    { logo: oracleLogo, name: "Oracle" },
    { logo: graphQLLogo, name: "GraphQL" },
    { logo: dockerLogo, name: "Docker" },
    { logo: elasticsearchLogo, name: "Elasticsearch" },
    { logo: firebaseLogo, name: "Firebase" },
    { logo: geminiLogo, name: "Gemini" },
    { logo: gitLabLogo, name: "GitLab" },
    { logo: goLogo, name: "Go" }
  ];

  const developmentProcess = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "Understanding requirements and creating detailed project roadmaps",
      bgColor: "bg-accent"
    },
    {
      number: 2,
      title: "Design & Architecture", 
      description: "Creating scalable system architecture and user experience design",
      bgColor: "bg-primary"
    },
    {
      number: 3,
      title: "Development & Testing",
      description: "Agile development with continuous integration and testing", 
      bgColor: "bg-secondary"
    },
    {
      number: 4,
      title: "Deployment & Support",
      description: "Seamless deployment and ongoing maintenance support",
      bgColor: "bg-accent"
    }
  ];

  return (
    <div className="pt-16" data-testid="software-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="software-title">Software Outsourcing & IT Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="software-description">
              Custom software development, mobile applications, cloud infrastructure optimization, and specialized solutions tailored for various industries including e-commerce, fintech, legal tech, and web portals.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {serviceCards.map((service, index) => (
              <div key={index} className={`group service-card ${service.bgColor} rounded-xl p-6 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden`} data-testid={`service-card-${service.slug}`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                  <img 
                    src={service.logoSrc} 
                    alt={`${service.title} logo`} 
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-white/90 mb-4 text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <Button className="group/btn bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative z-10 w-full text-sm" data-testid={`button-see-more-${service.slug}`}>
                    See More
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Industry Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center" data-testid="industry-specializations-title">Industry Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center" data-testid={`industry-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <img 
                      src={industry.logoSrc} 
                      alt={`${industry.title} logo`} 
                      className="w-10 h-10 object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-muted rounded-xl p-8 mb-16 overflow-hidden" data-testid="technology-stack">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Technology Stack</h2>
            
            {/* First Row - Moving Right to Left */}
            <div className="relative mb-8">
              <div className="flex animate-scroll-right-to-left">
                {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 text-center" data-testid={`tech-row1-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg p-2">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left to Right */}
            <div className="relative">
              <div className="flex animate-scroll-left-to-right">
                {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 text-center" data-testid={`tech-row2-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg p-2">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" data-testid="development-process-title">Our Development Process</h2>
              <div className="space-y-6">
                {developmentProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`process-step-${step.number}`}>
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Software development team working on computers" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="development-team-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Individual Service Detail Components

function EcommerceDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: globeIcon,
      title: "Custom E-commerce Platforms",
      description: "Tailored online stores built from the ground up to match your unique business requirements and brand identity."
    },
    {
      icon: calculatorIcon,
      title: "Shopping Cart Development",
      description: "Intuitive shopping cart systems with seamless checkout processes that minimize cart abandonment rates."
    },
    {
      icon: bankIcon,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple payment options including credit cards, digital wallets, and cryptocurrencies."
    },
    {
      icon: documentIcon,
      title: "Product Catalog Management",
      description: "Advanced product management systems with categories, filters, search functionality, and inventory tracking."
    },
    {
      icon: reportIcon,
      title: "Order Management Systems",
      description: "Comprehensive order processing workflows from purchase to delivery with real-time tracking capabilities."
    },
    {
      icon: scaleIcon,
      title: "Security Implementation",
      description: "Enterprise-grade security measures including SSL certificates, PCI compliance, and fraud protection."
    }
  ];

  const technologiesData = [
    { name: "React", icon: restApiLogo, description: "Modern frontend framework" },
    { name: "Angular", icon: angularJsLogo, description: "Enterprise web framework" },
    { name: "Node.js", icon: joutLogo, description: "Server-side JavaScript runtime" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Advanced relational database" },
    { name: "AWS", icon: awsLogo, description: "Cloud infrastructure platform" },
    { name: "Docker", icon: dockerLogo, description: "Containerization platform" },
    { name: "GraphQL", icon: graphQLLogo, description: "API query language" },
    { name: "Firebase", icon: firebaseLogo, description: "Real-time database platform" }
  ];

  const additionalFeatures = [
    "Inventory Management",
    "Customer Account Management", 
    "Multi-currency Support",
    "Mobile-responsive Design",
    "SEO Optimization",
    "Analytics and Reporting"
  ];

  return (
    <div className="pt-16" data-testid="ecommerce-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6" data-testid="ecommerce-title">
                E-commerce Development
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="ecommerce-description">
              Complete e-commerce solutions with modern platforms, payment integration, and user-friendly interfaces designed to drive sales and enhance customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Core Features & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive e-commerce solutions designed to maximize your online business potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <img 
                      src={feature.icon} 
                      alt={`${feature.title} icon`} 
                      className="w-8 h-8 object-contain filter brightness-0 invert" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks powering modern e-commerce solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} logo`} 
                      className="w-10 h-10 object-contain" 
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileAppDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: gearsIcon,
      title: "Native iOS Development",
      description: "High-performance iOS applications built with Swift and Objective-C for optimal user experience and device integration."
    },
    {
      icon: gearsIcon,
      title: "Native Android Development",
      description: "Feature-rich Android applications developed with Kotlin and Java, leveraging the latest Android SDK capabilities."
    },
    {
      icon: globeIcon,
      title: "Cross-platform Solutions",
      description: "Unified codebase apps using React Native and Flutter for faster development and consistent user experience across platforms."
    },
    {
      icon: peopleIcon,
      title: "UI/UX Design",
      description: "Intuitive and engaging mobile interfaces designed following platform-specific guidelines and user experience best practices."
    },
    {
      icon: searchIcon,
      title: "App Store Optimization",
      description: "Strategic optimization for app store visibility, including metadata, screenshots, and keyword optimization."
    },
    {
      icon: networkIcon,
      title: "API Integration",
      description: "Seamless integration with third-party services, RESTful APIs, and backend systems for enhanced functionality."
    }
  ];

  const technologiesData = [
    { name: "React Native", icon: restApiLogo, description: "Cross-platform mobile framework" },
    { name: "Firebase", icon: firebaseLogo, description: "Backend-as-a-Service platform" },
    { name: "AWS Mobile", icon: awsLogo, description: "Cloud mobile development platform" },
    { name: "Docker", icon: dockerLogo, description: "Containerization for mobile backends" },
    { name: "GraphQL", icon: graphQLLogo, description: "API query language for mobile" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Reliable mobile app database" },
    { name: "TensorFlow", icon: tensorFlowLogo, description: "Machine learning for mobile" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "Search and analytics engine" }
  ];

  const additionalFeatures = [
    "Push Notifications",
    "Offline Functionality", 
    "In-app Purchases",
    "Social Media Integration",
    "Analytics Integration",
    "App Maintenance & Updates"
  ];

  return (
    <div className="pt-16" data-testid="mobile-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6" data-testid="mobile-title">
                Mobile App Development
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="mobile-description">
              Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Mobile App Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete mobile development solutions from concept to deployment across iOS and Android platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <img 
                      src={feature.icon} 
                      alt={`${feature.title} icon`} 
                      className="w-8 h-8 object-contain filter brightness-0 invert" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern frameworks and tools for building scalable, performant mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} logo`} 
                      className="w-10 h-10 object-contain" 
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CloudInfrastructureDetail() {
  const { t } = useTranslation();
  
  const features = [
    "Cloud Migration Services",
    "Infrastructure as Code (IaC)",
    "Auto-scaling Solutions",
    "Load Balancing",
    "Database Optimization",
    "Security Implementation",
    "Monitoring & Logging",
    "Cost Optimization",
    "Disaster Recovery",
    "Performance Tuning",
    "CI/CD Pipeline Setup",
    "Container Orchestration"
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker",
    "Kubernetes", "Terraform", "Ansible", "Jenkins",
    "CloudFormation", "Prometheus", "Grafana", "ELK Stack"
  ];

  return (
    <div className="pt-16" data-testid="cloud-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="cloud-title">Cloud Infrastructure Optimization</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="cloud-description">
              Scalable cloud solutions, migration services, and infrastructure optimization for enhanced performance and cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Services Offered</h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Cloud Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-3 text-center">
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TestAutomationDetail() {
  const { t } = useTranslation();
  
  const features = [
    "Automated Testing Frameworks",
    "Unit Testing",
    "Integration Testing",
    "End-to-End Testing",
    "Performance Testing",
    "Security Testing",
    "API Testing",
    "Mobile App Testing",
    "Cross-browser Testing",
    "Regression Testing",
    "Load Testing",
    "Continuous Integration Testing"
  ];

  const technologies = [
    "Selenium", "Cypress", "Jest", "Mocha",
    "Puppeteer", "Playwright", "JMeter", "Postman",
    "TestNG", "JUnit", "Appium", "Robot Framework"
  ];

  return (
    <div className="pt-16" data-testid="testing-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="testing-title">Test Automation</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="testing-description">
              Comprehensive testing frameworks, automated testing solutions, and quality assurance services to ensure software reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Testing Services</h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Testing Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-3 text-center">
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LegalTechDetail() {
  const { t } = useTranslation();
  
  const features = [
    "Case Management Systems",
    "Document Automation",
    "Contract Management",
    "Compliance Tracking",
    "Legal Research Tools",
    "Client Portal Development",
    "Billing & Time Tracking",
    "Court Filing Systems",
    "Legal Analytics",
    "E-discovery Solutions",
    "Legal Workflow Automation",
    "Regulatory Compliance Tools"
  ];

  const technologies = [
    "Microsoft .NET", "Java", "Python", "React",
    "Angular", "Node.js", "PostgreSQL", "MongoDB",
    "Elasticsearch", "AWS", "Azure", "Docker"
  ];

  return (
    <div className="pt-16" data-testid="legaltech-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="legaltech-title">LegalTech Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="legaltech-description">
              Legal case management, document automation, compliance solutions, and legal workflow optimization for modern law practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Legal Solutions</h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-3 text-center">
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WebPortalDetail() {
  const { t } = useTranslation();
  
  const features = [
    "Enterprise Portals",
    "Customer Portals", 
    "Employee Portals",
    "Partner Portals",
    "Content Management Systems",
    "User Authentication & Authorization",
    "Dashboard Development",
    "Document Management",
    "Workflow Management",
    "Integration Capabilities",
    "Mobile Responsiveness",
    "Analytics & Reporting"
  ];

  const technologies = [
    "React", "Angular", "Vue.js", "Node.js",
    "Express.js", "Laravel", "Django", "Spring Boot",
    "PostgreSQL", "MongoDB", "Redis", "GraphQL"
  ];

  return (
    <div className="pt-16" data-testid="webportal-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="webportal-title">Web Portal Development</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="webportal-description">
              Enterprise portals, customer portals, and content management systems with modern architecture and seamless user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Portal Solutions</h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-3 text-center">
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FintechDetail() {
  const { t } = useTranslation();
  
  const features = [
    "Payment Processing Systems",
    "Digital Banking Solutions",
    "Financial Analytics",
    "Risk Management Tools",
    "Cryptocurrency Integration",
    "Fraud Detection Systems",
    "KYC/AML Compliance",
    "Trading Platforms",
    "Personal Finance Apps",
    "Investment Management",
    "Insurance Technology",
    "Regulatory Reporting"
  ];

  const technologies = [
    "Java", "Python", "Node.js", "React",
    "Kubernetes", "Docker", "PostgreSQL", "MongoDB",
    "Stripe", "Plaid", "AWS", "Blockchain"
  ];

  return (
    <div className="pt-16" data-testid="fintech-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="fintech-title">Fintech Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="fintech-description">
              Financial applications, banking solutions, payment processing, and financial technology platforms with robust security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Fintech Services</h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-3 text-center">
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AIDetail() {
  const { t } = useTranslation();
  
  const features = [
    "Machine Learning Models",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Chatbot Development",
    "Recommendation Systems",
    "Automated Decision Making",
    "Deep Learning Solutions",
    "AI-powered Analytics",
    "Intelligent Automation",
    "Neural Networks",
    "AI Consulting Services"
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Python", "R",
    "Scikit-learn", "Keras", "OpenAI GPT", "Azure AI",
    "AWS SageMaker", "Google AI Platform", "Jupyter", "Docker"
  ];

  return (
    <div className="pt-16" data-testid="ai-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="ai-title">AI Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="ai-description">
              Artificial intelligence applications, machine learning models, and intelligent automation solutions to transform your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">AI Services</h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">AI Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-3 text-center">
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
