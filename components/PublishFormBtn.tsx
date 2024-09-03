import React from "react";
import { Button } from "./ui/button";
import { MdOutlinePublish } from "react-icons/md";
const PublishFormBtn = () => {
  return (
    <Button
      className="gap-2 text-white bg-gradient-to-r from-orange-600 to-yellow-500"
      variant={"default"}>
      <MdOutlinePublish className="h-6 w-6" />
      Publish
    </Button>
  );
};

export default PublishFormBtn;
