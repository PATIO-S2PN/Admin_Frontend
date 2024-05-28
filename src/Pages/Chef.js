import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefContext } from '../Components/ChefContext';
import axios from 'axios';

const AddChef = () => {
  const { addChef } = useContext(ChefContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    // experience: '',
    title: '',
    // address: '',
    // contact: '',
    // email: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const addnewChef = async (chef) => {
    const formData = new FormData();
    for (const key in chef) {
      formData.append(key, chef[key]);
    }

    const token = localStorage.getItem('token'); // get token from localStorage

    try {
      const response = await axios.post('http://34.224.26.99/admin/chef', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const newChef = response.data;

      // Update your state with the new chef
      addChef(newChef);
    } catch (error) {
      console.error(error.response.data); // Log the server's response
      throw new Error('Failed to add chef');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addnewChef(formData);
    navigate('/chef-details');
  };

  // ... rest of your component
  return (
    
    <div className="w-full max-w-lg p-8 mx-auto mt-10 bg-orange-100 border-4 border-orange-900 rounded-md shadow-2xl shadow-slate-500">
  <h2 className="mb-6 text-2xl font-bold text-center text-orange-800">Add New Chef</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700">Name:</label>
      <input
        type="text"
        name="name"
        className="w-full px-3 py-2 border rounded-md"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">description:</label>
      <input
        type="text"
        name="description"
        className="w-full px-3 py-2 border rounded-md"
        value={formData.description}
        onChange={handleChange}
        required
      />
    </div>
    {/* <div className="mb-4">
      <label className="block text-gray-700">Years of Experience:</label>
      <input
        type="number"
        name="experience"
        className="w-full px-3 py-2 border rounded-md"
        value={formData.experience}
        onChange={handleChange}
        required
      />
    </div> */}
    <div className="mb-4">
      <label className="block text-gray-700">title:</label>
      <input
        type="text"
        name="title"
        className="w-full px-3 py-2 border rounded-md"
        value={formData.title}
        onChange={handleChange}
      />
    </div>
    {/* <div className="mb-4">
      <label className="block text-gray-700">Address:</label>
      <input
        type="text"
        name="address"
        className="w-full px-3 py-2 border rounded-md"
        value={formData.address}
        onChange={handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Contact Number:</label>
      <input
        type="text"
        name="contact"
        className="w-full px-3 py-2 border rounded-md"
        value={formData.contact}
        onChange={handleChange}
      />
    </div> */}
    {/* <div className="mb-4">
      <label className="block text-gray-700">Email:</label>
      <input
        type="email"
        name="email"
        className="w-full px-3 py-2 border rounded-md"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div> */}
    <div className="mb-4">
      <label className="block text-gray-700">Profile Picture:</label>
      <input
        type="file"
        name="photo"
        className="w-full px-3 py-2 border rounded-md"
        onChange={handleImageChange}
      />
    </div>
    <button type="submit" className="w-full px-4 py-2 text-white bg-orange-800 rounded-md hover:bg-orange-900">
      Add Chef
    </button>
  </form>
</div>
  );
};

export default AddChef;

 

