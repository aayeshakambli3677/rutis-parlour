import { useEffect, useState } from "react";
import appointmentService from "../../services/appointmentService";
import AppointmentCard from "../../components/appointments/AppointmentCard";

function StaffDashboard() {
  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const data =
        await appointmentService.getAll();

      setAppointments(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Staff Dashboard</h1>

      <h2>Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments.</p>
      ) : (
        appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          />
        ))
      )}
    </div>
  );
}

export default StaffDashboard;