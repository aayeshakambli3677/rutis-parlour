import { useEffect, useState } from "react";
import appointmentService from "../../services/appointmentService";
import AppointmentTable from "../../components/appointments/AppointmentTable";

function Appointments() {
  const [appointments, setAppointments] =
    useState([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    try {
      setLoading(true);

      const data =
        await appointmentService.getAll();

      setAppointments(data);
    } catch (error) {
      console.error(error);

      alert("Unable to load appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete appointment?")) {
      return;
    }

    try {
      await appointmentService.delete(id);

      alert("Appointment deleted");

      loadAppointments();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
          "Unable to delete appointment"
      );
    }
  };

  return (
    <div>
      <h1>Appointment Management</h1>

      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <AppointmentTable
          appointments={appointments}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Appointments;