import React, { useState } from 'react';

const PlaceGallery = ({ place }) => {
  const [showPhoto, setShowPhoto] = useState(false);

  if (!place?.image) {
    return <p className="text-center">No photo available</p>;
  }

  if (showPhoto) {
    return (
      <div className="fixed inset-0 z-20 overflow-auto bg-black">
        <button
          className="fixed right-4 top-8 flex gap-1 rounded-xl bg-white py-2 px-4 text-black shadow-lg"
          onClick={() => setShowPhoto(false)}
        >
          Close Photo
        </button>
        <div className="flex h-full items-center justify-center">
          <img src={place.image} alt={place.title} className="max-w-full max-h-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <img
          src={place.image}
          alt={place.title}
          className="h-80 w-full object-cover cursor-pointer"
          onClick={() => setShowPhoto(true)}
        />
      </div>

      <button
        className="absolute bottom-4 right-4 rounded-xl bg-white py-2 px-4 text-black shadow-md"
        onClick={() => setShowPhoto(true)}
      >
        Show Photo
      </button>
    </div>
  );
};

export default PlaceGallery;
