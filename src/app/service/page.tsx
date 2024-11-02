"use client";
import Image from "next/image";
import React, { useState } from "react";

const Service = () => {
  const [activeFeature, setActiveFeature] = useState("Instant verification");

  const features = [
    {
      title: "Early detection",
      description: "takeovers during onboarding or when the source of funds is switched. With Identity, you can verify bank account details to confirm source of funds or understand payer and payee risk.",
      // icon: <FiEye className="text-gray-500 w-5 h-5" />,
    },
    {
      title: "Instant verification",
      description:
        "Prevent account takeovers during onboarding or when the source of funds is switched. With Identity, you can verify bank account details to confirm source of funds or understand payer and payee risk.",
      // icon: <FiShield className="text-black w-5 h-5" />,
    },
    {
      title: "Ongoing monitoring",
      description: "takeovers during onboarding or when the source of funds is switched. With Identity, you can verify bank account details to confirm source of funds or understand payer and payee risk.",
      // icon: <FiRefreshCw className="text-gray-500 w-5 h-5" />,
    },
    {
      title: "Network insights",
      description: "takeovers during onboarding or when the source of funds is switched. With Identity, you can verify bank account details to confirm source of funds or understand payer and payee risk.",
      // icon: <FiActivity className="text-gray-500 w-5 h-5" />,
    },
  ];

  return (
    <>
      <div>
        {/* hero section */}
        <section className="bg-gray-50 text-center py-20 px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tough on fraudsters, easy on customers
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Safeguard customers & reduce fraud with solutions designed to
              optimize the customer experience.
            </p>
            <div className="flex justify-center mt-8 space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
                Contact us
              </button>
              <button className="bg-white text-black border border-black px-8 py-3 rounded-md hover:bg-gray-100 transition">
                See Demo
              </button>
            </div>
          </div>
          <img
            src="/code canvas creations/service1.webp"
            alt="Service Illustration 1"
            className="w-full h-full"
          />
        </section>

        {/* FeaturesSection */}
        <section className=" mx-auto py-16 px-4 bg-basicColor text-white">
          <div className="container">
            <h2 className="text-3xl font-semibold">
              Safeguard every stage of the customer journey
            </h2>
            <p className="text-lg mt-4">
              Protect your business with our advanced fraud detection tools.
            </p>
            <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-md space-y-4">
                <img
                  src="/code canvas creations/service2.webp"
                  alt="Service Illustration 1"
                  className="w-full"
                />
                <h3 className="font-bold text-xl">Real-time Verification</h3>
                <p>
                  Verify a customer’s identity, assess risk factors, and get
                  notified if they’re associated with fraud on other platforms.
                </p>
              </div>
              <div className="rounded-md space-y-4">
                <img
                  src="/code canvas creations/service3.webp"
                  alt="Service Illustration 1"
                  className="w-full "
                />
                <h3 className="font-bold text-xl">Insights & Analytics</h3>
                <p>
                  Identify money mules and politically exposed persons with
                  automated global watchlist screening.
                </p>
              </div>
              <div className="  rounded-md space-y-4">
                <img
                  src="/code canvas creations/service4.webp"
                  alt="Service Illustration 1"
                  className="w-full "
                />
                <h3 className="font-bold text-xl">Fraud Detection</h3>
                <p>
                  Enhance your risk program with ML-powered predictive scoring
                  that flags risky ACH transactions and helps prevent costly
                  returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-4 lg:px-20">
          {/* Left Side: Text and Accordion */}
          <div className="lg:w-1/2 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">
              Stop fraud earlier, faster, and in more places
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Thanks to our robust fraud detection tools, you’ll have everything
              you need to flag suspicious activity and stop fraudsters without
              disrupting the customer experience.
            </p>

            <div className="border-t border-gray-300">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-300 py-2">
                  <button
                    className="flex justify-between items-center w-full py-4 text-left"
                    onClick={() => setActiveFeature(feature.title)}
                  >
                    <div className="flex items-center space-x-2">
                      {/* {feature.icon} */}
                      <span
                        className={
                          feature.title === activeFeature
                            ? "font-semibold text-black"
                            : "text-gray-500"
                        }
                      >
                        {feature.title}
                      </span>
                    </div>
                    <span>{feature.title === activeFeature ? "−" : "+"}</span>
                  </button>
                  {feature.title === activeFeature && feature.description && (
                    <p className="text-gray-600 text-sm pl-8 pr-4 pb-4">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <img
              src="/code canvas creations/service5.webp"
              alt="Service Illustration 1"
              className="w-full "
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
