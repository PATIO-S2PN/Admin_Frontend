import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefContext } from '../Components/ChefContext';

const AddChef = () => {
  const { addChef } = useContext(ChefContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    experience: '',
    workplace: '',
    address: '',
    contact: '',
    email: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addChef(formData);
    navigate('/chef-details');
  };

  return (
    
        <div className="max-w-lg mx-auto p-8 w-full bg-orange-100 border-4 border-orange-900 rounded-md shadow-2xl p-14 shadow-slate-500 mt-10">
      <h2 className="text-2xl text-orange-800 font-bold mb-6 text-center">Add New Chef</h2>
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
          <label className="block text-gray-700">Specialty:</label>
          <input
            type="text"
            name="specialty"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Years of Experience:</label>
          <input
            type="number"
            name="experience"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Workplace:</label>
          <input
            type="text"
            name="workplace"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.workplace}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture:</label>
          <input
            type="file"
            name="image"
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-orange-800 text-white rounded-md hover:bg-orange-900">
          Add Chef
        </button>
      </form>
    </div>
    
  );
};

export default AddChef;
