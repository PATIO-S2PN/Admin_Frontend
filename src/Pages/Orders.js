import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from './NotificationContext';
import { shoppingBackendUrl } from '../config';


const AdminCustomerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders, setOrders] = useState([]);
  const { addNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${shoppingBackendUrl}/orders/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      const newOrders = response.data;
      if (orders.length && newOrders.length > orders.length) {
        addNotification({
          id: new Date().getTime(),
          title: 'New Order',
          message: `Order #${newOrders[newOrders.length - 1].orderId} has been placed.`,
          timestamp: new Date().toISOString(),
          link: `/order/${newOrders[newOrders.length - 1].orderId}`,
          read: false,
        });
      }
      setOrders(newOrders);
      console.log(newOrders);
    })
    .catch(error => console.error('Error:', error));
  }, [orders, addNotification]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRowClick = (order) => {
    navigate('/odetail', { state: { order } });
  };

  const filteredOrders = orders.filter(order =>
    order.orderId && order.orderId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex flex-col items-center justify-between mb-4 sm:flex-row">
        <h1 className="mb-4 text-2xl font-bold text-orange-900 sm:text-3xl sm:mb-0">Orders</h1>
         </div>
      <div className="flex flex-col items-center mb-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          placeholder="Search orders..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full p-2 bg-orange-100 border border-gray-500 sm:w-1/2 rounded-l-md hover:bg-orange-200"
        />
      </div>

      <div className="mt-8 overflow-x-auto">
        {filteredOrders.length === 0 ? (
          <p>No matching orders found.</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="text-white bg-orange-700">
                <th className="p-2 text-left sm:text-center">Order</th>
                <th className="p-2 text-left sm:text-center">Total</th>
                <th className="p-2 text-left sm:text-center">Customer</th>
                <th className="p-2 text-left sm:text-center">Payment Status</th>
                <th className="p-2 text-left sm:text-center">Order Status</th>
                <th className="p-2 text-left sm:text-center">Branch</th>
                <th className="p-2 text-left sm:text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr 
                  key={order.orderId}
                  onClick={() => handleRowClick(order)}
                  className="cursor-pointer hover:bg-gray-200"
                >
                  <td className="p-2 text-left bg-gray-300 sm:text-center">{order.orderId}</td>
                  <td className="p-2 text-left bg-gray-300 sm:text-center">{order.amount}</td>
                  <td className="p-2 text-left bg-gray-300 sm:text-center">{order.customerId}</td>
                  <td className="p-2 text-left bg-gray-300 sm:text-center">
                    <button className={`border text-white px-2 py-1 rounded-md ${
                      order.paymentStatus === 'Complete' ? 'bg-blue-800' :
                      order.paymentStatus === 'Canceled' ? 'bg-red-800 text-black' :
                      order.paymentStatus === 'Pending' ? 'bg-yellow-600' : ''
                    }`}>{order.paymentStatus}</button>
                  </td>
                  <td className="p-2 text-left bg-gray-300 sm:text-center">
                    <button className={`border text-white px-2 py-1 rounded-md ${
                      order.status === 'Ready' ? 'bg-green-500' :
                      order.status === 'received' ? 'bg-orange-500' :
                      // order.status === 'Canceled' ? 'bg-red-800 text-black' :
                      order.status === 'Preparing' ? 'bg-yellow-600' : ''
                    }`}>{order.status}</button>
                  </td>
                  <td className="p-2 text-left bg-gray-300 sm:text-center">{order.branch}</td>
                  <td className="p-2 text-left bg-gray-300 sm:text-center">
                      {
                        new Date(order.createdAt).toLocaleString('en-US', {
                          month: 'short', 
                          day: '2-digit', 
                          hour: '2-digit', 
                          minute: '2-digit', 
                          hour12: true
                        })
                      }
                    </td>               
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminCustomerPage;
