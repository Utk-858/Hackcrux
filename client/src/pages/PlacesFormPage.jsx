import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import AccountNav from '@/components/ui/AccountNav';
import Perks from '@/components/ui/Perks';
import PhotosUploader from '@/components/ui/PhotosUploader';
import Spinner from '@/components/ui/Spinner';

const samplePlace = {
  id: '1',
  title: 'Cozy Lakehouse',
  address: '456 Lakeside Drive, Denver, CO',
  photos: ['/images/lakehouse1.jpg', '/images/lakehouse2.jpg'],
  description: 'Relax by the serene lake, perfect for families and solo travelers.',
  perks: ['WiFi', 'Lake View', 'Kayak Rentals'],
  extraInfo: 'Pets are not allowed. Quiet hours from 10 PM to 7 AM.',
  checkIn: '15:00',
  checkOut: '11:00',
  maxGuests: 6,
  price: 200,
};

const PlacesFormPage = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addedPhotos, setAddedPhotos] = useState(samplePlace.photos);

  const [formData, setFormData] = useState({ ...samplePlace });

  const handleFormData = (e) => {
    const { name, value, type } = e.target;
    if (type !== 'checkbox') {
      setFormData({ ...formData, [name]: value });
      return;
    }

    const currentPerks = [...formData.perks];
    const updatedPerks = currentPerks.includes(name)
      ? currentPerks.filter((perk) => perk !== name)
      : [...currentPerks, name];

    setFormData({ ...formData, perks: updatedPerks });
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      setTimeout(() => {
        setFormData(samplePlace);
        setAddedPhotos(samplePlace.photos);
        setLoading(false);
      }, 1000); // Simulate loading
    }
  }, [id]);

  const savePlace = (e) => {
    e.preventDefault();
    console.log('Saved Place Data:', formData);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={'/account/places'} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <AccountNav />
      <form onSubmit={savePlace}>
        <h2 className="mt-4 text-2xl">Title</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder="Title of your place"
        />

        <h2 className="mt-4 text-2xl">Address</h2>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleFormData}
          placeholder="Address of your place"
        />

        <h2 className="mt-4 text-2xl">Photos</h2>
        <PhotosUploader addedPhotos={addedPhotos} setAddedPhotos={setAddedPhotos} />

        <h2 className="mt-4 text-2xl">Description</h2>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleFormData}
        />

        <h2 className="mt-4 text-2xl">Perks</h2>
        <Perks selected={formData.perks} handleFormData={handleFormData} />

        <h2 className="mt-4 text-2xl">Extra Info</h2>
        <textarea
          name="extraInfo"
          value={formData.extraInfo}
          onChange={handleFormData}
        />

        <h2 className="mt-4 text-2xl">Guests & Pricing</h2>
        <input
          type="number"
          name="maxGuests"
          value={formData.maxGuests}
          onChange={handleFormData}
          placeholder="Max guests"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleFormData}
          placeholder="Price per night"
        />

        <button className="mx-auto my-4 flex rounded-full bg-primary py-3 px-20 text-xl font-semibold text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default PlacesFormPage;