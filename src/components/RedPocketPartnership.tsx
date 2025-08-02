import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, DollarSign, Users, CheckCircle } from 'lucide-react';

const RedPocketPartnership = () => {
  const plans = [
    {
      name: "Essential",
      data: "5GB",
      price: "$15/month",
      features: ["Unlimited talk & text", "5G nationwide coverage", "Mobile hotspot"]
    },
    {
      name: "Unlimited",
      data: "Unlimited",
      price: "$25/month", 
      features: ["Unlimited everything", "Premium 5G speeds", "Mobile hotspot", "International calling"],
      popular: true
    },
    {
      name: "Family",
      data: "Unlimited",
      price: "$20/month per line",
      features: ["4+ lines discount", "Family controls", "Shared data pool", "Multi-device support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-tech text-tech-blue-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Exclusive Partnership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Red Pocket Mobile Plans
          </h2>
          <p className="text-xl text-tech-blue-foreground/80 max-w-3xl mx-auto">
            Get exclusive deals on premium mobile plans through our partnership with Red Pocket Mobile
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Special Pricing</h3>
            <p className="text-tech-blue-foreground/80">
              Exclusive discounts for PacMac Mobile customers
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Wifi size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nationwide 5G</h3>
            <p className="text-tech-blue-foreground/80">
              Access to premium nationwide 5G coverage
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-tech-blue-foreground/80">
              Combined tech and mobile service support
            </p>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-secondary scale-105' : ''} bg-white/10 backdrop-blur-sm border-white/20`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                </div>
                <p className="text-lg text-white/80 mb-6">{plan.data} Data</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-white/90">
                      <CheckCircle className="text-secondary flex-shrink-0" size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "secondary" : "outline"} 
                  className="w-full"
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-tech-blue-foreground/80 mb-6">
            Ready to switch? Bundle with device repair or rent-to-own for extra savings!
          </p>
          <Button variant="secondary" size="lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RedPocketPartnership;