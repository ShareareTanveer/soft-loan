"use client";

import React from "react";

const blogs = [
  {
    id: 2,
    category: "Risk Assessment",
    image: "/code canvas creations/blog1.webp",
    date: "Oct 25, 2024",
    title: "Understanding Risk Assessment Tools for Lenders",
  },
  {
    id: 3,
    category: "Repayment Strategies",
    image: "/code canvas creations/blog2.png",
    date: "Oct 13, 2024",
    title: "Automated Loan Repayment Systems: What You Need to Know",
  },
  {
    id: 4,
    category: "KYC Compliance",
    image: "/code canvas creations/blog3.webp",
    date: "Oct 20, 2024",
    title: "The Importance of KYC in Loan Processing",
  },
];

const BlogSection = () => {
  return (
    <div className="mx-auto py-16 px-4 lg:px-0">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Latest Blogs</h2>
        <a
          href="/blogs"
          className="text-blue-600 font-semibold hover:underline"
        >
          All Blogs
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute py-2 top-4 right-4 bg-basicColor text-gray-100 font-semibold text-xs uppercase px-3 rounded-full">
                {blog.category}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                {blog.date}
              </div>
              <h3 className="text-lg my-4 text-gray-800">{blog.title}</h3>
              <a
                href={`/blogs/${blog.id}`}
                className="text-basicColor hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
