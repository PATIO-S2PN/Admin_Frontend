import React, { useState } from 'react';
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import logo from '../Assets/logonew.svg';
import { Link, useNavigate } from 'react-router-dom';
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
            const response = await fetch('http://34.224.26.99/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userDetails.email,
                    password: userDetails.password,
                    phone: userDetails.position, 
                    role: 'admin', 
                    profilePicture: '' 
                })
            });

            const data = await response.json();
            if (response.ok) {
                showToast('success', 'Account is Created Successfully!');

               // alert('Signup successful, please check your email to verify.');
                navigate('/dashboard'); 
            } else {
                throw new Error(data.message || 'Failed to register');
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert(error.message);
        }
    };

    return (
        <div className='w-full h-screen bg-white p-9'>
            <div className='w-full max-w-md'>
                <form onSubmit={handleSignUp} className='space-y-4'>
                <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-8 right-10' onClick={() => navigate("/dashboard")} />

                <h1 className="text-4xl font-semibold text-orange-800 top-10 font-roboto-regular">Create New Account</h1>
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 font-roboto'>Name</label>
                        <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="text" placeholder='Your Name' name="name" value={userDetails.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 font-roboto'>Email</label>
                        <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="email" placeholder='Your Email Address' name="email" value={userDetails.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 font-roboto'>Position</label>
                        <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type="text" placeholder='Your Position' name="position" value={userDetails.position} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 font-roboto'>Create Password</label>
                        <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type='password' placeholder='Enter the Password' name="password" value={userDetails.password} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 font-roboto'>Confirm Password</label>
                        <input className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline font-roboto bg-orange-50 hover:shadow-lg' type='password' placeholder='Confirm Password' name="confirmPassword" value={userDetails.confirmPassword} onChange={handleChange} />
                    </div>
                    <button type='submit' className='px-4 py-2 font-bold text-white bg-orange-800 rounded hover:bg-orange-700 w-[200px]'>Create</button>
                    
                    
                </form>
                
            </div>
        </div>
    );
}

export default SignUp;
