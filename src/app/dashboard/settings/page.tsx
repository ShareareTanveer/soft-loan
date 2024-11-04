"use client";

import React from "react";
import ProfileTab from "@/components/Settings/ProfileTab";
import VerificationTab from "@/components/Settings/VerificationTab";
import withProtectedRoute from "@/lib/utils/withProtectedRoute";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div className="">
      <div className="p-6">
        <Tabs defaultValue="profile">
          <TabsList className="mx-auto ">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>
          <TabsContent value="verification">
            <VerificationTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default withProtectedRoute(Settings);
