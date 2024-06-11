import React from 'react';
import logo from '../Assets/logonew.svg';
// import customerImage from '../Assets/customerImage.jpg'; // Add the path to your customer image

const CustomerDetailsPage = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mt-4 mb-4">
        <h1 className="text-3xl text-orange-800 font-bold mb-4">Customer Details</h1>
        <img src={logo} alt="Logo" className="h-[50px] w-[170px] cursor-pointer" />
      </div>
      
      <div className="flex mb-4">
        <button className="bg-orange-100 border border-orange-800 hover:bg-orange-200 font-bold text-black px-4 py-2 mr-2">Reset Password</button>
        <button className="bg-red-800 border border-orange-800 hover:bg-orange-200 font-bold text-white px-4 py-2">Delete Account</button>
      </div>

      <div className="flex justify-center mb-7">
        <div className="bg-orange-100 border border-orange-800 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <div className="flex flex-col lg:flex-row">
            <div className="flex items-center lg:w-1/2 w-full p-4">
              {/* <img src={customerImage} alt="Customer" className="w-48 h-48 rounded-full mr-4" /> */}
              <div>
                <div className="font-bold text-3xl">Ravi Dias</div>
                <div>Joined 2 months ago</div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full p-4">
              <div className="font-bold text-left mb-2">Current Address</div>
              <div className="mb-4">
                <div className="text-left font-bold">Residence</div>
                <div className="ml-4 text-left">Flower Road</div>
                <div className="ml-4 text-left">Colombo 08</div>
              </div>
              <div className="mb-4">
                <div className="text-left font-bold">Email</div>
                <div className="ml-4 text-left">ravi@gmail.com</div>
              </div>
              <div className="mb-4">
                <div className="text-left font-bold">Telephone</div>
                <div className="ml-4 text-left">+94752458125</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-2xl text-orange-800 font-bold mb-4">Order History</h1>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="p-2 bg-orange-700 text-white border">Order</th>
              <th className="p-2 bg-orange-700 text-white border">Total</th>
              <th className="p-2 bg-orange-700 text-white border">Payment Status</th>
              <th className="p-2 bg-orange-700 text-white border">Order Status</th>
              <th className="p-2 bg-orange-700 text-white border">Branch</th>
              <th className="p-2 bg-orange-700 text-white border">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-orange-200 p-2 text-center border">#123</td>
              <td className="bg-orange-200 p-2 text-center border">$87</td>
              <td className="bg-orange-200 p-2 text-center border">
                <button className="bg-green-700 border border-white text-white px-2 py-1 rounded-md">Complete</button>
              </td>
              <td className="bg-orange-200 p-2 text-center border">
                <button className="bg-yellow-700 border border-white text-white px-2 py-1 rounded-md">Done</button>
              </td>
              <td className="bg-orange-200 p-2 text-center border">Colombo</td>
              <td className="bg-orange-200 p-2 text-center border">12/10/2023</td>
            </tr>

            <tr>
              <td className="bg-orange-200 p-2 text-center border">#123</td>
              <td className="bg-orange-200 p-2 text-center border">$87</td>
              <td className="bg-orange-200 p-2 text-center border">
                <button className="bg-green-700 border border-white text-white px-2 py-1 rounded-md">Complete</button>
              </td>
              <td className="bg-orange-200 p-2 text-center border">
                <button className="bg-yellow-700 border border-white text-white px-2 py-1 rounded-md">Done</button>
              </td>
              <td className="bg-orange-200 p-2 text-center border">Colombo</td>
              <td className="bg-orange-200 p-2 text-center border">12/10/2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
