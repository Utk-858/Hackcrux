import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AccountNav from '@/components/ui/AccountNav';
import InfoCard from '@/components/ui/InfoCard';
import Spinner from '@/components/ui/Spinner';

const samplePlaces = [
  {
    _id: '1',
    title: 'Modern Apartment',
    address: '123 Main Street, New York, NY',
    description: 'A stylish and modern apartment in the city center.',
    price: 150,
  },
  {
    _id: '2',
    title: 'Cozy Cottage',
    address: '456 Country Lane, Asheville, NC',
    description: 'A peaceful cottage surrounded by nature.',
    price: 100,
  },
];

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPlaces(samplePlaces);
      setLoading(false);
    }, 1000); // Simulating API delay
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex gap-1 rounded-full bg-primary py-2 px-6 text-white"
          to={'/account/places/new'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mx-4 mt-4">
        {places.length > 0 ? (
          places.map((place) => <InfoCard place={place} key={place._id} />)
        ) : (
          <p>No places found. Add a new place to get started.</p>
        )}
      </div>
    </div>
  );
};

export default PlacesPage;