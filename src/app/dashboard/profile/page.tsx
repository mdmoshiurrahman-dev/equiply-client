import ProfilePageChild from "@/components/dashboard/profile/ProfileChild";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { ProviderProfileDataTypeForAdmin } from "@/types/type";
import React from "react";

const ProfilePage = async () => {
  const session = await loadUserSessionFromServerComponent();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-profile-info`,
    {
      headers: {
        Authorization: `Bearer ${session.session.token}`,
      },
    },
  );
  if (!res.ok) {
    console.error("Failed to load profile info");
  }
  const userData: ProviderProfileDataTypeForAdmin = await res.json();
  return (
    <>
      <ProfilePageChild userData={userData} />
    </>
  );
};

export default ProfilePage;
