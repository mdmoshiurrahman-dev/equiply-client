"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EquipmentCategoryChart } from "../category-analyze/equipment-category-chart";
import { CategoryLegend } from "../category-analyze/category-legend";
import type { EquipmentCategorySlice } from "../category-analyze/equipment-category-data";

export function Analyze({
  data = [],
}: {
  data?: EquipmentCategorySlice[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <Card className="overflow-x-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
            Equipment by Category
          </CardTitle>
          <CardDescription className="text-base">
            Distribution of registered equipment across top 6 category
          </CardDescription>
        </CardHeader>

        <CardContent className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <EquipmentCategoryChart
            data={data}
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
          />
          <CategoryLegend
            data={data}
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
          />
        </CardContent>
      </Card>
    </div>
  );
}
