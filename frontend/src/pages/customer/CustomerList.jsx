import { useEffect, useState } from "react";
import "../../styles/customer.css";
import API from "../../services/api";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const response = await API.get("/users");

        setCustomers(
          Array.isArray(response.data)
            ? response.data
            : []
        );
      } catch (error) {
        console.error(
          "Customer loading error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadCustomers();
  }, []);

  if (loading) {
    return (
      <div className="customer-container">
        <h2>Registered Customers</h2>
        <p>Loading customers...</p>
      </div>
    );
  }

  return (
    <div className="customer-container">
      <h2>Registered Customers</h2>

      {customers.length === 0 ? (
        <p>No registered customers found.</p>
      ) : (
        customers.map((customer) => (
          <div
            className="customer-card"
            key={customer.id}
          >
            <h3>
              {customer.full_name ||
                "Unnamed Customer"}
            </h3>

            <p>
              Email: {customer.email}
            </p>

            <p>
              Role: {customer.role || "Customer"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default CustomerList;