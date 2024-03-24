// NotificationItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const NotificationItem = ({ notification, onToggleReadStatus }) => {
    return (
        <div className={`p-4 mb-3 bg-white rounded shadow ${notification.read ? 'bg-gray-300' : ''}`}>
            <div className="flex justify-between items-center">
                <div className="flex-grow">
                    <h4 className="text-lg font-bold">{notification.title}</h4>
                    <p className="text-gray-700">{notification.message}</p>
                    <time className="text-sm text-gray-500">{new Date(notification.timestamp).toLocaleString()}</time>
                    <Link to={notification.link} className="text-blue-600 px-5 hover:text-blue-800 inline-block mt-2">
                        View details
                    </Link>
                </div>
                <button
                    onClick={() => onToggleReadStatus(notification.id)}
                    className="text-xl p-2 rounded hover:bg-gray-100"
                    aria-label={notification.read ? 'Mark as Unread' : 'Mark as Read'}
                >
                    {notification.read ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
            </div>
        </div>
    );
};

export default NotificationItem;
