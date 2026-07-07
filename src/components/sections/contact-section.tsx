"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get your device fixed? Send us a message, give us a call, or drop by our store.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Map & Direct Contact */}
          <FadeIn delay={0.1}>
            <div className="h-full flex flex-col">
              <div className="w-full h-[400px] bg-muted rounded-3xl overflow-hidden border border-border shadow-inner relative mb-8">
                {/* Google Map Placeholder */}
                <div className="absolute inset-0 bg-background/50 flex flex-col items-center justify-center backdrop-blur-sm z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 animate-bounce">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <h3 className="font-bold text-xl">TJ Phone Repairs</h3>
                  <p className="text-muted-foreground mt-2 text-center max-w-[250px]">123 Tech Avenue, Silicon Valley, CA 94025</p>
                  <Button variant="outline" className="mt-6 rounded-full">
                    Get Directions
                  </Button>
                </div>
                {/* Decorative Map BG */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
              </div>

              <div className="flex gap-4">
                <Button asChild className="flex-1 rounded-2xl h-14 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20">
                  <a href="https://wa.me/254706667129" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" /> WhatsApp Us
                  </a>
                </Button>
                <Button asChild className="flex-1 rounded-2xl h-14 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  <a href="tel:0706667129">
                    <Phone className="mr-2" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right: Contact Form */}
          <FadeIn delay={0.2}>
            <div className="bg-white/5 dark:bg-black/40 border border-border rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
              <h3 className="font-heading font-bold text-2xl mb-8">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-background/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="0706667129" className="bg-background/50 border-white/10" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="device">Device Model</Label>
                    <Input id="device" placeholder="e.g. iPhone 14 Pro" className="bg-background/50 border-white/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem">What's the issue?</Label>
                  <select 
                    id="problem" 
                    className="flex h-10 w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled selected>Select an issue...</option>
                    <option value="screen">Broken Screen</option>
                    <option value="battery">Battery Replacement</option>
                    <option value="charging">Charging Port</option>
                    <option value="water">Water Damage</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about the problem..." 
                    className="min-h-[120px] bg-background/50 border-white/10 resize-none" 
                  />
                </div>

                <Button type="submit" className="w-full rounded-xl h-14 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(0,123,255,0.3)] transition-all hover:shadow-[0_0_25px_rgba(0,123,255,0.5)]">
                  Request Free Quote
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
