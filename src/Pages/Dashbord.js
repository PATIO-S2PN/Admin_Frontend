import React from 'react';
import HeaderNavigation from '../Components/HeaderNavigation';
import { useState } from 'react';
import closeicon from '../Assets/Close.png';
import rings from '../Assets/Rings.svg';


const Dashboard = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const handleCloseClick = () => {
    setShowWelcomeMessage(false);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen p-4 mt-0 bg-white bg-opacity-88 gap-y-4">
      <HeaderNavigation />
      {showWelcomeMessage && (
        <div className="relative flex flex-col md:flex-row mx-0 bg-white rounded-[8px] shadow-md border-[1px] px-[16px] py-[16px] md:h-[120px] justify-between items-center">
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-inter text-[24px] font-semibold">Welcome back, John Doe</h3>
            <p className="font-inter text-[14px]">
              Here’s what’s going on at your business right now! Stay updated with the latest developments and insights at a glance.
            </p>
            <a href="your_url_here" className="font-inter text-[14px] text-[#BC006D] underline">
              Look here for more information
            </a>
          </div>
          <div className="flex flex-row mt-4 md:mt-0 gap-x-5">
            <img src={rings} alt="rings" className="w-[167px] h-[120px]" />
          </div>
          <img
            src={closeicon}
            alt="close icon"
            className="absolute top-0 right-4 w-[24px] h-[24px] cursor-pointer mt-[16px]"
            onClick={handleCloseClick}
          />
        </div>
      )}

      <div className="flex flex-col justify-around gap-4 md:flex-row">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="h-24 p-4 bg-orange-100 rounded-lg shadow-md">
            <h3 className="mb-2 text-xl">New Messages</h3>
            <p className="text-3xl font-bold">1500</p>
          </div>
          <div className="h-24 p-4 bg-green-100 rounded-lg shadow-md">
            <h3 className="mb-2 text-xl">Total Orders</h3>
            <p className="text-3xl font-bold">500</p>
          </div>
          <div className="h-24 p-4 rounded-lg shadow-md bg-amber-100">
            <h3 className="mb-2 text-xl">Total Users</h3>
            <p className="text-3xl font-bold">300</p>
          </div>
          <div className="h-24 p-4 bg-teal-100 rounded-lg shadow-md">
            <h3 className="mb-2 text-xl">Staff Members</h3>
            <p className="text-3xl font-bold">400</p>
          </div>
        </div>
      </div>

      <footer className="w-full py-4 mt-4 text-center bg-gray-100">
        <div className="text-xl font-semibold">LUXEDINE</div>
        <div className="text-sm text-gray-600">
          © 2024 | All Rights Reserved.
          <span className="block sm:inline"> | Version </span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
