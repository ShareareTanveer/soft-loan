"use client";

import React from "react";

const CONNECTORS_IMAGE = "/code canvas creations/technologies.webp";

const OfferSection = () => {
  return (
    <div className="mx-auto py-20 px-4 lg:px-0 space-y-20">
      {/* Connector Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-6">
        <div className="col-span-3">
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-800">
            Every connector you need, built-in
          </h2>
          <p className="text-gray-600 max-w-2xl mb-8 leading-7 text-sm md:text-base">
            Our platform offers a comprehensive suite of pre-built connectors
            that support various tools and applications. From CRM systems to
            marketing automation, our connectors simplify your workflow and
            ensure smooth integration. Additionally, we offer custom connectors
            to meet your specific requirements, providing flexibility and
            adaptability for your operations.
          </p>
        </div>

        <div className="col-span-2">
          <img
            src={CONNECTORS_IMAGE}
            alt="Illustration of technology connectors"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Offer Section */}
      <div className="bg-basicColor text-white rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
        <span className=" text-gray-100 border border-gray-100 py-4 left-1/2 transform -translate-x-1/2 text-xs uppercase font-semibold px-6 rounded-full">
          Limited Period Offer
        </span>

        <h3 className="text-2xl md:text-4xl font-semibold mt-8 leading-snug">
          Sign up now for FREE access to all
        </h3>
        <h3 className="text-2xl md:text-4xl font-semibold mb-12 leading-snug">
          premium features
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-8 text-lg font-medium py-8">
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold">5</p>
            <p className="text-sm">Editors</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold">20K</p>
            <p className="text-sm">API Calls/Month</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold">10</p>
            <p className="text-sm">Rules</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold">No Code</p>
            <p className="text-sm">Editor</p>
          </div>
        </div>

        <button className="bg-white text-gray-800 text-lg px-12 md:px-24 py-4 rounded-full shadow-lg mb-2 hover:bg-gray-200 transition duration-300">
          Get Started For Free
        </button>
        <p className="text-xs mt-2">No Credit Card required</p>
      </div>
    </div>
  );
};

export default OfferSection;
