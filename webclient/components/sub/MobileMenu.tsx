/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { routes } from "@/constant/routes";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-4 p-4">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <img src="/svg/Textlogo01.svg" alt="logo" className="w-[210px]" />
          </Link>
          {/* link list */}
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
