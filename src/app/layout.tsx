import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/lib/aos";
import MainLayout from "@/components/layout/MainLayout";
import SessionProviderWrapper from "@/components/shared/SessionProviderWrapper";

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
          <MainLayout>{children}</MainLayout>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
