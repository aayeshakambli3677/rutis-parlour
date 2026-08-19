import React from "react";

function MembershipCard({
    name = "Gold Membership",
    duration = "6 Months",
    price = 2999,
    benefits = "10% discount on services",
}) {
    return (
        <div className="membership-card">
            <h2>{name}</h2>

            <p>
                <strong>Duration:</strong> {duration}
            </p>

            <h3>₹{price}</h3>

            <p>{benefits}</p>

            <button>View Membership</button>
        </div>
    );
}

export default MembershipCard;