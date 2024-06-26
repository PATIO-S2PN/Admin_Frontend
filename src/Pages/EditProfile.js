import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { adminBackendUrl } from '../config';
import axios from 'axios';

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
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${adminBackendUrl}/profile`, {
          headers: {
              'Authorization': `Bearer ${token}`          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // const [userDetailprofile, setProfile] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   role: '',
  //   profilePicture: null
  // });

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Fetch user data from the server
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${adminBackendUrl}/profile`);
  //       const data = await response.json();
  //       if (response.ok) {
  //         setProfile(response.data);
  //         console.log('User details:', profile);
  //       } else {
  //         throw new Error(data.message || 'Failed to fetch profile');
  //       }
  //     } catch (error) {
  //       console.error('Fetch profile error:', error);
  //       showToast('error', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setProfile(prevDetails => ({
        ...prevDetails,
        profilePicture: files[0]
      }));
    } else {
      setProfile(prevDetails => ({
        ...prevDetails,
        [name]: value
      }));
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('email', profile.email);
    formData.append('phone', profile.phone);
    formData.append('role', profile.role);
    if (profile.profilePicture && profile.profilePicture instanceof File) {
      formData.append('profilePicture', profile.profilePicture);
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
    <div className="flex items-center min-h-screen p-4 bg-white md:p-9 justify-left">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleUpdate} className="space-y-6">
          <h1 className="text-4xl font-semibold text-orange-800 md:text-5xl font-roboto-regular">Edit Profile</h1>
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
            <div className="mb-4 w-52 h-52 md:mb-0">
              {profile.profilePicture ? (
                typeof profile.profilePicture === 'string' ? (
                  <img src={profile.profilePicture} alt='Profile' className='object-cover w-full h-full rounded-full' />
                ) : (
                  <img src={URL.createObjectURL(profile.profilePicture)} alt='Profile Preview' className='object-cover w-full h-full rounded-full' />
                )
              ) : (
                <div className='flex items-center justify-center w-full h-full bg-orange-200 rounded-full'>
                  <FaUser className='text-6xl text-gray-500' />
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
            <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="text" placeholder='Your Name' name="name" value={profile.name} onChange={handleChange} required />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 font-roboto'>Email</label>
            <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="email" placeholder='Your Email Address' name="email" value={profile.email} onChange={handleChange} required />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 font-roboto'>Phone</label>
            <input className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="tel" placeholder='Your Phone Number' name="phone" value={profile.phone} onChange={handleChange} required />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 font-roboto'>Role</label>
            <select className='w-full px-4 py-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' name="role" value={profile.role} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <button type='submit' className='w-full px-6 py-3 font-bold text-white bg-orange-800 rounded hover:bg-orange-700 md:w-auto'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
