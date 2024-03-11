import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#C99F78]" >
        
        <div className="flex-grow bg-brown-200 p-4 bg-opacity-88">
            <h1 className="text-2xl mb-4 font-bold">LUXEDINE DASHBOARD</h1>
            <h1 className="text-1xl mb-4">Here’s what’s going on at your business right now</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-xl mb-2">New Messages</h2>
                <p className="text-3xl font-bold">1500</p>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-xl mb-2">Orders</h2>
                <p className="text-3xl font-bold">500</p>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
