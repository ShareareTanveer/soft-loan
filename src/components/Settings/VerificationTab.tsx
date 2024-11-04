"use client";

import React from "react";
import { Input } from "@/components/ui/input";

const VerificationTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Tell us more about your business 2</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="business-location" className="block text-sm font-medium text-gray-700">
            Business location
          </label>
          <Input
            type="text"
            id="business-location"
            placeholder="Enter your business location"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <Input
            type="text"
            id="country"
            defaultValue="Bangladesh"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            readOnly
          />
        </div>

        <div>
          <label htmlFor="business-profile" className="block text-sm font-medium text-gray-700">
            Business profile
          </label>
          <Input
            type="text"
            id="business-profile"
            placeholder="Enter your business profile"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
          />
        </div>

        <div>
          <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">
            Business type
          </label>
          <Input
            type="text"
            id="business-type"
            defaultValue="Limited Liability Company"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            readOnly
          />
        </div>

        <div>
          <label htmlFor="legal-entity-name" className="block text-sm font-medium text-gray-700">
            Legal entity name
          </label>
          <Input
            type="text"
            id="legal-entity-name"
            defaultValue="codecanvascreation"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            readOnly
          />
        </div>

        <div>
          <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
            Company name (doing business as)
          </label>
          <Input
            type="text"
            id="company-name"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label htmlFor="product-description" className="block text-sm font-medium text-gray-700">
            Product description
          </label>
          <textarea
            id="product-description"
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            placeholder="For development right now. will upgrade after successful integration"
          />
        </div>

        <div>
          <label htmlFor="softloan-explanation" className="block text-sm font-medium text-gray-700">
            Explain what it does, who it is for, and how it will use softloan data
          </label>
          <textarea
            id="softloan-explanation"
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            placeholder="Our service aggregates users' financial data to help them find the best credit card deals tailored to their spending habits."
          />
        </div>

        <div>
          <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
            Company website
          </label>
          <Input
            type="url"
            id="company-website"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            placeholder="https://codecanvascreation.com"
          />
          <p className="text-gray-500 mt-1">
            If you don&apos;t have a website, please provide your LinkedIn or Github page.
          </p>
        </div>

        <div>
          <label htmlFor="business-registration" className="block text-sm font-medium text-gray-700">
            Business registration
          </label>
          <Input
            type="text"
            id="business-registration"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            placeholder="Enter your business registration"
          />
        </div>

        <div>
          <label htmlFor="legal-entity-identifier" className="block text-sm font-medium text-gray-700">
            Legal Entity Identifier (optional)
          </label>
          <Input
            type="text"
            id="legal-entity-identifier"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            placeholder="Learn more about the Legal Entity Identifier and how to register here"
          />
        </div>

        <div>
          <label htmlFor="incorporation-year" className="block text-sm font-medium text-gray-700">
            Incorporation year
          </label>
          <Input
            type="number"
            id="incorporation-year"
            defaultValue="2022"
            className="mt-1 block w-full border border-gray-300 rounded-none p-2"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default VerificationTab;
