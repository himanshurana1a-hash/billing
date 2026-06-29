import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import Download from "./components/Download.jsx";
import About from "./components/About.jsx";
import Help from "./components/Help.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./components/Auth.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
// import Inventory from "./components/pages/Inventory.jsx";
// import Overview from "./components/pages/Overview.jsx";
// import Payment from "./components/pages/Payment.jsx";
// import Subscription from "./components/pages/Subscription.jsx";
// import Sales from "./components/pages/Sales.jsx";

import "./App.css";
import "./index.css";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/dashboard" || location.pathname === "/auth";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/download" element={<Download />} />
        <Route path="/help" element={<Help />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            
            </PrivateRoute>
          }
        />
        {/* <Route index element={<Overview />} />
       <Route path="overview" element={<Overview />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="payments" element={<Payment />} />
        <Route path="sales" element={<Sales />} />
        <Route path="inventory" element={<Inventory />} /> */}
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;