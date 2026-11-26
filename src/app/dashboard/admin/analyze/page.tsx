import { Suspense } from "react";
import { Analyze } from "@/components/dashboard/admin/analyze/registration/analyze";
import { RegistrationTrends } from "@/components/dashboard/admin/analyze/registration/registration-trends";
import { ChartSkeleton } from "@/components/dashboard/admin/analyze/registration/chart-skeleton";
import { PaymentPerformance } from "@/components/dashboard/admin/analyze/payment-perfomance/payment-performance";
import { fetchEquipmentCategoryData } from "@/components/dashboard/admin/analyze/category-analyze/equipment-category-data";
import { fetchPaymentPerformanceData } from "@/components/dashboard/admin/analyze/payment-perfomance/payment-performance-data";
import { connection } from "next/server";

export default async function AdminAnalyzePage() {
  await connection();
  const [categoryData, paymentData] = await Promise.all([
    fetchEquipmentCategoryData(),
    fetchPaymentPerformanceData(),
  ]);

  return (
    <>
      <Analyze data={categoryData} />
      <Suspense fallback={<ChartSkeleton />}>
        <RegistrationTrends />
      </Suspense>
      <PaymentPerformance data={paymentData} />
    </>
  );
}
