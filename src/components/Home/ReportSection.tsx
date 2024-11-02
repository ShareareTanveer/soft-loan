"use client";

import React from "react";

const ReportSection = () => {
  return (
    <div className="mx-auto py-16 lg:px-0">
      <div className="md:grid grid-cols-12 items-center gap-6 rounded-3xl py-12 px-8 bg-basicColor">
        
        {/* Icon Section */}
        <div className="flex md:justify-center col-span-1 text-gray-600 text-5xl py-4">
          📈
        </div>
        
        {/* Text Section */}
        <div className="leading-6 space-y-4 col-span-9">
          <h1 className="text-2xl text-white font-bold">
            Unlock Financial Potential with SoftLoan
          </h1>
          <p className="text-gray-100 leading-8">
            Discover how SoftLoan revolutionizes the loan management process with unmatched scalability and advanced features that empower lenders and borrowers alike. Our platform outshines traditional decisioning tools, providing seamless integration and adaptability.
          </p>
          <p className="text-gray-100 leading-8">
            With SoftLoan, experience faster processing times, enhanced data security, and user-friendly interfaces designed for all skill levels. See why thousands are choosing SoftLoan for their loan management needs.
          </p>
        </div>

        {/* Button Section */}
        <div className="col-span-2 flex justify-center lg:justify-end">
          <button className="border border-gray-100 text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-900 w-full sm:w-auto">
          Read the Report &rarr;
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default ReportSection;
