import React from 'react';

const CustomerDetailsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Customer Details</h1>

      
      <div className="flex mb-4">
        
        <button className="bg-gray-300 text-black px-4 py-2 mr-2">Reset Password</button>
        <button className="bg-gray-300 text-red-600 px-4 py-2">Delete Account</button>
      </div>

      

      
      <div className="flex">
        <div className="bg-gray-300 text-center w-1/2 p-4 mr-4">
          <div className="font-bold">Ravi Dias</div>
          <div>Joined 2 months ago</div>
        </div>

        
        <div className="bg-gray-300 w-1/2 p-4">
          <div className="font-bold text-left">Difficult Address</div>
          
          <div className="text-left font-bold">Addres</div>
            <div className="ml-9 text-left">Flower rode</div>
            <div className="ml-9 text-left">colombo 08</div>

          <div className="text-left font-bold">Email</div>
            <div className="ml-9 text-left">ravi@gmail.com</div>

          <div className="text-left font-bold ">Telephone</div>
            <div className="ml-9 text-left">+94752458125</div>
      
          </div>
        </div>

        <div className="flex mb-4">
        
      
      </div>

      
      
      <h1 className="text-1xl font-bold mb-4">Customer Note</h1>

      <div className="flex">
        <div className="bg-gray-300 text-center w-3/4 p-4 mr-4">         
        </div>
       
        <div className="bg-gray-300 w-1/5 p-4 ml-auto">   
          <div className="text-center font-bold">Add Note</div>
          </div>
        </div>

      <div>      
    </div> 


    <div className="mt-7">
        <table className="w-full border-collapse border ">
          <thead>
            <tr>
              <th className=" p-2">Order</th>
              <th className=" p-2">Total</th>
              <th className=" p-2">Payment Status</th>
              <th className=" p-2">Order Status</th>
              <th className=" p-2">Branch</th>
              <th className=" p-2">Date</th>
              
            </tr>
          </thead>
          <tbody>
            
            <tr >
              <td className="bg-gray-300 p-2 text-center">#123</td>
              <td className="bg-gray-300 p-2 text-center">$87</td>
              <td className="bg-gray-300 p-2 text-center">
                <button className="bg-blue-800 border border-white text-white px-2 py-1 rounded-md">Complete</button></td>
              <td className="bg-gray-300 p-2 text-center">
                <button className="bg-blue-800 border border-white text-white px-2 py-1 rounded-md">Done</button></td>
              <td className="bg-gray-300 p-2 text-center">Colombo</td>
              <td className="bg-gray-300 p-2 text-center">12/10/2023</td>
            
            </tr>

            <tr>
              <td className="bg-gray-300 p-2 text-center">#123</td>
              <td className="bg-gray-300 p-2 text-center">$87</td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-blue-800 border border-white text-white px-2 py-1 rounded-md">Complete</button></td>
              <td className="bg-gray-300 p-2 text-center">
              <button className="bg-blue-800 border border-white text-white px-2 py-1 rounded-md">Done</button></td>
              <td className="bg-gray-300 p-2 text-center">Colombo</td>
              <td className="bg-gray-300 p-2 text-center">12/10/2023</td>
            
            </tr>
            
          </tbody>
        </table>
      </div>

  </div>
    
  );
};

export default CustomerDetailsPage;
