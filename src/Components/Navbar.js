import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs';
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiAdminFill, RiLoginBoxFill, RiNotificationFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import profilepic from '../Assets/profile2.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const navigate = useNavigate();

  //logout
  const handleLogout = () => {
    localStorage.removeItem('token');
     navigate('/');
     console.log('Logout');
  };


  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? '' : title);
  };

  const Menu = [
    {
      title: "Dashboard",
      icon: <AiFillHome />,
      path: "/",
      submenu: false,
      submenuItems: []
    },
    {
      title: "Admin",
      icon: <RiAdminFill />,
      spacing: true,
      submenu: true,
      submenuItems: [
       
        { title: "Add Item", path: "/addItem" },
        { title: "Items", path: "/item" },
        { title: "Orders", path: "/orders" },
        { title: "Order Details", path: "/odetail" },
        { title: "Create Accounts", path: "/signup" },
        { title: "Chef-Details", path: "/chef-details" },
        { title: "Gallery", path: "/gallery" }

        // Add more submenu items as needed
      ]
    },
    {
      title: "Customer",
      icon: <IoPeople />,
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Home Page", path: "/customer" },
        { title: "Customers", path: "/customer" },
        { title: "Customer Details", path: "/cdetails" },
        
        
        
        
        // Define submenu items for Customer
      ]
    },
    { title: "Notification", icon: <RiNotificationFill />,  path: "/notification",spacing: true  },
    { title: "Payment Settings", icon: <AiFillSetting />,path: "/psetting"},
    { title: "Edit Profile", icon: <AiFillSetting />,path: "/edit-profile"},
    { title: "Logout", icon: <RiLoginBoxFill />,path: "/",  onClick: handleLogout}
  ];

  return (
    <div className={`flex bg-orange-950 h-[100vh] p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative flex-col `} >
      <BsArrowLeftShort
        className={`absolute mt-10 cursor-pointer rounded-full bg-orange-200 p-1 text-3xl text-black border border-black top-9 -right-3 ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      <div className='flex flex-col justify-center'>
        <img src={profilepic}
      className={`w-24 h-24 mx-auto rounded-full ${!open && 'w-8 h-8'}`} alt="profilepic"
      ></img>
       {open && (
        <>
          <h1 className="text-lg text-center font-roboto text-orange-50">Welcome Back!</h1>
          <p className='text-xl font-semibold text-center font-roboto text-orange-50'>Admin</p>
        </>
      )}
      </div>
        
     <ul className="pt-2 mt-10">
  {Menu.map((menu, index) => (
    <React.Fragment key={index}>
      <li
        className={`flex items-center gap-x-4 cursor-pointer p-2.5 text-sm text-orange-100 hover:bg-orange-200 hover:text-black rounded-md ${menu.spacing ? 'mt-3' : 'mt-2'}`}
        onClick={() => {
          if (menu.submenu) {
            toggleSubmenu(menu.title);
          } else if (menu.onClick) {
            menu.onClick();
          }
        }}
      >
        {menu.icon}
        {menu.path && open ? (
          <Link to={menu.path} className="flex-1 text-base font-medium duration-200">
            {menu.title}
          </Link>
        ) : (
          <span className={`flex-1 text-base font-medium duration-200 ${!open && 'hidden'}`}>
            {menu.title}
          </span>
        )}
        {menu.submenu && open && (
          <BsChevronDown className={`${activeSubmenu === menu.title && 'rotate-180'}`} />
        )}
      </li>
      {menu.submenu && activeSubmenu === menu.title && open && (
        <ul className="pl-12 space-y-2">
          {menu.submenuItems.map((submenuItem, submenuIndex) => (
            <li key={submenuIndex} className="flex items-center p-2 px-5 py-0 text-sm text-orange-100 rounded-md cursor-pointer gap-x-4 hover:bg-orange-200 hover:text-black">
              <Link to={submenuItem.path} className="text-sm">
                {submenuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  ))}
</ul>

    </div>
  );
}
  

export default Navbar;