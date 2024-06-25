import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [notification, ...prevNotifications]);
  };

  const toggleReadStatus = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: !notification.read } : notification
      )
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, toggleReadStatus }}>
      {children}
    </NotificationContext.Provider>
  );
};
