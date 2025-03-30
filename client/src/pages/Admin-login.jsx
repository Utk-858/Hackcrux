import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HotelLogin = () => {
  const [hotelId, setHotelId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const hotelSuggestions = ['H123', 'H456', 'H789'];
  const emailSuggestions = ['hotel1@gmail.com', 'hotel2@gmail.com', 'hotel3@gmail.com'];
  const phoneSuggestions = ['+1234567890', '+9876543210', '+1122334455'];
  const locationSuggestions = ['New York', 'Los Angeles', 'Chicago'];

  const handleLogin = (e) => {
    e.preventDefault();

    navigate(`/company-dashboard/${hotelId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Hotel Management System Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Hotel ID</label>
            <input
              list="hotelIds"
              type="text"
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <datalist id="hotelIds">
              {hotelSuggestions.map((id, index) => (
                <option key={index} value={id} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              list="emails"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <datalist id="emails">
              {emailSuggestions.map((mail, index) => (
                <option key={index} value={mail} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              list="phones"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <datalist id="phones">
              {phoneSuggestions.map((ph, index) => (
                <option key={index} value={ph} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              list="locations"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <datalist id="locations">
              {locationSuggestions.map((loc, index) => (
                <option key={index} value={loc} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default HotelLogin;
