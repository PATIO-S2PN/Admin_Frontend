import React, { useState } from 'react';
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import logo from '../Assets/logonew.svg';
import { Link, useNavigate } from 'react-router-dom'; 
import bg from '../Assets/adminlogin.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8002/login', {
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

  //login is working on enter key press
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      handleLogin(event);
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-fixed bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center flex-1 mb-5 text-3xl text-center'>
        <form className='w-full max-w-lg p-8 mx-4 border-2 border-orange-900 shadow-2xl bg-orange-50 rounded-2xl bg-opacity-70 sm:p-10 md:p-12 lg:p-14 shadow-slate-500' onSubmit={handleLogin}>
          <div className='flex items-center justify-center mb-5'>
            <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-20" />
          </div>
          <p className='mb-5 text-xl text-center text-orange-700 sm:text-2xl font-roboto '>Login to continue</p>
          <div className='flex items-center h-10 p-2 mb-5 text-xl border-2 border-gray-300 rounded-md bg-orange-50'>
            <FaUser className='text-2xl text-black' />
            <input
              className='w-full px-5 text-sm outline-none font-roboto bg-orange-50'
              type="email"
              placeholder='Ex: john@gmail.com'
              value={email}
              onKeyPress={handleKeyPress}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex items-center h-10 p-2 mb-5 text-xl border-2 rounded-md bg-orange-50'>
            <FaLock className='text-2xl text-black' />
            <input
              className='w-full px-5 text-sm outline-none font-roboto bg-orange-50'
              type='password'
              placeholder='Enter the Password'
              value={password}
              onKeyPress={handleKeyPress}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex mb-5'>
            <h3 className='text-sm font-semibold text-blue-700 font-rooto text-opacity-70'>
              <Link to='/forgot-password'>Forgot Password</Link>
            </h3>
          </div>
          <button type='submit' className='w-full px-4 py-2 text-lg font-semibold text-white duration-300 bg-orange-900 rounded-lg hover:bg-gray-800 font-roboto'>Login</button>
          {/* <div className='flex items-center justify-center gap-4 mt-10'>
            <FaFacebook className='text-2xl duration-200 cursor-pointer hover:text-blue-800' />
            <FaGoogle className='text-2xl duration-200 cursor-pointer hover:text-blue-800' />
            <FaTwitter className='text-2xl duration-200 cursor-pointer hover:text-blue-800' />
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login;
