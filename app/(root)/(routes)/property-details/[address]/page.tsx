"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { ZWColumn, columns } from '@/components/ui/columns';
import { formatter } from '@/lib/utils';

const PropertyDetails = () => {
    const [properties, setProperties] = useState<ZWColumn[]>([]); // Adjusted to ZWColumn[]
    const router = useRouter();

    useEffect(() => {
        const addressParam = router.query.address;
        const decodedAddress = typeof addressParam === 'string' ? decodeURIComponent(addressParam) : decodeURIComponent(addressParam?.[0] || '');

        if (decodedAddress) {
            fetchHouseData(decodedAddress);
        }
    }, [router.query.address]);

    const fetchHouseData = async (decodedAddress: string) => {
        const options = {
            method: 'GET',
            url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
            params: { location: decodedAddress, home_type: 'Houses' },
            headers: {
                'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90', // Use environment variable
                'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            const formattedResult: ZWColumn[] = response.data.props.map((prop: { zpid: any; propertyType: any; address: any; price: any; listingStatus: string; livingArea: { toString: () => any; }; }) => ({
                // Ensure these fields match the ZWColumn interface
                zpid: prop.zpid,
                propertyType: prop.propertyType,
                address: prop.address,
                price: formatter.format(prop.price || 0),
                listingStatus: prop.listingStatus === "SINGLE_FAMILY" ? "Single Family" : prop.listingStatus,
                livingArea: prop.livingArea.toString(),
            }));
            setProperties(formattedResult);
        } catch (error) {
            toast.error('Something went wrong!');
        }
    };

    return (
        <div className="pt-16">
            <div className="w-full max-w-4xl px-4 rounded">
                <h1 className="text-center text-2xl font-bold mb-4 mt-4">Search ROIPro</h1>
                <Separator />
                <div className="mt-4">
                    <h2 className="font-bold">{`Total Results (${properties.length})`}</h2>
                    <div className="overflow-x-auto mt-2 max-h-96">
                        <DataTable data={properties} columns={columns} searchKey={''} detailPageUrl={''} address={''} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
