import React from 'react';

const CustomerDetailsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Order Details</h1>

      <h1 className="text-1xl font-bold mt-2">Order #445</h1>
      <p>Customer ID: 45632</p>

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
