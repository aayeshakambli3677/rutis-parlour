import { useEffect, useState } from "react";
import CustomerCard from "../../components/customers/CustomerCard";
import AppointmentCard from "../../components/customers/AppointmentCard";
import "../../styles/customer.css";
import API from "../../services/api";

function CustomerDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await API.get("/auth/me");
        setUser(response.data);
      } catch (error) {
        console.error("Unable to load customer:", error);

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return <p>Loading customer dashboard...</p>;
  }

  return (
    <div className="customer-container">
      <h2>
        Welcome {user?.full_name || "Customer"}
      </h2>

      <CustomerCard />
      <AppointmentCard />

      <div className="stat-box">
        <h3>Total Visits</h3>
        <p>0</p>
      </div>

      <div className="stat-box">
        <h3>Total Services</h3>
        <p>0</p>
      </div>

      <div className="stat-box">
        <h3>Total Amount Spent</h3>
        <p>₹0</p>
      </div>

      <div className="stat-box">
        <h3>Membership Status</h3>
        <p>No Membership</p>
      </div>
    </div>
  );
}

export default CustomerDashboard;