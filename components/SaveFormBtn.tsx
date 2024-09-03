import React from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";

const SaveFormBtn = () => {
  return (
    <Button
      className="gap-2 text-white bg-gradient-to-r from-green-400 to-teal-900 hover:bg-green-900"
      variant={"default"}>
      <HiSaveAs className="h-6 w-6" />
      Save
    </Button>
  );
};

export default SaveFormBtn;
