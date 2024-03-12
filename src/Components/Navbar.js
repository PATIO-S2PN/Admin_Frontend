// import { useState } from 'react';
// import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
// import logo from '../Assets/logonew.svg';
// import { AiFillHome, AiFillSetting } from "react-icons/ai";
// import { RiAdminFill, RiDashboardFill, RiLoginBoxFill, RiNotificationFill } from "react-icons/ri";
// import { IoPeople } from "react-icons/io5";
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   const [open, setOpen] = useState(true);
//   const [submenuOpen, setSubmenuOpen] = useState(false);
//   const Menu = [
//     {
//       title: "Home", icon: <AiFillHome />, path: "/",
//       submenu: true,
//       submenuItems: [
//         { title: "Apps" }
//       ],
//     },

//     {
//       title: "Admin", icon: <RiAdminFill />,
//       spacing: true,
//       submenu: true,
//       submenuItems: [
//         { title: "Dashboard",href:"/"},
//         { title: "Add Item",href:"#AddItem" },
//         { title: "Items",href:"#Item" },
//         { title: "Customers" },
//         { title: "Customer Details" },
//         { title: "Orders" },
//         { title: "Order Details" }
//       ],
//     },
//     {
//       title: "Customer", icon: <IoPeople />,
//       spacing: true,
//       submenu: true,
//       submenuItems: [
//         { title: "Home Page" },
//         { title: "Item Details" },
//         { title: "Cart" },
//         { title: "Checkout" },
//         { title: "Profile" },
//         { title: "Order Tracking" }

//       ],
//     },
//     { title: "Notification", icon: <RiNotificationFill />, spacing: true },
//     { title: "Setting", icon: <AiFillSetting /> },
//     { title: "Logout", icon: <RiLoginBoxFill /> }
//   ];


//   return (
//     <div className="flex">
//       <div className={`bg-gray-300 h-auto p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        
//         <BsArrowLeftShort className={`bg-white text-black text-3xl p-1 
//         rounded-full absolute top-9 -right-3 border border-black cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
//         <div>
//           <img src={logo} alt=" " className={`cursor-pointer duration-500"}`}></img>
//           <div className="mb-2 border-t-2 border-#827c7c"></div>
//         </div>

//         <div
//           className={`flex items-center rounded-md bg-gray-200 mt-6 ${!open ? "px-2.5 " : "px-4"
//             }py-2.5`}>

//           <BsSearch
//             className={`text-black text-lg block float-left 
//            cursor-pointer ${open && "mr-2"}`} />

//           <input
//             type={"search"}
//             placeholder='Search'
//             className={`text-base bg-transparent w-full text-white 
//            focus:outline-none ${!open && "hidden"}`} />
//         </div>

//         {/* menu */}
//         <ul className='pt-2'>
//           {Menu.map((menu, index) => (
//             <>
//               <li
//                 key={index}
//                 className={`text-black text-sm flex
//              items-center gap-x-4 cursor-pointer p-2.5 
//              hover:bg-gray-400 rounded-md ${menu.spacing ? "mt-3" : "mt-2"} `}>
//                 <span
//                   className='text-2xl block float-left'>
//                   {menu.icon ? menu.icon : <RiDashboardFill />}
//                 </span>
//                 {menu.path ? (
//                   <Link to={menu.path} className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
//                     {menu.title}
//                   </Link>
//                 ) : (
//                   <span
//                     className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"
//                       }`}>

//                     {menu.title}

//                   </span>
//                 )}

//                 {menu.submenu && open && (
//                   <BsChevronDown className={`${submenuOpen && "rotate-180"}`}
//                     onClick={() =>
//                       setSubmenuOpen(!submenuOpen)} />
//                 )}
//               </li>
//               {menu.submenu && submenuOpen && open && (
//                 <ul className='pl-12 space-y-4' >
//                   {menu.submenuItems.map((submenuItems, index) => (
//                     <li
//                       key={index}
//                       className={`text-black text-sm flex
//                 items-center gap-x-4 cursor-pointer p-2 px-5 py-0 
//                 hover:bg-gray-400 rounded-md  `}>
//                       {submenuItems.title}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </>

//           ))}
//         </ul>
//       </div>

    
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiAdminFill, RiLoginBoxFill, RiNotificationFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import logo from '../Assets/logonew.svg'; // Make sure the path to your logo is correct

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState('');

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? '' : title);
  };

  const Menu = [
    {
      title: "Home",
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
        { title: "Dashboard", path: "/dashboard" },
        { title: "Add Item", path: "/addItem" },
        { title: "Items", path: "/item" },
        { title: "Customers", path: "/customer" },
        { title: "Customer Details", path: "/cdetails" },
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
        { title: "Item Details", path: "/cdetails" },
        { title: "Cart", path: "/cart" },
        { title: "Checkout", path: "/checkout" },
        { title: "Profile", path: "/profile" },
        { title: "Order Tracking", path: "/order-tracking" }
        
        // Define submenu items for Customer
      ]
    },
    { title: "Notification", icon: <RiNotificationFill />, spacing: true, submenu: false, submenuItems: [] },
    { title: "Setting", icon: <AiFillSetting />, submenu: false, submenuItems: [] },
    { title: "Logout", icon: <RiLoginBoxFill />, submenu: false, submenuItems: [] }
  ];

  return (
    <div className={`flex bg-gray-300 h-auto p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
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
              <span className={`flex-1 text-base font-medium duration-200 ${!open && 'hidden'}`}>{menu.title}</span>
              {menu.submenu && open && <BsChevronDown className={`${activeSubmenu === menu.title && 'rotate-180'}`} />}
            </li>
            {menu.submenu && activeSubmenu === menu.title && open && (
              <ul className="pl-12 space-y-2">
                {menu.submenuItems.map((submenuItem, submenuIndex) => (
                  <li key={submenuIndex} className="flex items-center gap-x-4 cursor-pointer p-2 px-5 py-0 text-sm text-black hover:bg-gray-400 rounded-md">
                    <Link to={submenuItem.path}>{submenuItem.title}</Link>
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