import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminCustomerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:8005/orders/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setOrders(response.data);
      console.log(response.data);
    })
    .catch(error => console.error('Error:', error));
  }, []);

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
      <h1 className="mb-4 text-3xl font-bold">Order</h1>

      <div className="flex items-center mb-4">
        <div className="flex-1 mr-2">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="w-full p-2 bg-gray-300 border border-gray-300 rounded-l-md hover:bg-gray-500"
          />
        </div>
      </div>

      <div className="mt-8">
        {filteredOrders.length === 0 ? (
          <p>No matching orders found.</p>
        ) : (
          <table className="w-full border-collapse border-spacing-2">
            <thead>
              <tr>
                <th className="p-2 ">Order</th>
                <th className="p-2 ">Total</th>
                <th className="p-2 ">Customer</th>
                <th className="p-2 ">Payment Status</th>
                <th className="p-2 ">Order Status</th>
                <th className="p-2 ">Branch</th>
                <th className="p-2 ">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr 
                  key={order.orderId}
                  onClick={() => handleRowClick(order)}
                  className="cursor-pointer hover:bg-gray-200"
                >
                  <td className="p-2 text-center bg-gray-300">{order.orderId}</td>
                  <td className="p-2 text-center bg-gray-300">{order.amount}</td>
                  <td className="p-2 text-center bg-gray-300">{order.customerId}</td>
                  <td className="p-2 text-center bg-gray-300">
                    <button className={`border text-white px-2 py-1 rounded-md ${
                      order.paymentStatus === 'Complete' ? 'bg-blue-800' :
                      order.paymentStatus === 'Canceled' ? 'bg-red-800 text-black' :
                      order.paymentStatus === 'Pending' ? 'bg-yellow-600' : ''
                    }`}>{order.paymentStatus}</button>
                  </td>
                  <td className="p-2 text-center bg-gray-300">
                    <button className={`border text-white px-2 py-1 rounded-md ${
                      order.status === 'Done' ? 'bg-green-500' :
                      order.status === 'received' ? 'bg-orange-500' :
                      order.status === 'Canceled' ? 'bg-red-800 text-black' :
                      order.status === 'inprogress' ? 'bg-yellow-600' : ''
                    }`}>{order.status}</button>
                  </td>
                  <td className="p-2 text-center bg-gray-300">{order.branch}</td>
                  <td className="p-2 text-center bg-gray-300">
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
