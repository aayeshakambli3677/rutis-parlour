import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

function ServiceForm({
  selectedService,
  onSuccess,
  onCancel,
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedService) {
      setForm({
        name: selectedService.name || "",
        description: selectedService.description || "",
        price: selectedService.price || "",
        duration: selectedService.duration || "",
        category: selectedService.category || "",
      });
    } else {
      setForm({
        name: "",
        description: "",
        price: "",
        duration: "",
        category: "",
      });
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = {
        ...form,
        price: Number(form.price),
        duration: Number(form.duration),
      };

      if (selectedService) {
        await axios.put(
          `${API_URL}/services/${selectedService.id}`,
          data
        );

        alert("Service updated successfully");
      } else {
        await axios.post(
          `${API_URL}/services/`,
          data
        );

        alert("Service added successfully");
      }

      onSuccess();
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.detail ||
          "Unable to save service"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {selectedService
          ? "Edit Service"
          : "Add Service"}
      </h2>

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      <input
        name="name"
        placeholder="Service Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        min="0"
        required
      />

      <input
        type="number"
        name="duration"
        placeholder="Duration in minutes"
        value={form.duration}
        onChange={handleChange}
        min="1"
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading
          ? "Saving..."
          : selectedService
          ? "Update Service"
          : "Add Service"}
      </button>

      {selectedService && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default ServiceForm;