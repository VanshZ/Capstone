import { useRouter } from 'next/router';

const PropertyDetails = () => {
  const router = useRouter();
  // Extract the 'address' parameter from the URL
  const { address } = router.query;

  // Handle the case where 'address' might be a string or an array of strings
  const addressValue = Array.isArray(address) ? address[0] : address;
  const decodedAddress = decodeURIComponent(addressValue ?? '');

  return (
    <div>
      <h1>Property Details</h1>
      <p>Address: {decodedAddress}</p>
      {/* Further details */}
    </div>
  );
};

export default PropertyDetails;
