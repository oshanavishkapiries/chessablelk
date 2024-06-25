/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const signIn = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center p-6 lg:p-10">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign in</h1>
              <p className="text-muted-foreground">
                Enter your email and password to access your account.
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">User name</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="user name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-chess_blue">
                Sign in
              </Button>
            </div>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <img src="/svg/googleicon.svg" className="mr-2 h-4 w-4" />
                Sign in with Google
              </Button>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src="/img/signup.jpg"
            alt="Sign in illustration"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default signIn;
