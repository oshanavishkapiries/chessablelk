/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/firebaseConfig";
import Profile from "@/components/sub/Profile";
import { useAuthState } from "react-firebase-hooks/auth";

export default function LandingPage() {
  const [user] = useAuthState(auth);

  return (
    <>
      <nav className="flex justify-between px-3 md:px-10 py-3 items-center">
        <Link href={"/"}>
          <img src="/svg/Textlogo01.svg" alt="logo" className="w-[210px]" />
        </Link>
        {user ? (
          <Profile />
        ) : (
          <div className="flex gap-2">
            <Link href={"/auth/sign-up"}>
              <Button
                variant="secondary"
                className="font-semibold hover:bg-chess_blue/75 hover:text-white hidden md:block"
              >
                Sign up
              </Button>
            </Link>
            <Link href={"/auth/login"}>
              <Button
                variant="secondary"
                className="font-semibold hover:bg-chess_blue/75 hover:text-white"
              >
                Log in
              </Button>
            </Link>
          </div>
        )}
      </nav>
      <section className="w-full min-h-screen">
        <div className="flex min-h-[100dvh] w-full">
          <div className="flex flex-col items-center md:items-start justify-start gap-6 bg-background px-6 py-12 sm:px-12 md:w-1/2 md:px-20 lg:px-24">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Chess Mastery : <span className="text-[#FFC107]">Learn,</span>{" "}
              <span className="text-[#533aee]">Play,</span> and{" "}
              <span className="text-[#ff2f6b]">Conquer</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Welcome to Chess Mastery Programme, your ultimate online platform
              for mastering chess. Join our expert-led courses, practice with
              interactive lessons, and elevate your game to grandmaster level.
            </p>
            <Link
              href={user ? "/home" : "/auth/login"}
              className="bg-chess_blue text-white py-2 px-4 rounded-md font-semibold"
            >
              Start to Learning
            </Link>
          </div>
          <div className="relative hidden w-1/2 md:block">
            <img
              src="/img/landingImg.webp"
              alt="Chess Mastery"
              className="object-cover p-5"
            />
          </div>
        </div>
      </section>
    </>
  );
}
