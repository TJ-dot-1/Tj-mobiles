"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Gradients & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen" />
        {/* Simple glowing particle representation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/60 blur-[2px]"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <StaggerContainer delayChildren={0.2} staggerChildren={0.15}>

              <StaggerItem>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 text-foreground">
                  Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Phone Repairs</span> Done Right.
                </h1>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Fast repairs, genuine parts, affordable prices, and trusted technicians. Get your device working like new today.
                </p>
              </StaggerItem>
              
              <StaggerItem>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/254706667129" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-medium whitespace-nowrap transition-all rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_25px_rgba(0,123,255,0.5)] h-14 px-8 text-lg"
                  >
                    Book Repair
                  </a>
                  <Link 
                    href="#accessories"
                    className="inline-flex items-center justify-center font-medium whitespace-nowrap transition-all rounded-full h-14 px-8 text-lg border border-primary/20 hover:bg-primary/5 text-foreground bg-background hover:bg-muted"
                  >
                    Shop Accessories
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Floating Device Mockups */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[500px] h-full flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 md:right-4 top-10 w-[240px] xl:w-[280px] h-[500px] xl:h-[580px] rounded-[2.5rem] xl:rounded-[3rem] p-2 bg-gradient-to-b from-white/20 to-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl z-10 overflow-hidden dark:from-white/10 dark:to-white/0"
              >
                <div className="w-full h-full rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden relative bg-black">
                  <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Phone screen mockup" className="object-cover w-full h-full opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-0 md:left-4 bottom-10 w-[250px] xl:w-[280px] h-[520px] xl:h-[560px] rounded-[2.5rem] xl:rounded-[3rem] p-2 bg-gradient-to-b from-white/20 to-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl z-20 overflow-hidden dark:from-white/10 dark:to-white/0"
              >
                <div className="w-full h-full rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden relative bg-black">
                  <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop" alt="Phone repair mockup" className="object-cover w-full h-full opacity-90" />
                </div>
              </motion.div>

              {/* Floating Glass Card */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-6 xl:-left-12 top-1/2 w-48 rounded-2xl p-4 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 shadow-xl z-30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Fixed Today</div>
                    <div className="text-xs text-muted-foreground">In under 30 mins</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
