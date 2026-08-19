import React from "react";

function MembershipTable({ memberships = [] }) {
    return (
        <div className="membership-table">
            <h2>Membership Plans</h2>

            {memberships.length === 0 ? (
                <p>No membership plans available.</p>
            ) : (
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
            )}
        </div>
    );
}

export default MembershipTable;