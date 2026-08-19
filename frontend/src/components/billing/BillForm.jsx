import React, { useState } from "react";

function BillingForm({ onAddBill }) {
    const [formData, setFormData] = useState({
        customerName: "",
        service: "",
        amount: "",
        discount: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const bill = {
            id: Date.now(),
            customerName: formData.customerName,
            service: formData.service,
            amount: Number(formData.amount),
            discount: Number(formData.discount || 0),
        };

        onAddBill(bill);

        setFormData({
            customerName: "",
            service: "",
            amount: "",
            discount: "",
        });
    };

    return (
        <div className="billing-form">
            <h2>Create Bill</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="customerName"
                    placeholder="Customer Name"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="service"
                    placeholder="Service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="discount"
                    placeholder="Discount"
                    value={formData.discount}
                    onChange={handleChange}
                    min="0"
                />

                <button type="submit">Create Bill</button>
            </form>
        </div>
    );
}

export default BillingForm;