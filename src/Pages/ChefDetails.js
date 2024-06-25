import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import axios from 'axios';
import img from '../Assets/chef4.png';
import { ChefContext } from '../Components/ChefContext';
import logo from '../Assets/logonew.svg';

const ChefDetails = () => {
  const navigate = useNavigate();
  const [chefs, setChefs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const { setChefs: setGlobalChefs } = useContext(ChefContext);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    getAllChefs();
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const getAllChefs = () => {
    const token = localStorage.getItem('token');

    axios.get('http://34.224.26.99/admin/chefs', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);

      if (Array.isArray(response.data)) {
        const sortedChefs = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setChefs(sortedChefs);
        setGlobalChefs(sortedChefs);
      } else {
        setChefs([]);
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  const handleEdit = (chef) => {
    navigate('/edit-chef', { state: chef });
  };

  const handleDelete = async (chefId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://34.224.26.99/admin/chef/${chefId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setChefs(chefs.filter(chef => chef._id !== chefId));
      setGlobalChefs(chefs.filter(chef => chef._id !== chefId));
    } catch (error) {
      console.error('Failed to delete chef:', error);
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
      setDropdownOpen(null);
    }
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="w-full h-auto bg-white p-9">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-semibold text-orange-800">Chef Details</h1>
        <img src={logo} alt='logo' className='h-[50px] w-[170px] cursor-pointer' onClick={() => navigate("/dashboard")} />
      </div>
      <div className="flex items-center justify-between mb-4">
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
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {chefs.map((chef, index) => (
            <div key={chef._id} className="relative p-4 bg-orange-100 rounded-lg shadow-md">
              <div className="absolute top-4 right-4" ref={el => dropdownRefs.current[index] = el}>
                <BsThreeDotsVertical
                  className="cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); toggleDropdown(index); }}
                />
                {dropdownOpen === index && (
                  <div className="absolute right-0 z-10 w-40 py-2 mt-2 bg-white rounded-lg shadow-xl">
                    <button
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleEdit(chef)}
                    >
                      Edit
                    </button>
                    <button
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDelete(chef._id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <h2 className="mb-4 text-2xl font-bold text-center">{chef.name}</h2>
              {chef.photo && (
                <div className="mb-4">
                  <img
                    src={`http://34.224.26.99/admin/chefs/${chef.photo}`}
                    alt="Chef Profile"
                    className="object-cover w-full h-64 rounded-md"
                  />
                </div>
              )}
              <div className="mb-2">
                <strong>Name:</strong> {chef.name}
              </div>
              <div className="mb-2">
                <strong>Specialty:</strong> {chef.description}
              </div>
              <div className="mb-2">
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
          ))}
        </div>
      ) : (
        <div className="mt-10 text-xl text-center">No chef details available. Please add a chef first.</div>
      )}
    </div>
  );
};

export default ChefDetails;
