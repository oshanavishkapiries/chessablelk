"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/main/Navbar";
import { Toaster } from "sonner";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <main>
      <Toaster richColors position="bottom-right" />
      {pathname !== "/" && <Navbar />}
      {children}
    </main>
  );
};

export default Layout;
