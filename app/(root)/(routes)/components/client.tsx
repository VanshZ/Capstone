"use client";

import React from 'react'
import { ZWColumn, columns } from './columns';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';

type HomeClientProps = {
    data: ZWColumn[]
}

export const HomeClient: React.FC<HomeClientProps> = ({ data }) => {
    return (
        <>
            <div className='flex items-center justify-between pt-5'>
                <h2 className="font-bold">{`Total Results (${data.length})`}</h2>
            </div>
            <Separator />
            <div className='pt-5 overflow-auto max-h-96'>
                <DataTable columns={columns} sourcedata={data} searchKey='' />
            </div>
        </>
    );
}


