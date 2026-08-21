function StaffSchedule({ appointments }) {
  if (!appointments.length) {
    return <p>No appointments scheduled.</p>;
  }

  return (
    <div>
      {appointments.map((appointment) => (
        <div key={appointment.id}>
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
        </div>
      ))}
    </div>
  );
}

export default StaffSchedule;