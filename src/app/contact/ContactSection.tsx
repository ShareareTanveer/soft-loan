"use client";

import React from "react";

const ContactSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-20 mt-12">
          <h2 className="text-3xl font-bold mb-6">Contact Sales</h2>
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Form Section */}
        <div>
          <p className="mb-6">
            Ready to build the future of digital finance? Reach out to our sales team and we&apos;ll be in touch.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-700 placeholder:text-sm p-3 w-full "
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-700 placeholder:text-sm p-3 w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Company email"
              className="border border-gray-700 placeholder:text-sm p-3 w-full"
            />
            <input
              type="text"
              placeholder="Company name"
              className="border border-gray-700 placeholder:text-sm p-3 w-full"
            />
            <textarea
              placeholder="What are you building, and in what countries? Details are helpful!"
              className="border border-gray-700 placeholder:text-sm p-3 w-full h-24"
            ></textarea>
            <input
              type="tel"
              placeholder="Phone number (optional)"
              className="border border-gray-700 placeholder:text-sm p-3 w-full"
            />
            <select className="border border-gray-700 placeholder:text-sm p-3 w-full">
              <option value="">Country</option>
              {/* Add more country options here */}
            </select>
            <button className="bg-black text-white py-3 px-6 mt-4 w-full">
              Submit
            </button>
            <p className="text-sm mt-4">
              By submitting this form, I confirm that I have read and understood Plaid&apos;s{" "}
              <a href="#" className="underline">
                Privacy Statement
              </a>
              .
            </p>
            <p className="text-sm mt-4">
              This form goes to our sales team. If you have questions about connecting your financial accounts to a Plaid-powered app, visit our{" "}
              <a href="#" className="underline">
                consumer help center
              </a>{" "}
              for more information.
            </p>
            <p className="text-sm mt-4">
              For developers and existing Plaid customers,{" "}
              <a href="#" className="underline">
                please open a case
              </a>{" "}
              through the Plaid Dashboard.
            </p>
          </form>
        </div>

        {/* Right Info Section */}
        <div>
          <p className="m-b py-6 border-t-2 border-gray-800">
            Join the thousands of innovators that are already building with Plaid
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <span className="font-semibold text-lg">Betterment</span>
            <span className="font-semibold text-lg">Dave</span>
            <span className="font-semibold text-lg">Chime</span>
            <span className="font-semibold text-lg">Venmo</span>
            <span className="font-semibold text-lg">Wave</span>
          </div>
          <div className="border-t border-black mb-4"></div>
          <p className="mb-4">Have other questions?</p>
          <ul className="space-y-2 text-sm">
            <li>
              Learn more about{" "}
              <a href="#" className="underline">
                connecting financial accounts
              </a>
            </li>
            <li>
              Visit our{" "}
              <a href="#" className="underline">
                press page
              </a>
            </li>
            <li>
              For employment verification,{" "}
              <a href="#" className="underline">
                visit here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
