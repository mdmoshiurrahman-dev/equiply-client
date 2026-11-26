import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/** Bar heights tuned to look like the area chart's final shape. */
const CHART_BARS = [28, 42, 36, 55, 48, 66, 58, 72, 64, 80, 75, 88];
const LEGEND_WIDTHS = ["w-20", "w-10", "w-20", "w-10", "w-20"];

/**
 * Loading skeleton for <RegistrationTrends />.
 * Mirrors the layout of registration-trends-chart.tsx:
 * Card header (title + description) + area-chart area + bottom legend.
 */
export function ChartSkeleton() {
  return (
    <Card className="mt-10 lg:mt-15" aria-busy="true">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
          <Skeleton className="h-8 w-72" />
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          <Skeleton className="h-4 w-96 max-w-full" />
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4">
        {/* Chart area */}
        <div className="flex h-64 w-full items-end gap-2 sm:h-72 sm:gap-3 lg:h-80">
          {/* Y axis */}
          <div className="flex h-full flex-col justify-between py-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-2 w-8" />
            ))}
          </div>

          {/* Area silhouette */}
          <div className="flex h-full w-full items-end justify-between gap-2 sm:gap-3">
            {CHART_BARS.map((height, index) => (
              <Skeleton
                key={index}
                className="w-full rounded-t-md rounded-b-none bg-muted"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* Bottom legend */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {LEGEND_WIDTHS.map((width, index) => (
            <Skeleton key={index} className={`h-3 ${width}`} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
