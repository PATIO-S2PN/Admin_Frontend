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
          <table className="w-full bg-orange-700 border-collapse border">
            <thead>
              <tr>
                <th className="p-2 text-white">ID</th>
                <th className="p-2 text-white">Customer</th>
                <th className="p-2 text-white">Email</th>
                <th className="p-2 text-white">Orders</th>
                <th className="p-2 text-white">Total Spent</th>
                <th className="p-2 text-white">City</th>
                <th className="p-2 text-white">Last Orders</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map(customer => (
                <tr key={customer.id}>
                  <td className="bg-orange-50 p-2 text-center">{customer.id}</td>
                  <td className="bg-orange-50 p-2 text-center">{customer.name}</td>
                  <td className="bg-orange-50 p-2 text-center">{customer.email}</td>
                  <td className="bg-orange-50 p-2 text-center">{customer.orders}</td>
                  <td className="bg-orange-50 p-2 text-center">${customer.totalSpent}</td>
                  <td className="bg-orange-50 p-2 text-center">{customer.city}</td>
                  <td className="bg-orange-50 p-2 text-center">{customer.lastOrders}</td>
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
