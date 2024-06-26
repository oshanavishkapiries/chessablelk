"use client";
import { auth } from "@/lib/firebaseConfig";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRouter = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (!user) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  return <>{children}</>;
};

export default AuthRouter;
