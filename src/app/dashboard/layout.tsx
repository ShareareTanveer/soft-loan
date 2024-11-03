"use client";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
