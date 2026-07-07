"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Zap, ShieldCheck, Diamond, Smile } from "lucide-react";

const features = [
  {
    title: "Fast Repairs",
    description: "Most repairs are done in under 30 minutes. We know your time is valuable.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Warranty Included",
    description: "Peace of mind with our comprehensive 1-year warranty on all repairs and parts.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Genuine Parts",
    description: "We use only high-quality, genuine OEM parts for unmatched performance and durability.",
    icon: Diamond,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Expert Technicians",
    description: "Certified professionals with years of experience fixing every major brand and device.",
    icon: Smile,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn>
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                Why Choose <span className="text-primary">TJ Phone Repairs?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've built our reputation on trust, quality, and speed. When you choose us, you're getting industry-leading service that ensures your device is in the best hands possible.
              </p>
              
              <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-white/5 border border-border backdrop-blur-sm">

                <div>
                  <div className="font-bold text-foreground">Trusted by 2,500+</div>
                  <div className="text-sm text-muted-foreground">happy customers in the area</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer 
            className="grid sm:grid-cols-2 gap-6"
            staggerChildren={0.15}
          >
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="p-8 rounded-3xl bg-white/5 dark:bg-black/40 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
