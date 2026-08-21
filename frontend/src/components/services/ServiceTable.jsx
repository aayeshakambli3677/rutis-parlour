function ServiceTable({
  services,
  onEdit,
  onDelete,
}) {
  if (!services.length) {
    return <p>No services found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Duration</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td>{service.id}</td>
            <td>{service.name}</td>
            <td>{service.description}</td>
            <td>₹{service.price}</td>
            <td>{service.duration} min</td>
            <td>{service.category || "-"}</td>

            <td>
              <button
                onClick={() => onEdit(service)}
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(service.id)}
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

export default ServiceTable;