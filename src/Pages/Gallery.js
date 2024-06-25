import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { GalleryContext } from '../Components/GalleryContext';
import Swal from 'sweetalert2';
import { FaEllipsisV } from 'react-icons/fa';


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

const RestaurantGallery = () => {
  const { images, addImages, setImages } = useContext(GalleryContext);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleAddPhotos = async (event) => {
    event.preventDefault();
    if (selectedFiles.length === 0) {
      showToast('error', 'No files selected');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('photo', selectedFiles[0]);
      formData.append('name', name);
      formData.append('description', description);

      const response = await axios.post('http://34.224.26.99/admin/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const newImage = {
        id: response.data.id,  // Make sure the backend returns the new image ID
        src: URL.createObjectURL(selectedFiles[0]),
        name,
        description
      };

      addImages([newImage]);  // Ensure newImage is in an array
      setSelectedFiles([]);
      setName('');
      setDescription('');
      showToast('success', 'Photo added successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      showToast('error', 'Failed to upload photo');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (index) => {
    const image = images[index];
    setName(image.name);
    setDescription(image.description);
    setSelectedFiles([]); // Reset file input
    setEditingIndex(index);
  };

  const handleUpdatePhoto = async (event) => {
    event.preventDefault();
    if (editingIndex === null) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      if (selectedFiles[0]) {
        formData.append('photo', selectedFiles[0]);
      }

      const image = images[editingIndex];
      await axios.put(`http://34.224.26.99/admin/gallery/${image.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedImage = {
        ...image,
        src: selectedFiles[0] ? URL.createObjectURL(selectedFiles[0]) : image.src,
        name,
        description
      };

      const updatedImages = images.map((img, index) => index === editingIndex ? updatedImage : img);
      setImages(updatedImages);
      setSelectedFiles([]);
      setName('');
      setDescription('');
      setEditingIndex(null);
      showToast('success', 'Photo updated successfully');
    } catch (error) {
      console.error('Error updating image:', error);
      showToast('error', 'Failed to update photo');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (index) => {
    try {
      const image = images[index];
      await axios.delete(`http://34.224.26.99/admin/gallery/${image.id}`);
      const updatedImages = images.filter((_, i) => i !== index);
      setImages(updatedImages);
      showToast('success', 'Photo deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      showToast('error', 'Failed to delete photo');
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-9">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-orange-800">Restaurant Gallery</h1>
      </div>
      <form onSubmit={editingIndex !== null ? handleUpdatePhoto : handleAddPhotos}>
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center">
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="py-2 px-4 bg-orange-200 border rounded-md mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto"
          />
          <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2 px-4 bg-orange-200 border rounded-md mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto"
          />
          <input 
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="py-2 px-4 bg-orange-200 border rounded-md mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto"
          />
          <button 
            type="submit" 
            className="py-2 px-4 bg-orange-900 text-white rounded-md hover:bg-orange-700 w-full sm:w-auto"
            disabled={uploading}>
            {uploading ? 'Uploading...' : editingIndex !== null ? 'Update Photo' : 'Add Photo'}
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-orange-100 p-4 shadow-md rounded-lg relative">
            <img src={image.src} alt={`Gallery item ${index}`} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl text-orange-800 font-semibold mt-2">{image.name}</h2>
            <p className="text-sm text-gray-600">{image.description}</p>
            <div className="absolute top-2 right-2" ref={dropdownRef}>
              <button
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
              >
                <FaEllipsisV />
              </button>
              {dropdownOpen === index && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                    onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                    onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGallery;
