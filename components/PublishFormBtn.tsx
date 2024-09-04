import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { MdOutlinePublish } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { FaIcons } from "react-icons/fa";
import { toast } from "@/hooks/use-toast";
import { PublishForm } from "@/actions/form";
import { useRouter } from "next/navigation";
const PublishFormBtn = ({ id }: { id: number }) => {
  const [loading, startTransition] = useTransition();
  const router = useRouter();
  const publishForm = async () => {
    try {
      await PublishForm(id);
      toast({
        title: "Success",
        description: "Your form has been published successfully",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="gap-2 text-white bg-gradient-to-r from-orange-600 to-yellow-500"
          variant={"default"}>
          <MdOutlinePublish className="h-6 w-6" />
          Publish
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. After publishing you will not be able
            to edit this form. <br /> <br />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(publishForm);
            }}>
            Proceed{loading && <FaIcons className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PublishFormBtn;
