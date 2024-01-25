"use client"
import { ColumnDef } from "@tanstack/react-table"

export type DbColumn = {
    id: string
    name: string
    webpage: string
    createdAt: string
}

export const columns: ColumnDef<DbColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "webpage",
        header: "Website",
    }
]
