import { useState } from "react";
import "../../styles/customer.css";

function Appointment() {
  const [appointment, setAppointment] = useState({
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !appointment.service ||
    !appointment.date ||
    !appointment.time
  ) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem(
    "appointment",
    JSON.stringify(appointment)
  );

  alert("Appointment Booked Successfully");
};

  return (
    <div className="customer-container">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit} className="customer-form">
        <input
          type="text"
          name="service"
          placeholder="Service"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
        />

        <button type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;