function AppointmentCard({ appointment }) {
  return (
    <div>
      <h3>
        Appointment #{appointment.id}
      </h3>

      <p>
        Date: {appointment.appointment_date}
      </p>

      <p>
        Time: {appointment.appointment_time}
      </p>

      <p>
        Service ID: {appointment.service_id}
      </p>

      <p>
        Staff ID: {appointment.staff_id}
      </p>

      <p>
        Status: {appointment.status || "Pending"}
      </p>
    </div>
  );
}

export default AppointmentCard;