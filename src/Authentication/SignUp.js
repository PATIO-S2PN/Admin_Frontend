import React, { useState } from 'react';
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import logo from '../Assets/logonew.svg';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        position: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (userDetails.password !== userDetails.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://18.234.113.85/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userDetails.email,
                    password: userDetails.password,
                    phone: userDetails.position, // Assuming 'position' field as 'phone' for demonstration
                    role: 'admin', // Assuming role, adjust as necessary
                    profilePicture: '' // Assuming no picture, adjust as necessary
                })
            });

            const data = await response.json();
            if (response.ok) {
                alert('Signup successful, please check your email to verify.');
                navigate('/login'); // Navigate to login page or dashboard as needed
            } else {
                throw new Error(data.message || 'Failed to register');
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-10 bg-gray-200 rounded-lg shadow-lg'>
                <form onSubmit={handleSignUp} className='space-y-4'>
                    <div className='flex justify-center'>
                        <img src={logo} alt="LuxeDine Logo" className="h-20 mb-4" />
                    </div>
                    <h2 className='text-2xl font-bold text-center text-gray-700'>Create Your Account</h2>
                    <div>
                        <label className='block mb-2 text-sm font-bold text-gray-700'>Name</label>
                        <input className='w-full p-2 text-lg border rounded-md outline-none' type="text" placeholder='Your Name' name="name" value={userDetails.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-bold text-gray-700'>Email</label>
                        <input className='w-full p-2 text-lg border rounded-md outline-none' type="email" placeholder='Your Email Address' name="email" value={userDetails.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-bold text-gray-700'>Position</label>
                        <input className='w-full p-2 text-lg border rounded-md outline-none' type="text" placeholder='Your Position' name="position" value={userDetails.position} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-bold text-gray-700'>Create Password</label>
                        <input className='w-full p-2 text-lg border rounded-md outline-none' type='password' placeholder='Enter the Password' name="password" value={userDetails.password} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-bold text-gray-700'>Confirm Password</label>
                        <input className='w-full p-2 text-lg border rounded-md outline-none' type='password' placeholder='Confirm Password' name="confirmPassword" value={userDetails.confirmPassword} onChange={handleChange} />
                    </div>
                    <button type='submit' className='w-full p-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600'>Create</button>
                    <div className='text-center'>
                        <span className='text-sm text-gray-600'>SignUp with</span>
                    </div>
                    <div className='flex justify-center space-x-4 text-2xl'>
                        <FaFacebook className='cursor-pointer hover:text-blue-600' />
                        <FaGoogle className='cursor-pointer hover:text-red-600' />
                        <FaTwitter className='cursor-pointer hover:text-blue-400' />
                    </div>
                </form>
                <div className='mt-4 text-center'>
                    <p className='text-sm text-gray-600'>Already have an account? <Link to="/login" className='font-bold text-blue-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
