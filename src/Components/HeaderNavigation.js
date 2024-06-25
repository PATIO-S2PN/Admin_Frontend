import React from 'react'
import profilepic from '../Assets/Ellipse 6.png'
import bell from '../Assets/Bell-off.svg'
import menuicon from '../Assets/Chevron-down.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { adminBackendUrl } from '../config';

const Header_Navigation = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
    const [profile, setProfile] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuVisible(!isSubmenuVisible);
    };
  
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
      
  return (
    <div className='flex md:h-[80px] bg-white shadow-md items-center justify-between px-[24px] flex-row sm:flex-row h-[60px]'>
      <h4 className='font-inter text-black text-[20px] font-semibold'>Dashboard</h4>
      <div className='flex flex-row items-center justify-between gap-x-5'>
        <img 
            src={bell} 
            alt='bell icon'
            className='h-[24px] w-[24px] cursor-pointer ' 
        />
        <div className='flex flex-row justify-between w-[72px] items-center'>
            <img 
                src={profile.profilePicture ? `${adminBackendUrl}/${profile.profilePicture.replace("\\", "/")}` : profilepic}
                alt='profile'
                className='h-[40px] w-[40px] ' 
            />
             <div className='relative'>
    <img 
        src={menuicon} 
        alt='menu icon'
        className='h-[24px] w-[24px] cursor-pointer' 
        onClick={toggleSubmenu}
    />
    {isSubmenuVisible && (
        <div className="absolute w-auto px-4 mt-2 bg-orange-100 rounded-md shadow-md right-4 submenu">
            {/* Submenu content here */}
            <p className="p-2 hover:text-orange-800">Profile</p>
            <p className="p-2 hover:text-orange-800">Logout</p>
        </div>
    )}
</div>
        </div>
      </div>
    </div>
  )
}

export default Header_Navigation