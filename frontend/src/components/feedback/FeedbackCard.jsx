import React from "react";
import RatingStar from "./RatingStar";

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="feedback-card">
            <div className="feedback-card-header">
                <h3>{feedback?.customerName || "Customer"}</h3>

                <RatingStar rating={feedback?.rating || 0} />
            </div>

            <p className="feedback-message">
                {feedback?.message || "No feedback available."}
            </p>

            {feedback?.date && (
                <small>{feedback.date}</small>
            )}
        </div>
    );
};

export default FeedbackCard;