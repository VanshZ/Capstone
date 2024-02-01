import React from 'react'

type PropertyDetailsProps = {
  params: {
      address: string
  }
}

export default function PropertyDetails({ params }: PropertyDetailsProps) {
  const decodedAddress = decodeURIComponent(params.address ?? '');
  return (
    <div>
      <h1>Property Details</h1>
      <p>Address: {decodedAddress}</p>
      {/* Further details */}
    </div>
  );
}


