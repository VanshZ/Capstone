import React from 'react';
import { MainNav } from "@/components/main-nav";

// Import local images if you have them, or replace with URLs
const houseImage1 = 'https://sometimes-homemade.com/wp-content/uploads/2016/02/exterior.png'; // Example for local image
const houseImage2 = 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg'; // Example for local image

const Portfolio = () => {
  // Dummy data for the property listings
  const listings = [
    {
      id: 1,
      image: houseImage1, // Replace with image URL if not local
      address: '95 Washington Street Clarksville, TN 37040',
      area: 'Memphis',
      price: '$795,000',
      beds: 5,
      baths: 3,
      size: '2795 sq. ft.',
      newListing: true,
    },
    {
      id: 2,
      image: houseImage2, // Replace with image URL if not local
      address: '34 South Ave West lake, OH 82039',
      area: 'Bay Village',
      price: '$450,000',
      beds: 2,
      baths: 2,
      size: '984 sq. ft.',
      newListing: true,
    },
    // ... other listings
  ];

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <MainNav className="mx-6" />
      <div>
        {listings.map((listing) => (
          <div key={listing.id} style={{ border: '2px solid #ddd', padding: '10px', margin: '20px' }}>
            {listing.newListing && <span style={{ color: 'green' }}>New Listing</span>}
            <p></p>
            <img src={listing.image} alt={`Listing ${listing.id}`} style={{ width: '50%', maxHeight: '300px', objectFit: 'cover' }} />
            <h2>{listing.price}</h2>
            <p>{listing.address}</p>
            <p>{listing.area}</p>
            <p>
              Beds: {listing.beds} | Baths: {listing.baths} | Size: {listing.size}
            </p>
            <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Analyze
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;