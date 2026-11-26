"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CalendarClock, CreditCard, ShieldCheck, Wallet } from "lucide-react";


const FEATURES = [
  {
    number: "01",
    titleTop: "Affordable",
    titleBottom: "Rental Prices",
    description:
      "Get the equipment you need at competitive prices without the cost of ownership.",
    Icon: Wallet,
  },
  {
    number: "02",
    titleTop: "Verified",
    titleBottom: "Equipment Owners",
    description:
      "Rent with confidence through trusted and verified equipment providers.",
    Icon: ShieldCheck,
  },
  {
    number: "03",
    titleTop: "Flexible",
    titleBottom: "Rental Periods",
    description:
      "Choose daily, weekly, or monthly rental periods that suit your project.",
    Icon: CalendarClock,
  },
  {
    number: "04",
    titleTop: "Secure",
    titleBottom: "Payments",
    description:
      "Complete transactions confidently with secure Stripe-powered payments.",
    Icon: CreditCard,
  },
] as const;

const HEADLINE_LINES = ["The Smarter", "Way to Rent", "Equipment."];

const EASE = [0.22, 1, 0.36, 1] as const;

export function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  const lineRevealVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.65, ease: EASE },
    },
  };

  const cardVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 24, scale: 0.97 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : 0.15 + index * 0.08,
        ease: EASE,
      },
    }),
  };

  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="py-16 sm:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column */}
        <motion.div
          className="lg:col-span-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Large subtle watermark */}
          <motion.div
            aria-hidden="true"
            initial={
              shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -24 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="select-none text-5xl font-bold tracking-tight text-foreground/[0.06] sm:text-6xl lg:text-7xl"
          >
            WHY
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/80"
          >
            WHY CHOOSE US
          </motion.p>

          {/* Main Headline with masked line-by-line reveal */}
          <h2
            id="why-choose-us-heading"
            className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl"
          >
            {HEADLINE_LINES.map((line) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span className="block" variants={lineRevealVariants}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Discover a seamless rental experience built on trust, efficiency,
            and quality equipment for professionals.
          </motion.p>
        </motion.div>

        {/* Right Column: 2x2 Feature Grid */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {FEATURES.map((item, index) => {
              const Icon = item.Icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={item.number}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative flex flex-col justify-between bg-muted/50 p-7 transition-colors duration-300 hover:bg-muted/80 sm:p-8"
                >
                  {/* Animated top accent line on hover */}
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-foreground"
                    initial={false}
                    animate={{
                      scaleX: isHovered ? 1 : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: EASE }}
                  />

                  <div>
                    {/* Icon with animated spring hover */}
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: isHovered ? -3 : 0,
                              scale: isHovered ? 1.08 : 1,
                              rotate: isHovered ? -4 : 0,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 22,
                      }}
                      className="inline-flex text-foreground"
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </motion.div>

                    {/* Numbered Title */}
                    <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl">
                      <span className="inline-block tabular-nums transition-transform duration-300 group-hover:translate-x-0.5">
                        {item.number}
                      </span>{" "}
                      — {item.titleTop}
                      <span className="block">{item.titleBottom}</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
