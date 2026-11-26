import { AddEquipmentForm } from "@/components/dashboard/provider/add-equepment/add-equipment-form";

export default function AddEquipmentPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold">Add New Equipment</h1>
        <p className="text-sm text-muted-foreground">
          List your equipment for rent. Fill in the details below to get started.
        </p>
      </div>
      <AddEquipmentForm />
    </div>
  );
}