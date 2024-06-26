import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { GalleryContext } from '../Components/GalleryContext';
import Swal from 'sweetalert2';
import { FaEllipsisV } from 'react-icons/fa';
import logo from '../Assets/logonew.svg';
import { adminBackendUrl } from '../config';


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

      const response = await axios.post(`${adminBackendUrl}/gallery`, formData, {
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
      await axios.put(`${adminBackendUrl}/gallery/${image.id}`, formData, {
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
      await axios.delete(`${adminBackendUrl}/gallery/${image.id}`);
      const updatedImages = images.filter((_, i) => i !== index);
      setImages(updatedImages);
      showToast('success', 'Photo deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      showToast('error', 'Failed to delete photo');
    }
  };

  return (
    <div className="min-h-screen p-4 bg-white md:p-9">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-orange-800 md:text-4xl">Restaurant Gallery</h1>
      </div>
      <form onSubmit={editingIndex !== null ? handleUpdatePhoto : handleAddPhotos}>
        <div className="flex flex-col items-start mb-4 sm:flex-row sm:items-center">
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="w-full px-4 py-2 mb-2 bg-orange-200 border rounded-md sm:mb-0 sm:mr-4 sm:w-auto"
          />
          <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-2 bg-orange-200 border rounded-md sm:mb-0 sm:mr-4 sm:w-auto"
          />
          <input 
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-2 bg-orange-200 border rounded-md sm:mb-0 sm:mr-4 sm:w-auto"
          />
          <button 
            type="submit" 
            className="w-full px-4 py-2 text-white bg-orange-900 rounded-md hover:bg-orange-700 sm:w-auto"
            disabled={uploading}>
            {uploading ? 'Uploading...' : editingIndex !== null ? 'Update Photo' : 'Add Photo'}
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative p-4 bg-orange-100 rounded-lg shadow-md">
            <img src={image.src} alt={`Gallery item ${index}`} className="object-cover w-full h-48 rounded-md" />
            <h2 className="mt-2 text-xl font-semibold text-orange-800">{image.name}</h2>
            <p className="text-sm text-gray-600">{image.description}</p>
            <div className="absolute top-2 right-2" ref={dropdownRef}>
              <button
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
              >
                <FaEllipsisV />
              </button>
              {dropdownOpen === index && (
                <div className="absolute right-0 z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
                  <button 
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" 
                    onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button 
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" 
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
