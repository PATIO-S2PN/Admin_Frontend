import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import logo from '../Assets/logonew.svg';
import { productBackendUrl } from '../config';

function showToast(status, message) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#fff7ed',
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  Toast.fire({
    icon: status,
    title: message
  });
}

const Items = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${productBackendUrl }`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
        showToast('error', 'Failed to fetch items');
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 bg-white sm:p-9">
      <div className="flex items-center justify-between mb-4 sm:mb-8">
        <h1 className="text-4xl font-semibold text-orange-800 font-roboto-regular">Items</h1>
        <img src={logo} alt='logo' className='h-[50px] w-[170px] cursor-pointer' onClick={() => navigate("/dashboard")} />
      </div>
      <div className="flex flex-col items-center justify-between mb-4 space-y-4 sm:flex-row sm:mb-8 sm:space-y-0">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 text-sm text-gray-900 border rounded shadow appearance-none sm:w-1/2 focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg"
        />
        <button
          onClick={() => navigate('/addItem')}
          className="px-4 py-2 font-bold text-white bg-orange-800 rounded hover:bg-orange-700"
        >
          Add Item
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="text-white bg-orange-700">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Food Type</th>
              <th className="px-4 py-2 border-b">Ready Time</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Rating</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2 border-b">{item.name}</td>
                <td className="px-4 py-2 border-b">{item.description}</td>
                <td className="px-4 py-2 border-b">{item.category}</td>
                <td className="px-4 py-2 border-b">{item.foodType}</td>
                <td className="px-4 py-2 border-b">{item.readyTime}</td>
                <td className="px-4 py-2 border-b">{item.price}</td>
                <td className="px-4 py-2 border-b">{item.rating}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => navigate(`/edit-item/${item._id}`)}
                  >
                    Edit
                  </button>
                  {/* Add delete functionality if needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
