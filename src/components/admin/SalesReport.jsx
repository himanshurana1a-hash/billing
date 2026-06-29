import React from "react";

function Sales() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Heading */}
      <h1 className="text-2xl font-bold">Sales Dashboard</h1>
      <p className="text-gray-500 mb-6">
        Monitor invoices, payments, and pending dues
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search invoice or customer..."
        className="w-full md:w-1/3 border px-4 py-2 rounded mb-6"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-xl font-bold">₹0</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Received</p>
          <h2 className="text-xl font-bold">₹0</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-xl font-bold">₹0</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Invoices</p>
          <h2 className="text-xl font-bold">0</h2>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Invoice</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Total</th>
              <th className="p-3">Paid</th>
              <th className="p-3">Due</th>
              <th className="p-3">Items</th>
              <th className="p-3">Status</th>
              <th className="p-3">Transaction</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="10" className="text-center p-6 text-gray-400">
                No sales found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Sales;