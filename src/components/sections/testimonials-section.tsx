"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    review: "Incredible service! They fixed my shattered iPhone screen in 20 minutes flat. It looks brand new and the staff was extremely friendly. Highly recommend TJ Phone Repairs!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    location: "San Jose, CA",
    review: "I thought my water-damaged phone was completely dead. These guys managed to recover all my photos and fix the motherboard. Absolute lifesavers!",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Emily Rodriguez",
    location: "Oakland, CA",
    review: "Best prices in the Bay Area. I got my iPad battery replaced and bought a new protective case. The quality of their accessories is top-notch.",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "David Kim",
    location: "Palo Alto, CA",
    review: "Very professional and transparent about pricing. No hidden fees. They explained exactly what was wrong with my charging port before fixing it.",
    image: "https://i.pravatar.cc/150?img=14"
  },
  {
    name: "Jessica Smith",
    location: "Berkeley, CA",
    review: "Got my Samsung Galaxy screen fixed here. The colors and touch sensitivity are perfect, just like the original. Great warranty too!",
    image: "https://i.pravatar.cc/150?img=9"
  }
];

// Duplicate for infinite scroll effect
const allTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Loved by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say about our repair services.
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max px-6"
        >
          {allTestimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/5 dark:bg-black/40 border border-border backdrop-blur-md shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={18} className="fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/90 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.review}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" 
                />
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
