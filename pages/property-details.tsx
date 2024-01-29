import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Container from '@/components/ui/container';

interface PropertyDetailsProps {
  zpid: string; // Assuming `zpid` is passed directly as a prop
}

interface PropertyDetails {
  address?: string;
  price?: number;
  livingArea?: number;
  bedrooms?: number;
  bathrooms?: number;
  // Add other relevant fields based on your API response
}

const PropertyDetailsPage: React.FC<PropertyDetailsProps> = ({ zpid }) => {
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPropertyDetails = async () => {
    const options = {
      method: 'GET',
      url: `https://zillow-com1.p.rapidapi.com/property?zpid=${zpid}`,
      headers: {
        'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setPropertyDetails(response.data);
    } catch (error) {
      toast.error('Failed to fetch property details.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (zpid) {
      fetchPropertyDetails();
    }
  }, [zpid]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!propertyDetails) {
    return <div>No property details found.</div>;
  }

  return (
    <Container>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">Property Details</h1>
        <div>Address: {propertyDetails.address}</div>
        <div>Price: {propertyDetails.price ? `$${propertyDetails.price.toLocaleString()}` : 'N/A'}</div>
        <div>Living Area: {propertyDetails.livingArea ? `${propertyDetails.livingArea} sqft` : 'N/A'}</div>
        <div>Bedrooms: {propertyDetails.bedrooms ?? 'N/A'}</div>
        <div>Bathrooms: {propertyDetails.bathrooms ?? 'N/A'}</div>
        {/* Display more property details as needed */}
      </div>
    </Container>
  );
};

export default PropertyDetailsPage;
