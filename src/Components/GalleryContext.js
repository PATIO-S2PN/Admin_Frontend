import React, { createContext, useState } from 'react';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const addImages = (newImages) => {
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  return (
    <GalleryContext.Provider value={{ images, addImages }}>
      {children}
    </GalleryContext.Provider>
  );
};
