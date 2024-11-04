import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/lib/aos";
import MainLayout from "@/components/layout/MainLayout";
import SessionProviderWrapper from "@/components/shared/SessionProviderWrapper";
import { UserProvider } from "@/lib/contexts/userInfoContext";
import { Toaster } from "@/components/ui/toaster";

// const roboto = Roboto({ subsets: [], weight: "400" });
const inter = Inter({ subsets: [], weight: "400" });

export const metadata: Metadata = {
  title: "softloan",
  description: "softloan",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${inter.className}`}>
      <AOSInit />
      <body>
        <SessionProviderWrapper>
          <UserProvider>
            <MainLayout>{children}</MainLayout>
          </UserProvider>
        </SessionProviderWrapper>
        <Toaster />
      </body>
    </html>
  );
}
