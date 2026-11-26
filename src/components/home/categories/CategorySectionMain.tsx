import React from "react";
import { CategoriesSection } from "./categories-section";
import { TopSixCategory } from "@/types/type";

const CategorySectionMain = async () => {
  let categoryData: TopSixCategory[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top-six-category`,
      {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (response.ok) {
      categoryData = await response.json();
    }
  } catch (err) {
    console.error("Failed to load categories:", err);
  }
  return (
    <>
      <CategoriesSection categoryData={categoryData} />
    </>
  );
};

export default CategorySectionMain;
