import {
  paymentPerformanceColors,
  calculateRates,
} from "./payment-performance-data";
import type { translationAnalysisData } from "@/types/type";

export function PaymentPerformanceStats({
  data = { success: 0, failed: 0, total: 0 },
}: {
  data?: translationAnalysisData;
}) {
  const { success, failed } = data;
  const { failedRate } = calculateRates(data);

  return (
    <div className="flex flex-col justify-center gap-8">
      <div>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="size-3 shrink-0 rounded-full"
            style={{ backgroundColor: paymentPerformanceColors.success }}
          />
          <span className="text-base text-foreground sm:text-lg">
            Successful Payments
          </span>
        </div>
        <p className="mt-2 pl-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {success.toLocaleString()}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="size-3 shrink-0 rounded-full"
            style={{ backgroundColor: paymentPerformanceColors.failed }}
          />
          <span className="text-base text-foreground sm:text-lg">
            Failed Payments
          </span>
        </div>
        <p className="mt-2 flex items-baseline gap-2 pl-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {failed.toLocaleString()}
          <span
            className="text-xl font-semibold sm:text-2xl"
            style={{ color: paymentPerformanceColors.failed }}
          >
            ({failedRate}%)
          </span>
        </p>
      </div>
    </div>
  );
}
