import React, { useState } from 'react';

const AdminCustomerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const orders = [
    { orderNumber: '#1234', total: '$87', customer: 'Supuni Navodya', paymentStatus: 'Complete', orderStatus: 'Done', branch: 'colombo', date: '12/10/2023' },
    { orderNumber: '#1235', total: '$87', customer: 'Supuni Navodya', paymentStatus: 'Canceled', orderStatus: 'Canceled', branch: 'colombo', date: '12/10/2023' },
    { orderNumber: '#1236', total: '$87', customer: 'Supuni Navodya', paymentStatus: 'Pending', orderStatus: 'Delay', branch: 'colombo', date: '12/10/2023' }
  ];

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = orders.filter(order =>
    order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4 font-bold">Order</h1>

      <div className="flex items-center mb-4">
        <div className="flex-1 mr-2">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="bg-gray-300 p-2 border border-gray-300 rounded-l-md w-full"
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
              {filteredOrders.map(order => (
                <tr key={order.orderNumber}>
                  <td className="bg-gray-300 p-2 text-center">{order.orderNumber}</td>
                  <td className="bg-gray-300 p-2 text-center">{order.total}</td>
                  <td className="bg-gray-300 p-2 text-center">{order.customer}</td>
                  <td className="bg-gray-300 p-2 text-center">
                    <button className={`border text-white px-2 py-1 rounded-md ${
                      order.paymentStatus === 'Complete' ? 'bg-blue-800' :
                      order.paymentStatus === 'Canceled' ? 'bg-red-800 text-black' :
                      order.paymentStatus === 'Pending' ? 'bg-yellow-600' : ''
                    }`}>{order.paymentStatus}</button>
                  </td>
                  <td className="bg-gray-300 p-2 text-center">
                    <button className={`border text-white px-2 py-1 rounded-md ${
                      order.orderStatus === 'Done' ? 'bg-blue-800' :
                      order.orderStatus === 'Canceled' ? 'bg-red-800 text-black' :
                      order.orderStatus === 'Delay' ? 'bg-yellow-600' : ''
                    }`}>{order.orderStatus}</button>
                  </td>
                  <td className="bg-gray-300 p-2 text-center">{order.branch}</td>
                  <td className="bg-gray-300 p-2 text-center">{order.date}</td>
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
