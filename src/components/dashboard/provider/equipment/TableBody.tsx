import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { jwtToken } from "@/lib/core/jwtToken";
import { EquipmentTable } from "./equipment-table";
import { EquipmentApplicationType } from "@/types/type";

const TableFullBody = async () => {
  const session = await loadUserSessionFromServerComponent();
  const jwt = await jwtToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/equipment-application/list`,
    {
      headers: {
        Authorization: `Bearer ${session?.session.token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
    },
  );
  const result:EquipmentApplicationType[] = await res.json();
  return <EquipmentTable equipmentList={result} />;
};

export default TableFullBody;
