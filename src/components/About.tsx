import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Award, Users } from 'lucide-react';
import packieMascot from '@/assets/packie-mascot.jpg';
import duckMascot from '@/assets/duck-mascot.jpg';

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Award, value: "500+", label: "Devices Repaired Monthly" },
    { icon: Heart, value: "100%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Meet the Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Packie & Friends
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your friendly neighborhood tech experts, dedicated to making technology accessible and affordable for everyone
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Meet Packie, our beloved red panda mascot who represents everything we stand for at PacMac Mobile. 
              Just like Packie's careful and caring nature, we treat every device with the utmost attention and care.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Founded with a mission to make premium tech services accessible to everyone, PacMac Mobile has grown 
              from a small repair shop to a full-service tech solutions provider. We believe technology should enhance 
              your life, not complicate it.
            </p>
            <p className="text-lg text-muted-foreground">
              Our partnership with Red Pocket Mobile allows us to offer complete mobile solutions - from device repair 
              and rent-to-own programs to affordable mobile plans that keep you connected.
            </p>
          </div>

          {/* Mascots */}
          <div className="relative">
            <Card className="p-8 shadow-glow">
              <CardContent className="text-center">
                <div className="flex justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <img 
                      src={packieMascot} 
                      alt="Packie the Red Panda" 
                      className="w-24 h-24 rounded-full shadow-glow animate-bounce-gentle mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-primary">Packie</h4>
                    <p className="text-sm text-muted-foreground">Tech Expert</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src={duckMascot} 
                      alt="Duck Tech Assistant" 
                      className="w-24 h-24 rounded-full shadow-glow animate-float mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-secondary">Quackers</h4>
                    <p className="text-sm text-muted-foreground">Customer Care</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "At PacMac Mobile, every customer becomes part of our family. We're here to solve your tech problems 
                  with a smile and make sure you leave happier than when you arrived!"
                </p>
                <div className="text-right mt-4">
                  <span className="text-sm font-medium text-primary">- Packie & Quackers</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <stat.icon className="text-primary-foreground" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;