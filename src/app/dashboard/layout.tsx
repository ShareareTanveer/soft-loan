"use client";
import React from "react";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import DashboardSidebar from "@/components/Navbar/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SidebarProvider>
        <DashboardSidebar />
        <div className="flex flex-col flex-1">
          <DashboardNavbar />
          <main className="flex-1 p-4">  
            <div className="max-w-full">{children}</div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
