/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import LoginForm from "@/components/sub/Login-Form";
import LoginWithGoogle from "@/components/sub/LoginWithGoogle";

const LoginPage = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center p-6 lg:p-10">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-muted-foreground">
                Enter your email and password to access your account.
              </p>
            </div>

            <LoginForm />
            <LoginWithGoogle title="Login with Google" />
            <div className="flex flex-col items-center justify-center">
              <Link href="/auth/sign-up">
                <p className="text-chess_blue hover:text-chess_blue/75">
                  Do not have an account?
                </p>
              </Link>
              {/* <Link href="/auth/forgot-password">
                <p className="text-chess_blue hover:text-chess_blue/75">
                  Forgot password?
                </p>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src="/img/login.jpg"
            alt="Sign in illustration"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
