"use client";

import { CSSProperties } from "react";
import {
  Pie,
  PieChart,
  Sector,
  Tooltip,
  type PieSectorShapeProps,
  type TooltipContentProps,
} from "recharts";
import {
  type EquipmentCategorySlice,
} from "./equipment-category-data";

/* -------------------------------------------------------------------------- */
/*                                  Slice shape                               */
/* -------------------------------------------------------------------------- */

/**
 * Renders every slice; the highlighted (hovered) slice additionally gets a
 * slightly larger outer ring to emphasize it.
 */
function renderSliceShape(props: PieSectorShapeProps) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  if (!props.isActive) {
    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    );
  }

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* Slightly larger ring on top to emphasize the active slice. */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 2}
        outerRadius={(outerRadius ?? 0) + 6}
        fill={fill}
      />
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Tooltip                                   */
/* -------------------------------------------------------------------------- */

function CategoryTooltip({ active, payload }: TooltipContentProps) {
  if (!active) return null;

  const item = payload?.[0] as { payload?: EquipmentCategorySlice & { percent?: number } } | undefined;
  const entry = item?.payload;
  if (!entry) return null;

  const percent = typeof entry.percent === "number" ? (entry.percent * 100).toFixed(0) : "";

  return (
    <div className="rounded-lg border bg-popover px-4 py-2 text-sm text-popover-foreground shadow-md">
      <p>
        <span className="text-muted-foreground">Category: </span>
        {entry.name},
      </p>
      <p>
        <span className="text-muted-foreground">Count: </span>
        {entry.value}{percent ? `, ` : ``}{percent ? <><span className="text-muted-foreground">Share: </span>{percent}%</> : null}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Donut chart                                   */
/* -------------------------------------------------------------------------- */

const chartStyle: CSSProperties = {
  width: "100%",
  maxWidth: 420,
  margin: "auto",
  aspectRatio: 1,
};

const margin = { top: 24, right: 24, bottom: 24, left: 24 } as const;

interface EquipmentCategoryChartProps {
  /** Category data slices */
  data?: EquipmentCategorySlice[];
  /** Index of the highlighted slice, or null when nothing is active. */
  activeIndex?: number | null;
  /** Called when the highlighted slice changes (hover on chart or legend). */
  onActiveIndexChange?: (index: number | null) => void;
}

export function EquipmentCategoryChart({
  data = [],
  activeIndex = null,
  onActiveIndexChange,
}: EquipmentCategoryChartProps) {
  const totalEquipment = data.reduce((sum, slice) => sum + slice.value, 0);

  return (
    <div className="relative w-full max-w-[420px]">
      <PieChart
        style={chartStyle}
        responsive
        margin={margin}
        onMouseLeave={() => onActiveIndexChange?.(null)}
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="65%"
          outerRadius="90%"
          paddingAngle={2}
          strokeWidth={0}
          shape={renderSliceShape}
          isAnimationActive={false}
          onMouseEnter={(_, index) => onActiveIndexChange?.(index)}
        />
        <Tooltip
          content={CategoryTooltip}
          defaultIndex={activeIndex === null ? undefined : activeIndex}
          cursor={false}
        />
      </PieChart>

      {/* Center total */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {totalEquipment.toLocaleString()}
        </span>
        <span className="mt-1 text-sm text-muted-foreground">
          Total Equipment
        </span>
      </div>
    </div>
  );
}
