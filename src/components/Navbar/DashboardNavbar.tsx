import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar, Dropdown } from "shadcn-ui";

export default function DashboardNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-lg font-semibold">Borrower's Portal</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-800">Applications</a>
        <a href="#" className="hover:text-gray-800">Loans</a>
        <a href="#" className="hover:text-gray-800">Activity</a>
        {/* Settings link can also be a dropdown item */}
      </div>
      <div className="relative">
        <Avatar onClick={toggleDropdown} className="cursor-pointer" />
        {dropdownOpen && (
          <Dropdown
            className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg z-50"
            onClose={() => setDropdownOpen(false)}
          >
            <Dropdown.Item>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </Dropdown.Item>
          </Dropdown>
        )}
      </div>
      <Link
        href="/application"
        className="border text-sm px-6 py-3 rounded-md text-basicColor bg-white border-gray-400"
      >
        Apply
      </Link>
    </nav>
  );
}
