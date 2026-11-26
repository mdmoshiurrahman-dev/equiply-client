import ProfilePageChild from '@/components/dashboard/profile/ProfileChild'
import { loadUserSessionFromServerComponent } from '@/lib/core/loadUserSessionFromServerComponent'
import { ProviderProfileDataTypeForAdmin } from '@/types/type'
import React from 'react'

const ProfilePage = async() => {
  const session = await loadUserSessionFromServerComponent()
  let userData: ProviderProfileDataTypeForAdmin = {} as ProviderProfileDataTypeForAdmin;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get-profile-info`, {
      headers: {
        Authorization: `Bearer ${session.session.token}`,
      },
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) {
      userData = await res.json();
    }
  } catch (err) {
    console.error("Failed to load profile info:", err);
  }
  return (
    <>
      <ProfilePageChild userData={userData} />
    </>
  );
};

export default ProfilePage