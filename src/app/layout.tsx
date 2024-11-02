import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/lib/aos";
import MainLayout from "@/components/layout/MainLayout";

const roboto = Roboto({ subsets: [], weight: "400" });
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
    <html lang="en" className={`${roboto.className} ${inter.className}`}>
      <AOSInit />
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
