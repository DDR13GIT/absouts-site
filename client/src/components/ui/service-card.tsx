import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon?: string;
  logoSrc?: string;
  variant: "primary" | "secondary" | "accent";
  onLearnMore: () => void;
}

export function ServiceCard({ title, description, features, icon, logoSrc, variant, onLearnMore }: ServiceCardProps) {
  const variantStyles = {
    primary: "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg",
    secondary: "bg-gradient-to-r from-secondary to-purple-600 text-white shadow-lg",
    accent: "bg-gradient-to-r from-accent to-green-600 text-white shadow-lg"
  };

  return (
    <Card className="group service-card h-full bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden" data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      
      <CardHeader className="relative z-10">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${variantStyles[variant]} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          {logoSrc ? (
            <img src={logoSrc} alt={`${title} logo`} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <i className={`${icon} text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
          )}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <ul className="space-y-3 text-sm text-muted-foreground mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
              <Check className="h-4 w-4 text-accent mr-3 group-hover:scale-125 transition-transform duration-300" />
              <span className="group-hover:text-gray-700 transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="ghost" 
          className="group/btn text-accent hover:text-white hover:bg-accent font-semibold p-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          onClick={onLearnMore}
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More 
          <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
        </Button>
      </CardContent>
    </Card>
  );
}
