import React, { useState, useContext } from 'react';
import { GalleryContext } from '../Components/GalleryContext';

const RestaurantGallery = () => {
  const { images, addImages } = useContext(GalleryContext);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleAddPhotos = () => {
    addImages(selectedFiles.map((file) => URL.createObjectURL(file)));
    setSelectedFiles([]);
  };

  return (
    <div className="w-full h-auto bg-white p-9">
      <h1 className="text-4xl text-orange-800 font-semibold mb-6">Restaurant Gallery</h1>
      <div className="mb-4">
        <input 
          type="file" 
          multiple 
          onChange={handleFileChange} 
          className="py-2 px-4 bg-orange-200 border rounded-md"
        />
        <button 
          onClick={handleAddPhotos} 
          className="ml-4 py-2 px-4 bg-orange-900 text-white rounded-md hover:bg-orange-700">
          Add Photos
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="bg-orange-100 p-4 shadow-md rounded-lg">
            <img src={src} alt={`Gallery Image ${index}`} className="w-full h-48 object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGallery;
