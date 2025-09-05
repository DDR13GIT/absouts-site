import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@absouts.com", "business@absouts.com"]
    },
    {
      icon: Phone,
      title: "Phone", 
      details: ["+1 (555) 123-4567", "+44 20 1234 5678"]
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Dhaka, Bangladesh", "Global Service Delivery"]
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM (GMT+6)" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM (GMT+6)" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="pt-16" data-testid="contact-page">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="contact-title">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="contact-description">
              Ready to transform your business with our outsourcing solutions? Get in touch with our team for a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="bg-muted rounded-xl p-8" data-testid="contact-info">
                <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${info.title.toLowerCase()}`}>
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8" data-testid="business-hours">
                <h2 className="text-2xl font-bold text-primary mb-6">Business Hours</h2>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between" data-testid={`business-hours-${schedule.day.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-semibold text-primary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white" data-testid="quick-response">
                <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
                <p className="text-white/90 mb-6">
                  Our team is available for urgent inquiries and can provide quick responses to your business needs.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-white text-primary hover:bg-gray-100" data-testid="button-whatsapp">
                    <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                  </Button>
                  <Button className="bg-white/20 text-white hover:bg-white/30" data-testid="button-skype">
                    <i className="fab fa-skype mr-2"></i>Skype
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
