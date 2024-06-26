import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefContext } from '../Components/ChefContext';
import axios from 'axios';
import { adminBackendUrl } from '../config';

const AddChef = () => {
  const { addChef } = useContext(ChefContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    title: '',
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
    const formDataToSend = new FormData();
    for (const key in chef) {
      formDataToSend.append(key, chef[key]);
    }

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(`${adminBackendUrl}/chef`, formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const newChef = response.data;
      addChef(newChef);
    } catch (error) {
      console.error(error.response.data);
      throw new Error('Failed to add chef');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addnewChef(formData);
    navigate('/chef-details');
  };

  return (
    <div className="w-full max-w-lg p-8 mx-auto mt-10 bg-orange-100 border-4 justify-center  border-orange-900 rounded-md shadow-2xl shadow-slate-500">
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
          <label className="block text-gray-700">Description:</label>
          <input
            type="text"
            name="description"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
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
