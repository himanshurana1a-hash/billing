import React from "react";

function Overview() {
  return (
    <div className="flex items-center justify-center h-full p-6">
      
      <div className="bg-white w-full max-w-7xl rounded-2xl shadow p-10 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-5 rounded-full">
            💳
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">
          No Active Subscription
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3">
          You currently do not have an active plan. <br />
          Choose a plan to start using the software.
        </p>

        {/* Button */}
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Choose Plan
        </button>

      </div>

    </div>
  );
}

export default Overview;