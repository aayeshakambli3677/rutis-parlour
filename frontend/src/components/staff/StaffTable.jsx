function StaffTable({ staff, onEdit, onDelete }) {
  if (!staff.length) {
    return <p>No staff found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Specialization</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {staff.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.full_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.role}</td>
            <td>{item.specialization || "-"}</td>

            <td>
              <button onClick={() => onEdit(item)}>
                Edit
              </button>

              <button onClick={() => onDelete(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StaffTable;