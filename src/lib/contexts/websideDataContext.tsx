import React, { createContext, useContext } from "react";

const WebsideDataContext = createContext<any>(null);

export const WebsideDataProvider: React.FC<{ children: React.ReactNode; websideData: any }> = ({ children, websideData }) => {
  return (
    <WebsideDataContext.Provider value={websideData}>
      {children}
    </WebsideDataContext.Provider>
  );
};

export const useWebsideData = () => useContext(WebsideDataContext);
