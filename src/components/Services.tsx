import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Smartphone, CreditCard, Clock, CheckCircle, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Apple Device Repair",
      description: "Expert repair services for iPhone, iPad, MacBook, and Apple Watch",
      features: ["Screen replacement", "Battery replacement", "Water damage repair", "Logic board repair"],
      price: "Starting at $49",
      color: "primary"
    },
    {
      icon: CreditCard,
      title: "Tech Trade-In",
      description: "Get instant cash for your old devices in any condition",
      features: ["Instant quotes", "All device conditions", "Quick payment", "Data wiping included"],
      price: "Get Quote Now",
      color: "tech-blue"
    },
    {
      icon: Smartphone,
      title: "Rent-to-Own Devices",
      description: "Flexible device financing with no credit checks required",
      features: ["No credit check", "Low weekly payments", "Latest devices", "Upgrade anytime"],
      price: "From $15/week",
      color: "secondary"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Service",
      description: "Most repairs completed same day"
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "90-day warranty on all repairs"
    },
    {
      icon: Shield,
      title: "Certified Technicians",
      description: "Apple-certified repair specialists"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Packie's Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From expert repairs to flexible device solutions, we've got all your tech needs covered
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow`}>
                  <service.icon className="text-primary-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-primary flex-shrink-0" size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose PacMac Mobile?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;