import { useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import logo from '../Assets/logonew.svg';
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiAdminFill, RiDashboardFill, RiLoginBoxFill, RiNotificationFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Item = () => {
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
        { title: "Add Item", path: "./Pages/AddItem.js" },
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
      <div className={`bg-gray-300 h-auto p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
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

      <div className="p-9 w-full h-screen bg-gray-200">
        <h1 className="text-4xl font-semibold">Items</h1>

        <div class="flex items-center justify-between px-4 py-2 space-x-4">
  
  <div class="flex-1 ">
    <input type="text" placeholder="Search Items" class="w-full px-4 py-2 border rounded-lg" />
  </div>
  
  
  <button class="px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-500">
    Export
  </button>

 
  <button class="flex items-center px-4 py-2 text-sm bg-gray-300 rounded-lg hover:bg-gray-500">
    Add Item
    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
  </button>
</div>

<table class="w-full mt-10 space-y-5 px-4 table-fixed border-collapse">
  <thead>
    <tr>
      <th class= "text-center">Item</th>
      <th class="text-center">Item Name</th>
      <th class="text-center">Price</th>
      <th class="text-center">Category</th>
      <th class="text-center">Size</th>
      <th class="text-center">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-100 mt-10 align-center space-y-3 odd:bg-gray-200">
      <td class="text-center mt-10"> </td>
      <td class="text-center mt-10">Burger</td>
      <td class="text-center">2$</td>
      <td class="text-center">Snacks</td>
      <td class="text-center">Medium</td>
      <td class="text-center">04/01/2023</td>
    </tr>
    <tr class="bg-gray-100 align-center odd:bg-gray-200">
      <td class="text-center"> </td>
      <td class="text-center">Submarine</td>
      <td class="text-center">3.5$</td>
      <td class="text-center">Music</td>
      <td class="text-center">Large</td>
      <td class="text-center">08/01/2023</td>
    </tr>
    <tr class="bg-gray-100 align-center odd:bg-gray-200">
      <td class="text-center"> </td>
      <td class="text-center">Milkshake</td>
      <td class="text-center">3$</td>
      <td class="text-center">Music</td>
      <td class="text-center">No</td>
      <td class="text-center">01/01/2024</td>
    </tr>
  </tbody>
</table>



      


      </div>
    </div>
  );
}

export default Item;
