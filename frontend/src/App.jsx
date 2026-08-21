import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// ===============================
// AUTH
// ===============================
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";

// ===============================
// CUSTOMER
// ===============================
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Profile from "./pages/customer/Profile";
import ServiceHistory from "./pages/customer/ServiceHistory";
import MembershipDetails from "./pages/customer/MembershipDetails";
import Appointment from "./pages/customer/Appointment";
import CustomerList from "./pages/customer/CustomerList";

// ===============================
// MEMBER 2 - STAFF
// ===============================
import StaffDashboard from "./pages/staff/StaffDashboard";
import Schedule from "./pages/staff/Schedule";

// ===============================
// MEMBER 2 - ADMIN
// ===============================
import Staff from "./pages/admin/Staff";
import Services from "./pages/admin/Services";
import Appointments from "./pages/admin/Appointments";


function Layout({ children }) {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div>
          <h1>Ruti's Beauty Parlour</h1>
          <p>Beauty Parlour Management System</p>
        </div>
      </header>


     {/* ===============================
    NAVBAR
================================ */}

<nav className="navbar">

  {/* BRAND */}
  <div className="navbar-brand">
    <Link to="/">
      ✨ Ruti's Beauty Parlour
    </Link>
  </div>


  {/* MAIN LINKS */}
  <div className="navbar-links">

    <Link to="/">
      Dashboard
    </Link>

    <Link to="/customers">
      Customers
    </Link>


    {/* MANAGEMENT DROPDOWN */}
    <div className="nav-dropdown">

      <button className="dropdown-btn">
        Management ▾
      </button>

      <div className="dropdown-menu">

        <Link to="/admin/services">
          💄 Services
        </Link>

        <Link to="/admin/staff">
          👥 Staff
        </Link>

        <Link to="/appointment">
          📅 Appointments
        </Link>

      </div>

    </div>


   {/* BUSINESS DROPDOWN */}
<div className="nav-dropdown">

  <button className="dropdown-btn">
    Business ▾
  </button>

  <div className="dropdown-menu">

    <Link to="/billing">
      💰 Billing
    </Link>

    <Link to="/inventory">
      📦 Inventory
    </Link>

    <Link to="/membership">
      ⭐ Membership
    </Link>

    <Link to="/reports">
      📊 Reports
    </Link>

    <Link to="/feedback">
      ⭐ Feedback
    </Link>

    <Link to="/notifications">
      🔔 Notifications
    </Link>

  </div>

</div>

  </div>


  {/* RIGHT SIDE */}
  <div className="navbar-actions">

    <Link to="/profile" className="profile-btn">
      👤 Profile
    </Link>

    <Link to="/login" className="login-btn">
      Login
    </Link>

  </div>

</nav>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {children}
      </main>

    </div>
  );
}


/* =====================================================
   DASHBOARD
===================================================== */

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p>
            Welcome to Ruti's Beauty Parlour Management System.
          </p>
        </div>
      </div>


      {/* STATISTICS */}
      <div className="dashboard-grid">

        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            👩
          </div>

          <div>
            <h3>Customers</h3>
            <p className="dashboard-number">0</p>
            <span>Total Customers</span>
          </div>
        </div>


        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            📅
          </div>

          <div>
            <h3>Appointments</h3>
            <p className="dashboard-number">0</p>
            <span>Today's Appointments</span>
          </div>
        </div>


        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            👥
          </div>

          <div>
            <h3>Staff</h3>
            <p className="dashboard-number">0</p>
            <span>Active Staff</span>
          </div>
        </div>


        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            💄
          </div>

          <div>
            <h3>Services</h3>
            <p className="dashboard-number">0</p>
            <span>Available Services</span>
          </div>
        </div>


        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            💰
          </div>

          <div>
            <h3>Revenue</h3>
            <p className="dashboard-number">₹0</p>
            <span>Today's Revenue</span>
          </div>
        </div>


        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            ⭐
          </div>

          <div>
            <h3>Membership</h3>
            <p className="dashboard-number">0</p>
            <span>Active Members</span>
          </div>
        </div>

      </div>


      {/* UPCOMING APPOINTMENTS */}
      <div className="dashboard-section">

        <div className="dashboard-section-header">
          <div>
            <h3>Upcoming Appointments</h3>
            <p>Today's scheduled appointments</p>
          </div>

          <Link
            to="/admin/appointments"
            className="dashboard-view-btn"
          >
            View All
          </Link>
        </div>


        <div className="dashboard-empty">

          <div className="empty-icon">
            📅
          </div>

          <h3>No Upcoming Appointments</h3>

          <p>
            There are no appointments scheduled for today.
          </p>

        </div>

      </div>

    </div>
  );
}


/* =====================================================
   INVENTORY
===================================================== */

function Inventory() {
  return (
    <div>

      <h2>Inventory Management</h2>

      <p>
        Manage beauty products and stock.
      </p>

      <div className="section-card">

        <h3>Inventory</h3>

        <p>
          Add, update and delete
          inventory items.
        </p>

      </div>

    </div>
  );
}


/* =====================================================
   BILLING
===================================================== */

function Billing() {
  return (
    <div>

      <h2>Billing</h2>

      <p>
        Create and manage customer bills.
      </p>

      <div className="section-card">

        <h3>Billing Management</h3>

        <p>
          Generate bills and manage payments.
        </p>

      </div>

    </div>
  );
}


/* =====================================================
   REPORTS
===================================================== */

function Reports() {
  return (
    <div>

      <h2>Reports</h2>

      <p>
        View your parlour business reports.
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>💰 Sales Report</h3>
          <p>
            View sales information.
          </p>
        </div>

        <div className="dashboard-card">
          <h3>📦 Inventory Report</h3>
          <p>
            View stock information.
          </p>
        </div>

        <div className="dashboard-card">
          <h3>📅 Appointment Report</h3>
          <p>
            View appointment information.
          </p>
        </div>

      </div>

    </div>
  );
}


/* =====================================================
   MEMBERSHIP
===================================================== */

function Membership() {
  return (
    <div>

      <h2>Membership</h2>

      <p>
        Manage customer membership plans.
      </p>

      <div className="section-card">

        <h3>
          Membership Management
        </h3>

        <p>
          Create and manage membership plans.
        </p>

      </div>

    </div>
  );
}


/* =====================================================
   FEEDBACK
===================================================== */

function Feedback() {
  return (
    <div>

      <h2>Customer Feedback</h2>

      <p>
        View and manage customer reviews.
      </p>

      <div className="section-card">

        <h3>⭐ Customer Reviews</h3>

        <p>
          Customer feedback will appear here.
        </p>

      </div>

    </div>
  );
}


/* =====================================================
   NOTIFICATIONS
===================================================== */

function Notifications() {
  return (
    <div>

      <h2>Notifications</h2>

      <p>
        View important notifications.
      </p>

      <div className="section-card">

        <h3>🔔 Notifications</h3>

        <p>
          You currently have no new
          notifications.
        </p>

      </div>

    </div>
  );
}


/* =====================================================
   APP
===================================================== */

function App() {

  return (

    <BrowserRouter>

      <Layout>

        <Routes>

          {/* =========================
              MAIN PAGES
          ========================= */}

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/inventory"
            element={<Inventory />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/membership"
            element={<Membership />}
          />

          <Route
            path="/feedback"
            element={<Feedback />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />


          {/* =========================
              AUTH PAGES
          ========================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forget-password"
            element={<ForgetPassword />}
          />


          {/* =========================
              CUSTOMER PAGES
          ========================= */}

          <Route
            path="/dashboard"
            element={<CustomerDashboard />}
          />

          <Route
            path="/customer-dashboard"
            element={<CustomerDashboard />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/history"
            element={<ServiceHistory />}
          />

          <Route
            path="/service-history"
            element={<ServiceHistory />}
          />

          <Route
            path="/membership-details"
            element={<MembershipDetails />}
          />

          <Route
            path="/customers"
            element={<CustomerList />}
          />

          <Route
            path="/appointment"
            element={<Appointment />}
          />


          {/* =========================
              MEMBER 2 - STAFF
          ========================= */}

          <Route
            path="/staff-dashboard"
            element={<StaffDashboard />}
          />

          <Route
            path="/schedule"
            element={<Schedule />}
          />


          {/* =========================
              MEMBER 2 - ADMIN
          ========================= */}

          <Route
            path="/admin/staff"
            element={<Staff />}
          />

          <Route
            path="/admin/services"
            element={<Services />}
          />

          <Route
            path="/admin/appointments"
            element={<Appointments />}
          />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}

export default App;