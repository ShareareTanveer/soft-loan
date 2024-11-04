"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hiddenPaths = ["/login", "/registration", "/application", "/dashboard", "/dashboard/settings"];
  const hideNavAndFooter = hiddenPaths.includes(pathname);

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <div>{children}</div>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

export default MainLayout;
