"use client"
import { ColumnDef } from "@tanstack/react-table"

export type DbColumn = {
    id: string
    zpid: string
    address?: string | null
    listingStatus?: string | null
    livingArea?: string | null
    price?: string | null
    propertyType?: string | null
}

export const columns: ColumnDef<DbColumn>[] = [
    {
        accessorKey: "zpid",
        header: "zid",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "listingStatus",
        header: "Status",
    },
    {
        accessorKey: "livingArea",
        header: "Area",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "propertyType",
        header: "Type",
    }
]
