"use client";

import * as React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a repair take?",
    answer: "Most common repairs, such as screen or battery replacements, are completed within 30 to 45 minutes. More complex issues like water damage or motherboard repairs may take 24-48 hours."
  },
  {
    question: "Do you use genuine parts?",
    answer: "Yes, we prioritize using genuine OEM (Original Equipment Manufacturer) parts to ensure the highest quality and longevity of your repair. When OEM parts aren't available, we use the highest-grade premium aftermarket parts."
  },
  {
    question: "Do repairs come with a warranty?",
    answer: "Absolutely. We stand behind our work with a comprehensive 1-year warranty on all parts and labor. If the same issue arises due to a defective part, we'll fix it for free."
  },
  {
    question: "Can I wait while my phone is repaired?",
    answer: "Yes! We have a comfortable waiting area where you can relax while our technicians work on your device. For quick repairs, you'll be in and out in no time."
  },
  {
    question: "Do you repair water damage?",
    answer: "Yes, we specialize in water damage recovery. We use advanced ultrasonic cleaning equipment to remove corrosion from the motherboard. While water damage can be tricky, our success rate is very high."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Here are some of the most common inquiries we receive.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="bg-white/5 dark:bg-black/40 border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
