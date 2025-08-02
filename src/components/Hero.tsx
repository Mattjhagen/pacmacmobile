import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Wrench, CreditCard } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="PacMac Mobile - Expert Apple Repair and Tech Services"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Meet</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-float">
              Packie
            </span>
            <span className="block text-2xl md:text-4xl text-muted-foreground mt-2">
              Your Trusted Tech Partner
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert Apple repairs, hassle-free tech trade-ins, and flexible rent-to-own devices. 
            Plus exclusive Red Pocket Mobile partnership benefits!
          </p>

          {/* Services preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-card">
              <Wrench className="text-primary" size={20} />
              <span className="text-sm font-medium">Apple Repair</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-card">
              <CreditCard className="text-primary" size={20} />
              <span className="text-sm font-medium">Trade-In</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-card">
              <Smartphone className="text-primary" size={20} />
              <span className="text-sm font-medium">Rent-to-Own</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="hero" className="group">
              Start Your Repair
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Certified Apple Technicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Red Pocket Mobile Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
              <span>Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;