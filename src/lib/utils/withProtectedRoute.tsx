"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withProtectedRoute = (WrappedComponent: any) => {
  return function ProtectedRoute(props: any) {
    const { data: session, status }:any = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") {
        return;
      }

      if (!session) {
        router.push("/login");
      }
    }, [session, status, router]);
    return session ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;
