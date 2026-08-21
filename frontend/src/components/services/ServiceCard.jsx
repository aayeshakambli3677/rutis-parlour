function ServiceCard({ service, onEdit, onDelete }) {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>

      <p>{service.description}</p>

      <p>
        <strong>Price:</strong> ₹{service.price}
      </p>

      <p>
        <strong>Duration:</strong> {service.duration} minutes
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {service.category || "-"}
      </p>

      <button onClick={() => onEdit(service)}>
        Edit
      </button>

      <button onClick={() => onDelete(service.id)}>
        Delete
      </button>
    </div>
  );
}

export default ServiceCard;