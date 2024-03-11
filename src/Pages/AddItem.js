import { useState } from 'react';

import axios from 'axios';


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


  

  return (
    
       <div className="w-full h-auto bg-gray-200 p-9">
        <h1 className="text-4xl font-semibold">Add Item</h1>
        <form className="py-10 mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="images" className="block mb-2 text-sm font-bold text-gray-700">Images</label>
            <input type="file" multiple onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
            <div className="flex mt-4 space-x-4">
              {imagePreview.map((src, index) => (
                <img key={index} src={src} alt="Preview" className="w-20 h-20 rounded-lg shadow-lg"/>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              Name
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Product Name" value={productDetails.name} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
              Description
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="description" name="description" type="text" placeholder="Product Description" value={productDetails.description} onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="category">
              Category
            </label>
            <select 
              id="category" 
              name="category" 
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="foodType">
              Food Type
            </label>
            <select 
              id="foodType" 
              name="foodType" 
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="readyTime">
              Ready Time
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="readyTime" name="readyTime" type="text" placeholder="Product Ready Time" value={productDetails.readyTime} onChange={handleInputChange} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="price">
              Price
            </label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="price" name="price" type="text" placeholder="Product Price" value={productDetails.price} onChange={handleInputChange} />
          </div>
          <div className="flex items-center justify-center p-4 mt-10 space-x-10">
            <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
  );
};

export default AddItem;