"use client";
import React, { useState } from "react";

const tools = [
  {
    id: 2,
    name: "Risk Assessment Tool",
    description:
      "Evaluate your creditworthiness quickly and accurately with our advanced risk assessment tool. Get instant insights into your financial profile to make informed borrowing decisions.",
    codeSnippet: "/code canvas creations/code2.webp",
  },
  {
    id: 1,
    name: "Loan Application Form",
    description:
      "Effortlessly apply for loans with our intuitive online application form. Enter your income, employment details, credit score, and desired loan amount—all in one place for a seamless experience.",
    codeSnippet: "/code canvas creations/code1.webp",
  },
  {
    id: 3,
    name: "Automated Repayment System",
    description:
      "Stay on top of your payments with our automated repayment system. Receive timely reminders and easily manage due dates to ensure you never miss a payment.",
    codeSnippet: "/code canvas creations/code1.webp",
  },
  {
    id: 4,
    name: "Payment Integration",
    description:
      "Experience hassle-free transactions with our secure payment integration. We support popular payment gateways like Stripe and PayPal for a smooth lending experience.",
    codeSnippet: "/code canvas creations/code2.webp",
  },
  {
    id: 5,
    name: "KYC Verification",
    description:
      "Ensure a secure lending environment with our robust KYC verification process. Protect yourself from fraud with verified identities for both borrowers and lenders.",
    codeSnippet: "/code canvas creations/code1.webp",
  },
];

const ToolSection = () => {
  const [selectedTool, setSelectedTool] = useState(tools[0]);

  return (
    <div className="py-16 border px-4 sm:px-8 md:px-16 lg:px-16 rounded-3xl">
      <h2 className="text-3xl font-semibold text-basicColor mb-8 text-center">
        Build with the tools you already use
      </h2>

      {/* Tool Tabs */}
      <div className="flex justify-center overflow-x-auto space-x-4 border-b pb-4 mb-6">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className={`px-4 py-2 text-md whitespace-nowrap ${
              selectedTool.id === tool.id
                ? "text-basicColor font-semibold border-b-2 border-basicColor"
                : "text-gray-600"
            }`}
            onClick={() => setSelectedTool(tool)}
          >
            {tool.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-10 px-4">
        {/* Tool Description */}
        <div className="lg:w-1/2 space-y-6 mb-6 lg:mb-0">
          <p className="text-gray-500 leading-7">{selectedTool.description}</p>

          <button className="px-6 py-3 bg-basicColor hover:bg-gray-800 duration-500  text-white rounded-md font-semibold">
            Get Started
          </button>
        </div>

        {/* Code Snippet Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-lg shadow-lg">
            <img
              src={selectedTool.codeSnippet}
              alt={`Tool snippet for ${selectedTool.name}`}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolSection;
