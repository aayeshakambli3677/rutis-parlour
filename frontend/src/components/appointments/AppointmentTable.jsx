function AppointmentTable({
  appointments,
  onDelete,
}) {
  if (!appointments.length) {
    return <p>No appointments found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Service</th>
          <th>Staff</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {appointments.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>

            <td>{item.service_id}</td>

            <td>{item.staff_id}</td>

            <td>
              {item.appointment_date}
            </td>

            <td>
              {item.appointment_time}
            </td>

            <td>
              {item.status || "Pending"}
            </td>

            <td>
              <button
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AppointmentTable;