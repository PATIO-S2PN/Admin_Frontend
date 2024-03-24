import React from 'react';
import NotificationItem from './NotificationItem';
const NotificationList = ({ notifications, onToggleReadStatus }) => {
    return (
        <div>
            {notifications.map((notification) => (
                <NotificationItem 
                  key={notification.id} 
                  notification={notification} 
                  onToggleReadStatus={onToggleReadStatus} 
                />
            ))}
        </div>
    );
};

export default NotificationList;
