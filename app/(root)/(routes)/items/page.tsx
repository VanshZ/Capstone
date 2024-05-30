"use client";
import React, { useState, useEffect } from 'react';
import { ZWColumn, columns } from '../components/columns';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';

export default function DbPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [formattedItems, setFormattedItems] = useState<ZWColumn[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/properties');
            if (!res.ok) {
                console.error('Failed to fetch');
                return;
            }
            const properties = await res.json();
            setFormattedItems(properties.map((item: any) => ({
                propertyType: item.propertyType,
                zpid: item.zpid,
                address: item.address,
                listingStatus: item.listingStatus,
                price: item.price,
                livingArea: item.livingArea,
                isFavorite: true
            })));
        };
        setIsMounted(true);
        fetchData();
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 p-8 pt-6'>
                <div className='flex items-center justify-between pt-5'>
                    <h2 className="font-bold">{`My Favorites`}</h2>
                </div>
                <Separator />
                <div className='pt-5 overflow-auto max-h-96'>
                    <DataTable columns={columns} sourcedata={formattedItems} searchKey='' />
                </div>
            </div>
        </div>
    );
}
