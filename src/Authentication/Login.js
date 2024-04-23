import React, { useState } from 'react';
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import logo from '../Assets/logonew.svg';
import { Link, useNavigate } from 'react-router-dom'; // Update this line

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated to useNavigate

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/admin/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token); // Save the token to local storage (or handle it as needed)
        navigate('/dashboard'); // Updated to use navigate
      } else {
        throw new Error(data.message || 'Failed to login');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(error.message);
    }
  };


  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-3xl flex flex-1 items-center justify-center mb-5 text-center '>
        <form className='border-4 bg-gray-200 w-3/5 border-blue-900 p-14 rounded-md shadow-slate-500 shadow-2xl' onSubmit={handleLogin}>
          <div className='flex justify-center items-center mb-5'>
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <p className='text-black mb-5 text-opacity-70 font-semibold text-xl text-center'>Login to continue</p>
          <div className='flex items-center mb-5 text-xl bg-white p-2 border-2 rounded-md border-gray-300'>
            <FaUser className='text-2xl text-black' />
            <input
              className='w-full px-5 outline-none'
              type="email"
              placeholder='Ex: john@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex items-center  text-xl bg-white p-2 border-2 rounded-md'>
            <FaLock className='text-2xl text-black' />
            <input
              className='w-full px-5 outline-none'
              type='password'
              placeholder='Enter the Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex mb-5'>
            <h3 className='text-black text-opacity-70  font-semibold text-xl'>
              <Link to='/forgot-password'>Forgot Password</Link>
            </h3>
          </div>
          <button type='submit' className='w-full bg-gray-500 text-white px-10 py-1 font-bold hover:bg-gray-800 duration-300'>Login</button>
          <div className='flex items-center gap-10 justify-center mt-10'>
            <FaFacebook className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
            <FaGoogle className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
            <FaTwitter className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
          </div>
          <div>
            <Link to="/signup">
              <button className='w-full mt-5  text-black px-10 py-1 text-xl font-semibold hover:bg-gray-500 duration-300'>Create an Account</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
