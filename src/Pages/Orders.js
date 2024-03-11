import React from 'react';

const AdminCustomerPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4 font-bold">Order</h1>

      
      <div className="flex items-center mb-4">
        
        <div className="flex-1 mr-2">
          <input
            type="text"
            placeholder="Search orders..."
            className="bg-gray-300 p-2 border border-gray-300 rounded-l-md w-full"
          />
        </div>
        
        <button className="bg-gray-300 text-black px-4 py-2 mr-2">Export</button>
        
        <button className="bg-gray-300 text-black px-4 py-2">Add Order</button>
      </div>

      
      <div className="mt-8">
        <table className="w-full border-collapse border-spacing-2">
          <thead>
            <tr>
              <th className=" p-2">Order</th>
              <th className=" p-2">Total</th>
              <th className=" p-2">Customer</th>
              <th className=" p-2">Payment Status</th>
              <th className=" p-2">Order Status</th>
              <th className=" p-2">Branch</th>
              <th className=" p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className='mt-'>
              <td className="bg-gray-300 p-2 text-center">#1234</td>
              <td className="bg-gray-300 p-2 text-center">$87</td>
              <td className="bg-gray-300 p-2 text-center">Supuni Navodya</td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-blue-800 border border-white text-white px-2 py-1 rounded-md">Complete</button></td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-blue-800 border border-white text-white px-2 py-1 rounded-md">Done</button></td>            
              <td className="bg-gray-300 p-2 text-center">colombo</td>
              <td className="bg-gray-300 p-2 text-center">12/10/2023</td>
            </tr>

            <tr>
              <td className="bg-gray-300 p-2 text-center">#1234</td>
              <td className="bg-gray-300 p-2 text-center">$87</td>
              <td className="bg-gray-300 p-2 text-center">Supuni Navodya</td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-gray-100 border border-white text-black px-2 py-1 rounded-md">Canceled</button></td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-gray-100 border border-white text-black px-2 py-1 rounded-md">Canceled</button></td>            
              <td className="bg-gray-300 p-2 text-center">colombo</td>
              <td className="bg-gray-300 p-2 text-center">12/10/2023</td>
            </tr>

            <tr>
              <td className="bg-gray-300 p-2 text-center">#1234</td>
              <td className="bg-gray-300 p-2 text-center">$87</td>
              <td className="bg-gray-300 p-2 text-center">Supuni Navodya</td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-yellow-600 border border-white text-white px-2 py-1 rounded-md">Pending</button></td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-yellow-600 border border-white text-white px-2 py-1 rounded-md">Delay</button></td>            
              <td className="bg-gray-300 p-2 text-center">colombo</td>
              <td className="bg-gray-300 p-2 text-center">12/10/2023</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomerPage;
