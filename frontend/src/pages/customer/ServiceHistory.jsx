import { useEffect, useState } from "react";
import "../../styles/customer.css";
import API from "../../services/api";

function ServiceHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const response = await API.get("/appointments/my");

        const appointments = Array.isArray(response.data)
          ? response.data
          : [];

        setHistory(
          appointments.filter(
            (appointment) =>
              appointment.status === "completed" ||
              appointment.status === "Completed"
          )
        );
      } catch (error) {
        console.error("Service history error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  if (loading) {
    return (
      <div className="customer-container">
        <h2>Service History</h2>
        <p>Loading service history...</p>
      </div>
    );
  }

  return (
    <div className="customer-container">
      <h2>Service History</h2>

      {history.length === 0 ? (
        <p>No completed services found.</p>
      ) : (
        history.map((item) => (
          <div
            key={item.id}
            className="customer-card"
          >
            <h3>
              {item.service?.name ||
                item.service_name ||
                item.service ||
                "Service"}
            </h3>

            <p>
              Date:{" "}
              {item.appointment_date ||
                item.date ||
                "Not available"}
            </p>

            <p>
              Amount: ₹
              {item.amount ||
                item.service?.price ||
                item.price ||
                0}
            </p>

            <p>
              Status: {item.status || "Completed"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ServiceHistory;