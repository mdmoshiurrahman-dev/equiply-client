import EquipmentInfoMain from "@/components/equipment-info/EquipmentInfoMain";
import React from "react";

//you have to add meta data here

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  



  return <EquipmentInfoMain id ={id} />;
};

export default page;
