// Notifications.js
import React, { useState } from 'react';
import NotificationList from '../Components/NotificationList';

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'New Order',
            message: 'Order #1234 has been placed.',
            timestamp: '2022-07-08T12:34:00Z',
            link: '/order/1234',
            read: false,
        },
        {
            id: 2,
            title: 'New Order',
            message: 'Order #123 has been placed.',
            timestamp: '2022-07-08T12:34:00Z',
            link: '/order/1234',
            read: false,
        },
        // ... more notifications
    ]);

    // Define the toggleReadStatus function
    const toggleReadStatus = (id) => {
        const updatedNotifications = notifications.map((notification) => {
            if (notification.id === id) {
                return { ...notification, read: !notification.read };
            }
            return notification;
        });
        setNotifications(updatedNotifications);
    };

    return (
        <div className="container mx-auto p-6 bg-gray-200 h-screen">
            <h1 className="text-4xl font-bold mb-4">Notifications</h1>
            <NotificationList notifications={notifications} onToggleReadStatus={toggleReadStatus} />
        </div>
    );
};

export default Notifications;
