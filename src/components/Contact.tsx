import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      content: "123 Tech Street, Mobile City, MC 12345",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) PAC-TECH",
      action: "Call Now"
    },
    {
      icon: Clock,
      title: "Store Hours",
      content: "Mon-Sat: 9AM-7PM, Sun: 11AM-5PM",
      action: null
    },
    {
      icon: Mail,
      title: "Email Support",
      content: "hello@pacmacmobile.com",
      action: "Send Email"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contact Packie's Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get your device fixed or explore our services? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="text-primary" size={24} />
                <span>Send Us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Service Needed</label>
                <select className="w-full p-3 border border-input rounded-lg bg-background">
                  <option>Device Repair</option>
                  <option>Trade-In Quote</option>
                  <option>Rent-to-Own</option>
                  <option>Red Pocket Mobile Plan</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your device or question..."
                  rows={4}
                />
              </div>
              
              <Button variant="default" size="lg" className="w-full">
                Send Message
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 1 hour during business hours
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-muted-foreground mb-3">{info.content}</p>
                      {info.action && (
                        <Button variant="outline" size="sm">
                          {info.action}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-primary mx-auto mb-2" size={32} />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency */}
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-destructive mb-2">Emergency Repair?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need immediate device repair? Call our emergency line!
                </p>
                <Button variant="destructive" size="sm">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;