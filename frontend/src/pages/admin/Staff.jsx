import { useEffect, useState } from "react";
import staffService from "../../services/staffService";
import StaffForm from "../../components/staff/StaffForm";
import StaffTable from "../../components/staff/StaffTable";

function Staff() {
  const [staff, setStaff] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // LOAD STAFF
  // =========================
  const loadStaff = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await staffService.getAll();

      // Make sure frontend always receives an array
      setStaff(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Staff loading error:", error);

      setStaff([]);

      setError(
        error.response?.data?.detail ||
          error.message ||
          "Unable to load staff"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOAD ON PAGE OPEN
  // =========================
  useEffect(() => {
    loadStaff();
  }, []);

  // =========================
  // DELETE STAFF
  // =========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this staff member?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await staffService.delete(id);

      alert("Staff deleted successfully");

      setSelectedStaff(null);

      await loadStaff();
    } catch (error) {
      console.error("Staff delete error:", error);

      alert(
        error.response?.data?.detail ||
          error.message ||
          "Unable to delete staff"
      );
    }
  };

  // =========================
  // FORM SUCCESS
  // =========================
  const handleSuccess = async () => {
    setSelectedStaff(null);
    await loadStaff();
  };

  // =========================
  // FORM CANCEL
  // =========================
  const handleCancel = () => {
    setSelectedStaff(null);
  };

  return (
    <div className="staff-container">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <h2>Staff Management</h2>
          <p>
            Add, update and manage beauty parlour staff.
          </p>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className="alert alert-error">
          {error}

          <button
            type="button"
            className="btn-secondary"
            onClick={loadStaff}
            style={{ marginLeft: "10px" }}
          >
            Retry
          </button>
        </div>
      )}

      {/* STAFF FORM */}
      <StaffForm
        selectedStaff={selectedStaff}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />

      {/* STAFF LIST */}
      <div className="staff-list-section">

        <div className="page-header">
          <div>
            <h2>All Staff</h2>
            <p>
              {staff.length} staff member
              {staff.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {loading ? (
          <div className="loading">
            Loading staff...
          </div>
        ) : staff.length === 0 ? (
          <div className="empty-state">
            <h3>No Staff Found</h3>
            <p>
              No staff members have been added yet.
            </p>
          </div>
        ) : (
          <StaffTable
            staff={staff}
            onEdit={setSelectedStaff}
            onDelete={handleDelete}
          />
        )}

      </div>

    </div>
  );
}

export default Staff;