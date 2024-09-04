import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
import useDesigner from "@/hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "@/hooks/use-toast";
import { FaSpinner } from "react-icons/fa";

const SaveFormBtn = ({ id }: { id: number }) => {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();
  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({
        title: "Success",
        description: "Your form has been saved",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });

      console.log(error);
    }
  };
  return (
    <Button
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
      className="gap-2 text-white bg-gradient-to-r from-green-400 to-teal-900 hover:bg-green-900"
      variant={"default"}>
      <HiSaveAs className="h-6 w-6" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
};

export default SaveFormBtn;
