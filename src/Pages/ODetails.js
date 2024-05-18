import React from 'react';
import { useState } from 'react';

const CustomerDetailsPage = () => {
  const [orderStatus, setOrderStatus] = useState('preparing');
  const [inputBgClass, setInputBgClass] = useState('bg-green-300');

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setOrderStatus(status);

    switch (status) {
      case 'preparing':
        setInputBgClass('bg-green-300');
        break;
      case 'processing':
        setInputBgClass('bg-blue-300');
        break;
      case 'get_ready':
        setInputBgClass('bg-red-400');
        break;
      default:
        setInputBgClass('');
    }
  };

  return (
    <div className="p-4 h-screen bg-gray-200">
      
      <h1 className="text-3xl font-bold mb-4">Order Details</h1>


      <div className='flex flex-col sm:flex-row mb-0 items-center space-y-2 sm:space-y-0 sm:space-x-4'>
  <label className='text-black mt-2 font-semibold text-xl mb-2 sm:mb-0'>Order ID :</label>
  <input 
    className='w-full sm:w-1/3 p-2 border-2 text-xl rounded-md bg-gray-200 outline-none' 
    type="text" 
  />
  <label className='text-black mt-2 font-semibold text-xl mb-2 sm:mb-0'>Order Status :</label>
      <div className='w-full sm:w-1/3'>
        <select 
          className={`w-full p-2 border-2 text-xl rounded-md outline-none ${inputBgClass}`}
          value={orderStatus}
          onChange={handleStatusChange}
        >
          <option className='font-bold bg-green-300' value="preparing">Preparing</option>
          <option className='font-bold bg-blue-300' value="processing">Processing</option>
          <option className='font-bold bg-red-500' value="get_ready">Get Ready</option>
        </select>
      </div></div>




<div className='flex flex-col sm:flex-row mb-0 items-center space-y-2 sm:space-y-0 sm:space-x-4'>
  <label className='text-black mt-2 font-semibold text-xl mb-2 sm:mb-0'>Customer ID :</label>
  <input 
    className='w-full sm:w-1/2 p-2 border-2 text-xl rounded-md bg-gray-200 outline-none' 
    type="text" 
  />
</div>

      


      <div className="flex flex-wrap mt-3">
        <div className="bg-gray-300 text-center w-full md:w-3/4 p-4 md:mr-4 mb-4 md:mb-0">
          <table className="w-full border-black border-collapse border">
            <thead>
              <tr>
                <th className="p-2">Items</th>
                <th className="p-2">Category</th>
                <th className="p-2">Size</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-gray-300 p-2 text-center">Chicken Burger</td>
                <td className="bg-gray-300 p-2 text-center">Shorteates</td>
                <td className="bg-gray-300 p-2 text-center">Regular</td>
                <td className="bg-gray-300 p-2 text-center">$6.5</td>
                <td className="bg-gray-300 p-2 text-center">2</td>
                <td className="bg-gray-300 p-2 text-center">$13</td>
              </tr>
              <tr>
                <td className="bg-gray-300 p-2 text-center">Special Mojito</td>
                <td className="bg-gray-300 p-2 text-center">Beverages</td>
                <td className="bg-gray-300 p-2 text-center">-</td>
                <td className="bg-gray-300 p-2 text-center">$2.5</td>
                <td className="bg-gray-300 p-2 text-center">2</td>
                <td className="bg-gray-300 p-2 text-center">$5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-300 w-full md:w-1/5 p-3 md:ml-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">SUMMARY</th>
                <th className="px-4 py-2 text-blue-500">Edit Cart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Item Total</td>
                <td className="border px-4 py-2 font-bold">$18</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Discount</td>
                <td className="border px-4 py-2 font-bold">$1</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Total</td>
                <td className="border px-4 py-2 font-bold">$17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="bg-gray-300 w-full md:w-1/5 p-4 md:ml-auto mb-4 md:mb-0">
          <div className="text-center font-bold">Order Status</div>
          <h className="font-bold">Payment Status</h>
            <p className='bg-yellow-600 text-white text-center'>Processing</p>
          <h className="font-bold">Fulfilment Status</h>
            <p className='bg-yellow-600 text-white text-center'>Unfiled</p>  
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
