/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button } from "../ui/button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "sonner";
import { auth } from "@/lib/firebaseConfig";
import { firebaseError } from "@/utils/firebaseError";

const LoginWithGoogle = (props: any) => {
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await toast.promise(signInWithPopup(auth, provider), {
        loading: "Logging...",
        success: () => {
          setTimeout(() => {
            window.location.href = "/home";
          }, 1500);
          return "Login successfully";
        },
        error: (err: any) => {
          return firebaseError(err);
        },
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleClick} variant="outline" className="w-full">
        <img
          src="/svg/googleicon.svg"
          className="mr-2 h-4 w-4"
          alt="Google icon"
        />
        {props.title}
      </Button>
    </div>
  );
};

export default LoginWithGoogle;
