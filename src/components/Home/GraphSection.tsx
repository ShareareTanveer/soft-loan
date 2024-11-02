import React from "react";

const StatCard = ({ value, label }:any) => (
  <div className="bg-[#F8F1FF] rounded-xl p-12 flex flex-col items-center text-[#5D18B8]">
    <h3 className="text-6xl font-semibold">{value}</h3>
    <p className="text-md py-5 font-semibold">{label}</p>
  </div>
);

const GraphSection = () => {
  return (
    <div className="mx-auto space-y-6">
      {/* Section Header */}
      <div>
        <p className="text-sm font-semibold text-gray-500">PERFORMANCE</p>
        <h2 className="text-2xl text-gray-900">
          Impact that's Instant, and Lasting
        </h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard value="95%" label="Loan Approval Rate" />
        <StatCard value="24 hrs" label="Average Disbursement Time" />
        <StatCard value="98%" label="Customer Satisfaction Rate" />
      </div>
    </div>
  );
};

export default GraphSection;
