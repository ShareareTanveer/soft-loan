"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-24 ">
      <div className="lg:w-[65%] mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-sm ">
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white">Products</h3>
          <ul>
            {["Auth", "Identity", "Balance", "Signal", "Transfer", "Identity Verification"].map((item) => (
              <li key={item} className="mb-2 hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white">Use Cases</h3>
          <ul>
            {["Personal finances", "Lending", "Wealth", "Pay by bank", "Digital banking", "Business finances", "Crypto"].map((item) => (
              <li key={item} className="mb-2 hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white">About us</h3>
          <ul>
            {["Company", "Careers", "Contact", "Partners", "Press", "Safety", "How we handle data", "Legal", "Why softloan"].map((item) => (
              <li key={item} className="mb-2 hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* For Consumers Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white">For consumers</h3>
          <ul>
            {["How it works", "Discover apps", "Trouble connecting?", "softloan Portal", "Delete my data", "Inc."].map((item) => (
              <li key={item} className="mb-2 hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Developers Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white">Developers</h3>
          <ul>
            {["Quickstart", "API documentation", "Libraries", "GitHub", "Link Demo"].map((item) => (
              <li key={item} className="mb-2 hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white">Resources</h3>
          <ul>
            {["Pricing", "Global coverage", "softloan Blog", "Industry resources"].map((item) => (
              <li key={item} className="mb-2 hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* For Financial Institutions Section */}
        <div>
          <h3 className=" pb-5 mb-3 border-b border-white">For financial institutions</h3>
          <ul>
            {["Open Finance Solution", "Core Exchange", "Permissions Manager", "App Directory"].map((item) => (
              <li key={item} className="mb-2 hover:text-gray-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span>© 2024 softloan Inc.</span>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
