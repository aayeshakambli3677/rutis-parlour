import React, { useState } from "react";

function Payment({ amount = 0, onPaymentComplete }) {
    const [paymentMethod, setPaymentMethod] = useState("Cash");
    const [paymentStatus, setPaymentStatus] = useState("Pending");

    const handlePayment = () => {
        setPaymentStatus("Paid");

        if (onPaymentComplete) {
            onPaymentComplete({
                amount,
                method: paymentMethod,
                status: "Paid",
            });
        }
    };

    return (
        <div className="payment">
            <h2>Payment</h2>

            <div className="payment-amount">
                <h3>Amount to Pay</h3>
                <p>₹{amount}</p>
            </div>

            <label>Payment Method</label>

            <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
            >
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
            </select>

            <p>
                <strong>Status:</strong> {paymentStatus}
            </p>

            {paymentStatus === "Pending" && (
                <button onClick={handlePayment}>Complete Payment</button>
            )}

            {paymentStatus === "Paid" && (
                <p>✅ Payment completed successfully.</p>
            )}
        </div>
    );
}

export default Payment;