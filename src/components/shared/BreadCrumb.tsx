"use client";
import React from "react";
import breadData from "../../lib/BreadCrumb.json";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  const currentBreadcrumb = breadData.find((data) =>
    pathname.startsWith(data.slug)
  );

  if (!currentBreadcrumb) {
    return null;
  }

  return (
    <div className="text-center py-2 ">
      <h1 className="uppercase font-bold text-4xl">{currentBreadcrumb.name}</h1>
      <hr className="border-basicColor my-4 w-40 border-2 mx-auto lg:text-left" />
      <h1 className="w-6/12 mx-auto">{currentBreadcrumb.pageTitle}</h1>
    </div>
  );
};

export default BreadCrumb;
