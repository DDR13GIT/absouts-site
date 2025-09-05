import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  variant: "primary" | "secondary" | "accent";
  onLearnMore: () => void;
}

export function ServiceCard({ title, description, features, icon, variant, onLearnMore }: ServiceCardProps) {
  const variantStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground"
  };

  return (
    <Card className="service-card h-full" data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${variantStyles[variant]}`}>
          <i className={`${icon} text-2xl`}></i>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-accent mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant="ghost" 
          className="text-accent hover:text-accent/80 font-semibold p-0"
          onClick={onLearnMore}
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More →
        </Button>
      </CardContent>
    </Card>
  );
}
