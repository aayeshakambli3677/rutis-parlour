import React from "react";

const NotificationCard = ({ notification, onRead }) => {
    const handleClick = () => {
        if (onRead && notification?.id) {
            onRead(notification.id);
        }
    };

    return (
        <div
            className={`notification-card ${notification?.isRead ? "read" : "unread"
                }`}
            onClick={handleClick}
        >
            <div className="notification-icon">
                🔔
            </div>

            <div className="notification-content">
                <h4>{notification?.title || "Notification"}</h4>

                <p>
                    {notification?.message || "You have a new notification."}
                </p>

                {notification?.date && (
                    <small>{notification.date}</small>
                )}
            </div>
        </div>
    );
};

export default NotificationCard;