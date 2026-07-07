"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

const products = [
  { name: "Premium Silicone Case", category: "Phone Cases", price: "Ksh 3,900", rating: 4.9, image: "https://images.unsplash.com/photo-1603313011101-320f66a4f34d?q=80&w=600&auto=format&fit=crop" },
  { name: "Tempered Glass Shield", category: "Screen Protectors", price: "Ksh 2,500", rating: 4.8, image: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=600&auto=format&fit=crop" },
  { name: "65W Fast Charger Base", category: "Chargers", price: "Ksh 6,500", rating: 5.0, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop" },
  { name: "Braided USB-C to C Cable", category: "USB Cables", price: "Ksh 1,950", rating: 4.7, image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ea9?q=80&w=600&auto=format&fit=crop" },
  { name: "Pro Wireless Earbuds", category: "Earbuds", price: "Ksh 16,900", rating: 4.9, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop" },
  { name: "Active Smart Watch", category: "Smart Watches", price: "Ksh 25,900", rating: 4.8, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop" },
  { name: "Portable Bass Speaker", category: "Bluetooth Speakers", price: "Ksh 11,500", rating: 4.7, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop" },
  { name: "20,000mAh Power Bank", category: "Power Banks", price: "Ksh 7,800", rating: 4.9, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop" },
];

export function AccessoriesSection() {
  return (
    <section id="accessories" className="py-24 bg-background relative border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Shop <span className="text-primary">Premium Accessories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Elevate your device experience with our curated selection of high-quality cases, chargers, and audio gear.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 border-primary/20 hover:bg-primary/5">
            View All Products
          </Button>
        </FadeIn>

        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerChildren={0.1}
        >
          {products.map((product, i) => (
            <StaggerItem key={i}>
              <Card className="group h-full bg-white/5 dark:bg-black/40 border-border overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-black/5 dark:bg-white/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100 mix-blend-multiply dark:mix-blend-normal" 
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-foreground">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        size={14} 
                        className={idx < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"} 
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">{product.rating}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="icon" className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                      <ShoppingCart size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
