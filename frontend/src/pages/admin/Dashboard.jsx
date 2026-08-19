import React from "react";

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to Ruti's Beauty Parlour Management System</p>

            <div className="dashboard-cards">
                <div className="card">
                    <h3>Total Customers</h3>
                    <p>0</p>
                </div>

                <div className="card">
                    <h3>Total Appointments</h3>
                    <p>0</p>
                </div>

                <div className="card">
                    <h3>Total Services</h3>
                    <p>0</p>
                </div>

                <div className="card">
                    <h3>Total Staff</h3>
                    <p>0</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;