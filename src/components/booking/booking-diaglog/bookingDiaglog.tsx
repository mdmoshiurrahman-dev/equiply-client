"use client";

import { CalendarIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { EquipmentApplicationType } from "@/types/type";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";
import { jwtTokenClient } from "@/lib/core/jwtTokenClient";

export function BookingDialog({
  equipment,
}: {
  equipment: EquipmentApplicationType;
}) {
  const [requiredQuantity, setRequiredQuantity] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [loading, isLoading] = useState(false);
  const rentalDays =
    endDate && startDate
      ? (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        (1000 * 3600 * 24)
      : 0;
  const [minEndDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const session = useSession();
  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const jwt = await jwtTokenClient();
    const token = session.data?.session.token
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        ...data,
        productName: equipment.equipmentName,
        equipmentId: equipment._id,
        rentalDays,
        paymentDate: new Date().toISOString().split("T")[0],
      }),
    });

    if (!res.ok) {
      isLoading(false);
      toast.add({
        type: "error",
        description: "Payment initialization failed",
      });
    }
    const result = await res.json();
    if (result.url) {
      isLoading(false);
      window.location.href = result.url;
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            size="lg"
            className="h-12 flex-1 rounded-lg px-8 py-2 sm:flex-none"
          >
            Book Now
          </Button>
        }
      />
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklab,var(--foreground)_25%,transparent)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/25 sm:max-w-lg">
        <form onSubmit={handleBookingSubmit} className="grid gap-4">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Book This Equipment
            </DialogTitle>
            <DialogDescription>
              Provide your rental details to continue with your booking.
            </DialogDescription>
          </DialogHeader>

          {/* Rental Start Date */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-rental-start-date">Rental Start Date</Label>
            <div className="relative">
              <CalendarIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setStartDate(e.target.value)}
                id="booking-rental-start-date"
                name="rentalStartDate"
                type="date"
                placeholder="Select rental start date"
                className="pl-8"
              />
            </div>
          </div>

          {/* Rental End Date */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-rental-end-date">Rental End Date</Label>
            <div className="relative">
              <CalendarIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                min={minEndDate}
                onChange={(e) => setEndDate(e.target.value)}
                id="booking-rental-end-date"
                name="rentalEndDate"
                type="date"
                placeholder="Select rental end date"
                className="pl-8"
              />
            </div>
          </div>

          {/* Required Quantity */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-required-quantity">Required Quantity</Label>
            <div className="relative">
              <Input
                onChange={(e) => setRequiredQuantity(Number(e.target.value))}
                id="booking-required-quantity"
                name="requiredQuantity"
                type="number"
                max={Number(equipment.equipmentQuantity)}
                placeholder="Enter quantity"
                className="pr-28"
              />
              <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-muted-foreground">
                Available: {equipment.equipmentQuantity} units
              </span>
            </div>
            {requiredQuantity > Number(equipment.equipmentQuantity) && (
              <p className="text-sm text-destructive">
                You cannot rent more than the available quantity.
              </p>
            )}
            {requiredQuantity <= 0 && (
              <p className="text-sm text-destructive">
                Please enter a quantity greater than zero.
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-contact-number">Contact Number</Label>
            <div className="relative">
              <PhoneIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="booking-contact-number"
                name="contactNumber"
                type="tel"
                placeholder="Enter your contact number"
                className="pl-8"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-delivery-address">Delivery Address</Label>
            <Textarea
              id="booking-delivery-address"
              name="deliveryAddress"
              rows={3}
              placeholder="Enter your complete delivery address"
            />
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="booking-additional-notes"
              className="justify-between"
            >
              Additional Notes
              <span className="text-xs text-muted-foreground">(Optional)</span>
            </Label>
            <Textarea
              id="booking-additional-notes"
              name="additionalNotes"
              rows={3}
              placeholder="Any special instructions?"
            />
          </div>

          {/* Rental Cost Summary */}
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="mb-3 font-semibold">Rental Cost Summary</p>
            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Rental Price:</span>
                <span className="font-medium">${equipment.equipmentPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Required Quantity:
                </span>
                <span className="font-medium">{requiredQuantity}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Rental Duration:</span>
                <span className="font-medium">{rentalDays} days</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Estimated Total:</span>
                <span className="font-bold">
                  $
                  {requiredQuantity *
                    Number(rentalDays) *
                    Number(equipment.equipmentPrice)}
                </span>
              </div>
            </div>
          </div>

          <DialogFooter className="mx-0 flex flex-col gap-3 border-t bg-transparent pt-4 sm:flex-row">
            <DialogClose
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  Cancel
                </Button>
              }
            />
            <Button
              disabled={
                requiredQuantity > Number(equipment.equipmentQuantity) ||
                requiredQuantity <= 0 ||
                loading
              }
              type="submit"
              size="lg"
              className={`flex-1 ${requiredQuantity > Number(equipment.equipmentQuantity) || requiredQuantity <= 0 || loading ? "bg-zinc-300 cursor-not-allowed" : ""}`}
            >
              {loading ? <Spinner /> : <span>Book Now</span>}
            </Button>
          </DialogFooter>
          <p className="text-center text-xs text-muted-foreground">
            You&apos;ll proceed to secure payment after confirming your booking.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
