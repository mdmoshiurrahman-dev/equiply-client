import { translationAnalysisData } from "@/types/type";

export const paymentPerformanceColors = {
  success: "#34A853",
  failed: "#EF6B6B",
  track: "var(--muted)",
} as const;

export async function fetchPaymentPerformanceData(): Promise<translationAnalysisData> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment-success-failed-rate`,
      { signal: AbortSignal.timeout(8000) }
    );
    if (!response.ok) {
      return { total: 0, success: 0, failed: 0 };
    }
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch payment performance data:", err);
    return { total: 0, success: 0, failed: 0 };
  }
}

export function calculateRates(data: translationAnalysisData) {
  const total = data?.total || 0;
  const success = data?.success || 0;
  const failed = data?.failed || 0;
  const successRate = total > 0 ? Number(((success / total) * 100).toFixed(1)) : 0;
  const failedRate = total > 0 ? Number(((failed / total) * 100).toFixed(1)) : 0;
  return { successRate, failedRate };
}
