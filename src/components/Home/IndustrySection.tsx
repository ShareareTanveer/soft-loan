"use client";

import React from "react";

// Industry item component
const IndustryItem = ({ icon, title, description }: any) => (
  <div className="flex items-start gap-4 mb-8">
    <div className="flex-shrink-0 text-purple-600 text-3xl">{icon}</div>
    <div className="">
      <h3 className="text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="text-basicColor font-semibold mt-2 block">
        View More
      </a>
    </div>
  </div>
);

const IndustrySection = () => {
  return (
    <div className="mx-auto lg:py-24 py-8 space-y-8">
      {/* Header */}
      <div className="md:w-3/5 space-y-4">
        <p className="text-sm font-semibold text-gray-500">
          INDUSTRY APPLICATIONS
        </p>
        <h2 className="text-5xl font-semibold text-gray-900">
          One tool for all industries
        </h2>
        <p className="text-gray-500 leading-7">
          SoftLoan has catered to more than 10 industries. Here are a few
          examples of how you can leverage SoftLoan across diverse sectors:
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row mt-12 border rounded-3xl p-6">
        {/* Left - Industry List */}
        <div className="flex flex-col space-y-6 bg-[#F7F7F7] p-2 rounded-lg w-full lg:w-1/3">
          <button className="flex items-center gap-4 p-6 rounded-2xl shadow-md bg-white hover:bg-gray-100">
            <span className="text-purple-600 text-2xl">$</span>
            <span className="text-lg font-semibold">Credit and Lending</span>
          </button>
          <button className="flex items-center gap-4 p-6 rounded-2xl hover:bg-gray-100">
            <span className="text-purple-600 text-2xl">🏛️</span>
            <span className="text-lg font-semibold">Banking & Insurance</span>
          </button>
          <button className="flex items-center gap-4 p-6 rounded-2xl hover:bg-gray-100">
            <span className="text-purple-600 text-2xl">🛒</span>
            <span className="text-lg font-semibold">E-Commerce</span>
          </button>
          <button className="flex items-center gap-4 p-6 rounded-2xl hover:bg-gray-100">
            <span className="text-purple-600 text-2xl">🎓</span>
            <span className="text-lg font-semibold">Ed-tech</span>
          </button>
        </div>

        {/* Right - Details */}
        <div className="mt-10 lg:mt-0 lg:ml-12 space-y-10 w-full lg:w-2/3">
          <IndustryItem
            icon="💳"
            title="Credit Scoring & Analysis"
            description="Utilize SoftLoan’s analytics to assess borrower profiles efficiently, helping to make informed lending decisions and minimize risk."
          />
          <IndustryItem
            icon="📈"
            title="Automated Loan Processing"
            description="Automate loan origination, underwriting, and disbursement to streamline workflows and improve processing speeds across departments."
          />
          <IndustryItem
            icon="⚠️"
            title="Risk & Compliance Management"
            description="Deploy SoftLoan’s risk and compliance features to ensure adherence to regulatory standards and manage loan portfolios securely."
          />
        </div>
      </div>

      <div className="lg:space-x-4 lg:space-y-0 space-y-4 mt-10 flex flex-col sm:flex-row">
        <button className="bg-basicColor text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
          Explore all use-cases
        </button>
        <button className="border border-gray-300 text-basicColor font-semibold py-4 px-6 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
          Can't find your use-case?
        </button>
      </div>
    </div>
  );
};

export default IndustrySection;
