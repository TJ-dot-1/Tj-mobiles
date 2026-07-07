"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { motion } from "framer-motion";
import { Calendar, Smartphone, Search, Wrench, ShieldCheck, CheckCircle } from "lucide-react";

const steps = [
  { title: "Book Repair", description: "Schedule your repair online or just walk in.", icon: Calendar },
  { title: "Bring Device", description: "Drop off your broken device at our store.", icon: Smartphone },
  { title: "Diagnosis", description: "We run a full diagnostic to find the exact issue.", icon: Search },
  { title: "Repair", description: "Our experts fix your device using genuine parts.", icon: Wrench },
  { title: "Quality Testing", description: "Rigorous testing to ensure everything works perfectly.", icon: ShieldCheck },
  { title: "Collection", description: "Pick up your device looking and working like new.", icon: CheckCircle },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-secondary/50 relative border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Our Simple <span className="text-primary">Repair Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've streamlined our repair process to get your device back in your hands as quickly as possible without compromising on quality.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/5 via-primary to-primary/5 rounded-full" />

          <StaggerContainer className="space-y-12" staggerChildren={0.2} viewMargin="-100px">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <StaggerItem key={i}>
                  <div className={`relative flex items-center md:justify-between gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Icon Node */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-background border-4 border-primary flex items-center justify-center text-primary z-10 shadow-[0_0_20px_rgba(0,123,255,0.3)]">
                      <step.icon size={24} />
                    </div>

                    {/* Empty Space for alignment on Desktop */}
                    <div className="hidden md:block w-1/2" />

                    {/* Content */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="p-6 rounded-3xl bg-white/5 dark:bg-black/40 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl backdrop-blur-md">
                        <div className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">Step {i + 1}</div>
                        <h3 className="font-heading font-bold text-xl text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
