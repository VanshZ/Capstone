import React, { useState } from 'react';
import Link from 'next/link';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface DataTableProps<TData extends { address?: string, zpid: string }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
  detailPageUrl: string;
}

export function DataTable<TData extends {
  zpid: string; address?: string | undefined; 
}, TValue>({
  columns,
  data,
  searchKey,
  detailPageUrl,
}: DataTableProps<TData, TValue>) {
  const [favoriteZpids, setFavoriteZpids] = useState<string[]>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const toggleFavorite = (zpid: string) => {
    setFavoriteZpids((prevFavorites) => {
      if (prevFavorites.includes(zpid)) {
        return prevFavorites.filter((id) => id !== zpid);
      } else {
        return [...prevFavorites, zpid];
      }
    });
    // Here you would also update the database with the new favorite status
  };

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
              <TableHead>Favorite</TableHead>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {cell.column.id === 'address' ? (
                    <Link href={`/property-details/${row.original.zpid ?? ''}`} passHref>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Link>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </TableCell>
              ))}
              <TableCell>
                <button
                  className={`heart-button ${favoriteZpids.includes(row.original.zpid) ? 'hearted' : ''}`}
                  onClick={() => toggleFavorite(row.original.zpid)}
                >
                  {favoriteZpids.includes(row.original.zpid) ? '❤️' : '🖤'}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

