"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  DotItemDotProps,
  Tooltip,
  TooltipContentProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  registrationTickIndexes,
  registrationSeriesColors,
  type RegistrationTrendPoint,
} from "./registration-trends-data";

/* -------------------------------------------------------------------------- */
/*                                  Tooltip                                  */
/* -------------------------------------------------------------------------- */

/**
 * Floating pill above the hovered point:
 * "Oct 22: Renters 215, Providers 140"
 */
function RegistrationTooltip({ active, payload }: TooltipContentProps) {
  if (!active) return null;

  const point = payload?.[0]?.payload as RegistrationTrendPoint | undefined;
  if (!point) return null;

  return (
    <div className="rounded-lg border bg-popover px-4 py-2 text-sm text-popover-foreground shadow-md">
      <p>
        <span className="font-medium">{point.date}: </span>
        <span className="text-foreground">Renters </span>
        {point.renters},{" "}
        <span className="text-foreground">Providers </span>
        {point.providers}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Dots                                   */
/* -------------------------------------------------------------------------- */

/**
 * Renders a dot only on the labeled tick points, matching the sparse dot
 * look of the design.
 */
function createTrendDot(color: string, tickIndexes: readonly number[]) {
  return function TrendDot({ cx, cy, index }: DotItemDotProps) {
    if (cx === undefined || cy === undefined) return null;
    if (!tickIndexes.includes(index)) return null;

    return (
      <circle
        cx={cx}
        cy={cy}
        r={4.5}
        fill={color}
        stroke="var(--card)"
        strokeWidth={2}
      />
    );
  };
}

/* -------------------------------------------------------------------------- */
/*                              Bottom legend                                */
/* -------------------------------------------------------------------------- */

function RegistrationLegend() {
  const series = [
    { label: "Renters", color: registrationSeriesColors.renters },
    { label: "Providers", color: registrationSeriesColors.providers },
  ];

  return (
    <ul className="flex items-center justify-center gap-4 pt-2 sm:gap-6">
      {series.map((item) => (
        <li key={item.label} className="flex items-center gap-2 text-sm">
          <span
            aria-hidden
            className="size-3.5 shrink-0 rounded-sm"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-foreground">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Line chart                                   */
/* -------------------------------------------------------------------------- */

const chartStyle = {
  width: "100%",
  height: "100%",
} as const;

export function RegistrationTrendsChart({
  data,
}: {
  data: RegistrationTrendPoint[];
}) {
  const maxRegistrationCount = Math.max(
    0,
    ...data.flatMap((point) => [point.renters, point.providers]),
  );
  const yAxisMax = Math.max(1, Math.ceil(maxRegistrationCount * 1.3));

  return (
    <Card className="mt-10 lg:mt-15">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
          User Registration Trends
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Cumulative renter and provider registrations over the last 7 days.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="h-64 w-full sm:h-72 lg:h-80">
          <AreaChart
            responsive
            data={data}
            style={chartStyle}
            margin={{ top: 16, right: 16, bottom: 4, left: 0 }}
          >
            <defs>
              <linearGradient
                id="registration-renters-fill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={registrationSeriesColors.renters}
                  stopOpacity={0.16}
                />
                <stop
                  offset="100%"
                  stopColor={registrationSeriesColors.renters}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id="registration-providers-fill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={registrationSeriesColors.providers}
                  stopOpacity={0.1}
                />
                <stop
                  offset="100%"
                  stopColor={registrationSeriesColors.providers}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="var(--border)" vertical />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              interval={0}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              tickFormatter={(value: string, index: number) =>
                registrationTickIndexes.includes(index) ? value : ""
              }
            />
            <YAxis
              domain={[0, yAxisMax]}
              tickCount={9}
              width={44}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />

            <Tooltip
              content={RegistrationTooltip}
              cursor={{ stroke: "var(--border)", strokeWidth: 1 }}
            />

            <Area
              dataKey="renters"
              name="Renters"
              type="monotone"
              stroke={registrationSeriesColors.renters}
              strokeWidth={2.5}
              fill="url(#registration-renters-fill)"
              dot={createTrendDot(registrationSeriesColors.renters, registrationTickIndexes)}
              activeDot={{
                r: 5.5,
                fill: registrationSeriesColors.renters,
                stroke: "var(--card)",
                strokeWidth: 2,
              }}
              isAnimationActive={false}
            />
            <Area
              dataKey="providers"
              name="Providers"
              type="monotone"
              stroke={registrationSeriesColors.providers}
              strokeWidth={2.5}
              fill="url(#registration-providers-fill)"
              dot={createTrendDot(registrationSeriesColors.providers, registrationTickIndexes)}
              activeDot={{
                r: 5.5,
                fill: registrationSeriesColors.providers,
                stroke: "var(--card)",
                strokeWidth: 2,
              }}
              isAnimationActive={false}
            />
          </AreaChart>
        </div>

        <RegistrationLegend />
      </CardContent>
    </Card>
  );
}
