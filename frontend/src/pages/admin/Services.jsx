import { useEffect, useState } from "react";
import axios from "axios";

import ServiceForm from "../../components/services/ServiceForm";
import ServiceTable from "../../components/services/ServiceTable";

const API_URL = "http://127.0.0.1:8000";

function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  // ===============================
  // LOAD SERVICES
  // ===============================

  const loadServices = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${API_URL}/services/`
      );

      setServices(response.data);

    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.detail ||
          "Unable to load services"
      );

    } finally {
      setLoading(false);
    }
  };


  // ===============================
  // LOAD ON PAGE OPEN
  // ===============================

  useEffect(() => {
    loadServices();
  }, []);


  // ===============================
  // ADD SERVICE
  // ===============================

  const handleAdd = () => {
    setSelectedService(null);
    setShowForm(true);
    setError("");
  };


  // ===============================
  // EDIT SERVICE
  // ===============================

  const handleEdit = (service) => {
    setSelectedService(service);
    setShowForm(true);
    setError("");
  };


  // ===============================
  // FORM SUCCESS
  // ===============================

  const handleSuccess = () => {
    setSelectedService(null);
    setShowForm(false);

    loadServices();
  };


  // ===============================
  // CANCEL FORM
  // ===============================

  const handleCancel = () => {
    setSelectedService(null);
    setShowForm(false);
  };


  // ===============================
  // DELETE SERVICE
  // ===============================

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmed) {
      return;
    }

    try {

      await axios.delete(
        `${API_URL}/services/${id}`
      );

      alert("Service deleted successfully");

      loadServices();

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.detail ||
          "Unable to delete service"
      );
    }
  };


  // ===============================
  // UI
  // ===============================

  return (
    <div className="services-container">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>
          <h2>Services Management</h2>

          <p>
            Add, update and manage beauty parlour services.
          </p>
        </div>


        <button
          className="btn-primary"
          onClick={handleAdd}
        >
          + Add Service
        </button>

      </div>


      {/* =========================
          ERROR
      ========================= */}

      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}


      {/* =========================
          ADD / EDIT FORM
      ========================= */}

      {showForm && (
        <div className="service-form">

          <ServiceForm
            selectedService={selectedService}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />

        </div>
      )}


      {/* =========================
          SERVICES LIST
      ========================= */}

      <div className="section-card">

        <div className="page-header">

          <div>
            <h3>All Services</h3>

            <p>
              {services.length} service
              {services.length !== 1
                ? "s"
                : ""} available
            </p>
          </div>

        </div>


        {/* =========================
            LOADING
        ========================= */}

        {loading ? (

          <div className="loading">
            Loading services...
          </div>

        ) : (

          <div className="service-table-container">

            <ServiceTable
              services={services}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          </div>

        )}

      </div>

    </div>
  );
}

export default Services;