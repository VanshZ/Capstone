"use client"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, HeartIcon } from "lucide-react"
import axios from "axios"
import { usePathname, useRouter } from "next/navigation"

export type ZWColumn = {
    zpid: string
    propertyType: string
    address: string
    price: string
    listingStatus: string
    livingArea: string
    isFavorite: boolean
}

export const columns: ColumnDef<ZWColumn>[] = [
    {
        accessorKey: "address",
        header: "Address",
        cell: ({ row }) => <Link className="underline" href={`/property-details/${row.original.zpid ?? ''}`} target="_blank">{row.original.address}</Link>
    },
    {
        accessorKey: "propertyType",
        header: "Type",
    },
    {
        accessorKey: "listingStatus",
        header: "Status",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        id: "actions",
        cell: ({ row, column, table }) => {

            const initialValue = row.original.isFavorite;
            const pathname = usePathname();
            const router = useRouter();

            const [value, setValue] = useState(initialValue);

            useEffect(() => {
                setValue(initialValue);
            }, [initialValue]);

            const handleClick = async () => {
                if (pathname === '/items') {
                    table.options.meta?.deleteData(row.index);
                }
                else {
                    setValue(!value);
                    table.options.meta?.updateData(row.index, column.id, !value);
                }

                try {
                    row.original.isFavorite = !value;
                    await axios.post('/api/properties', row.original);
                    
                } catch (error) {
                    console.error("something went wrong");
                }
            };

            return (
                <Button variant="outline" size="icon" className="h-8 w-8 p-0" onClick={() => handleClick()}>
                    {value ? <Heart fill="red" strokeWidth={0} /> : <HeartIcon />}
                </Button>
            );
        }
    }
]


