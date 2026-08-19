import React from "react";

function Invoice({ bill }) {
    if (!bill) {
        return (
            <div className="invoice">
                <h2>Invoice</h2>
                <p>No bill selected.</p>
            </div>
        );
    }

    const total = bill.amount - bill.discount;

    return (
        <div className="invoice">
            <div className="invoice-header">
                <h1>Ruti's Beauty Parlour</h1>
                <p>Beauty Parlour Management System</p>
                <h2>INVOICE</h2>
            </div>

            <div className="invoice-details">
                <p>
                    <strong>Invoice ID:</strong> {bill.id}
                </p>

                <p>
                    <strong>Customer:</strong> {bill.customerName}
                </p>

                <p>
                    <strong>Service:</strong> {bill.service}
                </p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{bill.service}</td>
                        <td>₹{bill.amount}</td>
                    </tr>

                    <tr>
                        <td>Discount</td>
                        <td>- ₹{bill.discount}</td>
                    </tr>

                    <tr>
                        <td>
                            <strong>Total</strong>
                        </td>
                        <td>
                            <strong>₹{total}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button onClick={() => window.print()}>Print Invoice</button>
        </div>
    );
}

export default Invoice;