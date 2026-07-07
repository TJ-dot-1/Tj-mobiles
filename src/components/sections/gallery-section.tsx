"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowLeftRight } from "lucide-react";

export function GallerySection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-background relative border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            See the <span className="text-primary">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Slide to see our incredible before and after repair transformations.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none border-2 border-border shadow-2xl"
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop" 
                alt="Repaired phone" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute bottom-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm backdrop-blur-md shadow-lg">
                After (Repaired)
              </div>
            </div>

            {/* Before Image (Clipped width) */}
            <div 
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1574676643665-c3cde3b1ad1e?q=80&w=1200&auto=format&fit=crop" 
                alt="Damaged phone" 
                className="w-full h-full object-cover pointer-events-none filter grayscale sepia-[0.3]"
              />
              <div className="absolute bottom-6 left-6 bg-destructive text-white px-4 py-2 rounded-full font-bold text-sm backdrop-blur-md shadow-lg">
                Before (Damaged)
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-primary">
                <ArrowLeftRight size={20} />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
