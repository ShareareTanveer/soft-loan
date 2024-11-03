"use client";
import { useSession } from "next-auth/react";
import withProtectedRoute from "@/lib/utils/withProtectedRoute";
import Loading from "../loading";

const DashboardHome = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    return <div className="text-center mt-10">You are not logged in.</div>;
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My loan</h1>
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Active
        </span>
      </header>

{/* Summary Section */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-sm font-medium text-gray-600 mb-2">Original loan amount</h2>
    <p className="text-3xl font-semibold text-gray-800">$7,000.00</p>
  </div>
  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-sm font-medium text-gray-600 mb-2">Outstanding balance</h2>
    <p className="text-3xl font-semibold text-gray-800">$6,440.32</p>
  </div>
  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-sm font-medium text-gray-600 mb-2">Loan term</h2>
    <p className="text-3xl font-semibold text-gray-800">12 months</p>
  </div>
  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-sm font-medium text-gray-600 mb-2">Next payment by Jan 29</h2>
    <p className="text-3xl font-semibold text-gray-800 mb-4">$676.00</p>
    <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors duration-200">
      Pay off debt
    </button>
  </div>
</section>

{/* Loan Details */}
<section className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Loan details</h3>
  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
    <p><strong className="font-semibold text-gray-700">Original loan amount:</strong> <span className="text-gray-800">$7,000.00</span></p>
    <p><strong className="font-semibold text-gray-700">Interest rate:</strong> <span className="text-gray-800">12%</span></p>
    <p><strong className="font-semibold text-gray-700">Principal debt:</strong> <span className="text-gray-800">$6,404.45</span></p>
    <p><strong className="font-semibold text-gray-700">Interest balance:</strong> <span className="text-gray-800">$35.87</span></p>
    <p><strong className="font-semibold text-gray-700">Overdue principal debt:</strong> <span className="text-gray-800">$0</span></p>
    <p><strong className="font-semibold text-gray-700">Overdue interest:</strong> <span className="text-gray-800">$0</span></p>
    <p><strong className="font-semibold text-gray-700">Loan term:</strong> <span className="text-gray-800">12 months</span></p>
    <p><strong className="font-semibold text-gray-700">Issue date:</strong> <span className="text-gray-800">Nov 29</span></p>
    <p><strong className="font-semibold text-gray-700">Maturity date:</strong> <span className="text-gray-800">Nov 29</span></p>
  </div>
</section>

    </div>
  );
};

export default withProtectedRoute(DashboardHome);
