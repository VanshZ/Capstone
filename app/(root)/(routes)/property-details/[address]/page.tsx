"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

type PropertyDetailsProps = {
    params: {
        address: string
    }
}
const PropertyDetails = ({ params }: PropertyDetailsProps) => {
    const [properties, setProperties] = useState<object>({}); // Adjusted to ZWColumn[]
    useEffect(() => {
        if (params.address) {
            fetchHouseData(params.address);
        }
    }, [params.address]);

    const fetchHouseData = async (decodedAddress: string) => {
        const options = {
            method: 'GET',
            url: 'https://zillow-com1.p.rapidapi.com/property',
            params: { zpid: params.address },
            headers: {
                'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90', // Use environment variable
                'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            setProperties(response.data);
        } catch (error) {
            toast.error('Something went wrong!');
        }
    };

    return (
        <div className="flex mt-2">
  {/* Image container with specified width and margin */}
  <div className="shadow-sm rounded-sm overflow-hidden ml-6 flex-none" style={{ width: '500px' }}> {/* Adjust the width as needed */}
    {properties.imgSrc && (
      <img src={properties.imgSrc} alt="Property" className="rounded-lg w-full h-auto" />
    )}
  </div>

  {/* Description container with padding and flex-grow to take up remaining space */}
  <div className="pl-4 flex-grow ">
    <div className="text-4xl font-bold mt-4 mb-4"> {/* TailwindCSS classes for larger, bold text */}
    ${new Intl.NumberFormat('en-US').format(properties.price)}
    </div>

    <div className='text-xl font-bold'>
      {`${properties.address?.streetAddress}, ${properties.address?.city} ${properties.address?.state}, ${properties.address?.zipcode}`}
    </div>
    <div className="mt-2 max-w-xl"> {/* Change max-w-lg to your preferred width */}
  {properties.description}
</div>

  </div>
</div>

      );
      
};

export default PropertyDetails;
