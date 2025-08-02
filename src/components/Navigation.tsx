import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Smartphone, Wrench, CreditCard } from 'lucide-react';
import packieMascot from '@/assets/packie-mascot.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services', icon: Wrench },
    { name: 'Trade-In', href: '#trade-in', icon: CreditCard },
    { name: 'Rent-to-Own', href: '#rent-to-own', icon: Smartphone },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={packieMascot} 
              alt="Packie - PacMac Mobile Mascot" 
              className="h-10 w-10 rounded-full shadow-glow animate-bounce-gentle"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PacMac Mobile
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                with Packie
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            ))}
            <Button variant="tech" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-card">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:bg-accent transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-2">
                <Button variant="tech" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;