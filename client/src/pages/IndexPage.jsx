import React, { useState } from 'react';
import PlaceCard from '@/components/ui/PlaceCard';

const samplePlaces = [
  {
    _id: '1',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657121/samples/landscapes/landscape-panorama.jpg',
    address: '123 Main Street, New York',
    title: 'Cozy Apartment in City Center',
    price: '₹3000',
  },
  {
    _id: '2',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657121/samples/landscapes/nature-mountains.jpg',
    address: '456 Sunset Blvd, Los Angeles',
    title: 'Luxury Villa with Pool',
    price: '₹12000',
  },
  {
    _id: '3',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/landscapes/architecture-signs.jpg',
    address: '789 Pine Road, Colorado',
    title: 'Mountain Cabin Retreat',
    price: '₹5000',
  },
  {
    _id: '4',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/ecommerce/car-interior-design.jpg',
    address: '101 Ocean Drive, Miami',
    title: 'Beachfront Bungalow',
    price: '₹8000',
  },
  {
    _id: '5',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/people/bicycle.jpg',
    address: '12 Greenway Lane, Seattle',
    title: 'Urban Loft with City View',
    price: '₹6500',
  },
  {
    _id: '6',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657119/samples/animals/reindeer.jpg',
    address: '33 Lakeview Drive, Austin',
    title: 'Rustic Farmhouse with Garden',
    price: '₹4500',
  },
  {
    _id: '7',
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg',
    address: '10 Market Street, Chicago',
    title: 'Modern Studio Apartment',
    price: '₹7000',
  },
  {
    _id: '8',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/ecommerce/shoes.jpg',
    address: '555 Beach Road, Hawaii',
    title: 'Seaside Villa with Private Beach',
    price: '₹15000',
  },
  {
    _id: '9',
    image: 'https://picsum.photos/seed/picsum/200/300',
    address: '33 Lakeview Drive, Austin',
    title: 'Rustic Farmhouse with Garden',
    price: '₹4500',
  },
  {
    _id: '10',
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg',
    address: '10 Market Street, Chicago',
    title: 'Modern Studio Apartment',
    price: '₹7000',
  },
  {
    _id: '11',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657120/samples/ecommerce/shoes.jpg',
    address: '555 Beach Road, Hawaii',
    title: 'Seaside Villa with Private Beach',
    price: '₹15000',
  },
  {
    _id: '12',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657119/samples/animals/reindeer.jpg',
    address: '33 Lakeview Drive, Austin',
    title: 'Rustic Farmhouse with Garden',
    price: '₹4500',
  },
  {
    _id: '13',
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg',
    address: '10 Market Street, Chicago',
    title: 'Modern Studio Apartment',
    price: '₹7000',
  },
  {
    _id: '14',
    image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1724657119/samples/bike.jpg',
    address: '555 Beach Road, Hawaii',
    title: 'Seaside Villa with Private Beach',
    price: '₹15000',
  },
];

const IndexPage = () => {
  const [places] = useState(samplePlaces);

  return (
    <div className="grid grid-cols-1 justify-items-center py-32 px-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 xl:gap-10">
      {places.length > 0 ? (
        places.map((place) => <PlaceCard place={place} key={place._id} />)
      ) : (
        <div className="absolute left-1/2 right-1/2 top-40 flex w-full -translate-x-1/2 transform flex-col p-10 md:w-1/2">
          <h1 className="text-3xl font-semibold">No Places Available!</h1>
          <p className="text-lg font-semibold">
            Please check back later or try refreshing the page.
          </p>
          <button className="mt-4 w-32 rounded-full bg-primary p-2 text-white">
            <a href="/" className="flex items-center justify-center gap-1">
              Refresh
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
