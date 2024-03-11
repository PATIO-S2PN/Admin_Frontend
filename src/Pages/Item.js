import React from 'react';

const Item = () => {
  
 
  return (
    <div className="flex">
    

      <div className="p-9 w-full h-screen bg-gray-200">
        <h1 className="text-4xl font-semibold">Items</h1>

        <div class="flex items-center justify-between px-4 py-2 space-x-4">
  
  <div class="flex-1 ">
    <input type="text" placeholder="Search Items" class="w-full px-4 py-2 border rounded-lg" />
  </div>
  
  
  <button class="px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-500">
    Export
  </button>

 
  <button class="flex items-center px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-500">
    Add Item
    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
  </button>
</div>

<table class="w-full mt-10 space-y-5 px-4 table-fixed border-collapse">
  <thead>
    <tr>
      <th class= "text-center">Item</th>
      <th class="text-center">Item Name</th>
      <th class="text-center">Price</th>
      <th class="text-center">Category</th>
      <th class="text-center">Size</th>
      <th class="text-center">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-100 mt-10 align-center space-y-3 odd:bg-gray-200">
      <td class="text-center mt-10"> </td>
      <td class="text-center mt-10">Burger</td>
      <td class="text-center">2$</td>
      <td class="text-center">Snacks</td>
      <td class="text-center">Medium</td>
      <td class="text-center">04/01/2023</td>
    </tr>
    <tr class="bg-gray-100 align-center odd:bg-gray-200">
      <td class="text-center"> </td>
      <td class="text-center">Submarine</td>
      <td class="text-center">3.5$</td>
      <td class="text-center">Music</td>
      <td class="text-center">Large</td>
      <td class="text-center">08/01/2023</td>
    </tr>
    <tr class="bg-gray-100 align-center odd:bg-gray-200">
      <td class="text-center"> </td>
      <td class="text-center">Milkshake</td>
      <td class="text-center">3$</td>
      <td class="text-center">Music</td>
      <td class="text-center">No</td>
      <td class="text-center">01/01/2024</td>
    </tr>
  </tbody>
</table>



      


      </div>
    </div>
  );
}

export default Item;
