import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { shoppingBackendUrl } from '../config';

const CustomerDetailsPage = () => {
  const location = useLocation();
  const { order } = location.state;

  const [orderStatus, setOrderStatus] = useState(order.status || 'preparing');
  const [inputBgClass, setInputBgClass] = useState('bg-green-300');

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    //setOrderStatus(newStatus);

    switch (newStatus) {
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

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
  
      // Assuming `order.orderId` correctly holds the order's ID
      const orderId = order.orderId;
      const response = await axios.patch(`/order/${orderId}/status`, { newStatus }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        console.log('Order status updated successfully');
        // Assuming `setOrderStatus` updates the local state to reflect the new status
        setOrderStatus(newStatus);
        // Update `inputBgClass` based on `newStatus` if necessary
      } else {
        console.error('Failed to update order status', response.data);
      }
    } catch (error) {
      console.error('Error updating order status:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="h-screen p-4 bg-gray-200">
      <h1 className="mb-4 text-3xl font-bold">Order Details</h1>

      <div className='flex flex-col items-center mb-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
        <label className='mt-2 mb-2 text-xl font-semibold text-black sm:mb-0'>Order ID : </label>
        <input 
          className='w-full p-2 text-xl bg-gray-200 border-2 rounded-md outline-none sm:w-1/3' 
          type="text" 
          value={order.orderId}
          readOnly
        />
        <label className='mt-2 mb-2 text-xl font-semibold text-black sm:mb-0'>Order Status :</label>
        <div className='w-full sm:w-1/3'>
          <select 
            className={`w-full p-2 border-2 text-xl rounded-md outline-none ${inputBgClass}`}
            value={orderStatus}
            onChange={handleStatusChange}
          >
            <option className='font-bold bg-orange-500' value="received">Received</option>
            <option className='font-bold bg-yellow-300' value="preparing">Preparing</option>
            <option className='font-bold bg-green-500' value="get_ready">Ready</option>
            {/* <option className='font-bold bg-green-500' value="cancelled">Cancelled</option> */}

          </select>
        </div>
      </div>

      <div className='flex flex-col items-center mb-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
        <label className='mt-2 mb-2 text-xl font-semibold text-black sm:mb-0'>Customer ID :</label>
        <input 
          className='w-full p-2 text-xl bg-gray-200 border-2 rounded-md outline-none sm:w-1/2' 
          type="text" 
          value={order.customerId}
          readOnly
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
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 text-center bg-gray-300">{item.product.name}</td>
                  <td className="p-2 text-center bg-gray-300">{item.product.category}</td>
                  <td className="p-2 text-center bg-gray-300">{item.product.size}</td>
                  <td className="p-2 text-center bg-gray-300">${item.product.price}</td>
                  <td className="p-2 text-center bg-gray-300">{item.unit}</td>
                  <td className="p-2 text-center bg-gray-300">${item.product.price * item.unit}</td>
                </tr>
              ))}
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
                <td className="px-4 py-2 font-bold border">${order.items.reduce((acc, item) => order.amount , 0)}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Discount</td>
                <td className="px-4 py-2 font-bold border">${order.discount}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Total</td>
                <td className="px-4 py-2 font-bold border">${order.amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-full p-4 mb-4 bg-gray-300 md:w-1/5 md:ml-auto md:mb-0">
          <div className="font-bold text-center">Order Status</div>
          <h2 className="font-bold">Payment Status</h2>
          <p className='text-center text-white bg-yellow-600'>{order.status}</p>
          <h2 className="font-bold">Fulfilment Status</h2>
          <p className='text-center text-white bg-yellow-600'>{order.fulfillmentStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
