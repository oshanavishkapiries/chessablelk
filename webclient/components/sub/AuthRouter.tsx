/* eslint-disable @next/next/no-img-element */
"use client";

import { auth } from "@/firebase/firebaseConfig";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface AuthRouterProps {
  children: React.ReactNode;
}

const AuthRouter: React.FC<AuthRouterProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const checkAuth = () => {
      if (!user) {
        router.push("/");
      }
    };

    if (!loading) {
      checkAuth();
    }
  }, [user, loading, router, pathname]);

  return (
    <>
      {user ? (
        children
      ) : (
        <section className="w-full min-h-screen flex justify-center items-center">
          <img src="/lottie/loader.gif" width="200px" height="200px" alt="loader" />
        </section>
      )}
    </>
  );
};

export default AuthRouter;
