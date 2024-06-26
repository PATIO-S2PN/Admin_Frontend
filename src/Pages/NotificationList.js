import React from 'react';

const NotificationList = ({ notifications, onToggleReadStatus, navigate }) => (
  <ul>
    {notifications.map(notification => (
      <li key={notification.id} className={`p-4 border-b ${notification.read ? 'bg-gray-200' : 'bg-white'}`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">{notification.title}</h2>
            <p>{notification.message}</p>
            <small>{new Date(notification.timestamp).toLocaleString()}</small>
          </div>
          <div>
            <button
              onClick={() => onToggleReadStatus(notification.id)}
              className={`ml-2 p-2 rounded ${
                notification.read ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {notification.read ? 'Mark as Unread' : 'Mark as Read'}
            </button>
            <button
              onClick={() => navigate(notification.link)}
              className="p-2 ml-2 text-white bg-green-500 rounded"
            >
              View
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default NotificationList;
