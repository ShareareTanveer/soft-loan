"use client";
import Link from "next/link";
import { useState } from "react";

export default function Registration() {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    companyName: "",
    country: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/3 bg-black text-white p-10 flex flex-col justify-center leading-7">
        <h1 className="text-4xl my-6">
          <Link href={"/"}>SoftLoan</Link>
        </h1>
        <h1 className="text-3xl font-bold mb-4">
          Join thousands of businesses building the future of digital finance
        </h1>
        <p className="mb-12">
          With a free softloan account, get your integration up and running in less
          than a week.
        </p>
        <ul className="space-y-2">
          <li>✔️ Test in our Sandbox environment</li>
          <li>✔️ Launch in production with unlimited API access</li>
          <li>
            ✔️ Scale your integration with powerful developer tools, product
            analytics, and Link customization.
          </li>
        </ul>
      </div>

      <div className="lg:w-2/3 p-10 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Create your account</h2>
          <div className="mb-4">
            <label className="block text-xs text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs text-gray-500">Full name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900"
              placeholder="Full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs text-gray-500">Company name</label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900"
              placeholder="Company name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs text-gray-500">Country</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900"
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              {/* Add more country options as needed */}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-xs text-gray-500">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-900"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" id="contactSales" />
            <label htmlFor="contactSales" className="text-gray-700">
              Contact Sales
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-basicColor text-white p-3 font-semibold hover:bg-gray-800"
          >
            Create account
          </button>
          <p className="mt-6 text-gray-600">
            Have an account?{" "}
            <Link href="/login" className="text-gray-800 font-semibold">
              Sign in with email
            </Link>
          </p>
          <p className="text-xs text-gray-500 mt-4">
            By creating an account, you agree to softloan&apos;s{" "}
            <a href="#" className="text-gray-800 font-semibold">
              Terms of Use
            </a>{" "}
            and consent to softloan&apos;s{" "}
            <a href="#" className="text-gray-800 font-semibold">
              Privacy Statement
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
