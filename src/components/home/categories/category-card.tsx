"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Category, TopSixCategory } from "@/types/type";

export function CategoryCard({
  category,
  index,
}: {
  category: TopSixCategory;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.38,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-3 shadow-xs transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-lg dark:hover:border-primary/50 dark:hover:shadow-primary/5">
        {/* Category image with zoom + light sheen on hover */}
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-muted/70 dark:bg-muted/40">
          <Image
            src={category.equipmentImage}
            alt={category._id}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            loading="eager"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-107"
          />

          {/* Subtle gradient vignette on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Diagonal sheen sweep */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[180%]"
          />
        </div>

        {/* Category details */}
        <div className="flex flex-1 flex-col gap-1 px-1 pb-1">
          <h3 className="text-base font-bold tracking-tight text-card-foreground transition-colors duration-200 group-hover:text-primary sm:text-lg">
            {category._id}
          </h3>

          <Link
            href={`/equipment?category=${category._id}`}
            className="mt-auto flex items-center justify-end gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary"
          >
            <span>Explore Category</span>
            <ArrowRight className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
