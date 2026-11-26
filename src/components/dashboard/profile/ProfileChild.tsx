"use client";

import React, { useRef, useState } from "react";
import { Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/lib/auth-client";
import { uploadImage } from "@/lib/action/uploadImage";
import { ProviderProfileDataTypeForAdmin } from "@/types/type";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export default function ProfilePageChild({
  userData,
}: {
  userData: ProviderProfileDataTypeForAdmin;
}) {
  const [loading, isLoading] = useState(false);
  const router = useRouter();
  const [avatar, setAvatar] = useState<string | null>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(String(reader.result));
      reader.readAsDataURL(file);
    }
  };
  const session = useSession();
  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isLoading(true);
    const fromData = new FormData(event.currentTarget);
    const submissionData = Object.fromEntries(fromData.entries());
    const image = fromData.get("user_image");
    const imageUrl = await uploadImage(image as File);
    const payload = {
      userID: userData._id,
      ...submissionData,
      user_image: imageUrl || userData.user_image,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/update-profile-info`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.session.token}`,
        },
        body: JSON.stringify(payload),
      },
    );
    const result = await res.json();
    if (result.modifiedCount > 0) {
      toast.add({
        type: "success",
        description: "Profile updated successfully",
      });
      isLoading(false);
      router.refresh();
    } else {
      isLoading(false);
      toast.add({
        type: "error",
        description: "Something is wrong",
      });
    }
  };

  return (
    <form
      name="profileForm"
      onSubmit={handleSave}
      className="mx-auto w-full max-w-5xl"
    >
      <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-5xl">
        Your Profile
      </h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Your personal information and business identity, all in one place.
      </p>

      <div className="mt-8 flex flex-col gap-6 rounded-xl bg-foreground p-6 text-background sm:flex-row sm:items-center">
        <div className="relative w-fit">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar ?? userData.user_image}
            alt="Profile photo"
            className="size-20 rounded-full object-cover"
          />

          <button
            name="cameraProfilePhoto"
            type="button"
            onClick={() => avatarInputRef.current?.click()}
            aria-label="Change profile photo"
            className="absolute -bottom-0.5 right-0 grid size-6 place-items-center rounded-full bg-background/25 text-background backdrop-blur transition-colors hover:bg-background/40"
          >
            <Camera className="size-3.5" />
          </button>
          <Input
            ref={avatarInputRef}
            id="profileImage"
            name="user_image"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-2xl font-semibold sm:text-4xl">
            {userData.name}
          </p>
          <p className="truncate text-sm opacity-60 sm:text-lg">
            {userData.email}
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="pb-3 text-xl font-semibold sm:text-2xl">
          Personal Information
        </h2>
        <div className="grid gap-x-16 md:grid-cols-2">
          <div className="border-b border-border py-4">
            <Label htmlFor="fullName" className="text-sm mb-2 font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
              name="name"
              type="text"
              defaultValue={userData.name}
              className="border-0 bg-transparent px-4 py-3  text-base font-medium text-foreground shadow-none focus-visible:border-0 focus-visible:ring-0"
            />
          </div>

          <div className="border-b border-border py-4">
            <Label htmlFor="email" className="text-sm mb-2 font-medium">
              Email Address
            </Label>
            <Input
              disabled
              id="email"
              name="email"
              type="email"
              defaultValue={userData.email}
              className="border-0 py-3 px-4 bg-transparent  text-base font-medium text-foreground shadow-none focus-visible:border-0 focus-visible:ring-0"
            />
          </div>

          <div className="border-b border-border py-4">
            <Label htmlFor="phone" className="text-sm mb-2 font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="tel_no"
              type="tel"
              defaultValue={userData.tel_no}
              className="border-0 bg-transparent px-4 py-3 text-base font-medium text-foreground shadow-none focus-visible:border-0 focus-visible:ring-0"
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="pb-3 text-xl font-semibold sm:text-2xl">
          Information
        </h2>
        <div>
          <div className="border-b border-border py-4">
            <Label
              htmlFor="businessAddress"
              className="text-sm mb-2 font-medium"
            >
              Address
            </Label>
            <Input
              id="businessAddress"
              name="business_address"
              type="text"
              defaultValue={userData.business_address}
              className="border-0 px-4 py-3 bg-transparent  text-base font-medium text-foreground shadow-none focus-visible:border-0 focus-visible:ring-0"
            />
          </div>

          <div className="border-b border-border py-4">
            <Label htmlFor="nid" className="text-sm mb-2 font-medium">
              NID
            </Label>
            <Input
              id="nid"
              name="nid_tin"
              type="text"
              defaultValue={userData.nid_tin}
              className="border-0 px-4 py-3 bg-transparent  text-base font-medium text-foreground shadow-none focus-visible:border-0 focus-visible:ring-0"
            />
          </div>
        </div>
      </section>

      <Button
        name="saveProfile"
        type="submit"
        className="mt-10 px-6 rounded-xl bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        {loading ? <Spinner /> : <span>Save Changes</span>}
      </Button>
    </form>
  );
}
