import React, { useState } from "react";

function Membership() {
    const [memberships, setMemberships] = useState([
        {
            id: 1,
            name: "Gold Membership",
            duration: "6 Months",
            price: 2999,
            benefits: "10% discount on services",
        },
        {
            id: 2,
            name: "Platinum Membership",
            duration: "12 Months",
            price: 4999,
            benefits: "20% discount on services",
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const [newMembership, setNewMembership] = useState({
        name: "",
        duration: "",
        price: "",
        benefits: "",
    });

    const handleChange = (e) => {
        setNewMembership({
            ...newMembership,
            [e.target.name]: e.target.value,
        });
    };

    const addMembership = (e) => {
        e.preventDefault();

        const membership = {
            id: memberships.length + 1,
            name: newMembership.name,
            duration: newMembership.duration,
            price: Number(newMembership.price),
            benefits: newMembership.benefits,
        };

        setMemberships([...memberships, membership]);

        setNewMembership({
            name: "",
            duration: "",
            price: "",
            benefits: "",
        });

        setShowForm(false);
    };

    return (
        <div className="membership-page">
            <div className="membership-header">
                <div>
                    <h1>Membership</h1>
                    <p>Manage parlour membership plans</p>
                </div>

                <button onClick={() => setShowForm(!showForm)}>
                    + Add Membership
                </button>
            </div>

            {showForm && (
                <form className="membership-form" onSubmit={addMembership}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Membership Name"
                        value={newMembership.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration e.g. 6 Months"
                        value={newMembership.duration}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newMembership.price}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="benefits"
                        placeholder="Benefits"
                        value={newMembership.benefits}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Save Membership</button>
                </form>
            )}

            <div className="membership-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Membership</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Benefits</th>
                        </tr>
                    </thead>

                    <tbody>
                        {memberships.map((membership) => (
                            <tr key={membership.id}>
                                <td>{membership.id}</td>
                                <td>{membership.name}</td>
                                <td>{membership.duration}</td>
                                <td>₹{membership.price}</td>
                                <td>{membership.benefits}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Membership;