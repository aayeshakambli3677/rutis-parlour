import React from "react";

function Reports() {
    return (
        <div className="reports-page">
            <div className="reports-header">
                <div>
                    <h1>Reports</h1>
                    <p>View beauty parlour business reports</p>
                </div>

                <button onClick={() => window.print()}>
                    Print Report
                </button>
            </div>

            <div className="report-cards">
                <div className="report-card">
                    <h3>Total Revenue</h3>
                    <p>₹0</p>
                </div>

                <div className="report-card">
                    <h3>Total Appointments</h3>
                    <p>0</p>
                </div>

                <div className="report-card">
                    <h3>Total Customers</h3>
                    <p>0</p>
                </div>

                <div className="report-card">
                    <h3>Completed Appointments</h3>
                    <p>0</p>
                </div>
            </div>

            <div className="report-section">
                <h2>Appointment Report</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Staff</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>₹0</td>
                            <td>No Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="report-section">
                <h2>Inventory Report</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>--</td>
                            <td>--</td>
                            <td>0</td>
                            <td>₹0</td>
                            <td>No Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Reports;