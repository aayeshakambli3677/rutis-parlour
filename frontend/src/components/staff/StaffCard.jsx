function StaffCard({ staff, onEdit, onDelete }) {
  return (
    <div className="staff-card">
      <h3>{staff.full_name}</h3>

      <p>
        <strong>Email:</strong> {staff.email}
      </p>

      <p>
        <strong>Phone:</strong> {staff.phone}
      </p>

      <p>
        <strong>Role:</strong> {staff.role}
      </p>

      <p>
        <strong>Specialization:</strong>{" "}
        {staff.specialization || "Not specified"}
      </p>

      <div>
        <button onClick={() => onEdit(staff)}>Edit</button>

        <button onClick={() => onDelete(staff.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StaffCard;