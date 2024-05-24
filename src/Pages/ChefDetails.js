import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { ChefContext } from '../Components/ChefContext';

const ChefDetails = () => {
  const { chefs } = useContext(ChefContext);
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto bg-white p-9">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Chef Details</h1>
        
        {/* Search Input - Adjust for mobile */}
        <div className="w-1/2 basis-full md:basis-auto md:flex md:items-center">
          <div className="relative w-full">
            <BsSearch className="text-black text-lg absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
            <input type="text" placeholder="Search " className="w-full pl-10 py-2 px-4 bg-gray-100 border rounded-lg" />
          </div>
        </div>
        <button 
          onClick={() => navigate('/chef')} 
          className="py-2 px-8 bg-blue-500 text-white rounded-md hover:bg-blue-800">
          Add Chef
        </button>
      </div>
      {chefs.length > 0 ? (
        chefs.map((chef, index) => {
          const imageUrl = chef.image ? URL.createObjectURL(chef.image) : null;
          return (
            <div key={index} className="max-w-lg mx-auto p-8 bg-gray-200 shadow-md rounded-lg mt-10">
              <h2 className="text-2xl font-bold mb-6 text-center">{chef.name}</h2>
              {imageUrl && (
                <div className="mb-4">
                  <img src={imageUrl} alt="Chef Profile" className="w-full h-48 object-cover rounded-md" />
                </div>
              )}
              <div className="mb-4">
                <strong>Name:</strong> {chef.name}
              </div>
              <div className="mb-4">
                <strong>Specialty:</strong> {chef.specialty}
              </div>
              <div className="mb-4">
                <strong>Years of Experience:</strong> {chef.experience}
              </div>
              <div className="mb-4">
                <strong>Workplace:</strong> {chef.workplace}
              </div>
              <div className="mb-4">
                <strong>Address:</strong> {chef.address}
              </div>
              <div className="mb-4">
                <strong>Contact Number:</strong> {chef.contact}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {chef.email}
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center mt-10 text-xl">No chef details available. Please add a chef first.</div>
      )}
    </div>
  );
};

export default ChefDetails;
