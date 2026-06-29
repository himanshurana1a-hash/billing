import React from "react";

function Inventory() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Heading */}
      <h1 className="text-2xl font-bold">Inventory Report</h1>
      <p className="text-gray-500 mb-6">
        Track products, stock levels, and selling prices from your items table.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search item name, code, category, HSN..."
        className="w-full md:w-1/3 border px-4 py-2 rounded mb-6"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Items</p>
          <h2 className="text-xl font-bold">0</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Categories</p>
          <h2 className="text-xl font-bold">0</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Low Stock</p>
          <h2 className="text-xl font-bold">0</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Inventory Value</p>
          <h2 className="text-xl font-bold">₹0.00</h2>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="p-3">Item</th>
              <th className="p-3">Code</th>
              <th className="p-3">Type</th>
              <th className="p-3">Category</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Sale Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Min Stock</th>
              <th className="p-3">Location</th>
              <th className="p-3">Updated</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="10" className="text-center p-6 text-gray-400">
                No inventory items found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Inventory;