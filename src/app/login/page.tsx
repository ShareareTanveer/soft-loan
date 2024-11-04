"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/shared/PrimaryBtn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const { toast } = useToast();
  const router = useRouter();
  const [responseError, setResponseError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  }: any = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    setResponseError(null);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    toast({
      title: "Succes",
      description: "Logged In Successfully",
    });

    if (res?.error) {
      setResponseError(res.error || "Invalid email or password");
      toast({
        title: "Error",
        description: "Failed to log in.",
        variant: "destructive",
      });
    } else if (res?.ok) {
      router.push("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google-oauth2");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/3 bg-black text-white p-10 flex flex-col justify-center leading-7">
        <h1 className="text-4xl my-6">
          <Link href="/">SoftLoan</Link>
        </h1>
        <h1 className="text-3xl font-bold mb-4">
          Join thousands of businesses building the future of digital finance
        </h1>
        <p className="mb-12">
          With a free SoftLoan account, get your integration up and running in
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
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <div className="mb-4">
            <label className="block text-xs text-gray-500">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-900"
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500 mb-4 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-xs text-gray-500">Password</label>
            <input
              type="password"
              {...register("password")}
              className={`w-full p-3 border ${
                errors.password ? "border-red-500" : "border-gray-900"
              }`}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500 mb-4 text-xs">
                {errors.password.message}.
              </span>
            )}{" "}
            {responseError && (
              <span className="text-red-500 mb-4 text-xs">{responseError}</span>
            )}
          </div>
          <PrimaryButton
            type="submit"
            isLoading={isSubmitting}
            onClick={handleSubmit}
            className={"w-full"}
          >
            Sign In
          </PrimaryButton>
          <button
            onClick={handleGoogleSignIn}
            aria-label="Sign in with Google"
            className="flex items-center justify-center gap-2 bg-white border border-gray-400  w-full  p-3 mt-4"
          >
            <div className="flex items-center justify-center bg-white rounded-l">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <title>Sign in with Google</title>
                <desc>Google G Logo</desc>
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  className="fill-google-logo-blue"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  className="fill-google-logo-green"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  className="fill-google-logo-yellow"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  className="fill-google-logo-red"
                ></path>
              </svg>
            </div>
            <span className="text-sm text-google-text-gray tracking-wider">
              Sign in with Google
            </span>
          </button>
          <p className="mt-6 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/registration" className="text-gray-800 font-semibold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
