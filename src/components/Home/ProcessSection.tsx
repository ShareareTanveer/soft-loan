"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faShieldAlt,
  faMoneyBillWave,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const stepsData = [
  {
    id: 1,
    icon: faClipboardCheck,
    title: "Loan Application Form",
    description:
      "Borrowers can easily input their details like income, employment, credit score, and the required loan amount.",
    image: "/code canvas creations/tutorial-step1.svg",
  },
  {
    id: 2,
    icon: faShieldAlt,
    title: "Risk Assessment Tool",
    description:
      "Evaluate the creditworthiness of borrowers with our integrated risk assessment tool, allowing lenders to see the score before making a decision.",
    image: "/code canvas creations/tutorial-step1.svg",
  },
  {
    id: 3,
    icon: faMoneyBillWave,
    title: "Approval Workflow",
    description:
      "Lenders review and either approve or reject loan applications based on their criteria, ensuring a structured workflow.",
    image: "/code canvas creations/tutorial-step1.svg",
  },
  {
    id: 4,
    icon: faUserCheck,
    title: "User Verification & KYC",
    description:
      "Implement KYC processes to verify borrower and lender identities, enhancing trust and security in transactions.",
    image: "/code canvas creations/tutorial-step1.svg",
  },
];

const ProcessSection = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const currentStep = stepsData.find((step) => step.id === selectedStep);

  return (
    <div className="py-10">
      <h2 className="text-4xl text-black mb-12">
        Loan Application and Approval Workflow
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-auto space-y-6 lg:space-y-0 gap-5">
        <div className="space-y-6 lg:w-6/12">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className={`flex items-start space-x-6 cursor-pointer rounded-lg p-6 ${
                selectedStep === step.id ? "bg-[#F8F8F8]" : ""
              }`}
              onClick={() => setSelectedStep(step.id)}
            >
              <FontAwesomeIcon
                icon={step.icon}
                className="text-3xl text-gray-400 mt-1"
              />
              <div>
                <h3 className="text-md font-gray-500">{step.title}</h3>
                <p className="text-gray-500 font-extralight leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          <button className="mt-6 px-6 py-3 bg-basicColor text-white rounded-lg font-semibold">
            Start Your Loan Application
          </button>
        </div>

        <div className="lg:w-6/12 flex justify-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full h-full flex items-center justify-center">
            {currentStep && (
              <img
                src={currentStep.image}
                alt={`Image for ${currentStep.title}`}
                className="w-full h-full object-cover rounded-md"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
