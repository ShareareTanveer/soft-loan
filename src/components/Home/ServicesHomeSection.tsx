"use client";
import React from "react";

// Reusable card component for each feature
const FeatureCard = ({ icon, title, description }:any) => (
  <div className="flex items-center justify-between bg-white rounded-3xl px-8 py-12 space-y-2 text-gray-800 border border-gray-200">
    <div className="flex items-center justify-between gap-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-lg text-gray-700 font-semibold">{title}</h3>
        <p className="text-md text-gray-500 leading-7">{description}</p>
      </div>
    </div>
  </div>
);

const ServicesHomeSection = () => {
  return (
    <div className=" mx-auto py-20 space-y-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-basicColor">
        How SoftLoan Ensures Trust and Ease in Lending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon="📊"
          title="Risk Assessment"
          description="Evaluate borrower creditworthiness with a built-in risk assessment tool, helping lenders make informed decisions."
        />
        <FeatureCard
          icon="🔒"
          title="Secure Escrow System"
          description="Funds are securely held in escrow until both parties agree, ensuring trust and transparency in transactions."
        />
        <FeatureCard
          icon="🔗"
          title="Automated Repayments"
          description="Stay on track with automated repayment scheduling, reminders, and seamless processing through integrated payment gateways."
        />
        <FeatureCard
          icon="💳"
          title="Flexible Payment Integration"
          description="Easily manage transactions via secure payment gateways like Stripe or PayPal, providing a smooth experience for both borrowers and lenders."
        />
        <FeatureCard
          icon="📝"
          title="Customizable Lending Terms"
          description="Lenders can set loan terms tailored to their preferences, including interest rate, repayment period, and risk tolerance."
        />
        <FeatureCard
          icon="🔍"
          title="Advanced KYC & Fraud Detection"
          description="Verify borrower identity with KYC and fraud detection, ensuring safety and compliance with regulatory standards."
        />
      </div>
    </div>
  );
};

export default ServicesHomeSection;
