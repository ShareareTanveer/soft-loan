"use client";
import React from "react";
import breadData from "../../lib/BreadCrumb.json";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadCrumbPath = () => {
  // const pathname = usePathname();

  // const currentBreadcrumb = breadData.find((data) =>
  //   pathname.startsWith(data.slug)
  // );

  // if (!currentBreadcrumb) {
  //   return null;
  // }

  return (
    // <div className="bg-gray-100 py-4 flex items-center justify-center text-lg">
      {/* <Link href="/" className="font-bold px-2">
        Home
      </Link>
      <span className="px-2">/</span>
      {currentBreadcrumb.name &&
        currentBreadcrumb.name.charAt(0).toUpperCase() +
          currentBreadcrumb.name.slice(1).toLowerCase()}

      <p className="text-gray-500">
        {pathname.replace(currentBreadcrumb.slug, "").replace("/", "") ? (
          <span className="px-2">/</span>
        ) : null}
        {pathname.replace(currentBreadcrumb.slug, "").replace("/", "")}
      </p> */}
    // </div>
  );
};

export default BreadCrumbPath;
