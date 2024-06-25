/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
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
