"use client"; // This makes this component a client component

import { SessionProvider } from "next-auth/react";

const SessionProviderWrapper = ({ children }:any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
