/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-3 items-center">
      <Link href={"/"}>
        <img src="/svg/Textlogo01.svg" alt="logo" className="w-[210px]" />
      </Link>

      <div className="flex gap-2">
        <Button variant="secondary" className="font-semibold hover:bg-chess_blue/75 hover:text-white">
          Sign up
        </Button>
        <Button variant="secondary" className="font-semibold hover:bg-chess_blue/75 hover:text-white">
          Log in
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
