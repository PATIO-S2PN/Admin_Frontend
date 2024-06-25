import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    confirmPassword: '',
    profilePicture: null
  });

  const navigate = useNavigate();

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

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      showToast('error', 'Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('name', userDetails.name);
    formData.append('email', userDetails.email);
    formData.append('phone', userDetails.phone);
    formData.append('password', userDetails.password);
    formData.append('role', userDetails.role);
    if (userDetails.profilePicture) {
      formData.append('profilePicture', userDetails.profilePicture);
    }

    try {
      const response = await fetch('http://localhost:8002/signup', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        showToast('success', 'Account is Created Successfully!');
        navigate('/dashboard');
      } else {
        throw new Error(data.message || 'Failed to register');
      }
    } catch (error) {
      console.error('Signup error:', error);
      showToast('error', error.message);
    }
  };

  return (
    <div className='flex items-center justify-center w-full h-screen bg-center bg-cover ' >
      <div className='flex flex-col items-center w-full max-w-4xl p-6 mx-auto space-y-6 bg-orange-100 border border-orange-900 rounded-lg shadow-lg bg-opacity-90 md:flex-row md:items-start md:space-y-0 md:space-x-8'>
        <div className='w-full max-w-md'>
          <form onSubmit={handleSignUp} className='space-y-4'>
            <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-8 right-10 cursor-pointer' onClick={() => navigate("/dashboard")} />

            <h1 className="text-3xl font-semibold text-orange-800 top-10 font-roboto-regular">Create a  New Account</h1>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Name</label>
              <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="text" placeholder='Your Name' name="name" value={userDetails.name} onChange={handleChange} required />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Email</label>
              <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="email" placeholder='Your Email Address' name="email" value={userDetails.email} onChange={handleChange} required />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Phone</label>
              <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="tel" placeholder='Your Phone Number' name="phone" value={userDetails.phone} onChange={handleChange} required />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Role</label>
              <select className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' name="role" value={userDetails.role} onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Create Password</label>
              <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type='password' placeholder='Enter the Password' name="password" value={userDetails.password} onChange={handleChange} required />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-900 font-roboto'>Confirm Password</label>
              <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type='password' placeholder='Confirm Password' name="confirmPassword" value={userDetails.confirmPassword} onChange={handleChange} required />
            </div>
            <button type='submit' className='w-full px-4 py-2 font-bold text-white bg-orange-800 rounded hover:bg-orange-700 md:w-auto'>Create</button>
          </form>
        </div>
        <div className='flex flex-col items-center w-full max-w-xs'>
          <div className='w-48 h-48 mb-4'>
            {userDetails.profilePicture ? (
              <img src={URL.createObjectURL(userDetails.profilePicture)} alt='Profile Preview' className='object-cover w-full h-full rounded-full' />
            ) : (
              <div className='flex items-center justify-center w-full h-full bg-orange-200 rounded-full'>
                <FaUser className='text-6xl text-gray-500' />
              </div>
            )}
          </div>
          <label className='block text-sm font-semibold text-orange-900 font-roboto'>Profile Picture</label>
          <input type='file' name='profilePicture' accept='image/*' onChange={handleChange} className='mt-2' />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
