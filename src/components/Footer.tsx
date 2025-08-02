import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import packieMascot from '@/assets/packie-mascot.jpg';

const Footer = () => {
  const serviceLinks = [
    "iPhone Repair",
    "iPad Repair", 
    "MacBook Repair",
    "Apple Watch Repair",
    "Tech Trade-In",
    "Rent-to-Own Devices"
  ];

  const companyLinks = [
    "About Us",
    "Our Story",
    "Careers",
    "Press",
    "Partnership Program",
    "Affiliate Program"
  ];

  const supportLinks = [
    "Help Center",
    "Contact Support",
    "Warranty Info",
    "Repair Status",
    "Return Policy",
    "Privacy Policy"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={packieMascot} 
                  alt="Packie - PacMac Mobile Mascot" 
                  className="h-12 w-12 rounded-full shadow-glow"
                />
                <div>
                  <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    PacMac Mobile
                  </span>
                  <p className="text-sm text-muted-foreground">with Packie</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Your trusted tech partner for Apple repairs, device trade-ins, rent-to-own solutions, 
                and Red Pocket Mobile plans.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook size={16} />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram size={16} />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter size={16} />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3 mb-6">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Quick Contact */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={16} className="text-primary" />
                  <span>(555) PAC-TECH</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={16} className="text-primary" />
                  <span>hello@pacmacmobile.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span>123 Tech Street, Mobile City</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 PacMac Mobile. All rights reserved. Made with ❤️ by Packie & team.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Red Pocket Partnership Banner */}
        <div className="py-4 bg-gradient-tech rounded-lg mb-8">
          <div className="text-center">
            <p className="text-tech-blue-foreground text-sm">
              Proud partner of <span className="font-semibold">Red Pocket Mobile</span> • 
              Get exclusive mobile plan discounts with any service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;