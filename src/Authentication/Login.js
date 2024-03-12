import React from 'react'
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import logo from '../Assets/logonew.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-3xl flex flex-1 items-center justify-center mb-5 text-center '>
        <div className='border-4 bg-gray-200 w-3/5 border-blue-900 p-14 rounded-md shadow-slate-500 shadow-2xl'>

          <div className='flex justify-center items-center mb-5'>
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <p className='text-black mb-5 text-opacity-70 font-semibold text-xl text-center'>Login to continue</p>

          <div className='flex items-center mb-5 text-xl bg-white p-2 border-2 rounded-md border-gray-300'>
            <FaUser className='text-2xl text-black' />
            <input className='w-full px-5 outline-none' type="email" placeholder='Ex: john@gmail.com' />
          </div>
          <div className='flex items-center  text-xl bg-white p-2 border-2 rounded-md'>
            <FaLock className='text-2xl text-black' />
            <input className='w-full px-5 outline-none'
              type='password' placeholder='Enter the Password' />
          </div>
          <div className='flex mb-5'>
            <h3 className='text-black text-opacity-70  font-semibold text-xl'>
            <Link to='/forgot-password'>Forgot Password</Link>
            </h3>
          </div>
          <div>
            <button className='w-full bg-gray-500 text-white px-10 py-1 font-bold hover:bg-gray-800 duration-300'>
              Login</button></div>
          <div className='flex items-center gap-10 justify-center mt-10'>
            <h2 className='mr-2 text-xl '>Login with</h2>
          </div>
          <div className='flex items-center gap-10 justify-center mt-10'>
            <FaFacebook className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
            <FaGoogle className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
            <FaTwitter className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
          </div>
          <div>
            <Link to="/signup">
            <button className='w-full mt-5  text-black px-10 py-1 text-xl font-semibold hover:bg-gray-500 duration-300'>
              Create an Account</button>
              </Link>
              </div>
          <div>
         
          </div>
        </div>
        </div>
    </div>
  )
}

export default Login
