import { useEffect, useState } from "react";
import staffService from "../../services/staffService";

const emptyForm = {
  full_name: "",
  email: "",
  phone: "",
  role: "",
  specialization: "",
};

function StaffForm({ selectedStaff, onSuccess, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedStaff) {
      setForm({
        full_name: selectedStaff.full_name || "",
        email: selectedStaff.email || "",
        phone: selectedStaff.phone || "",
        role: selectedStaff.role || "",
        specialization: selectedStaff.specialization || "",
      });
    } else {
      setForm(emptyForm);
    }

    setError("");
  }, [selectedStaff]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = {
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        role: form.role,
        specialization: form.specialization.trim() || null,
      };

      console.log("Sending staff data:", data);

      if (selectedStaff) {
        await staffService.update(
          selectedStaff.id,
          data
        );

        alert("Staff updated successfully");
      } else {
        await staffService.create(data);

        alert("Staff added successfully");
      }

      setForm(emptyForm);

      await onSuccess();
    } catch (error) {
      console.error("STAFF API ERROR:", error);

      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        "Unable to save staff";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="staff-form">

      <h2>
        {selectedStaff ? "Edit Staff" : "Add Staff"}
      </h2>

      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="full_name"
            placeholder="Enter full name"
            value={form.full_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Role</label>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Role
            </option>

            <option value="staff">
              Staff
            </option>

            <option value="manager">
              Manager
            </option>

            <option value="receptionist">
              Receptionist
            </option>

            <option value="beautician">
              Beautician
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Specialization</label>

          <input
            type="text"
            name="specialization"
            placeholder="e.g. Hair, Makeup, Facial"
            value={form.specialization}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : selectedStaff
            ? "Update Staff"
            : "Add Staff"}
        </button>

        {selectedStaff && (
          <button
            type="button"
            className="btn-secondary"
            onClick={onCancel}
            disabled={loading}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}

      </form>
    </div>
  );
}

export default StaffForm;