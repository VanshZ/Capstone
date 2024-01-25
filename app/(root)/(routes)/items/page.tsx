import React from 'react'
import DbClient from './components/client'
import prismadb from '@/lib/prismadb'
import { DbColumn } from './components/columns';
import { format } from 'date-fns';

export default async function DbPage() {
    
    const universities = await prismadb.university.findMany({
        orderBy: {
            createdAt:'desc'
        }
    });

    const formattedItems: DbColumn[] = universities.map((item) => ({
        id: item.id,
        name: item.name,
        webpage: item.webpage,
        createdAt: format(item.createdAt, 'MMM do, yyyy')
    }));

    return (
        <div className='flex-col'>
            <div className='flex-1 space-y-4 p-8 pt-6'>
                <DbClient data={formattedItems}/>
            </div>
        </div>
    )
}
