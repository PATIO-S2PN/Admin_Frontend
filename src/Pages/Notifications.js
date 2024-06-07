import React, { useState } from 'react';
import NotificationList from '../Components/NotificationList';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logonew.svg';

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

    const navigate = useNavigate();

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
        <div className="container mx-auto p-6 bg-white h-screen">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl text-orange-900 font-bold">Notifications</h1>
                <img src={logo} alt='logo' className='h-[50px] w-[170px] cursor-pointer' onClick={() => navigate("/dashboard")} />
            </div>
            <NotificationList notifications={notifications} onToggleReadStatus={toggleReadStatus} />
        </div>
    );
};

export default Notifications;
