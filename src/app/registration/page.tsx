"use client";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "@/components/shared/PrimaryBtn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { registration } from "@/lib/services/registration.service";

const schema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Email is not valid"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(4, "Password must be at least 4 characters long"),
  last_name: z.string(),
  first_name: z
    .string({
      required_error: "first name is required",
    })
    .min(4, "first name must be at least 4 characters long"),
});

export default function Registration() {
  const router = useRouter();
  const [responseError, setResponseError] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  }: any = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      setResponseError(null);
      const res: any = await registration(data);
      if (res?.status == 201) {
        router.push("/login");
      } else {
        throw new Error("could not register");
      }
    } catch (error: any) {
      setResponseError(
        error?.response?.data?.details ||
          error?.message ||
          "Something went wrong"
      );
    }
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
          With a free softloan account, get your integration up and running in
          less than a week.
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Create your account</h2>

          <div className="mb-4">
            <label className="block text-xs text-gray-500">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-3 border border-gray-900"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500 mb-4 text-xs">
                {errors.email.message}
              </span>
            )}
            {responseError && responseError.email && (
              <span className="text-red-500 mb-4 text-xs">
                {responseError.email[0]}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-xs text-gray-500">First Name</label>
            <input
              type="text"
              {...register("first_name")}
              className="w-full p-3 border border-gray-900"
              placeholder="First Name"
            />
            {errors.first_name && (
              <span className="text-red-500 mb-4 text-xs">
                {errors.first_name.message}
              </span>
            )}
            {responseError && responseError.first_name && (
              <span className="text-red-500 mb-4 text-xs">
                {responseError.first_name[0]}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-xs text-gray-500">Last Name</label>
            <input
              type="text"
              {...register("last_name")}
              className="w-full p-3 border border-gray-900"
              placeholder="Last Name"
            />
            {errors.last_name && (
              <span className="text-red-500 mb-4 text-xs">
                {errors.last_name.message}
              </span>
            )}
            {responseError && responseError.last_name && (
              <span className="text-red-500 mb-4 text-xs">
                {responseError.last_name[0]}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-xs text-gray-500">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full p-3 border border-gray-900"
              placeholder="Password"
              required
            />
            {errors.password && (
              <span className="text-red-500 mb-4 text-xs">
                {errors.password.message}
              </span>
            )}
            {responseError && responseError.password && (
              <span className="text-red-500 mb-4 text-xs">
                {responseError.password[0]}
              </span>
            )}
            {!errors && responseError && !responseError.password && (
              <span className="text-red-500 mb-4 text-xs">{responseError}</span>
            )}
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" id="contactSales" />
            <label htmlFor="contactSales" className="text-gray-700">
              Contact Sales
            </label>
          </div>

          <PrimaryButton
            type="submit"
            isLoading={isSubmitting}
            className={"w-full"}
          >
            Create account
          </PrimaryButton>

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
