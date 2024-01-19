// app/components/PropertyCard.tsx
const PropertyCard = ({ property }) => {
    // TODO: Structure the property card layout
    return (
      <div className="border p-4">
        <img src={property.imageUrl} alt={property.address} />
        <h3 className="text-lg">{property.address}</h3>
        {/* Additional property details */}
      </div>
    );
  };
  
  export default PropertyCard;
  