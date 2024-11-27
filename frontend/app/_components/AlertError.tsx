"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../_components/ui/alert-dialog";
interface IAlerteErrorProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  title: string;
}

const AlertError = ({
  isOpen,
  setIsOpen,
  message,
  title,
}: IAlerteErrorProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent className=" rounded-lg ">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-purple-600">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-slate-950 font-bold">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="bg-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Ok
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertError;
