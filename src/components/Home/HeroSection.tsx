"use client";

import Link from "next/link";
import React, { useState } from "react";

const HeroSection = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(12);

  const interestRate = 0.05;
  const totalRepayment = (
    loanAmount *
    (1 + interestRate * (loanTerm / 12))
  ).toFixed(2);

  return (
    <div className="container mx-auto space-y-20 pt-8 lg:py-24">
      <div className="lg:grid grid-cols-2 gap-5 px-4 md:px-0">
        <div className="space-y-6 text-center lg:text-left">
          <div className="text-3xl md:text-4xl lg:text-5xl">
            <div className="space-y-2">
              <h1 className="text-basicColor">Flexible Online Loans</h1>
              <h1 className="text-2xl md:text-3xl">Designed for Your Needs</h1>
              <div className="w-fit px-6 border border-gray-400 rounded-full text-gray-700 my-2 bg-gray-100">
                <p className="text-sm py-2 font-medium">
                  Fast Approval | Customizable Terms | Secure Platform
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-500 leading-7">
            Apply for a loan in minutes, get assessed, and start building your
            future. Customize your loan terms to fit your budget. Our platform
            is designed for simplicity and flexibility, ensuring you stay in
            control.
          </p>
          <div className="lg:space-x-4 space-y-4 lg:space-y-0  mt-10 flex flex-col sm:flex-row">
            <button className="bg-basicColor text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
              View Loan Options
            </button>
            <button className="border border-gray-300 text-basicColor font-semibold py-4 px-6 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
              Have Questions?
            </button>
          </div>
        </div>

        <div  className="mx-auto mt-10 lg:mt-0">
          <div className="space-y-4 md:w-[90%] lg:w-[70%] mx-auto rounded-2xl border p-6 border-gray-200">
            <h1 className="text-2xl lg:text-xl text-center font-bold">
              Loan Application Form
            </h1>
            <p className="text-gray-500">
              Fill in your details to get an instant estimate of your loan
              repayment plan.
            </p>
            <div>
              <div className="flex justify-between items-center py-4 px-4">
                <p className="block font-semibold">Loan Amount</p>
                <p className="text-xl font-semibold">
                  ${loanAmount.toLocaleString()}
                </p>
              </div>
              <div className="relative flex items-center -top-2">
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full range-black"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center py-4 px-4">
                <p className="block font-semibold text-gray-900">Loan Term</p>
                <p className="text-xl font-semibold">{loanTerm} months</p>
              </div>
              <div className="relative flex items-center -top-2">
                <input
                  type="range"
                  min="6"
                  max="36"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full range-black"
                />
              </div>
            </div>

            <p className="text-md py-2">
              Estimated Repayment:{" "}
              <span className="font-semibold">${totalRepayment}</span>
            </p>

            <button className="border px-4 py-3 w-full rounded-md bg-basicColor text-white hover:bg-gray-800 text-lg font-semibold">
              <Link href={"/application"}> Apply Now</Link>
            </button>
            <p className="text-xs text-center mt-2">
              By applying, I agree to the{" "}
              <a href="#" className="underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
