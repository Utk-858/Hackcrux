import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const sampleData = [
  { month: 'Jan', sales: 4000, bookings: 2400 },
  { month: 'Feb', sales: 3000, bookings: 1398 },
  { month: 'Mar', sales: 2000, bookings: 9800 },
  { month: 'Apr', sales: 2780, bookings: 3908 },
  { month: 'May', sales: 1890, bookings: 4800 },
];

// Static data for posters based on location
const posterData = {
  "Rishikesh": {
    destination: "Rishikesh",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743312865/rishikesh_jyjfks.png"
  },
  "Manali": {
    destination: "Manali",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743308586/manali_vvf9db.png"
  },
  "Kullu": {
    destination: "Kullu",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743312865/kullu_hyxqnu.png"
  },
  "Kasol": {
    destination: "Kasol",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743312865/kasol_pzjx5n.png"
  },
  "Jammu": {
    destination: "Jammu",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743312865/JAMMU_xzid77.png"
  },
  "Jibhi": {
    destination: "Jibhi",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743312865/jibhi_dkjpy0.png"
  },
  "Kashmir": {
    destination: "Kashmir",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743312865/KASHMIR_vvokhk.png"
  },
  "Ladhakh": {
    destination: "Ladhakh",
    posterImage: "https://res.cloudinary.com/dqskebjcf/image/upload/v1743312866/LADHAK_b7n3lz.png"
  },
  "default": {
    destination: "Your Destination",
    posterImage: "/api/placeholder/800/600"
  }
};

const CompanyDashboard = () => {
  const { hotelId } = useParams();
  const [posterContent, setPosterContent] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [generatedPoster, setGeneratedPoster] = useState(null);
  const [showPosterModal, setShowPosterModal] = useState(false);

  const handleGeneratePoster = () => {
    // Get poster data based on business location or use default if location not found
    const poster = posterData[businessLocation] || posterData.default;
    setGeneratedPoster(poster);
    setShowPosterModal(true);
  };

  const handleImageUpload = (e) => {
    // This function would handle image uploads in a real application
    console.log("Image upload triggered", e.target.files);
  };

  const closePosterModal = () => {
    setShowPosterModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-10 mt-20 text-center text-4xl font-bold text-blue-700">
        Welcome to {hotelId}'s Dashboard
      </h1>

  {/* Poster Modal - Shows when a poster is generated */}
{/* Poster Modal - Shows when a poster is generated */}
{showPosterModal && generatedPoster && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative max-h-screen max-w-lg rounded-lg bg-white p-6 shadow-2xl">
      <button 
        onClick={closePosterModal}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xl font-bold text-white hover:bg-red-600"
      >
        ×
      </button>
      <h2 className="mb-4 text-xl font-bold text-indigo-700">Generated Poster</h2>
      <div className="flex flex-col items-center">
        <img 
          src={generatedPoster.posterImage} 
          alt={`${generatedPoster.destination} poster`} 
          className="max-h-60vh w-auto rounded-lg shadow-lg" 
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Destination: {generatedPoster.destination}</h3>
          <p className="mt-2 text-gray-600">Your customized poster is ready!</p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              Download
            </button>
            <button className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border-l-4 border-blue-500 bg-white p-6 shadow-xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Revenue Overview
          </h2>
          <p className="text-gray-600">
            Total Revenue:{' '}
            <span className="font-bold text-green-600">₹5,00,000</span>
          </p>
          <p className="text-gray-600">
            Monthly Growth: <span className="font-bold text-blue-600">12%</span>
          </p>
        </div>

        <div className="rounded-2xl border-l-4 border-green-500 bg-white p-6 shadow-xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Occupancy Rate
          </h2>
          <p className="text-gray-600">
            Current Occupancy:{' '}
            <span className="font-bold text-green-600">78%</span>
          </p>
          <p className="text-gray-600">
            Average Stay Duration:{' '}
            <span className="font-bold text-blue-600">3.5 Days</span>
          </p>
        </div>

        <div className="rounded-2xl border-l-4 border-yellow-500 bg-white p-6 shadow-xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Marketing Insights
          </h2>
          <p className="text-gray-600">
            Website Visits:{' '}
            <span className="font-bold text-blue-600">20,000</span>
          </p>
          <p className="text-gray-600">
            Bookings from Campaigns:{' '}
            <span className="font-bold text-green-600">1,200</span>
          </p>
        </div>
      </div>

      {/* Sales & Booking Trends */}
      <div className="mt-10 rounded-2xl border-l-4 border-blue-400 bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Sales & Booking Trends
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Clickable Content Block with Redirect */}
      <div 
        className="mt-10 rounded-2xl border-l-4 border-indigo-500 bg-white p-6 shadow-xl cursor-pointer hover:bg-indigo-50 transition-colors duration-300"
        onClick={() => window.location.href = '/analytics'}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              Your Content
            </h2>
            <p className="text-gray-600">
              Access detailed performance metrics, guest behavior analysis, and predictive occupancy trends
            </p>
          </div>
          <div className="text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Customer Feedback and Upcoming Reservations Section */}
      <div className="mt-10 rounded-2xl border-l-4 border-purple-500 bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Customer Feedback & Upcoming Reservations
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Feedback</h3>
            <p className="text-gray-600">
              Overall Rating:{' '}
              <span className="font-bold text-yellow-500">4.5/5</span>
            </p>
            <p className="text-gray-600">
              Total Reviews:{' '}
              <span className="font-bold text-blue-600">1,500</span>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Upcoming Reservations
            </h3>
            <p className="text-gray-600">
              Total Bookings:{' '}
              <span className="font-bold text-green-600">300</span>
            </p>
            <p className="text-gray-600">
              VIP Guests: <span className="font-bold text-blue-600">15</span>
            </p>
          </div>
        </div>
      </div>

      {/* Marketing Campaign Section - Updated with Full Width Sections */}
      <div className="mt-10 rounded-2xl border-l-4 border-indigo-500 bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Marketing Campaign Generator
        </h2>


        {/* Cold Email Generator Section - Full Width */}
        <div className="flex flex-col gap-8">
          <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-indigo-700">Cold Email Generator</h3>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Target Audience
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                  <option>Business Travelers</option>
                  <option>Families</option>
                  <option>Couples</option>
                  <option>Group Bookings</option>
                </select>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Promotion Type
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                  <option>Special Rate</option>
                  <option>Package Deal</option>
                  <option>Extended Stay</option>
                  <option>Seasonal Offer</option>
                </select>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Tone
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Persuasive</option>
                  <option>Urgent</option>
                </select>
              </div>
              
              <div className="md:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Content
                </label>
                <textarea
                  className="h-32 w-full rounded-lg border border-gray-300 p-3 text-sm"
                  placeholder="Enter key points to include in the email..."
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                ></textarea>
              </div>
              
              <div className="md:col-span-3">
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Generate Email
                </button>
              </div>
            </div>
          </div>

          {/* Generate Posters Section - Full Width - UPDATED WITH POSTER GENERATION */}
          <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-indigo-700">Generate Posters</h3>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left Column - Content & Images */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Poster Content
                  </label>
                  <textarea
                    className="h-32 w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="Enter poster details (theme, offers, taglines)..."
                    value={posterContent}
                    onChange={(e) => setPosterContent(e.target.value)}
                  ></textarea>
                </div>
                
                {/* Image Upload Section */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Add Images
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Upload from Device */}
                    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50">
                      <div className="mb-2 text-center">
                        <svg className="mx-auto h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="mt-1 block text-xs font-medium text-gray-700">
                          Upload from Device
                        </span>
                      </div>
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e)} />
                      <button 
                        onClick={() => document.querySelector('input[type="file"]').click()}
                        className="text-xs text-indigo-600 hover:text-indigo-800"
                      >
                        Select File
                      </button>
                    </div>
                    
                    {/* Browse Templates */}
                    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-4 hover:bg-gray-100">
                      <svg className="h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="mt-1 block text-xs font-medium text-gray-700">
                        Browse Templates
                      </span>
                      <button className="text-xs text-indigo-600 hover:text-indigo-800">
                        View Gallery
                      </button>
                    </div>
                  </div>
                  
                  {/* Preview of Selected Images */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {/* Sample preview items - would be populated dynamically */}
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border border-gray-200">
                      <img src="/api/placeholder/64/64" alt="Preview" className="h-full w-full object-cover" />
                      <button className="absolute right-0 top-0 rounded-full bg-red-500 p-1 text-white">×</button>
                    </div>
                  </div>
                </div>
                
                {/* Business Details - UPDATED TO CAPTURE LOCATION */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Business Location
                    </label>
                    <select
                      className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                      value={businessLocation}
                      onChange={(e) => setBusinessLocation(e.target.value)}
                    >
                      <option value="">Select Location</option>
                      <option value="Manali">Manali</option>
                      <option value="Rishikesh">Rishikesh</option>
                      <option value="Kasol">Kasol</option>
                      <option value="Jibhi">Jibhi</option>
                      <option value="Kullu">Kullu</option>
                      <option value="Jammu">Jammu</option>
                      <option value="Kashmir">Kashmir</option>
                      <option value="Ladakh">Ladhak</option>



                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
              </div>
              
              {/* Right Column - Customization Options */}
              <div className="flex flex-col gap-4">
                {/* Template Selection */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Template
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {/* Template options - would be populated dynamically */}
                    <div className="cursor-pointer rounded-md border-2 border-indigo-600 p-1">
                      <img src="/api/placeholder/100/100" alt="Template 1" className="h-full w-full rounded object-cover" />
                    </div>
                    <div className="cursor-pointer rounded-md border border-gray-200 p-1 hover:border-indigo-300">
                      <img src="/api/placeholder/100/100" alt="Template 2" className="h-full w-full rounded object-cover" />
                    </div>
                    <div className="cursor-pointer rounded-md border border-gray-200 p-1 hover:border-indigo-300">
                      <img src="/api/placeholder/100/100" alt="Template 3" className="h-full w-full rounded object-cover" />
                    </div>
                  </div>
                </div>
                
                {/* Offer Configuration */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Promotional Offer
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select className="rounded-lg border border-gray-300 p-2 text-sm">
                      <option>Discount</option>
                      <option>BOGO (Buy One Get One)</option>
                      <option>Free Item</option>
                      <option>Limited Time</option>
                    </select>
                    <input
                      type="text"
                      className="rounded-lg border border-gray-300 p-2 text-sm"
                      placeholder="e.g. 20% OFF"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                      placeholder="Offer conditions (optional)"
                    />
                  </div>
                </div>
                
                {/* Style and Size Options */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Style
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                      <option>Modern</option>
                      <option>Elegant</option>
                      <option>Minimalist</option>
                      <option>Vibrant</option>
                      <option>Vintage</option>
                      <option>Bold</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Size
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                      <option>Instagram Post (1080×1080)</option>
                      <option>Facebook Cover (851×315)</option>
                      <option>Print Flyer (8.5×11)</option>
                      <option>A4 Poster</option>
                      <option>Custom</option>
                    </select>
                  </div>
                </div>
                
                {/* Custom Dimensions (shows conditionally) */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Width (px)</label>
                    <input type="number" className="w-full rounded-lg border border-gray-300 p-2 text-sm" placeholder="Width" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Height (px)</label>
                    <input type="number" className="w-full rounded-lg border border-gray-300 p-2 text-sm" placeholder="Height" />
                  </div>
                </div>
                
                {/* Generate Button - UPDATED WITH ONCLICK HANDLER */}
                <button 
                  className="mt-4 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700"
                  onClick={handleGeneratePoster}
                >
                  Generate Poster
                </button>
              </div>
            </div>
            
            {/* Recently Generated Posters - Preview Section */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium text-gray-700">Recently Generated</h4>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5">
                {generatedPoster && (
                  <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200" onClick={() => setShowPosterModal(true)}>
                    <img src={generatedPoster.posterImage} alt={`${generatedPoster.destination} poster`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity group-hover:opacity-100">
                      <button className="rounded-full bg-white p-2">
                        <svg className="h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
                <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200">
                  <img src="/api/placeholder/200/200" alt="Generated poster" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="rounded-full bg-white p-2">
                      <svg className="h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Generate Promotional Videos Section - Full Width */}
          <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-indigo-700">Generate Promotional Videos</h3>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Video Title
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  placeholder="Enter video title..."
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Video Purpose
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                  <option>Hotel Showcase</option>
                  <option>Special Promotion</option>
                  <option>Event Announcement</option>
                  <option>Testimonial</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Video Content
                </label>
                <textarea
                  className="h-32 w-full rounded-lg border border-gray-300 p-3 text-sm"
                  placeholder="Describe what to include in the video..."
                ></textarea>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Duration
                </label>
                <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                  <option>15 seconds</option>
                  <option>30 seconds</option>
                  <option>60 seconds</option>
                  <option>Custom</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Generate Video
                </button>
              </div>
            </div>
          </div>

{/* Social Media Campaign Generator */}
<div className="mt-8 flex w-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
  <h3 className="mb-4 text-xl font-semibold text-indigo-700">Social Media Campaign Generator</h3>
  
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Platform
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Instagram</option>
        <option>Facebook</option>
        <option>Twitter</option>
        <option>LinkedIn</option>
        <option>TikTok</option>
      </select>
    </div>
    
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Campaign Type
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Brand Awareness</option>
        <option>Special Offer</option>
        <option>Event Promotion</option>
        <option>User-Generated Content</option>
        <option>Influencer Partnership</option>
      </select>
    </div>
    
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Duration
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>1 Week</option>
        <option>2 Weeks</option>
        <option>1 Month</option>
        <option>3 Months</option>
      </select>
    </div>
    
    <div className="md:col-span-3">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Campaign Description
      </label>
      <textarea
        className="h-32 w-full rounded-lg border border-gray-300 p-3 text-sm"
        placeholder="Describe your campaign goals, target audience, and key messaging..."
      ></textarea>
    </div>
    
    <div className="md:col-span-3">
      <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        Generate Campaign
      </button>
    </div>
  </div>
</div>

{/* Seasonal Promotion Generator */}
<div className="mt-8 flex w-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
  <h3 className="mb-4 text-xl font-semibold text-indigo-700">Seasonal Promotion Generator</h3>
  
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Season/Holiday
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Summer Getaway</option>
        <option>Winter Escape</option>
        <option>Valentine's Day</option>
        <option>New Year's Eve</option>
        <option>Diwali Special</option>
        <option>Christmas</option>
        <option>Wedding Season</option>
      </select>
    </div>
    
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Offer Type
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Package Deal</option>
        <option>Percentage Discount</option>
        <option>Free Upgrades</option>
        <option>Complimentary Services</option>
        <option>Stay X Get Y Free</option>
      </select>
    </div>
    
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Booking Window
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Flash Sale (24 Hours)</option>
        <option>Weekend Only</option>
        <option>1 Week</option>
        <option>2 Weeks</option>
        <option>1 Month</option>
      </select>
    </div>
    
    <div className="md:col-span-3">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Promotion Details
      </label>
      <textarea
        className="h-32 w-full rounded-lg border border-gray-300 p-3 text-sm"
        placeholder="Enter specific details about the seasonal promotion, unique selling points, exclusions, etc..."
      ></textarea>
    </div>
    
    <div className="md:col-span-3">
      <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        Generate Seasonal Promotion
      </button>
    </div>
  </div>
</div>



{/* Instagram Posts Generator */}
<div className="mt-8 flex w-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
  <h3 className="mb-4 text-xl font-semibold text-indigo-700">Instagram Posts Generator</h3>
  
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Post Type
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Room Showcase</option>
        <option>Amenity Highlight</option>
        <option>Special Offer</option>
        <option>Food & Beverage</option>
        <option>Guest Experience</option>
        <option>Local Attraction</option>
        <option>Behind the Scenes</option>
      </select>
    </div>
    
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Visual Style
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Elegant & Luxurious</option>
        <option>Bright & Colorful</option>
        <option>Minimalist</option>
        <option>Warm & Cozy</option>
        <option>Modern & Sleek</option>
        <option>Vintage Filter</option>
      </select>
    </div>
    
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Content Format
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Single Image</option>
        <option>Carousel (Multiple Images)</option>
        <option>Before/After</option>
        <option>Text Overlay</option>
        <option>Collage</option>
      </select>
    </div>
    
    <div className="md:col-span-3">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Post Caption
      </label>
      <textarea
        className="h-32 w-full rounded-lg border border-gray-300 p-3 text-sm"
        placeholder="Enter key message, call to action, or details to include in the caption..."
      ></textarea>
    </div>
    
    <div className="md:col-span-2">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Hashtags (Select up to 10)
      </label>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800">
          #hotellife
          <button className="ml-1 text-blue-500 hover:text-blue-700">×</button>
        </span>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800">
          #luxurystay
          <button className="ml-1 text-blue-500 hover:text-blue-700">×</button>
        </span>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800">
          #travelgram
          <button className="ml-1 text-blue-500 hover:text-blue-700">×</button>
        </span>
        <button className="rounded-full border border-dashed border-gray-300 px-3 py-1 text-xs text-gray-500 hover:bg-gray-50">
          + Add hashtag
        </button>
      </div>
    </div>
    
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Posting Schedule
      </label>
      <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
        <option>Post Now</option>
        <option>Schedule for Later</option>
        <option>Add to Content Calendar</option>
      </select>
    </div>
    
    <div className="flex items-center md:col-span-3">
      <label className="flex items-center text-sm text-gray-700">
        <input type="checkbox" className="mr-2 h-4 w-4 rounded border-gray-300" />
        Generate multiple post variations
      </label>
    </div>
    
    <div className="md:col-span-3">
      <div className="flex flex-wrap gap-4">
        <div className="bg-gray-100 p-4 rounded-lg w-full md:w-64">
          <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
            <span className="text-gray-400">Preview Image</span>
          </div>
          <div className="h-24 bg-white rounded border border-gray-300 p-2 text-xs text-gray-500">
            Caption preview will appear here...
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-end">
          <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Generate Instagram Post
          </button>
        </div>
      </div>
    </div>
  </div>
  
</div>
          
          
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;