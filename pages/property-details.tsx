import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Container from "@/components/ui/container";import { MainNav } from "@/components/main-nav";
import { request } from 'https';
import { url } from 'inspector';
import { stringify } from 'querystring';

// Define URL parameters here
interface Props {
  zpid: string;
};
// Declare FC with URL parameters
const PropertyDetails: React.FC<Props> = ({zpid}) => {
  //const [properties, setProperties] = useState({imgSrc: "", address: "", city: "", price: 1, beds: 0, baths: 0});
  const [isMounted, setIsMounted] = useState(false);
  const [properties, setProperties] = useState({imgSrc: "", addressCity: "", price: 0, bedrooms: 0, bathrooms: 0});
  var isDone = false;
 
  


  const getHouseDetails = async () => {
    const options = {
      method: 'GET',
      url: 'https://zillow-com1.p.rapidapi.com/property',
      params: { zpid: 37929400},
      headers: {
        'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
        },
      };

      
        try {
            const response = axios.request(options)
            .then((response: { data: { imgSrc: any, address: any, price: any, bedrooms: any, bathrooms: any,}; }) => {
              setProperties({
                imgSrc: response.data.imgSrc,
                addressCity: response.data.address.city,
                //city: response.data.address.city,
                price: response.data.price,
                bedrooms: response.data.bedrooms,
                bathrooms: response.data.bathrooms,
                //size: response.data.livingArea,
                //units: response.data.livingAreaUnits
              });
            });
           
        } catch (error) {
            toast.error('Something went wrong!');
        }

        
      }
  //};

  getHouseDetails();

  useEffect(() => {
      setIsMounted(true);
  //});
  }, []);

  if (!isMounted) {
      return null;
  }

  /*
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <MainNav className="mx-6" />
      <div>
          <div key={properties.zpid} style={{ border: '2px solid #ddd', padding: '10px', margin: '20px' }}>
            <p></p>
            <img src={properties.imgSrc} alt={`${properties.zpid}`} style={{ width: '50%', maxHeight: '300px', objectFit: 'cover' }} />
            <h2>{properties.price}</h2>
            <p>{properties.address}</p>
            <p>{properties.city}</p>
            <p>
              Beds: {properties.beds} | Baths: {properties.baths} | Size: {properties.size}
            </p>
            <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Analyze
            </button>
          </div>
          )}
      </div>
    </div>
  );
  */
 return (
  
  <Container>
    <div>price: {properties.price} </div>
    <p>City: {properties.addressCity} </p>
  </Container>
 );
      
};


export default PropertyDetails;
