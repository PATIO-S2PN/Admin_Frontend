import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen p-4 mt-5 bg-white bg-opacity-88">
      <header className="mx-10 mb-4">
        <h1 className="text-4xl font-semibold font-roboto-regular text-orange-950">Welcome Back!</h1>
        <h2 className="text-lg text-orange-800 font-roboto ">Here’s what’s going on at your business right now</h2>
      </header>
      
      <div className="flex flex-col justify-around md:flex-row md:justify-around md:gap-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-4 bg-orange-100 rounded-lg shadow-md md:w-[350px] lg:w-[450px] lg:gap-2">
            <h3 className="mb-2 text-xl">New Messages</h3>
            <p className="text-3xl font-bold">1500</p>
          </div>
          <div className="p-4 bg-green-200 rounded-lg shadow-md md:w-[450px]">
            <h3 className="mb-2 text-xl">Total Orders</h3>
            <p className="text-3xl font-bold">500</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-lg shadow-md md:w-[450px]">
            <h3 className="mb-2 text-xl">Total Users</h3>
            <p className="text-3xl font-bold">300</p>
          </div>
          <div className="p-4 bg-teal-100 rounded-lg shadow-md md:w-[450px]">
            <h3 className="mb-2 text-xl">Staff Members</h3>
            <p className="text-3xl font-bold">400</p>
          </div>
        </div>
        
</div>
      
      <footer className="w-full py-4 mt-4 text-center bg-gray-100">
        <div className='text-xl font-semibold'>LUXEDINE</div>
        <div className="text-sm text-gray-600">
          © 2024 | All Rights Reserved.
          <span className="block sm:inline"> | Version </span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
