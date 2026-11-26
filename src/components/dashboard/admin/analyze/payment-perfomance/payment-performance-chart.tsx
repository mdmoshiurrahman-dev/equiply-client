"use client";

import { CSSProperties } from "react";
import { Pie, PieChart, Sector, type PieSectorShapeProps } from "recharts";
import {
  paymentPerformanceColors,
} from "./payment-performance-data";
import type { translationAnalysisData } from "@/types/type";

/* -------------------------------------------------------------------------- */
/*                              Slice shapes                                  */
/* -------------------------------------------------------------------------- */

/** Pill-shaped progress slice: rounded ends scale with the donut thickness. */
function renderProgressShape(props: PieSectorShapeProps) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      cornerRadius={((outerRadius ?? 0) - (innerRadius ?? 0)) / 2}
      fill={fill}
    />
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

const margin = { top: 12, right: 12, bottom: 12, left: 12 } as const;

/** Donut: green success arc over a muted track, starts at 12 o'clock. */
export function PaymentPerformanceChart({
  data = { success: 0, failed: 0, total: 0 },
}: {
  data?: translationAnalysisData;
}) {
  const { success, failed, total } = data;
  // Recharts polar angles: 0° = 3 o'clock, increasing counterclockwise.
  // Start at 12 o'clock (90°) and sweep clockwise through the success share.
  const startAngle = 90;
  const endAngle = total > 0 ? 90 - (success / total) * 360 : 90;

  return (
    <div className="relative w-full max-w-[420px]">
      <PieChart style={chartStyle} responsive margin={margin}>
        {/* Track: full muted ring behind the progress arc. */}
        <Pie
          data={[{ value: 1 }]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="72%"
          outerRadius="90%"
          fill={paymentPerformanceColors.track}
          stroke="none"
          isAnimationActive={false}
        />
        {/* Success arc (starts at 12 o'clock) + transparent remainder so the
            rounded ends of the arc are not covered by other slices. */}
        <Pie
          data={[
            { name: "Successful Payments", value: success },
            { name: "Failed Payments", value: failed },
          ]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="72%"
          outerRadius="90%"
          stroke="none"
          startAngle={startAngle}
          endAngle={endAngle}
          shape={renderProgressShape}
          isAnimationActive={false}
        />
      </PieChart>

      {/* Center rate */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {total > 0 ? Number(((success / total) * 100).toFixed(2)) : 0}%
        </span>
        <span className="mt-1 text-sm text-muted-foreground sm:text-base">
          Success Rate
        </span>
      </div>
    </div>
  );
}
