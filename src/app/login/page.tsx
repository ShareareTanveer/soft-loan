"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
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
          With a free Plaid account, get your integration up and running in less
          than a week
        </p>
        <ul className="space-y-2">
          <li>✔️ Test in our Sandbox environment</li>
          <li>✔️ Launch in production with unlimited API access</li>
          <li>
            ✔️ Scale your integration with powerful developer tools, product
            analytics, and Link customization
          </li>
        </ul>
      </div>

      <div className="lg:w-2/3 p-10 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
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
          <button
            type="submit"
            className="w-full bg-basicColor text-white p-3 font-semibold hover:bg-gray-800"
          >
            Create account
          </button>
          <p className="mt-6 text-gray-600">
            Don&apos;t Have an account?{" "}
            <Link href="/registration" className="text-gray-800 font-semibold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
