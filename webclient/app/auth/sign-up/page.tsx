/* eslint-disable @next/next/no-img-element */
import React from "react";
import AuthForm from "@/components/sub/Sign-Up-Form";
import LoginWithGoogle from "@/components/sub/LoginWithGoogle";
import Link from "next/link";

const SignUp = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center p-6 lg:p-10">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-muted-foreground">
                Enter your email and password to access your account.
              </p>
            </div>
            <AuthForm />
            <LoginWithGoogle title="Sign Up with Google" />
            <div className="flex flex-col items-center justify-center">
              <Link href="/auth/login">
                <p className="text-chess_blue hover:text-chess_blue/75">
                  You all ready have an account ?
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src="/img/signup.jpg"
            alt="Sign up illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
