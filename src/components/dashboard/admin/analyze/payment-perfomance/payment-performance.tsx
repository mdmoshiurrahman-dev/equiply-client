"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { PaymentPerformanceChart } from "./payment-performance-chart";
import { PaymentPerformanceStats } from "./payment-performance-stats";
import type { translationAnalysisData } from "@/types/type";

export function PaymentPerformance({
  data = { success: 0, failed: 0, total: 0 },
}: {
  data?: translationAnalysisData;
}) {
  return (
    <Card className="mt-10 lg:mt-15">
      <CardHeader className="border-b">
        <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
          Payment Performance
        </CardTitle>
        <CardDescription className="text-base">
          Overview of payment transaction outcomes
        </CardDescription>
        <CardAction>
          <span className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground">
            All Time
          </span>
        </CardAction>
      </CardHeader>

      <CardContent className="grid items-center gap-6 py-6 lg:grid-cols-2 lg:gap-0">
        <div className="lg:border-r lg:border-border lg:pr-8">
          <PaymentPerformanceChart data={data} />
        </div>
        <div className="lg:pl-10">
          <PaymentPerformanceStats data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
