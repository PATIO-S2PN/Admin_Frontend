import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import { useNavigate } from 'react-router-dom';

import NotificationList from '../Components/NotificationList';

const Notifications = () => {
  const { notifications, toggleReadStatus } = useContext(NotificationContext);
  const navigate = useNavigate();

  return (
    <div className="container h-screen p-6 mx-auto bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold text-orange-900">Notifications</h1>
        <img src={logo} alt='logo' className='h-[50px] w-[170px] cursor-pointer' onClick={() => navigate("/dashboard")} />
      </div>
      <NotificationList notifications={notifications} onToggleReadStatus={toggleReadStatus} navigate={navigate} />
    </div>
  );
};

export default Notifications;
