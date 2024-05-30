"use client"
// HomePage.jsx

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ZWColumn } from './components/columns';
import { formatter } from '@/lib/utils';
import { HomeClient } from './components/client';
import Image from 'next/image';
import Head from 'next/head';

const HomePage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [properties, setProperties] = useState<ZWColumn[]>([]);
    const [fav, setFav] = useState<string[]>([]);
    const dataTableRef = useRef(null); // Ref for scrolling into the data table

    const fetchHouseData = async () => {
        const params = { location: searchQuery, home_type: 'Houses,Townhouse,Apartment' };
        if (minPrice) params['minPrice'] = minPrice;
        if (maxPrice) params['maxPrice'] = maxPrice;

        const options = {
            method: 'GET',
            url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
            params: params,
            headers: {
                'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90',
                'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);

            const formattedResult: ZWColumn[] = response.data.props.map((prop: { zpid: any; propertyType: any; address: any; price: any; listingStatus: string; livingArea: any; }) => ({
                zpid: prop.zpid,
                propertyType: prop.propertyType,
                address: prop.address,
                price: formatter.format(prop.price || 0),
                listingStatus: prop.listingStatus === "FOR_SALE" ? "For Sale" : prop.listingStatus,
                livingArea: prop.livingArea ? prop.livingArea.toString() : "",
                isFavorite: fav.includes(prop.zpid) ? true : false
            }));

            setProperties(formattedResult);

            if (formattedResult.length > 0 && dataTableRef.current) {
                dataTableRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            toast.error('No Results Found!');
        }
    };

    const fetchFavorites = async () => {
        const res = await fetch('/api/properties');
        if (!res.ok) {
            console.error('Failed to fetch');
            return;
        }
        const data = await res.json();
        setFav(data.map((x: any) => x.zpid));
    };

    useEffect(() => {
        setIsMounted(true);
        fetchFavorites();
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
            </Head>
            <div style={{ backgroundColor: '#b24c43', padding: '50px 20px', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src="/images/banner.png"
                        alt="ROIPro Banner"
                        width={400}
                        height={60}
                        layout="intrinsic"
                    />
                </div>
                <div style={{ position: 'relative', maxWidth: '500px', margin: '20px auto' }}>
                    <input
                        type="text"
                        placeholder="Search location"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', color: '#000', marginBottom: '10px' }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && fetchHouseData()}
                    />

                    <input
                        type="number"
                        placeholder="Min price"
                        style={{ width: '45%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', color: '#000', marginRight: '10px' }}
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Max price"
                        style={{ width: '45%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', color: '#000' }}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />

                    <button
                        onClick={fetchHouseData}
                        style={{ position: 'absolute', top: '0', right: '0', padding: '10px', border: 'none', borderRadius: '0 5px 5px 0', backgroundColor: 'white', color: '#b24c43', cursor: 'pointer' }}
                    >
                        🔍
                    </button>
                </div>
            </div>
            
            <div
                ref={dataTableRef}
                style={{
                    padding: '40px 20px',
                    backgroundColor: 'white',
                    color: 'black',
                    textAlign: 'center',
                    fontFamily: 'Optima, sans-serif', // Add the fontFamily here
                }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>The smartest way to invest in real estate</h2>
                <p style={{ fontSize: '1rem' }}>
                    Access all of your property information at the click of a button.
                </p>
            </div>

            <HomeClient data={properties} />
        </div>
    );
};

export default HomePage;
