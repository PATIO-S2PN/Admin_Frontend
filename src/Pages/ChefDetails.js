import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { ChefContext } from '../Components/ChefContext';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import img from '../Assets/chef4.png';

const ChefDetails = () => {
  //const { chefs } = useContext(ChefContext);
  const navigate = useNavigate();
  //const { setChefs } = useContext(ChefContext);
  const [chefs, setChefs] = useState([]);


  useEffect(() => {
    getAllChefs();
  }, []);
  
  const getAllChefs = () => {
    const token = localStorage.getItem('token'); // get token from localStorage
  
    axios.get('http://34.224.26.99/admin/chefs', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
  
      if (Array.isArray(response.data)) {
        setChefs(response.data);
      } else {
        setChefs([]);
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  
  return (
    <div className="w-full h-auto bg-white p-9">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-orange-800">Chef Details</h1>
        
        {/* Search Input - Adjust for mobile */}
        <div className="w-1/2 basis-full md:basis-auto md:flex md:items-center">
          <div className="relative w-full">
            <BsSearch className="absolute text-lg text-black transform -translate-y-1/2 cursor-pointer left-3 top-1/2" />
            <input type="text" placeholder="Search " className="w-full px-4 py-2 pl-10 bg-orange-200 border rounded-lg" />
          </div>
        </div>
        <button 
          onClick={() => navigate('/chef')} 
          className="px-8 py-2 text-white bg-orange-900 rounded-md hover:bg-orange-600">
          Add Chef
        </button>
      </div>
      {chefs.length > 0 ? (
        chefs.map((chef, _id) => {
          const imageUrl = chef.image ? URL.createObjectURL(chef.image) : null;
          return (
            <div key={_id} className="max-w-lg p-8 mx-auto mt-10 bg-orange-100 rounded-lg shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-center">{chef.name}</h2>
              {imageUrl && (
                <div className="mb-4">
                  <img src={imageUrl} alt="Chef Profile" className="object-cover w-full h-48 rounded-md" />
                </div>
              )}
              <div className="mb-4">
                <strong>Name:</strong> {chef.name}
              </div>
              {/* <div className="mb-4">
                <strong>Specialty:</strong> {chef.specialty}
              </div> */}
              {/* <div className="mb-4">
                <strong>Years of Experience:</strong> {chef.experience}
              </div> */}
              <div className="mb-4">
                <strong>Description:</strong> {chef.description}
              </div>
              <div className="mb-4">
                <strong>Title:</strong> {chef.title}
              </div>
              {/* <div className="mb-4">
                <strong>Contact Number:</strong> {chef.contact}
              </div> */}
              <div className="mb-4">
                <img
                  src={
                    chef.photo ? `http://34.224.26.99/admin/${chef.photo}` : img} 
                  className="object-cover object-center w-full h-full"
                  alt={chef.name}
                />              
              </div>
            </div>
          );
        })
      ) : (
        <div className="mt-10 text-xl text-center">No chef details available. Please add a chef first.</div>
      )}
    </div>
  );
};

export default ChefDetails;
