import React, { useState } from "react";
import RatingStar from "./RatingStar";

const Review = ({ onSubmit }) => {
    const [customerName, setCustomerName] = useState("");
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const review = {
            customerName,
            rating,
            message,
            date: new Date().toLocaleDateString(),
        };

        if (onSubmit) {
            onSubmit(review);
        }

        setCustomerName("");
        setRating(0);
        setMessage("");
    };

    return (
        <div className="review">
            <h2>Give Your Feedback</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                />

                <div>
                    <label>Rating</label>
                    <RatingStar
                        rating={rating}
                        onRatingChange={setRating}
                    />
                </div>

                <textarea
                    placeholder="Write your review..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default Review;