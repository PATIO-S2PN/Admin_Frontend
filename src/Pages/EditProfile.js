import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { adminBackendUrl } from '../config';

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

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    profilePicture: null
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the server
    const fetchData = async () => {
      try {
        const response = await fetch(`${adminBackendUrl}/profile`);
        const data = await response.json();
        if (response.ok) {
          setUserDetails({
            name: data.name,
            email: data.email,
            phone: data.phone,
            role: data.role,
            profilePicture: data.profilePicture
          });
        } else {
          throw new Error(data.message || 'Failed to fetch profile');
        }
      } catch (error) {
        console.error('Fetch profile error:', error);
        showToast('error', error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setUserDetails(prevDetails => ({
        ...prevDetails,
        profilePicture: files[0]
      }));
    } else {
      setUserDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
      }));
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', userDetails.name);
    formData.append('email', userDetails.email);
    formData.append('phone', userDetails.phone);
    formData.append('role', userDetails.role);
    if (userDetails.profilePicture && userDetails.profilePicture instanceof File) {
      formData.append('profilePicture', userDetails.profilePicture);
    }

    try {
      const response = await fetch(`${adminBackendUrl}/profile`, {
        method: 'PUT',
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        showToast('success', 'Profile updated successfully!');
        navigate('/dashboard');
      } else {
        throw new Error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Update profile error:', error);
      showToast('error', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-9 flex justify-left items-center">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleUpdate} className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-orange-800 font-roboto-regular">Edit Profile</h1>
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
            <div className="w-52 h-52 mb-4 md:mb-0">
              {userDetails.profilePicture ? (
                typeof userDetails.profilePicture === 'string' ? (
                  <img src={userDetails.profilePicture} alt='Profile' className='w-full h-full object-cover rounded-full' />
                ) : (
                  <img src={URL.createObjectURL(userDetails.profilePicture)} alt='Profile Preview' className='w-full h-full object-cover rounded-full' />
                )
              ) : (
                <div className='w-full h-full flex items-center justify-center bg-orange-200 rounded-full'>
                  <FaUser className='text-gray-500 text-6xl' />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center md:items-start">
              <label className='block text-sm font-semibold text-orange-900 font-roboto'>Profile Picture</label>
              <input type='file' name='profilePicture' accept='image/*' onChange={handleChange} className='mt-4' />
            </div>
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 font-roboto'>Name</label>
            <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="text" placeholder='Your Name' name="name" value={userDetails.name} onChange={handleChange} required />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 font-roboto'>Email</label>
            <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="email" placeholder='Your Email Address' name="email" value={userDetails.email} onChange={handleChange} required />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 font-roboto'>Phone</label>
            <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="tel" placeholder='Your Phone Number' name="phone" value={userDetails.phone} onChange={handleChange} required />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 font-roboto'>Role</label>
            <select className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' name="role" value={userDetails.role} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <button type='submit' className='px-6 py-3 font-bold text-white bg-orange-800 rounded hover:bg-orange-700 w-full md:w-auto'>Update</button>
        </form>
    <div className='flex items-center justify-center min-h-screen bg-orange-50'>
      <div className='flex flex-col items-center w-full max-w-5xl p-8 mx-auto space-y-8 bg-orange-100 border border-orange-900 rounded-lg shadow-lg bg-opacity-90 md:p-12 md:flex-row md:items-start md:space-y-0 md:space-x-12'>
        <div className='w-full md:w-2/3'>
          <form onSubmit={handleUpdate} className='space-y-6'>
            <h1 className="text-4xl font-semibold text-orange-800 md:text-5xl font-roboto-regular">Edit Profile</h1>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Name</label>
              <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="text" placeholder='Your Name' name="name" value={userDetails.name} onChange={handleChange} required />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Email</label>
              <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="email" placeholder='Your Email Address' name="email" value={userDetails.email} onChange={handleChange} required />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Phone</label>
              <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="tel" placeholder='Your Phone Number' name="phone" value={userDetails.phone} onChange={handleChange} required />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Role</label>
              <select className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' name="role" value={userDetails.role} onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <button type='submit' className='w-full px-6 py-3 font-bold text-white bg-orange-800 rounded hover:bg-orange-700 md:w-auto'>Update</button>
          </form>
        </div>
        <div className='flex flex-col items-center w-full md:w-1/3'>
          <div className='mb-4 w-52 h-52'>
            {userDetails.profilePicture ? (
              typeof userDetails.profilePicture === 'string' ? (
                <img src={userDetails.profilePicture} alt='Profile' className='object-cover w-full h-full rounded-full' />
              ) : (
                <img src={URL.createObjectURL(userDetails.profilePicture)} alt='Profile Preview' className='object-cover w-full h-full rounded-full' />
              )
            ) : (
              <div className='flex items-center justify-center w-full h-full bg-orange-200 rounded-full'>
                <FaUser className='text-6xl text-gray-500' />
              </div>
            )}
          </div>
          <label className='block text-sm font-semibold text-orange-900 font-roboto'>Profile Picture</label>
          <input type='file' name='profilePicture' accept='image/*' onChange={handleChange} className='mt-4' />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
