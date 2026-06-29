import React from "react";

function Subscription() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">

      <div className="bg-white rounded-2xl shadow p-8 max-w-7xl  mx-auto">
        
        {/* Small Heading */}
        <p className="text-blue-600 text-sm tracking-widest mb-2">
          MENTOR OVERVIEW
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold mb-3">
          Subscription History
        </h1>

        {/* Description */}
        <p className="text-gray-500">
          Your subscription timeline will appear here once you start a trial or activate a paid plan.
        </p>

      </div>

    </div>
  );
}

export default Subscription;