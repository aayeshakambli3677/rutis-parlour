import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaCut,
  FaUserTie,
  FaChartBar
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white">

      <div className="sidebar-header">
        <h4>Ruti's Parlour</h4>
        <small>Admin Panel</small>
      </div>

      <ul className="sidebar-menu">

        <li>
          <NavLink to="/dashboard">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers">
            <FaUsers />
            <span>Customers</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/appointments">
            <FaCalendarAlt />
            <span>Appointments</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/services">
            <FaCut />
            <span>Services</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/staff">
            <FaUserTie />
            <span>Staff</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports">
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;