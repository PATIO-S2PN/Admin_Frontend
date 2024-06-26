import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { productBackendUrl } from '../config';

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
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
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
    e.preventDefault();

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

      const response = await axios.post(`${productBackendUrl}/product/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });
      console.log(response.data);
      showToast('success', 'Item is added Successfully!');

    } catch (error) {
      console.error(error);
      showToast('error', 'Failed to add item!');
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-9">
      <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-orange-800 mt-4 md:mt-10 font-roboto-regular">Add Item</h1>
      </div>
     
      <form className="py-6 md:py-10 mb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-semibold text-gray-900 font-roboto">Images</label>
          <input type="file" multiple onChange={handleImageChange} className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-violet-700 hover:file:bg-orange-200 font-roboto"/>
          <div className="flex flex-wrap gap-4 mt-2">
            {imagePreview.map((src, index) => (
              <img key={index} src={src} alt="Preview" className="w-20 h-20 rounded-lg shadow-lg"/>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between mb-2">
          <div className="mb-4 md:mb-0 md:mr-2">
            <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="name">Name</label>
            <input className="w-full md:w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="name" name="name" type="text" placeholder="Product Name" value={productDetails.name} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="description">Description</label>
            <input className="w-full md:w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="description" name="description" type="text" placeholder="Product Description" value={productDetails.description} onChange={handleInputChange} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mr-2">
            <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="category">Category</label>
            <select 
              id="category" 
              name="category" 
              className="w-full md:w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto hover:shadow-lg bg-orange-50" 
              value={productDetails.category} 
              onChange={handleInputChange}
            >
              <option value="">Select a Category</option>
              <option value="Burgers">Burgers</option>
              <option value="Submarines">Submarines</option>
              <option value="Pizza">Pizza</option>
              <option value="Rice Bowls">Rice Bowls</option>
              <option value="Kottu Corner">Kottu Corner</option>
              <option value="Beverages">Beverages</option>
              <option value="Desserts">Desserts</option>
              
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="foodType">Food Type</label>
            <select 
              id="foodType" 
              name="foodType" 
              className="w-full md:w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline hover:shadow-lg text-sm font-roboto bg-orange-50" 
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
        
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0 md:mr-2">
            <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="readyTime">Ready Time</label>
            <input className="w-full md:w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="readyTime" name="readyTime" type="text" placeholder="Product Ready Time" value={productDetails.readyTime} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 font-roboto" htmlFor="price">Price</label>
            <input className="w-full md:w-[450px] px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm font-roboto bg-orange-50 hover:shadow-lg" id="price" name="price" type="text" placeholder="Product Price" value={productDetails.price} onChange={handleInputChange} />
          </div>
        </div>
        
        <div className="flex items-center p-4 mt-5">
          <button type="submit" className="px-4 py-2 font-bold text-white bg-orange-800 rounded hover:bg-orange-700 w-full md:w-[200px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
