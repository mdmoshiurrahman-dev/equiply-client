import EquipmentInfoMain from "@/components/equipment-info/EquipmentInfoMain";
import React from "react";



const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  



  return <EquipmentInfoMain id ={id} />;
};

export default page;
