import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AccountNav from '../components/ui/AccountNav';
import AddressLink from '../components/ui/AddressLink';
import BookingDates from '../components/ui/BookingDates';
import PlaceGallery from '../components/ui/PlaceGallery';
import Spinner from '../components/ui/Spinner';

const sampleBooking = {
  _id: '1',
  price: 15000,
  place: {
    title: 'Beachfront Villa',
    address: '123 Ocean Drive, Miami, FL',
    photos: ['/images/beach-villa.jpg'],
  },
  startDate: '2025-04-01',
  endDate: '2025-04-07',
};

const SingleBookedPlace = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (sampleBooking._id === id) {
        setBooking(sampleBooking);
      }
      setLoading(false);
    }, 1000); // Simulating API delay
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <AccountNav />
      {booking?.place ? (
        <div className="p-4">
          <h1 className="text-3xl">{booking?.place?.title}</h1>

          <AddressLink className="my-2 block" placeAddress={booking.place?.address} />
          <div className="my-6 flex flex-col items-center justify-between rounded-2xl bg-gray-200 p-6 sm:flex-row">
            <div>
              <h2 className="mb-4 text-2xl md:text-2xl">Your booking information</h2>
              <BookingDates booking={booking} />
            </div>
            <div className="mt-5 w-full rounded-2xl bg-primary p-6 text-white sm:mt-0 sm:w-auto">
              <div className="hidden md:block">Total price</div>
              <div className="flex justify-center text-3xl">
                <span>₹{booking?.price}</span>
              </div>
            </div>
          </div>
          <PlaceGallery place={booking?.place} />
        </div>
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
};

export default SingleBookedPlace;
