import React from "react";

function LoyaltyPointsCard({ points = 0, customerName = "Customer" }) {
    return (
        <div className="loyalty-points-card">
            <h2>Loyalty Points</h2>
            <h3>{customerName}</h3>

            <div className="points">
                {points}
            </div>

            <p>Available Loyalty Points</p>
        </div>
    );
}

export default LoyaltyPointsCard;