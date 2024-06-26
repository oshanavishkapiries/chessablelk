/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { routes } from "@/constant/routes";
import Search from "@/components/sub/Search";
import Profile from "@/components/sub/Profile";
import MobileMenu from "@/components/sub/MobileMenu";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-16 px-3 md:px-10 py-3 bg-background">
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
