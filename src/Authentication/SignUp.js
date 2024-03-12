import React from 'react'
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import logo from '../Assets/logonew.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex items-center h-auto bg-gray-100'>
            <div className='text-3xl flex flex-1 items-center justify-center mt-10 mb-2 text-center '>
                <div className='border-4 bg-gray-200 w-4/5 mt-2 border-blue-900 p-14 rounded-md shadow-slate-500 shadow-2xl'>

                    <div className='flex justify-center items-center  '>
                        <img src={logo} alt="Logo" className="h-20" />
                    </div><div className='flex justify-center items-center mb-5'>
                        <p className='text-black mb-5 text-opacity-70 font-semibold text-4xl text-left'>Create Your Account</p>
                    </div>
                    <div className='flex flex-row mb-0'>
                        <label className='text-black text-opacity-70 font-semibold text-xl mb-2'>Name</label>
                    </div>
                    <input className='w-full p-2 border-2 text-xl mb-2 rounded-md border-gray-300 outline-none' type="text" placeholder='Your Name' />

                    <div className='flex flex-row mb-0'>
                        <label className='text-black text-opacity-70 font-semibold text-xl mb-2'>Email</label>
                    </div>
                    <input className='w-full p-2 border-2 mb-2 text-xl rounded-md border-gray-300 outline-none' type="email" placeholder='Your Email Address' />

                    <div className='flex flex-row mb-0'>
                        <label className='text-black text-opacity-70 font-semibold text-xl mb-2'>Position</label>
                    </div>
                    <input className='w-full p-2 border-2 mb-2 text-xl rounded-md border-gray-300 outline-none' type="text" placeholder='Your Position' />

                    <div className='flex flex-row mb-0'>
                        <label className='text-black text-opacity-70 font-semibold text-xl mb-2'>Create Password</label>
                    </div> <div className='flex flex-row mb-0'>
                        <input className='w-1/2 p-2 border-2 mb-2 text-xl rounded-md border-gray-300 outline-none'
                            type='password' placeholder='Enter the Password' />
                    </div>

                    <div className='flex flex-row mb-0'>
                        <label className='text-black text-opacity-70 font-semibold text-xl mb-2'>Confirm Password</label>
                    </div> <div className='flex flex-row mb-0'>
                        <input className='w-1/2 p-2 border-2 mb-5 text-xl rounded-md border-gray-300 outline-none'
                            type='password' placeholder='Confirm Password' />
                    </div>
                    <div>
                        <button className='w-1/2 bg-gray-500 text-white px-10 py-1 font-bold hover:bg-gray-800 duration-300'>
                            Create</button></div>
                    <div className='flex items-center gap-10 justify-center mt-10'>
                        <h2 className='mr-2 text-xl '>SignUp with</h2>
                    </div>
                    <div className='flex items-center gap-10 justify-center mt-10'>
                        <FaFacebook className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
                        <FaGoogle className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
                        <FaTwitter className='text-2xl hover:text-blue-800 duration-200 cursor-pointer' />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default SignUp
