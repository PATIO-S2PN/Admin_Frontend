import React, { useState } from 'react';
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import logo from '../Assets/logonew.svg';
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://18.234.113.85/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token); 
        navigate('/dashboard'); 
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
      <div className='flex items-center justify-center flex-1 mb-5 text-3xl text-center '>
        <form className='w-3/5 bg-gray-200 border-4 border-blue-900 rounded-md shadow-2xl p-14 shadow-slate-500' onSubmit={handleLogin}>
          <div className='flex items-center justify-center mb-5'>
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <p className='mb-5 text-xl font-semibold text-center text-black text-opacity-70'>Login to continue</p>
          <div className='flex items-center p-2 mb-5 text-xl bg-white border-2 border-gray-300 rounded-md'>
            <FaUser className='text-2xl text-black' />
            <input
              className='w-full px-5 outline-none'
              type="email"
              placeholder='Ex: john@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex items-center p-2 text-xl bg-white border-2 rounded-md'>
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
            <h3 className='text-xl font-semibold text-black text-opacity-70'>
              <Link to='/forgot-password'>Forgot Password</Link>
            </h3>
          </div>
          <button type='submit' className='w-full px-10 py-1 font-bold text-white duration-300 bg-gray-500 hover:bg-gray-800'>Login</button>
          <div className='flex items-center justify-center gap-10 mt-10'>
            <FaFacebook className='text-2xl duration-200 cursor-pointer hover:text-blue-800' />
            <FaGoogle className='text-2xl duration-200 cursor-pointer hover:text-blue-800' />
            <FaTwitter className='text-2xl duration-200 cursor-pointer hover:text-blue-800' />
          </div>
          <div>
            <Link to="/signup">
              <button className='w-full px-10 py-1 mt-5 text-xl font-semibold text-black duration-300 hover:bg-gray-500'>Create an Account</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
