import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChefContext } from '../Components/ChefContext';

const EditChef = () => {
  const navigate = useNavigate();
  const { state: chef } = useLocation();
  const { updateChef } = useContext(ChefContext);
  const [formData, setFormData] = useState({
    name: chef.name,
    description: chef.description,
    title: chef.title,
    photo: chef.photo
    // Store the current photo URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('title', formData.title);
    if (formData.photo) {
      formDataToSend.append('photo', formData.photo);
    } else {
      formDataToSend.append('currentPhoto', formData.currentPhoto); // Append the current photo URL if no new photo is selected
    }

    const token = localStorage.getItem('token');

    try {
      const response = await axios.put(`http://34.224.26.99/admin/chef/${chef._id}`, formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const updatedChef = response.data;
      updateChef(updatedChef);
      navigate('/chef-details');
    } catch (error) {
      console.error('Failed to update chef:', error);
    }
  };

  return (
    <div className="w-full max-w-lg p-8 mx-auto mt-10 bg-orange-100 border-4 border-orange-900 rounded-md shadow-2xl shadow-slate-500">
      <h2 className="mb-6 text-2xl font-bold text-center text-orange-800">Edit Chef</h2>
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
          {formData.currentPhoto && (
            <img
              src={`http://34.224.26.99/admin/chefs/${formData.currentPhoto}`}
              alt="Current Profile"
              className="w-full h-64 mb-4 object-cover rounded-md"
            />
          )}
          <input
            type="file"
            name="photo"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-orange-800 rounded-md hover:bg-orange-900">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditChef;
