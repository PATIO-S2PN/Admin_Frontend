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
        <h1 className="text-4xl font-semibold">Add Item</h1>
        <div class="mb-8 py-10" >

          <label class={`block ${open ? "w-72" : "w-20"} text-gray-700 mb-3 text-sm font-bold mb-5" for="item-title`}>
            Item Title
          </label>
          <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item-title" type="text" placeholder="Item Title" />

          <label class="block  text-gray-700 text-sm font-bold mb-3 mt-10" for="py-10 item-description">
            Item Description
          </label>
          <textarea class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item-description" placeholder="Item Description"></textarea>


          <label class="block text-gray-700 mt-10 text-sm font-bold mb-2" for="display-images">
            Display Images
          </label>
          <input class="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                  " id="display-images" type="file" />

          <label class="block text-gray-700 text-sm font-bold mb-2 mt-10" for="price">
            Price
          </label>
          <input class="shadow appearance-none border mt-3 rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Price" />
        </div>

        <div class="fixed top-20 right-20 mt-4 mr-4 bg-gray-300 rounded-lg shadow-lg p-6 w-1/5">
          <h2 class="text-lg font-semibold mb-4">Organize</h2>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
              Category
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category">
                <option>Beverages</option>
                <option>Snacks</option>
                <option>Soft Drinks</option>
                <option>Food</option>

              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.3 7.3a1 1 0 0 1 1.4 0l3.3 3.3 3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="collection">
              Collection
            </label>
            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="collection" type="text" placeholder="Collection" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="tags">
              Tags
            </label>
            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tags" type="text" placeholder="Tags" />
          </div>
        </div>



        <div class="fixed bottom-20 right-20 mb-4 mr-4 bg-gray-300 rounded-lg shadow-lg p-6 w-1/5">
          <h2 class="text-lg font-semibold mb-4">Variants</h2>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="option1">
              Option 1
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="option1" type="text" placeholder="Size" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="option2">
              Option 2
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="option2" type="text" placeholder="Size" />
          </div>
          <button class="mt-4 bg-gray-500 hover:bg-black text-white border-radius-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add another option
          </button>
        </div>



        <div class="flex justify-center w-1/2 items-center space-x-10 p-4">

          <button class="bg-gray-400 text-black-800 font-semibold py-2 px-4 w-40 rounded-lg shadow hover:bg-gray-300">
            Discard
          </button>


          <button class="bg-gray-400 text-black-800 font-semibold py-2 px-4 w-40 rounded-lg shadow hover:bg-gray-300">
            Save Draft
          </button>


          <button class="bg-gray-400 text-black-800 w-40 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300">
            Publish Item
          </button>
        </div>


      </div>
    </div>
  );
}

export default Navbar;
