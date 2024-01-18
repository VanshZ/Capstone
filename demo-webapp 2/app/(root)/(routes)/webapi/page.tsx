"use client";

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './components/columns';
import { formatter } from '@/lib/utils';

export default function WebPage() {

  const [isMounted, setIsMounted] = useState(false);
  const [props, setProps] = useState([]);

  const fetchHouseData = async () => {

    const options = {
      method: 'GET',
      url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
      params: {
        location: 'bergen county, new jersey',
        home_type: 'Houses'
      },
      headers: {
        'X-RapidAPI-Key': '6165ab5d61msh9d63e39a1ba81fbp160b45jsn2457e1d6eafd',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const formattedResult = response.data.props.map((p: any) => {
        return {
          "zpid": p.zpid,
          "propertyType": p.propertyType,
          "address": p.address,
          "price": formatter.format(p.price || 0),
          "listingStatus": p.listingStatus,
          "livingArea": p.livingArea
        }
      });
      setProps(formattedResult);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    setIsMounted(true);
    fetchHouseData();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold'>{`Total Result (${props?.length})`}</h2>
        </div>
        <Separator />
        <DataTable data={props} columns={columns} searchKey='' />
      </div>
    </div>
  )
}
