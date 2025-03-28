import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import samplePlaces from '@/database';
import Spinner from '@/components/ui/Spinner';
import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PlaceGallery from '@/components/ui/PlaceGallery';
import PerksWidget from '@/components/ui/PerksWidget';

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    // Find the place from the sample data
    const foundPlace = samplePlaces.find((place) => place._id === id);

    setTimeout(() => {
      setPlace(foundPlace || null);
      setLoading(false);
    }, 500); // Simulate loading effect
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!place) {
    return <h1 className="text-center text-2xl font-bold">Place Not Found</h1>;
  }

  return (
    <div className="mt-4 overflow-x-hidden px-8 pt-20">
      <h1 className="text-3xl">{place.title}</h1>

      <AddressLink placeAddress={place.address} />
      <PlaceGallery place={place} />

      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            {place.description}
          </div>
          Max number of guests: {place.maxGuests}
          <PerksWidget perks={place.perks} />
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="-mx-8 border-t bg-white px-8 py-8">
        <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
        <p className="mb-4 mt-2 text-sm leading-5 text-gray-700">
          {place.extraInfo}
        </p>
      </div>
    </div>
  );
};

export default PlacePage;
