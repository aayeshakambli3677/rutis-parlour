function AppointmentCard() {
  const appointment = JSON.parse(
    localStorage.getItem("appointment")
  );

  const handleDelete = () => {
  localStorage.removeItem("appointment");
  window.location.reload();
};

  if (!appointment) {
    return <p>No Appointment Booked</p>;
  }

  return (
    <div className="customer-card">
      <h3>Upcoming Appointment</h3>

      <p>Service: {appointment.service}</p>

      <p>Date: {appointment.date}</p>

      <p>Time: {appointment.time}</p>

      <button onClick={handleDelete}>
  Cancel Appointment
</button>
    </div>
  );
}

export default AppointmentCard;