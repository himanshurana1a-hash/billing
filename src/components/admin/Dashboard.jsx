import React, { useState } from "react";
import Subscription from "./Subscription";
import Payments from "./Payments";
import Sales from "./SalesReport";
import Inventory from "./Inventory";
import Overview from "./Overview";
/* ================= SIDEBAR ================= */
function Sidebar({ page, setPage, open, setOpen }) {
  const link = "flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100";
  const active = "bg-blue-100 text-blue-600";

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow p-4 z-50 transform 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform`}
      >
        <div>
          <h1 className="text-xl font-bold text-blue-600">BissBill</h1>
          <p className="text-xs text-gray-400 mb-6">SMART BILLING</p>

          <nav className="space-y-2">
            <div onClick={() => { setPage("overview"); setOpen(false); }} className={`${link} ${page === "overview" ? active : ""}`}>
              Overview
            </div>

            <div onClick={() => { setPage("subscription"); setOpen(false); }} className={`${link} ${page === "subscription" ? active : ""}`}>
              Subscription
            </div>

            <div onClick={() => { setPage("payments"); setOpen(false); }} className={`${link} ${page === "payments" ? active : ""}`}>
              Payments
            </div>

            <p className="text-xs text-gray-400 mt-4">USER DASHBOARD</p>

            <div
              onClick={() => { setPage("sales"); setOpen(false); }}
              className={`${link} ${page === "sales" ? active : ""}`}
            >
              Sales
            </div>

            <div
              onClick={() => { setPage("inventory"); setOpen(false); }}
              className={`${link} ${page === "inventory" ? active : ""}`}
            >
              Inventory
            </div>
          </nav>
        </div>

        {/* New Invoice Button */}
        <button className="bg-blue-600 text-white py-3 rounded mt-45 w-full hover:bg-blue-700 transition">
          New Invoice
        </button>

        {/* Bottom Menu */}
        <div className="mt-10 border-t pt-4 space-y-2">

          {/* Settings */}
          <div
            onClick={() => {
              setPage("settings");
              setOpen(false);
            }}
            className={`${link} ${page === "settings" ? active : ""
              }`}
          >
            ⚙️ Settings
          </div>

          {/* Logout */}
          <div
            onClick={() => {
              alert("Logged Out");
              setOpen(false);
            }}
            className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-red-100 text-red-500"
          >
            🚪 Logout
          </div>
        </div>
      </div>

      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
        />
      )}
    </>
  );
}

/* ================= TOPBAR ================= */
function Topbar({ user, setOpen }) {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center">

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(true)} className="md:hidden text-xl">
        ☰
      </button>

      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded w-1/2 md:w-1/3"
      />

      <div className="flex items-center gap-4">
        🔔
        <div className="flex items-center gap-2">
          <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
            {user.initial}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= CONTENT ================= */
function Content({ page }) {
  switch (page) {
    case "subscription":
      return <Subscription />;
    case "payments":
      return <Payments />;
    case "sales":
      return <Sales />;
    case "inventory":
      return <Inventory />;
    case "overview":
      return <Overview />;
    default:
      return <Overview />; // fallback
  }
}

/* ================= MAIN ================= */
function Dashboard() {
  const [page, setPage] = useState("overview");
  const [open, setOpen] = useState(false); // 🔥 mobile sidebar state

  const user = {
    name: "Shubham kumar",
    email: "shubham22082004@gmail.com",
    initial: "S",
  };

  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar page={page} setPage={setPage} open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col w-full">
        <Topbar user={user} setOpen={setOpen} />

        <div className="p-6">
          <Content page={page} />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;