import React, { useState } from 'react';

const Customer= () => {
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
      <h1 className="text-3xl mb-4 font-bold">Customer</h1>

      <div className="flex items-center mb-4">
        <div className="flex-1 mr-2">
          <input
            type="text"
            placeholder="Search customers by ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-300 p-2 border border-gray-300 rounded-l-md w-full"
          />
        </div>
       
      </div>

      <div className="mt-8">
        {filteredCustomers.length === 0 ? (
          <p>No customers found with the provided ID.</p>
        ) : (
          <table className="w-full border-collapse border">
            <thead>
              <tr>
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
                <tr key={customer.id}>
                  <td className="bg-gray-300 p-2 text-center">{customer.id}</td>
                  <td className="bg-gray-300 p-2 text-center">{customer.name}</td>
                  <td className="bg-gray-300 p-2 text-center">{customer.email}</td>
                  <td className="bg-gray-300 p-2 text-center">{customer.orders}</td>
                  <td className="bg-gray-300 p-2 text-center">${customer.totalSpent}</td>
                  <td className="bg-gray-300 p-2 text-center">{customer.city}</td>
                  <td className="bg-gray-300 p-2 text-center">{customer.lastOrders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Customer
