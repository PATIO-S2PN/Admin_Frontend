import { useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import logo from '../Assets/logonew.svg';
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiAdminFill, RiDashboardFill, RiLoginBoxFill, RiNotificationFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menu = [
    {
      title: "Home", icon: <AiFillHome />, path: "/",
      submenu: true,
      submenuItems: [
        { title: "Apps" }
      ],
    },

    {
      title: "Admin", icon: <RiAdminFill />,
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Dashboard" },
        { title: "Add Item" ,path: "./Pages/AddItem.js"},
        { title: "Items" },
        { title: "Customers" },
        { title: "Customer Details" },
        { title: "Orders" },
        { title: "Order Details" }
      ],
    },
    {
      title: "Customer", icon: <IoPeople />,
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Home Page" },
        { title: "Item Details" },
        { title: "Cart" },
        { title: "Checkout" },
        { title: "Profile" },
        { title: "Order Tracking" }

      ],
    },
    { title: "Notification", icon: <RiNotificationFill />, spacing: true },
    { title: "Setting", icon: <AiFillSetting /> },
    { title: "Logout", icon: <RiLoginBoxFill /> }
  ];

  return (
    <div className="flex">
      <div className={`bg-gray-300 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-black text-3xl p-1 
        rounded-full absolute top-9 -right-3 border border-black cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div>
          <img src={logo} alt=" " className={`cursor-pointer duration-500"}`}></img>
          <div className="mb-2 border-t-2 border-#827c7c"></div>
        </div>

        <div
          className={`flex items-center rounded-md bg-gray-200 mt-6 ${!open ? "px-2.5 " : "px-4"
            }py-2.5`}>

          <BsSearch
            className={`text-black text-lg block float-left 
           cursor-pointer ${open && "mr-2"}`} />

          <input
            type={"search"}
            placeholder='Search'
            className={`text-base bg-transparent w-full text-white 
           focus:outline-none ${!open && "hidden"}`} />
        </div>

        {/* menu */}
        <ul className='pt-2'>
          {Menu.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-black text-sm flex
             items-center gap-x-4 cursor-pointer p-2.5 
             hover:bg-gray-400 rounded-md ${menu.spacing ? "mt-3" : "mt-2"} `}>
                <span
                  className='text-2xl block float-left'>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                {menu.path ? (
                  <Link to={menu.path} className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                    {menu.title}
                  </Link>
                ) : (
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"
                    }`}>

                  {menu.title}

                </span>
                )}

                {menu.submenu && open && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`}
                    onClick={() =>
                      setSubmenuOpen(!submenuOpen)} />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul className='pl-12 space-y-4' >
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      key={index}
                      className={`text-black text-sm flex
                items-center gap-x-4 cursor-pointer p-2 px-5 py-0 
                hover:bg-gray-400 rounded-md  `}>
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>

          ))}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>
    </div>
  );
}

export default Navbar;
