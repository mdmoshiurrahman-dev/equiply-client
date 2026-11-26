"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "./categories.data";
import { CategoryCard } from "./category-card";
import { TopSixCategory } from "@/types/type";

export function CategoriesSection({
  categoryData,
}: {
  categoryData: TopSixCategory[];
}) {
  return (
    <section aria-labelledby="categories-heading" className="py-14 sm:py-16">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Explore by Category
        </p>

        <h2
          id="categories-heading"
          className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Find the Right Equipment for Every Project
        </h2>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          From heavy-duty machinery to professional tools, discover equipment
          that gets the job done.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((category, index) => (
          <CategoryCard key={category._id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
