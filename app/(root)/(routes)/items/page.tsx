import React from 'react'
import DbClient from './components/client'
import prismadb from '@/lib/prismadb'
import { DbColumn } from './components/columns';
import { auth } from "@clerk/nextjs";

export default async function DbPage() {
    const { userId } = auth();
    
    const properties = await prismadb.property.findMany({
        where: {
            userId: userId 
        },
        orderBy: {
            createdAt:'desc'
        }
    });

    const formattedItems: DbColumn[] = properties.map((item) => ({
        id: item.id,
        zpid: item.zpid,
        address: item.address,
        listingStatus: item.listingStatus,
        price:item.price,
        propertyType:item.propertyType
    }));

    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 p-8 pt-6'>
                <DbClient data={formattedItems}/>
            </div>
        </div>
    )
}