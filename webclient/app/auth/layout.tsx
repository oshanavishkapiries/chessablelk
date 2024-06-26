/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Toaster } from "sonner";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Toaster richColors position="top-center" />
      <nav className="flex justify-center md:justify-start px-5 py-3 items-center bg-chess_blue">
        <Link href={"/"}>
          <img src="/svg/Textlogo03.svg" alt="logo" className="w-[210px]" />
        </Link>
      </nav>
      {children}
    </main>
  );
};

export default AuthLayout;
