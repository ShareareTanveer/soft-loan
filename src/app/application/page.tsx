"use client";

import React, { useState } from "react";
import ApplicationStep1 from "@/components/Application/ApplicationStep1";
import ApplicationStep2 from "@/components/Application/ApplicationStep2";
import ApplicationStep3 from "@/components/Application/ApplicationStep3";
import Link from "next/link";
// Import other step components as needed

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, name: "Business type" },
    { id: 2, name: "Business details" },
    { id: 3, name: "Industry" },
    { id: 4, name: "App details" },
    { id: 5, name: "Products" },
    { id: 6, name: "Use cases" },
    { id: 7, name: "Beneficial owners" },
    { id: 8, name: "Plans" },
    { id: 9, name: "Billing" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ApplicationStep1 />;
      case 2:
        return <ApplicationStep2 />;
      case 3:
        return <ApplicationStep3 />;
      // Add cases for additional steps
      default:
        return <ApplicationStep1 />;
    }
  };

  return (
    <div className="lg:flex">
      {/* Sidebar */}
      <div className="lg:w-1/5 bg-[#FAFAFA] p-6 border-r py-12">
        <h1 className="text-3xl pb-12">
          <Link href={"/"}>SoftLoan</Link>
        </h1>
        <h2 className="text-xl font-semibold mb-6">
          Request production access
        </h2>
        <ul className="space-y-4  mx-auto">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`pl-3 py-1 cursor-pointer flex items-center ${
                currentStep === step.id
                  ? "font-bold border-l-4 border-basicColor bg-gray-100 text-basicColor rounded-lg"
                  : "text-gray-700 hover:text-basicColor"
              }`}
              onClick={() => handleStepClick(step.id)}
            >
              {/* Conditional rendering for cross (X) or tick (✓) */}
              <span className="mr-2 w-4 h-4">
                {currentStep > step.id ? (
                  // Render tick mark if the step is completed
                  <span className="text-basicColor">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <path
                        d="M19.9155 11.3061L18.4281 11.1121C18.4755 10.7488 18.5 10.3776 18.5 10C18.5 9.62238 18.4755 9.25123 18.4281 8.88793L19.9155 8.69391C19.9712 9.12138 20 9.55733 20 10C20 10.4427 19.9712 10.8786 19.9155 11.3061ZM19.2412 6.17212L17.8556 6.7467C17.5694 6.05649 17.1945 5.41152 16.7446 4.82615L17.934 3.91216C18.4628 4.60028 18.9041 5.35915 19.2412 6.17212ZM16.0878 2.06601L15.1739 3.25538C14.5885 2.80555 13.9435 2.43061 13.2533 2.14439L13.8279 0.758805C14.6409 1.09593 15.3997 1.53721 16.0878 2.06601ZM11.3061 0.0845226L11.1121 1.57192C10.7488 1.52453 10.3776 1.5 10 1.5C9.62238 1.5 9.25123 1.52453 8.88793 1.57192L8.69391 0.0845229C9.12138 0.0287633 9.55733 0 10 0C10.4427 0 10.8786 0.0287632 11.3061 0.0845226ZM6.17212 0.758805L6.7467 2.14439C6.05649 2.43061 5.41152 2.80555 4.82615 3.25539L3.91216 2.06601C4.60028 1.53721 5.35915 1.09593 6.17212 0.758805ZM2.06601 3.91216L3.25538 4.82615C2.80555 5.41152 2.43061 6.05649 2.14439 6.7467L0.758805 6.17212C1.09593 5.35915 1.53721 4.60028 2.06601 3.91216ZM0.0845226 8.69391C0.0287632 9.12138 0 9.55733 0 10C0 10.4427 0.0287633 10.8786 0.0845229 11.3061L1.57192 11.1121C1.52453 10.7488 1.5 10.3776 1.5 10C1.5 9.62238 1.52453 9.25123 1.57192 8.88793L0.0845226 8.69391ZM0.758806 13.8279L2.14439 13.2533C2.43061 13.9435 2.80555 14.5885 3.25539 15.1739L2.06601 16.0878C1.53722 15.3997 1.09593 14.6409 0.758806 13.8279ZM3.91216 17.934L4.82615 16.7446C5.41152 17.1945 6.05649 17.5694 6.7467 17.8556L6.17212 19.2412C5.35915 18.9041 4.60028 18.4628 3.91216 17.934ZM8.69391 19.9155L8.88793 18.4281C9.25123 18.4755 9.62238 18.5 10 18.5C10.3776 18.5 10.7488 18.4755 11.1121 18.4281L11.3061 19.9155C10.8786 19.9712 10.4427 20 10 20C9.55733 20 9.12138 19.9712 8.69391 19.9155ZM13.8279 19.2412L13.2533 17.8556C13.9435 17.5694 14.5885 17.1945 15.1739 16.7446L16.0878 17.934C15.3997 18.4628 14.6409 18.9041 13.8279 19.2412ZM17.934 16.0878L16.7446 15.1739C17.1945 14.5885 17.5694 13.9435 17.8556 13.2533L19.2412 13.8279C18.9041 14.6409 18.4628 15.3997 17.934 16.0878Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M14.2426 5.75736C13.1174 4.63214 11.5912 4 9.99993 4C8.40863 4 6.88251 4.63214 5.75729 5.75736C4.63207 6.88258 3.99993 8.4087 3.99993 10C3.99993 11.5913 4.63207 13.1174 5.75729 14.2426L14.2426 5.75736Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span className="">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <path
                        d="M19.9155 11.3061L18.4281 11.1121C18.4755 10.7488 18.5 10.3776 18.5 10C18.5 9.62238 18.4755 9.25123 18.4281 8.88793L19.9155 8.69391C19.9712 9.12138 20 9.55733 20 10C20 10.4427 19.9712 10.8786 19.9155 11.3061ZM19.2412 6.17212L17.8556 6.7467C17.5694 6.05649 17.1945 5.41152 16.7446 4.82615L17.934 3.91216C18.4628 4.60028 18.9041 5.35915 19.2412 6.17212ZM16.0878 2.06601L15.1739 3.25538C14.5885 2.80555 13.9435 2.43061 13.2533 2.14439L13.8279 0.758805C14.6409 1.09593 15.3997 1.53721 16.0878 2.06601ZM11.3061 0.0845226L11.1121 1.57192C10.7488 1.52453 10.3776 1.5 10 1.5C9.62238 1.5 9.25123 1.52453 8.88793 1.57192L8.69391 0.0845229C9.12138 0.0287633 9.55733 0 10 0C10.4427 0 10.8786 0.0287632 11.3061 0.0845226ZM6.17212 0.758805L6.7467 2.14439C6.05649 2.43061 5.41152 2.80555 4.82615 3.25539L3.91216 2.06601C4.60028 1.53721 5.35915 1.09593 6.17212 0.758805ZM2.06601 3.91216L3.25538 4.82615C2.80555 5.41152 2.43061 6.05649 2.14439 6.7467L0.758805 6.17212C1.09593 5.35915 1.53721 4.60028 2.06601 3.91216ZM0.0845226 8.69391C0.0287632 9.12138 0 9.55733 0 10C0 10.4427 0.0287633 10.8786 0.0845229 11.3061L1.57192 11.1121C1.52453 10.7488 1.5 10.3776 1.5 10C1.5 9.62238 1.52453 9.25123 1.57192 8.88793L0.0845226 8.69391ZM0.758806 13.8279L2.14439 13.2533C2.43061 13.9435 2.80555 14.5885 3.25539 15.1739L2.06601 16.0878C1.53722 15.3997 1.09593 14.6409 0.758806 13.8279ZM3.91216 17.934L4.82615 16.7446C5.41152 17.1945 6.05649 17.5694 6.7467 17.8556L6.17212 19.2412C5.35915 18.9041 4.60028 18.4628 3.91216 17.934ZM8.69391 19.9155L8.88793 18.4281C9.25123 18.4755 9.62238 18.5 10 18.5C10.3776 18.5 10.7488 18.4755 11.1121 18.4281L11.3061 19.9155C10.8786 19.9712 10.4427 20 10 20C9.55733 20 9.12138 19.9712 8.69391 19.9155ZM13.8279 19.2412L13.2533 17.8556C13.9435 17.5694 14.5885 17.1945 15.1739 16.7446L16.0878 17.934C15.3997 18.4628 14.6409 18.9041 13.8279 19.2412ZM17.934 16.0878L16.7446 15.1739C17.1945 14.5885 17.5694 13.9435 17.8556 13.2533L19.2412 13.8279C18.9041 14.6409 18.4628 15.3997 17.934 16.0878Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                )}
              </span>

              {/* Step name */}
              {step.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="lg:w-4/5 ">
        <div className="lg:w-3/5 mx-auto py-12 lg:px-24 px-4 flex flex-col justify-between min-h-screen">
          {renderStepContent()}
        </div>
        <div className="absolute bottom-0 sticky  flex justify-between items-center py-6 border-t border-b  bg-white z-10 px-12">
          <button
            type="button"
            className={`px-10 py-2 border border-basicColor "bg-basicColor text-basicColor hover:bg-slate-100 duration-500`}
          >
            <Link href={"/"}>Exit</Link>
          </button>
          <div className="">
            <button
              type="button"
              className={`px-4 py-2 mx-4 ${
                currentStep === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-basicColor text-white hover:bg-slate-600"
              }`}
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              type="button"
              className={`px-4 py-2 ${
                currentStep === steps.length
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-basicColor text-white hover:bg-slate-600"
              }`}
              onClick={handleNext}
              disabled={currentStep === steps.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
