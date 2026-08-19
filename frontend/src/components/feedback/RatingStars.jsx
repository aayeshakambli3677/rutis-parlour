import React from "react";

const RatingStar = ({ rating = 0, onRatingChange }) => {
    return (
        <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => onRatingChange && onRatingChange(star)}
                    style={{
                        cursor: onRatingChange ? "pointer" : "default",
                        color: star <= rating ? "#f5b301" : "#ccc",
                        fontSize: "24px",
                        marginRight: "4px",
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default RatingStar;