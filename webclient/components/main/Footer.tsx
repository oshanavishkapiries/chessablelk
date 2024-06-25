/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted px-5 py-3 w-full">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <Link href="/" prefetch={false}>
          <img src="/svg/Textlogo02.svg" alt="logo" className="w-[150px]" />
        </Link>
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Oshan Avishka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
