"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Avatar } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useUser } from "@/lib/contexts/userInfoContext";

export default function DashboardNavbar() {
  const { user } = useUser()

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <SidebarTrigger />
      <div className="text-lg font-semibold">Borrower's Portal</div>
      <div className="flex items-center space-x-4">
        {user && (user.first_name || user.email) && (
          <span className="hidden lg:block text-sm text-gray-700">
            Welcome, {user.first_name || user.email}!
          </span>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer bg-slate-900" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/application"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Applications
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/application"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Activity
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/application"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Loans
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
