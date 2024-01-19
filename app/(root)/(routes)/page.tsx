"use client"
import React, { useState } from 'react';

// Assuming you are using axios for HTTP requests
import axios from 'axios';

export default function DbPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [properties, setProperties] = useState([]); // This will hold the list of properties

    const fetchProperties = async () => {
        try {
            const options = {
                method: 'GET',
                url: `https://${process.env.RAPIDAPI_HOST}/property`,
                params: {location: searchQuery},
                headers: {
                    'x-rapidapi-host': process.env.RAPIDAPI_HOST,
                    'x-rapidapi-key': process.env.RAPIDAPI_KEY
                }
            };

            const response = await axios.request(options);
            setProperties(response.data.properties); // Update according to the actual response structure
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    // Render your input and button here, and call fetchProperties on button click
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='w-full max-w-md'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter area"
                    className="w-full p-2 border border-gray-300 rounded"
                    onKeyPress={(e) => e.key === 'Enter' && fetchProperties()}
                />
                <button onClick={fetchProperties} className="w-full p-2 bg-blue-500 text-white rounded mt-2">
                    Search 🔍
                </button>
            </div>
            {properties.length > 0 && (
                <div className='flex-1 space-y-4 p-8 pt-6'>
                    {/* Render your list of properties using the data in `properties` */}
                    {properties.map((property, index) => (
                        <div key={index} className='border p-4 rounded shadow'>
                            {/* Display property details */}
                            <p>{property.address}</p>
                            {/* Add more details as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
