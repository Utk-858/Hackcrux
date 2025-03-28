import React, { useState } from 'react';

import Image from './Image';

const PhotosUploader = ({ addedPhotos, setAddedPhotos }) => {
  const [photoLink, setPhotoLink] = useState('');

  const addPhotoByLink = (e) => {
    e.preventDefault();
    if (photoLink) {
      setAddedPhotos((prev) => [...prev, photoLink]);
      setPhotoLink('');
    }
  };

  const uploadPhoto = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setAddedPhotos((prev) => [...prev, ...fileUrls]);
  };

  const removePhoto = (filename) => {
    setAddedPhotos([...addedPhotos.filter((photo) => photo !== filename)]);
  };

  const selectAsMainPhoto = (e, filename) => {
    e.preventDefault();
    setAddedPhotos([filename, ...addedPhotos.filter((photo) => photo !== filename)]);
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          type="text"
          placeholder="Add using a link ...jpg"
        />
        <button
          className="rounded-2xl bg-gray-200 px-4"
          onClick={addPhotoByLink}
        >
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 ">
        {addedPhotos?.length > 0 &&
          addedPhotos.map((link) => (
            <div className="relative flex h-32" key={link}>
              <Image className="w-full rounded-2xl object-cover" src={link} alt="" />
              <button
                onClick={() => removePhoto(link)}
                className="absolute bottom-1 right-1 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70"
              >
                X
              </button>
              <button
                onClick={(e) => selectAsMainPhoto(e, link)}
                className="absolute bottom-1 left-1 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70"
              >
                {link === addedPhotos[0] ? '★' : '☆'}
              </button>
            </div>
          ))}
        <label className="flex h-32 cursor-pointer items-center justify-center gap-1 rounded-2xl border bg-transparent p-2 text-2xl text-gray-600">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;
