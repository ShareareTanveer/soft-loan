"use client";

import React from "react";

const ApplicationStep3 = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Tell us more about your business 3</h2>
      <p className="text-gray-600 mb-6">
        Every business is different. We want to understand yours so that we can better serve your digital finance needs.
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="employees">
            How many employees does your organization have?
          </label>
          <select id="employees" className="w-full border border-gray-300 rounded-md p-2">
            <option>1-249 employees</option>
            <option>250-499 employees</option>
            <option>500+ employees</option>
          </select>
        </div>

        {/* Repeat this structure for other fields */}
      </form>
    </div>
  );
};

export default ApplicationStep3;
