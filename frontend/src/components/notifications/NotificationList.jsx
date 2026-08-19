import React from "react";
import NotificationCard from "./NotificationCard";

const NotificationList = ({
    notifications = [],
    onRead,
}) => {
    if (notifications.length === 0) {
        return (
            <div className="notification-empty">
                <p>No notifications available.</p>
            </div>
        );
    }

    return (
        <div className="notification-list">
            {notifications.map((notification) => (
                <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onRead={onRead}
                />
            ))}
        </div>
    );
};

export default NotificationList;