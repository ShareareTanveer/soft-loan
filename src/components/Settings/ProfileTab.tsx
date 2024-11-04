"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { updateUserInfo } from "@/lib/services/user.service";
import Loading from "@/app/loading";
import PrimaryButton from "../shared/PrimaryBtn";
import { useUser } from "@/lib/contexts/userInfoContext";
import { useToast } from "@/hooks/use-toast";

const profileSchema = z.object({
  email: z.string().email("Invalid email address"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileTab = () => {
  const { toast } = useToast();

  const { user, isLoading } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("first_name", user.first_name);
      setValue("last_name", user.last_name);
    }
  }, [user, setValue]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await updateUserInfo(data);
      toast({
        title: "Updated Successfully",
      }); 
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Update Your Profile</h2>
      <div className="w-full ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-2/4 mx-auto space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
              className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <Input
              id="first_name"
              type="text"
              placeholder="First Name"
              {...register("first_name")}
              className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            />
            {errors.first_name && (
              <p className="text-red-600 text-sm">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <Input
              id="last_name"
              type="text"
              placeholder="Last Name"
              {...register("last_name")}
              className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            />
            {errors.last_name && (
              <p className="text-red-600 text-sm">{errors.last_name.message}</p>
            )}
          </div>

          <PrimaryButton
            type="submit"
            isLoading={isSubmitting}
            onClick={handleSubmit}
            className={"w-full"}
          >
            Update Info
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default ProfileTab;
