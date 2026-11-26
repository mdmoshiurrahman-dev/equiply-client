import React from "react";
import { CategoriesSection } from "./categories-section";
import { TopSixCategory } from "@/types/type";

const CategorySectionMain = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top-six-category`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!response.ok) {
    console.error("Failed to load categories:");
  }
  const categoryData: TopSixCategory[] = await response.json();
  return (
    <>
      <CategoriesSection categoryData={categoryData} />
    </>
  );
};

export default CategorySectionMain;
