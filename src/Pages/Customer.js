import React, { useState } from 'react';

const Customer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample customer data (replace with your actual data)
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 25, totalSpent: 4253, city: 'Colombo', lastOrders: '12/10/2023' },
    { id: 2, name: 'Peter John', email: 'peter@example.com', orders: 20, totalSpent: 3500, city: 'Colombo', lastOrders: '11/05/2023' },
    // Add more customers as needed
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.id.toString().includes(searchQuery)
  );

  return (
    <div className="p-4">
      <div className="flex justify-between mt-4 items-center mb-4">
        <h1 className="text-3xl text-orange-800 font-bold">Customers</h1>
      </div>

      <div className="flex items-center mb-4">
        <div className="w-full md:w-1/2 mr-2">
          <input
            type="text"
            placeholder="Search customers by ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-orange-100 p-2 border border-gray-500 rounded-md w-full"
          />
        </div>
      </div>

      <div className="mt-8 overflow-x-auto">
        {filteredCustomers.length === 0 ? (
          <p>No customers found with the provided ID.</p>
        ) : (
          <table className="w-full bg-white border border-collapse border-gray-200">
            <thead>
              <tr className="bg-orange-700 text-white">
                <th className="p-2">ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Email</th>
                <th className="p-2">Orders</th>
                <th className="p-2">Total Spent</th>
                <th className="p-2">City</th>
                <th className="p-2">Last Orders</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map(customer => (
                <tr key={customer.id} className="hover:bg-orange-200">
                  <td className="p-2 border">{customer.id}</td>
                  <td className="p-2 border">{customer.name}</td>
                  <td className="p-2 border">{customer.email}</td>
                  <td className="p-2 border">{customer.orders}</td>
                  <td className="p-2 border">${customer.totalSpent}</td>
                  <td className="p-2 border">{customer.city}</td>
                  <td className="p-2 border">{customer.lastOrders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Customer;
