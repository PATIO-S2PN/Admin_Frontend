import React from 'react';

const Customer= () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4 font-bold">Customer</h1>

      
      <div className="flex items-center mb-4">
        
        <div className="flex-1 mr-2">
          <input
            type="text"
            placeholder="Search customers..."
            className="bg-gray-300 p-2 border border-gray-300 rounded-l-md w-full"
          />
        </div>
        
        <button className="bg-gray-300 text-black px-4 py-2 mr-2">Export</button>
        
        <button className="bg-gray-300 text-black px-4 py-2">Add Customer</button>
      </div>

      
      <div className="mt-8">
        <table className="w-full border-collapse border ">
          <thead>
            <tr>
              <th className=" p-2">ID</th>
              <th className=" p-2">Customer</th>
              <th className=" p-2">Email</th>
              <th className=" p-2">Orders</th>
              <th className=" p-2">Total Spent</th>
              <th className=" p-2">City</th>
              <th className=" p-2">Last Orders</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td className="bg-gray-300 p-2 text-center">1</td>
              <td className="bg-gray-300 p-2 text-center">John Doe</td>
              <td className="bg-gray-300 p-2 text-center">john@example.com</td>
              <td className="bg-gray-300 p-2 text-center">25</td>
              <td className="bg-gray-300 p-2 text-center">$4253</td>
              <td className="bg-gray-300 p-2 text-center">colombo</td>
              <td className="bg-gray-300 p-2 text-center">12/10/2023</td>
            </tr>

            <tr>
              <td className="bg-gray-300 p-2 text-center">1</td>
              <td className="bg-gray-300 p-2 text-center">John Doe</td>
              <td className="bg-gray-300 p-2 text-center">john@example.com</td>
              <td className="bg-gray-300 p-2 text-center">25</td>
              <td className="bg-gray-300 p-2 text-center">$4253</td>
              <td className="bg-gray-300 p-2 text-center">colombo</td>
              <td className="bg-gray-300 p-2 text-center">12/10/2023</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer
