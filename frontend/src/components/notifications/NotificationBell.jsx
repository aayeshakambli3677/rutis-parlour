import React from "react";

const NotificationBell = ({ count = 0, onClick }) => {
    return (
        <button
            className="notification-bell"
            onClick={onClick}
            aria-label="Notifications"
        >
            🔔

            {count > 0 && (
                <span className="notification-count">
                    {count > 99 ? "99+" : count}
                </span>
            )}
        </button>
    );
};

export default NotificationBell;