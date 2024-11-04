// PrimaryButton.js
import React from "react";
import { Button } from "@/components/ui/button";
const PrimaryButton = ({ type="button", onClick, isLoading, children, className = "", disabled = false }: any) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={` bg-basicColor text-white p-3 font-semibold hover:bg-gray-800 flex items-center justify-center transition duration-200 ${className}`}
      style={{ height: "48px" }}
    >
      {isLoading ? (
        <div className="flex items-center">
          <span className="loader"></span>
          <span className="loader"></span>
          <span className="loader"></span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default PrimaryButton;
