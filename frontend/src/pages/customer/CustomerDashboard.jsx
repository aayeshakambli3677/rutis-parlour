import CustomerCard from "../../components/customers/CustomerCard";
import AppointmentCard from "../../components/customers/AppointmentCard";
import "../../styles/customer.css";

function CustomerDashboard() {
    const user =
  JSON.parse(localStorage.getItem("user"));
  return (
    <div className="customer-container">
      <h2>
  Welcome {user?.name || "Customer"}
</h2>
      <CustomerCard />
      <AppointmentCard />

      <div className="stat-box">
        <h3>Total Visits</h3>
        <p>15</p>
      </div>

      <div className="stat-box">
        <h3>Total Services</h3>
        <p>28</p>
      </div>

      <div className="stat-box">
        <h3>Total Amount Spent</h3>
        <p>₹18,500</p>
      </div>

      <div className="stat-box">
        <h3>Membership Status</h3>
        <p>Gold Member</p>
      </div>
    </div>
  );
}

export default CustomerDashboard;