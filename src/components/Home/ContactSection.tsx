import React from "react";

const ContactSection = () => {
  return (
    <div className="w-[100%]">
    <div className=" flex flex-col lg:flex-row mx-auto pb-6 space-y-6 lg:space-y-0 relative top-10">
      {/* Left Side */}
      <div className="footer-bg flex-1 py-44 bg-blue-300 text-white p-10 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">More customers.<br /> Less fraudsters.<br /> Higher revenue.</h2>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 bg-[#F6F6F6] p-10 py-44">
        <h3 className="text-2xl font-semibold mb-6">Ready to get started?</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300  p-3 w-full"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300  p-3 w-full"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Company email"
            className="border border-gray-300  p-3 w-full"
            required
          />
          <input
            type="text"
            placeholder="Company name"
            className="border border-gray-300  p-3 w-full"
            required
          />
          <input
            type="text"
            placeholder="Phone number (optional)"
            className="border border-gray-300  p-3 w-full"
          />
          <select
            className="border border-gray-300  p-3 w-full"
            required
          >
            <option value="">Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
          <button
            type="submit"
            className="w-full bg-black text-white  p-3 font-semibold"
          >
            Talk with our team →
          </button>
          <p className="text-sm text-gray-500 mt-4">
            By submitting this form, I confirm that I have read and understood softloan&apos;s{" "}
            <a href="#" className="text-blue-600 underline">Privacy Statement</a>.
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactSection;
