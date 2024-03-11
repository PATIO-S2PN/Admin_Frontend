import { useState } from 'react';
import { BsArrowLeftShort, BsSearch, BsChevronDown } from 'react-icons/bs';
import logo from '../Assets/logonew.svg';
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiAdminFill, RiDashboardFill, RiLoginBoxFill, RiNotificationFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    category: '',
    foodType: '',
    readyTime: '',
    price: '',
    rating: '',
    images: []
  });
  const [imagePreview, setImagePreview] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedPreviewUrls = files.map(file => URL.createObjectURL(file));
    setImagePreview(updatedPreviewUrls);
    setProductDetails({ ...productDetails, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submit action

    const formData = new FormData();
    for (const key in productDetails) {
      if (key === "images") {
        productDetails[key].forEach((file) => {
          formData.append('images', file);
        });
      } else {
        formData.append(key, productDetails[key]);
      }
    }

    try {
      const response = await axios.post('http://localhost:8002/product/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error); // Handle errors as needed
    }
  };


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
       <div className="p-9 w-full h-auto bg-gray-200">
        <h1 className="text-4xl font-semibold">Add Item</h1>
        <form className="mb-8 py-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="images" className="block text-gray-700 text-sm font-bold mb-2">Images</label>
            <input type="file" multiple onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
            <div className="flex space-x-4 mt-4">
              {imagePreview.map((src, index) => (
                <img key={index} src={src} alt="Preview" className="w-20 h-20 rounded-lg shadow-lg"/>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Product Name" value={productDetails.name} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" type="text" placeholder="Product Description" value={productDetails.description} onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select 
              id="category" 
              name="category" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={productDetails.category} 
              onChange={handleInputChange}
            >
              <option value="">Select a Category</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Soft Drinks">Soft Drinks</option>
              <option value="Food">Food</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodType">
              Food Type
            </label>
            <select 
              id="foodType" 
              name="foodType" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={productDetails.foodType} 
              onChange={handleInputChange}
            >
              <option value="">Select Food Type</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="readyTime">
              Ready Time
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="readyTime" name="readyTime" type="text" placeholder="Product Ready Time" value={productDetails.readyTime} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" name="price" type="text" placeholder="Product Price" value={productDetails.price} onChange={handleInputChange} />
          </div>
          <div className="flex justify-center items-center mt-10 space-x-10 p-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;