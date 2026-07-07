"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Users, Star, ShieldCheck, Clock } from "lucide-react";

const stats = [
  { label: "Phones Repaired", value: "2,500+", icon: Users },
  { label: "Customer Rating", value: "4.9★", icon: Star },
  { label: "Warranty Included", value: "1-Year", icon: ShieldCheck },
  { label: "Fast Turnaround", value: "Same-Day", icon: Clock },
];

export function StatisticsSection() {
  return (
    <section className="py-20 relative bg-background border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StaggerContainer 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          delayChildren={0.2}
          staggerChildren={0.1}
        >
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,123,255,0.15)] mb-2 dark:bg-black/40">
                  <stat.icon size={28} />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
