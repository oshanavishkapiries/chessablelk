"use client";

import { auth } from "@/firebase/firebaseConfig";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "@/components/sub/Loader";

interface AuthRouterProps {
  children: React.ReactNode;
}

const AuthRouter: React.FC<AuthRouterProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const checkAuth = () => {
      const userSession = sessionStorage.getItem("user");

      if (!user || !userSession) {
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
          <Loader size="200px" />
        </section>
      )}
    </>
  );
};

export default AuthRouter;
