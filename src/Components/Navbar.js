import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs';
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiAdminFill, RiLoginBoxFill, RiNotificationFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
//import logo from '../Assets/logonew.svg'; // Make sure the path to your logo is correct

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');

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
        { title: "Order Details", path: "/odetail" }
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
        { title: "Cart", path: "/cart" },
        { title: "Checkout", path: "/checkout" },
        
        
        // Define submenu items for Customer
      ]
    },
    { title: "Notification", icon: <RiNotificationFill />,  path: "/notification",spacing: true, submenu: false, submenuItems: [] },
    { title: "Settings & Privacy", icon: <AiFillSetting />,path: "/setting", submenu: false, submenuItems: [] },
    { title: "Logout", icon: <RiLoginBoxFill />,path: "/", submenu: false, submenuItems: [] }
  ];

  return (
    <div className={`flex bg-gray-300 h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative `} >
      <BsArrowLeftShort
        className={`absolute mt-10 cursor-pointer rounded-full bg-white p-1 text-3xl text-black border border-black top-9 -right-3 ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      
     <ul className="pt-2 mt-10">
  {Menu.map((menu, index) => (
    <React.Fragment key={index}>
      <li
        className={`flex items-center gap-x-4 cursor-pointer p-2.5 text-sm text-black hover:bg-gray-400 rounded-md ${menu.spacing ? 'mt-3' : 'mt-2'}`}
        onClick={() => menu.submenu && toggleSubmenu(menu.title)}
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
            <li key={submenuIndex} className="flex items-center gap-x-4 cursor-pointer p-2 px-5 py-0 text-sm text-black hover:bg-gray-400 rounded-md">
              <Link to={submenuItem.path} className="text-base font-medium">
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