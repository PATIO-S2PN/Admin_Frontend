import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logonew.svg';
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

const AddItem = () => {
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
  const navigate = useNavigate(); // Create navigate instance

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token found
    }
  }, [navigate]);

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
      const token = localStorage.getItem('token');

      const response = await axios.post('http://34.224.26.99/product/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Add this line

        },
      });
      console.log(response.data); // Handle the response as needed
      showToast('success', 'Item is added Successfully!');

    } catch (error) {
      console.error(error); // Handle errors as needed
    }
  };

  return (
    
       <div className="w-full h-screen bg-white p-9 ">
        <div>
          <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-8 right-10' onClick={() => navigate("/dashboard")} />
          <h1 className="text-4xl font-semibold text-orange-800 top-10 font-roboto-regular">Add Item</h1>
        </div>
       
        <form className="py-10 mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="images" className="block text-sm font-semibold text-gray-900 font-roboto">Images</label>
            <input type="file" multiple onChange={handleImageChange} className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-violet-700 hover:file:bg-orange-200 fofnt-roboto"/>
            <div className="flex space-x-4">
              {imagePreview.map((src, index) => (
                <img key={index} src={src} alt="Preview" className="w-20 h-20 rounded-lg shadow-lg"/>
              ))}
            </div>
          </div>
          <div className='flex flex-row justify-between my-2'>
            <div>
              <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="name">
                Name
              </label>
              <input className="w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="name" name="name" type="text" placeholder="Product Name" value={productDetails.name} onChange={handleInputChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="description">
                Description
              </label>
              <input className="w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="description" name="description" type="text" placeholder="Product Description" value={productDetails.description} onChange={handleInputChange} />
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="category">
                Category
              </label>
              <select 
                id="category" 
                name="category" 
                className="w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto hover:shadow-lg bg-orange-50" 
                value={productDetails.category} 
                onChange={handleInputChange}
              >
                <option value="">Select a Category</option>
                <option value="Burgers">Burgers</option>
                <option value="Submarines">Submarines</option>
                <option value="Pizza">Pizza</option>
                <option value="Rice Bowls">Rice Bowls</option>
                <option value="Beverages">Beverages</option>
                <option value="Desserts">Desserts</option>
                <option value="Salads">Salads</option>
                <option value="Pasta">Pasta</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="foodType">
                Food Type
              </label>
              <select 
                id="foodType" 
                name="foodType" 
                className="w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline hover:shadow-lg text-sm font-roboto bg-orange-50" 
                value={productDetails.foodType} 
                onChange={handleInputChange}
              >
                <option value="">Select Food Type</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
          </div>
          
          <div className='flex flex-row justify-between'>
            <div>
              <label className="block text-sm font-semibold text-gray-900 font-roboto0" htmlFor="readyTime">
                Ready Time
              </label>
              <input className="w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="readyTime" name="readyTime" type="text" placeholder="Product Ready Time" value={productDetails.readyTime} onChange={handleInputChange} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="price">
                Price
              </label>
              <input className="w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="price" name="price" type="text" placeholder="Product Price" value={productDetails.price} onChange={handleInputChange} />
            </div>
          </div>
          
          <div className="flex items-center p-4 mt-5 ">
            <button type="submit" className="px-4 py-2 font-bold text-white bg-orange-800 rounded hover:bg-orange-700 w-[200px]">
              Submit
            </button>
          </div>
        </form>
      </div>
  );
};

export default AddItem;