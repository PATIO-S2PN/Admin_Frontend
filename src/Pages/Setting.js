import React, { useState } from 'react';
import { CameraIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';


const SettingsPage = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [profileImage, setProfileImage] = useState(''); // Start with an empty string

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the submission logic here
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setProfileImage(newImageUrl);
      // Here you would call your upload function or API call
    }
  };

  // Placeholder for your image upload function
  const uploadImage = async (file) => {
    // Your upload logic here
  };

  return (
    <div className="w-full h-screen p-6 bg-gray-200">
    <h1 className="text-4xl font-semibold">Settings & Privacy</h1>
    <p className="text-2xl font-semibold mt-8 mb-5">Manage your account settings</p>
    <div className="relative">
      <div className="inline-block h-24 w-24 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-300">
        <img src={profileImage || 'src/Assets/default_profile.jpeg'} alt=" " className="h-full w-full object-cover" />
      </div>
      <label htmlFor="image-upload" className="absolute left-20 w-8 h-8 bottom-0 right-0 bg-gray-400 rounded-full p-1 cursor-pointer hover:bg-gray-400">
        <CameraIcon className="h-6 w-6 text-black hover:text-gray-800" />
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
      <div className="sm:w-1/2">
        <label className="block mb-2 text-lg mt-4 font-semibold text-gray-700" htmlFor="name">
          First Name
        </label>
        <input className="w-2/3 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" name="name" type="text"  />
      </div>
      <div className="sm:w-1/2 mt-4 sm:mt-0">
        <label className="block mb-2 text-lg mt-4  font-semibold text-gray-700" htmlFor="lastName">
          Last Name
        </label>
        <input className="w-2/3 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" name="lastName" type="text"  />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
    <div className="sm:w-1/2">
        <label className="block mb-2 text-lg mt-4 font-semibold text-gray-700" htmlFor="email">
          Email
        </label>
        <input className="w-2/3 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" name="email" type="email"  />
      </div>
      <div className="sm:w-1/2 mt-4 sm:mt-0">
        <label className="block mb-2 text-lg mt-4  font-semibold text-gray-700" htmlFor="lastName">
          Phone
        </label>
        <input className="w-2/3 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="phone" name="phone" type="number"  />
      </div>  
      </div>
      <div className='flex mb-5 '>
            <h3 className='text-black  mt-5 text-opacity-70  font-semibold text-lg'>
            <Link to='/reset-password'>Change Password</Link>
            </h3>
          </div>
    <div className='flex container mt-4 w-full sm:w-1/2 flex-col '>
      <form onSubmit={handleSubmit} className="space-y-2  mt-5 mb-5">
        <label htmlFor="restaurantName" className="text-2xl font-semibold ">Restaurant Name</label>
        <div className="flex items-center">
          <div className="flex-grow">
            <input
              id="restaurantName"
              type="text"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </form>
    </div>
    <div className='flex mb-5 '>
            <h3 className='text-black  mt-5 text-opacity-70  font-semibold text-2xl'>
            <Link to='/adminFeedback'>Feedback</Link>
            </h3>
          </div>
  </div>
  
  );
};

export default SettingsPage;
