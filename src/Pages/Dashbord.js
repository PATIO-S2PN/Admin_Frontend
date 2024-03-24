import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 p-4 bg-opacity-88">
      <header className="mb-4">
        <h1 className="text-4xl font-semibold">DASHBOARD</h1>
        <h2 className="text-xl">Here’s what’s going on at your business right now</h2>
      </header>
      
      <main className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl mb-2">New Messages</h3>
            <p className="text-3xl font-bold">1500</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl mb-2">Orders</h3>
            <p className="text-3xl font-bold">500</p>
          </div>
        </div>
      </main>
      
      <footer className="w-full bg-gray-100 text-center py-4 mt-4">
        <div className='font-semibold text-xl'>LUXEDINE</div>
        <div className="text-gray-600 text-sm">
          © 2024 | All Rights Reserved.
          <span className="block sm:inline"> | Version </span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
