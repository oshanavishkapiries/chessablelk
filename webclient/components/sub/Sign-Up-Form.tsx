"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { toast } from "sonner";
import { firebaseError } from "@/utils/firebaseError";
import { AuthDataTypes, AuthSchema } from "@/constant/zodvalidation";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthDataTypes>({
    resolver: zodResolver(AuthSchema),
  });

  const onSubmit = async (dto: AuthDataTypes) => {
    try {
      await toast.promise(
        createUserWithEmailAndPassword(auth, dto.email, dto.password),
        {
          loading: "Creating account...",
          success: () => {
            setTimeout(() => {
              router.push("/auth/login");
            }, 1500);
            return "Creating account successfully";
          },
          error: (err: any) => {
            return firebaseError(err);
          },
        }
      );
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 font-semibold">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-red-500 font-semibold">
            {errors.password.message}
          </p>
        )}
      </div>
      <Button type="submit" className="w-full bg-chess_blue">
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
