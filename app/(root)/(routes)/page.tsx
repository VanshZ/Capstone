"use client"
// HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Container from "@/components/ui/container";
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './components/columns';
import { formatter } from '@/lib/utils';
import { TableRow } from '@/components/ui/table';

const HomePage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [properties, setProperties] = useState([]);

    const fetchHouseData = async () => {
        const options = {
            method: 'GET',
            url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
            params: { location: searchQuery, home_type: 'Houses' },
            headers: {
                'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90',
                'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            const formattedResult = response.data.props.map((prop: { zpid: any; propertyType: any; address: any; price: any; listingStatus: any; livingArea: any; }) => ({
                zpid: prop.zpid,
                propertyType: prop.propertyType,
                address: prop.address,
                price: formatter.format(prop.price || 0),
                listingStatus: prop.listingStatus,
                livingArea: prop.livingArea,
                // Add other property details you need
            }));
            setProperties(formattedResult);
        } catch (error) {
            toast.error('Something went wrong!');
        }
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Container>
            <div className="pt-16">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-full max-w-4xl px-4">
                        <h1 className="text-center text-2xl font-bold mb-4">Property Search</h1>
                        <input
                            type="text"
                            placeholder="Enter location"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && fetchHouseData()}
                        />
                        <button
                            onClick={fetchHouseData}
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Search
                        </button>
                        <Separator />
                        <h2 className="font-bold mt-4">{`Total Results (${properties.length})`}</h2>
                        <div className="overflow-x-auto">
                            <DataTable 
                                data={properties} 
                                columns={columns} 
                                searchKey={searchQuery} 
                                detailPageUrl={"/property-details"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
