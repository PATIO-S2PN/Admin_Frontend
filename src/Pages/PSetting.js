import React, { useState } from 'react';


const PaymentSettings = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [tax, setTax] = useState(0);
  const [discounts, setDiscounts] = useState(0);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Function to fetch transactions and payouts data based on date range
  const fetchTransactionsAndPayouts = () => {
    // Implement fetching transactions and payouts data from backend API based on startDate and endDate
    // Update transactions and payouts state
    // Example:
    // fetch(`/api/transactions?startDate=${startDate}&endDate=${endDate}`)
    //   .then(response => response.json())
    //   .then(data => setTransactions(data));
    // fetch(`/api/payouts?startDate=${startDate}&endDate=${endDate}`)
    //   .then(response => response.json())
    //   .then(data => setPayouts(data));
  };

  // Function to calculate total revenue, tax, and discounts based on fetched transactions data
  const calculateRevenueTaxDiscounts = () => {
    // Implement calculation based on transactions data
    // Example:
    // const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    // setTotalRevenue(total);
    // const taxAmount = transactions.reduce((acc, transaction) => acc + transaction.tax, 0);
    // setTax(taxAmount);
    // const discountsAmount = transactions.reduce((acc, transaction) => acc + transaction.discount, 0);
    // setDiscounts(discountsAmount);
  };

  // Function to handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Function to add a new payment method
  const addPaymentMethod = () => {
    if (selectedPaymentMethod && !paymentMethods.includes(selectedPaymentMethod)) {
      setPaymentMethods([...paymentMethods, selectedPaymentMethod]);
    }
  };

  // Function to remove a payment method
  const removePaymentMethod = (method) => {
    setPaymentMethods(paymentMethods.filter(item => item !== method));
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-9">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-orange-800 mb-4 md:mb-0">Payment Settings</h1>
       
      </div>
      <div className="mb-8 mt-8">
        <label className="block text-xl md:text-3xl font-bold mt-8 mb-8 text-orange-700">Select Date Range:</label>
        <div className="flex flex-col md:flex-row">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mr-0 md:mr-2 mb-4 md:mb-0 p-2 border border-gray-300 rounded bg-orange-100 text-black w-full md:w-auto"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-orange-100 text-black w-full md:w-auto"
          />
          <button onClick={fetchTransactionsAndPayouts} className="ml-0 md:ml-2 mt-4 md:mt-0 bg-orange-300 text-black px-4 py-2 rounded">Get Data</button>
        </div>
      </div>
      <div className="mb-4 text-lg md:text-xl">
        <p>Total Revenue: {totalRevenue}</p>
        <p>Tax: {tax}</p>
        <p>Discounts: {discounts}</p>
      </div>
      <div className="mb-8">
        <label className="block mt-8 mb-8 text-xl md:text-3xl font-bold text-orange-700">Configure Payment Methods Accepted:</label>
        <div className="flex flex-col md:flex-row">
          <select
            value={selectedPaymentMethod}
            onChange={(e) => handlePaymentMethodSelect(e.target.value)}
            className="mr-0 md:mr-2 mb-4 md:mb-0 p-2 border border-gray-300 bg-orange-100 rounded w-full md:w-auto"
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Pickup">Cash on Pickup</option>
          </select>
          <button onClick={addPaymentMethod} className="bg-blue-700 text-black bg-orange-300 px-4 py-2 rounded w-full md:w-auto">Add Payment Method</button>
        </div>
        <div className="mt-4 text-lg md:text-xl">
          <p>Payment Methods:</p>
          <ul>
            {paymentMethods.map(method => (
              <li key={method} className="flex items-center">
                <span>{method}</span>
                <button onClick={() => removePaymentMethod(method)} className="ml-2 text-xl text-red-500">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {/* Display transactions and payouts data */}
        {/* Example:
        <div>
          <h2>Transactions</h2>
          <ul>
            {transactions.map(transaction => (
              <li key={transaction.id}>{transaction.description}: {transaction.amount}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Payouts</h2>
          <ul>
            {payouts.map(payout => (
              <li key={payout.id}>{payout.date}: {payout.amount}</li>
            ))}
          </ul>
        </div>
        */}
      </div>
    </div>
  );
};

export default PaymentSettings;
