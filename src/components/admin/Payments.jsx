import React from "react";

function Payments() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="bg-white rounded-2xl shadow p-8 max-w-7xl mx-auto">
        
        {/* Small Heading */}
        <p className="text-blue-600 text-sm tracking-widest mb-2">
          MENTOR OVERVIEW
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold mb-3">
          Purchase History
        </h1>

        {/* Description */}
        <p className="text-gray-500">
         Once payments are recorded, your billing trail and transaction status will appear here.
        </p>

      </div>

    </div>
  );
}

export default Payments;