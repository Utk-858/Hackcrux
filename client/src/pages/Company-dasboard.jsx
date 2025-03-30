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

const CompanyDashboard = () => {
  const { hotelId } = useParams();
  const [posterContent, setPosterContent] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [emailContent, setEmailContent] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-10 mt-20 text-center text-4xl font-bold text-blue-700">
        Welcome to {hotelId}'s Dashboard
      </h1>

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

          {/* Generate Posters Section - Full Width */}
          <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-indigo-700">Generate Posters</h3>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-2">
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
              
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Style
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                    <option>Modern</option>
                    <option>Elegant</option>
                    <option>Minimalist</option>
                    <option>Vibrant</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Size
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 p-2 text-sm">
                    <option>Instagram Post (1080x1080)</option>
                    <option>Facebook Cover (851x315)</option>
                    <option>Print Flyer (8.5x11)</option>
                    <option>Custom</option>
                  </select>
                </div>
                
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  Generate Poster
                </button>
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