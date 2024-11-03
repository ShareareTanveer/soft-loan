"use client";
import React, { useState, useEffect } from "react";
import menuItem from "../../lib/menuItem.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();
  const { data: session } = useSession();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log(session);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 shadow-md bg-white"
          : "relative bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-300 container bg-white z-50`}
      >
        <div className="flex items-center justify-between py-2  mx-auto">
          <div>
            <Link href={"/"} className="text-xl text-black font-bold">
              SOFTLOAN
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-between space-x-6 text-md">
            {menuItem?.menuItems?.map((menu) => {
              const isActive = pathName === menu?.link;

              return (
                <Link
                  href={menu?.link}
                  key={menu?.id}
                  className={`capitalize px-5 border-b-0 transition ease-in-out delay-150 ${
                    isActive
                      ? "scale-110 py-[13px] font-bold"
                      : "underline-effect"
                  }`}
                >
                  {menu?.title}
                </Link>
              );
            })}
            {session && (
              <Link
                href="/dashboard"
                className="capitalize px-5 border-b-0 transition ease-in-out delay-150"
              >
                Dashboard
              </Link>
            )}
          </div>
          <div className="hidden lg:flex mx-4 space-x-2">
            <Link
              href={"/application"}
              className="border text-sm px-6 py-3 rounded-md text-basicColor bg-white border-gray-400"
            >
              Apply
            </Link>
            {session ? (
              <>
                <button
                  onClick={handleLogout}
                  className="border text-sm px-6 py-3 rounded-md bg-basicColor text-white"
                  >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href={"/login"}
                className="border text-sm px-6 py-3 rounded-md bg-basicColor text-white"
              >
                Login
              </Link>
            )}
          </div>
          <div
            className="lg:hidden block cursor-pointer mx-4"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 ">
          <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-50 px-4 py-2 transition-transform transform duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
              <div className="cursor-pointer" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              {menuItem?.menuItems?.map((menu) => {
                const isActive = pathName === menu?.link;

                return (
                  <Link
                    href={menu?.link}
                    key={menu?.id}
                    className={`uppercase font-semibold py-2 px-4 transition ease-in-out delay-150 duration-300 hover:bg-gray-200 ${
                      isActive ? "bg-basicColor text-white" : ""
                    }`}
                    onClick={toggleSidebar}
                  >
                    {menu?.title}
                  </Link>
                );
              })}
              {session ? (
                <>
                  <Link
                    href="/dashboard"
                    className="uppercase font-semibold py-2 px-4 transition ease-in-out delay-150 duration-300 hover:bg-gray-200"
                    onClick={toggleSidebar}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="border text-sm px-6 py-3 rounded-md bg-basicColor text-white"
                    >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href={"/login"}
                  className="border text-sm px-6 py-3 rounded-md bg-basicColor text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
