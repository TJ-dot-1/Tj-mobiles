"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Smartphone, BatteryCharging, Zap, Camera, Volume2, 
  Droplets, ScanFace, UploadCloud, Database, Unlock 
} from "lucide-react";

const services = [
  { title: "Screen Replacement", time: "30 mins", icon: Smartphone, description: "We replace cracked or broken screens with high-quality OEM parts. Includes a free diagnostic and a comprehensive 1-year warranty on touch functionality and display quality." },
  { title: "Battery Replacement", time: "20 mins", icon: BatteryCharging, description: "Is your phone dying quickly or randomly shutting down? We'll install a brand new battery to restore your device's original battery life and peak performance." },
  { title: "Charging Port", time: "45 mins", icon: Zap, description: "If your device won't charge or the charging cable feels loose, our expert technicians can clean, repair, or completely replace the charging port safely." },
  { title: "Camera Repair", time: "40 mins", icon: Camera, description: "Fix blurry photos, cracked camera lenses, or malfunctioning sensors. We repair and replace both front-facing and rear cameras to get you back to taking perfect shots." },
  { title: "Speaker Repair", time: "30 mins", icon: Volume2, description: "Can't hear calls or music clearly? We repair broken earpieces, bottom loud speakers, and microphones to ensure crystal clear audio on every call." },
  { title: "Water Damage", time: "24 hours", icon: Droplets, description: "Dropped your phone in water? Turn it off immediately and bring it to us. We use advanced ultrasonic cleaning to remove corrosion and recover your device and data." },
  { title: "Face ID Repair", time: "1 hour", icon: ScanFace, description: "TrueDepth camera and Face ID sensor repair. We have the micro-soldering expertise to often fix Face ID components without needing a full motherboard replacement." },
  { title: "Software Updates", time: "30 mins", icon: UploadCloud, description: "Stuck in a boot loop, experiencing crashes, or just need a clean installation? We can flash the latest firmware, fix software glitches, and optimize your device." },
  { title: "Data Recovery", time: "Varies", icon: Database, description: "Accidentally deleted photos or have a completely dead motherboard? We offer advanced data recovery services to extract and save your most precious memories." },
  { title: "Phone Unlocking", time: "Varies", icon: Unlock, description: "Carrier network unlocks and passcode resets. We can help you gain access to your locked device quickly, safely, and entirely legally." },
];

export function ServicesSection() {
  return (
    <section id="repairs" className="py-24 bg-background relative border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Premium <span className="text-primary">Repair Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We fix everything from shattered screens to dead batteries. Most repairs are completed in under an hour with genuine replacement parts.
          </p>
        </FadeIn>

        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          staggerChildren={0.05}
        >
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <Card className="group h-full bg-white/5 dark:bg-black/40 border-border hover:border-primary/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,123,255,0.15)] overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-6 flex-grow">
                    Est. Time: <span className="font-semibold text-foreground/80">{service.time}</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full text-primary hover:text-white hover:bg-primary transition-colors group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:text-white dark:group-hover:bg-primary">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-background border-border">
                      <DialogHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                          <service.icon size={24} />
                        </div>
                        <DialogTitle className="text-2xl font-heading">{service.title}</DialogTitle>
                        <DialogDescription className="text-base pt-4 text-foreground/80 leading-relaxed">
                          {service.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-between items-center mt-6 pt-6 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          Takes approx. <span className="font-bold text-foreground">{service.time}</span>
                        </div>
                        <a 
                          href="https://wa.me/254706667129" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-sm font-medium h-9 px-4 bg-primary hover:bg-primary/90 text-white rounded-xl"
                        >
                          Book Now
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
