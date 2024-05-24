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
    <div className="h-screen p-4 bg-gray-200">
      
      <h1 className="mb-4 text-3xl font-bold">Order Details</h1>


      <div className='flex flex-col items-center mb-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
  <label className='mt-2 mb-2 text-xl font-semibold text-black sm:mb-0'>Order ID :</label>
  <input 
    className='w-full p-2 text-xl bg-gray-200 border-2 rounded-md outline-none sm:w-1/3' 
    type="text" 
  />
  <label className='mt-2 mb-2 text-xl font-semibold text-black sm:mb-0'>Order Status :</label>
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




<div className='flex flex-col items-center mb-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
  <label className='mt-2 mb-2 text-xl font-semibold text-black sm:mb-0'>Customer ID :</label>
  <input 
    className='w-full p-2 text-xl bg-gray-200 border-2 rounded-md outline-none sm:w-1/2' 
    type="text" 
  />
</div>

      


      <div className="flex flex-wrap mt-3">
        <div className="w-full p-4 mb-4 text-center bg-gray-300 md:w-3/4 md:mr-4 md:mb-0">
          <table className="w-full border border-collapse border-black">
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
                <td className="p-2 text-center bg-gray-300">Chicken Burger</td>
                <td className="p-2 text-center bg-gray-300">Shorteates</td>
                <td className="p-2 text-center bg-gray-300">Regular</td>
                <td className="p-2 text-center bg-gray-300">$6.5</td>
                <td className="p-2 text-center bg-gray-300">2</td>
                <td className="p-2 text-center bg-gray-300">$13</td>
              </tr>
              <tr>
                <td className="p-2 text-center bg-gray-300">Special Mojito</td>
                <td className="p-2 text-center bg-gray-300">Beverages</td>
                <td className="p-2 text-center bg-gray-300">-</td>
                <td className="p-2 text-center bg-gray-300">$2.5</td>
                <td className="p-2 text-center bg-gray-300">2</td>
                <td className="p-2 text-center bg-gray-300">$5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full p-3 bg-gray-300 md:w-1/5 md:ml-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">SUMMARY</th>
                <th className="px-4 py-2 text-blue-500">Edit Cart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Item Total</td>
                <td className="px-4 py-2 font-bold border">$18</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Discount</td>
                <td className="px-4 py-2 font-bold border">$1</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Total</td>
                <td className="px-4 py-2 font-bold border">$17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-full p-4 mb-4 bg-gray-300 md:w-1/5 md:ml-auto md:mb-0">
          <div className="font-bold text-center">Order Status</div>
          <h2 className="font-bold">Payment Status</h2>
            <p className='text-center text-white bg-yellow-600'>Processing</p>
          <h2 className="font-bold">Fulfilment Status</h2>
            <p className='text-center text-white bg-yellow-600'>Unfiled</p>  
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
