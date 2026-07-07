"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";

const brands = [
  "Apple", "Samsung", "Google Pixel", "Huawei", "Xiaomi",
  "Oppo", "Vivo", "Tecno", "Infinix", "Realme"
];

export function BrandsSection() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">
            Trusted Experts For All Major Brands
          </p>
        </FadeIn>

        <StaggerContainer 
          className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-16"
          staggerChildren={0.05}
        >
          {brands.map((brand, i) => (
            <StaggerItem key={i}>
              <div className="text-2xl md:text-3xl font-heading font-extrabold text-muted-foreground/40 hover:text-foreground transition-colors duration-300 cursor-default">
                {brand}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
