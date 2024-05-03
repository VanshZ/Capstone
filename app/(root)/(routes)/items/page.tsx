"use client"
import React, { useState, useEffect } from 'react';
import { ZWColumn, columns } from '../components/columns';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import * as XLSX from 'xlsx';

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

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(formattedItems);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Properties");
        XLSX.writeFile(wb, "ExportedData.xlsx");
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 p-8 pt-6'>
                <div className='flex items-center justify-between pt-5'>
                    <h2 className="font-bold">{`My Favorites`}</h2>
                    <button onClick={exportToExcel} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Export to Excel
                    </button>
                </div>
                <Separator />
                <div className='pt-5 overflow-auto max-h-96'>
                    <DataTable columns={columns} sourcedata={formattedItems} searchKey='' />
                </div>
            </div>
        </div>
    );
}
