import { useEffect, useState } from "react";
import appointmentService from "../../services/appointmentService";
import StaffSchedule from "../../components/staff/StaffSchedule";

function Schedule() {
  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      const data =
        await appointmentService.getAll();

      setAppointments(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>My Schedule</h1>

      <StaffSchedule
        appointments={appointments}
      />
    </div>
  );
}

export default Schedule;