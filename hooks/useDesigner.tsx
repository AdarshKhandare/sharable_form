import { DesignerContext } from "@/app/context/DesignerContext";
import React, { useContext } from "react";

const useDesigner = () => {
  const context = useContext(DesignerContext);
  if (!context) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }
  return context;
};

export default useDesigner;
