import { useEffect, useState } from "react";
import API from "../../services/api";

function AppointmentCard() {
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAppointment = async () => {
      try {
        const response = await API.get("/appointments/my");

        if (Array.isArray(response.data)) {
          setAppointment(response.data[0] || null);
        } else {
          setAppointment(response.data);
        }
      } catch (error) {
        console.error("Appointment loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAppointment();
  }, []);

  const handleDelete = async () => {
    if (!appointment?.id) return;

    try {
      await API.delete(`/appointments/${appointment.id}`);

      setAppointment(null);
      alert("Appointment cancelled successfully");
    } catch (error) {
      console.error("Cancel appointment error:", error);

      alert(
        error.response?.data?.detail ||
          "Unable to cancel appointment"
      );
    }
  };

  if (loading) {
    return <p>Loading appointment...</p>;
  }

  if (!appointment) {
    return <p>No Appointment Booked</p>;
  }

  return (
    <div className="customer-card">
      <h3>Upcoming Appointment</h3>

      <p>
        Service:{" "}
        {appointment.service?.name ||
          appointment.service_name ||
          appointment.service ||
          "Not available"}
      </p>

      <p>
        Date:{" "}
        {appointment.appointment_date ||
          appointment.date ||
          "Not available"}
      </p>

      <p>
        Time:{" "}
        {appointment.appointment_time ||
          appointment.time ||
          "Not available"}
      </p>

      <p>
        Status: {appointment.status || "Pending"}
      </p>

      <button onClick={handleDelete}>
        Cancel Appointment
      </button>
    </div>
  );
}

export default AppointmentCard;