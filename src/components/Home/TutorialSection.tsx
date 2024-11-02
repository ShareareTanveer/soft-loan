"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Features list component
const FeatureItem = ({ title, description }: any) => (
  <div className="flex items-center gap-6">
    <div className="flex-shrink-0">
      <FontAwesomeIcon icon={faCheck} className="text-basicColor text-lg" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-600">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

const TutorialSection = () => {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-500 mt-10">PRODUCTS</p>
      <h2 className="text-5xl text-basicColor mt-2">
        Launch & Automate Robust Building Blocks
      </h2>

      {/* Loan Application Form */}
      <div className="mx-auto py-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <video
            src={"/code canvas creations/video1.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl shadow-lg w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl text-gray-900 font-semibold mt-2">Loan Application Form</h2>
          <p className="text-gray-500 mt-4">
            Effortlessly apply for loans with our intuitive online application form. Enter your income, employment details, credit score, and desired loan amount—all in one place for a seamless experience.
          </p>

          <div className="mt-8 space-y-6">
            <FeatureItem
              title="User-Friendly Interface"
              description="Designed for simplicity, allowing borrowers to navigate and complete their applications with ease."
            />
            <FeatureItem
              title="Instant Submission"
              description="Submit applications in real-time, reducing wait times and speeding up the loan approval process."
            />
            <FeatureItem
              title="Secure Data Handling"
              description="Ensures the safety of sensitive information through robust encryption and compliance with data protection regulations."
            />
            <FeatureItem
              title="Progress Tracking"
              description="Track the status of your application easily and receive notifications on important updates."
            />
          </div>

          <a href="#" className="text-basicColor font-semibold mt-6 block">
            Learn More &rarr;
          </a>
        </div>
      </div>

      {/* Risk Assessment Tool */}
      <div className="mx-auto py-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-12">
          <h2 className="text-4xl text-gray-900 font-semibold mt-2">Risk Assessment Tool</h2>
          <p className="text-gray-500 mt-4">
            Evaluate your creditworthiness quickly and accurately with our advanced risk assessment tool. Get instant insights into your financial profile to make informed borrowing decisions.
          </p>

          <div className="mt-8 space-y-6">
            <FeatureItem
              title="Comprehensive Analysis"
              description="Analyze various financial factors including income, debt, and credit history for accurate assessments."
            />
            <FeatureItem
              title="Real-Time Insights"
              description="Receive instant feedback on your credit risk level to help guide your borrowing decisions."
            />
            <FeatureItem
              title="User-Friendly Dashboard"
              description="Access your risk evaluation results in a simple and easy-to-read format."
            />
          </div>

          <a href="#" className="text-basicColor font-semibold mt-6 block">
            Learn More &rarr;
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <video
            src={"/code canvas creations/video1.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl shadow-lg w-full h-full"
          />
        </div>
      </div>

      {/* Automated Repayment System */}
      <div className="mx-auto py-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <video
            src={"/code canvas creations/video1.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl shadow-lg w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl text-gray-900 font-semibold mt-2">Automated Repayment System</h2>
          <p className="text-gray-500 mt-4">
            Stay on top of your payments with our automated repayment system. Receive timely reminders and easily manage due dates to ensure you never miss a payment.
          </p>

          <div className="mt-8 space-y-6">
            <FeatureItem
              title="Automatic Reminders"
              description="Receive alerts for upcoming payment due dates to help manage your finances."
            />
            <FeatureItem
              title="Flexible Payment Options"
              description="Choose from various repayment methods that suit your financial situation best."
            />
            <FeatureItem
              title="Secure Transactions"
              description="Enjoy peace of mind with secure processing and tracking of all your payments."
            />
          </div>

          <a href="#" className="text-basicColor font-semibold mt-6 block">
            Learn More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
