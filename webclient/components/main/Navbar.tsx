/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  BookMarked,
  LogOutIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
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

const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <img
            src="/img/placeholder-user.jpg"
            width="32"
            height="32"
            className="rounded-full"
            alt="Avatar"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <UserIcon className="w-4 h-4 mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BookMarked className="w-4 h-4 mr-2" />
          My lessons
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon className="w-4 h-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Search = ({ className }: any) => {
  return (
    <form className={`relative ${className}`}>
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-8 pr-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </form>
  );
};

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-16 px-3 md:px-10 py-3 bg-background border-b">
      <div className="flex items-center gap-4">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img src="/svg/Textlogo01.svg" alt="logo" className="w-[210px]" />
        </Link>
        {/* link list */}
        <nav className="hidden md:flex items-center gap-4">
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
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {/* search */}
        <Search className="hidden md:block" />
        {/* profile */}
        <Profile />
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
