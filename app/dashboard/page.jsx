'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { User, Music, MapPin, DollarSign, Eye } from 'lucide-react';

// Import static JSON data
const artistsData = require('../../data/artists.json');

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Manager Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md border border-blue-100 p-5 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="text-gray-900 font-semibold text-left pl-6 py-3">Name</TableHead>
              <TableHead className="text-gray-900 font-semibold text-left py-3">Category</TableHead>
              <TableHead className="text-gray-900 font-semibold text-left py-3">City</TableHead>
              <TableHead className="text-gray-900 font-semibold text-left py-3">Fee</TableHead>
              <TableHead className="text-gray-900 font-semibold text-right pr-6 py-3">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
  {artistsData.map((artist) => (
    <TableRow
      key={artist.id}
      className="hover:bg-blue-50/70 transition-colors duration-200 items-center"
    >
      <TableCell className="pl-6 py-3 align-middle">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-blue-600" />
          <span>{artist.name}</span>
        </div>
      </TableCell>

      <TableCell className="py-3 align-middle">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-blue-600" />
          <span>{artist.category}</span>
        </div>
      </TableCell>

      <TableCell className="py-3 align-middle">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>{artist.location}</span>
        </div>
      </TableCell>

      <TableCell className="py-3 align-middle">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-blue-600" />
          <span>{artist.priceRange}</span>
        </div>
      </TableCell>

      <TableCell className="text-right pr-6 py-3 align-middle">
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200 flex items-center gap-1 px-2 py-1 cursor-pointer"
            onClick={() => alert(`View details for ${artist.name}`)}
          >
            <Eye className="w-4 h-4" />
            View
          </Button>
        </div>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </div>
    </div>
  );
}