"use client";
import { useWebsideData } from "@/lib/contexts/websideDataContext";
import Image from "next/image";
import React from "react";
import blog1 from "../../../public/blog-1.jpg";
import Link from "next/link";

const Blog = () => {
  const websideData = useWebsideData();

  return (
    <div className=" max-w-screen-xl mx-auto px-2 py-28">
      <div className="lg:grid lg:grid-cols-3 gap-6 px-2">
        {websideData?.blogs?.slice(0, 4)?.map((item: any) => (
          <Link
            key={item?.id}
            href={`blog/${item?.id}`}
            className="rounded-2xl text-center border duration-300 hover:duration-300 hover:shadow-xl overflow-hidden bg-white"
          >
            <div className="overflow-hidden">
              <Image
                src={
                  item?.images && item.images[0].image
                    ? item.images[0].image
                    : blog1
                }
                alt="blog"
                height={200}
                width={500}
                className="rounded-t-2xl mx-auto"
              />
            </div>
            <div className="space-y-2 my-5 px-5">
              <p className="text-gray-500 uppercase tracking-wide text-sm">
                {item?.category?.name}
              </p>
              <p className="text-lg font-semibold text-basicColor hover:text-indigo-600 transition-colors duration-300">
                How to host a website on any hosting provider?
              </p>
              <div>
                <p className="font-medium text-gray-700">William Bla</p>
                <p className="text-gray-400 text-sm">Feb 1, 2023</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
