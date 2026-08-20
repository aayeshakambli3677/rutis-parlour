import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";

import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Profile from "./pages/customer/Profile";
import ServiceHistory from "./pages/customer/ServiceHistory";
import ProtectedRoute from "./components/common/ProtectedRoute";
import MembershipDetails from "./pages/customer/MembershipDetails";
import Appointment from "./pages/customer/Appointment";
import CustomerList from "./pages/customer/CustomerList";

function Layout({ children }) {
  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Ruti's Beauty Parlour</h1>
          <p>Beauty Parlour Management System</p>
        </div>
      </header>

      <nav className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/membership-details">
  Membership Details
</Link>

<Link to="/customers">
  Customers
</Link>

<Link to="/appointment">
  Appointment
</Link>
      </nav>

      <main className="main-content">{children}</main>
    </div>
  );
}

/* Dashboard */
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to Ruti's Beauty Parlour Management System.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>👩 Customers</h3>
          <p>Manage customer information</p>
        </div>

        <div className="dashboard-card">
          <h3>📅 Appointments</h3>
          <p>Manage appointments</p>
        </div>

        <div className="dashboard-card">
          <h3>💰 Billing</h3>
          <p>Create and manage bills</p>
        </div>

        <div className="dashboard-card">
          <h3>📦 Inventory</h3>
          <p>Manage salon products</p>
        </div>

        <div className="dashboard-card">
          <h3>⭐ Membership</h3>
          <p>Manage memberships</p>
        </div>

        <div className="dashboard-card">
          <h3>📊 Reports</h3>
          <p>View business reports</p>
        </div>
      </div>
    </div>
  );
}

/* Inventory */
function Inventory() {
  return (
    <div>
      <h2>Inventory Management</h2>
      <p>Manage beauty products and stock.</p>

      <div className="section-card">
        <h3>Inventory</h3>
        <p>Add, update and delete inventory items.</p>
      </div>
    </div>
  );
}

/* Billing */
function Billing() {
  return (
    <div>
      <h2>Billing</h2>
      <p>Create and manage customer bills.</p>

      <div className="section-card">
        <h3>Billing Management</h3>
        <p>Generate bills and manage payments.</p>
      </div>
    </div>
  );
}

/* Reports */
function Reports() {
  return (
    <div>
      <h2>Reports</h2>
      <p>View your parlour business reports.</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>💰 Sales Report</h3>
          <p>View sales information.</p>
        </div>

        <div className="dashboard-card">
          <h3>📦 Inventory Report</h3>
          <p>View stock information.</p>
        </div>

        <div className="dashboard-card">
          <h3>📅 Appointment Report</h3>
          <p>View appointment information.</p>
        </div>
      </div>
    </div>
  );
}

/* Membership */
function Membership() {
  return (
    <div>
      <h2>Membership</h2>
      <p>Manage customer membership plans.</p>

      <div className="section-card">
        <h3>Membership Management</h3>
        <p>Create and manage membership plans.</p>
      </div>
    </div>
  );
}

/* Feedback */
function Feedback() {
  return (
    <div>
      <h2>Customer Feedback</h2>
      <p>View and manage customer reviews.</p>

      <div className="section-card">
        <h3>⭐ Customer Reviews</h3>
        <p>Customer feedback will appear here.</p>
      </div>
    </div>
  );
}

/* Notifications */
function Notifications() {
  return (
    <div>
      <h2>Notifications</h2>
      <p>View important notifications.</p>

      <div className="section-card">
        <h3>🔔 Notifications</h3>
        <p>You currently have no new notifications.</p>
      </div>
    </div>
  );
}

/* App */
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forget-password"
          element={<ForgetPassword />}
        />

        <Route
          path="/dashboard"
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
  path="/membership-details"
  element={
    <ProtectedRoute>
      <MembershipDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/appointment"
  element={
    <ProtectedRoute>
      <Appointment />
    </ProtectedRoute>
  }
/>

        <Route
  path="/customer-dashboard"
  element={
    <ProtectedRoute>
      <CustomerDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/service-history"
  element={
    <ProtectedRoute>
      <ServiceHistory />
    </ProtectedRoute>
  }
/>

<Route
  path="/customers"
  element={
    <ProtectedRoute>
      <CustomerList />
    </ProtectedRoute>
  }
/>
        </Routes>

      </Layout>
    </BrowserRouter>
  );
}

export default App;