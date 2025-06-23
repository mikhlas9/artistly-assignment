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
import artistsData from '../../data/artists.json';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-24 bg-background text-text transition-colors duration-300">
      <h1 className="text-3xl font-bold text-primary text-center mb-6 dark:text-blue-400">Manager Dashboard</h1>
      <div className="bg-card rounded-lg shadow-md border border-border p-5 overflow-x-auto dark:bg-card-dark dark:border-border-dark">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50 dark:bg-gray-800">
              <TableHead className="text-gray-900 font-semibold text-left pl-6 py-3 dark:text-white">Name</TableHead>
              <TableHead className="text-gray-900 font-semibold text-left py-3 dark:text-white">Category</TableHead>
              <TableHead className="text-gray-900 font-semibold text-left py-3 dark:text-white">City</TableHead>
              <TableHead className="text-gray-900 font-semibold text-left py-3 dark:text-white">Fee</TableHead>
              <TableHead className="text-gray-900 font-semibold text-right pr-6 py-3 dark:text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {artistsData.map((artist) => (
              <TableRow
                key={artist.id}
                className="hover:bg-blue-50/70 transition-colors duration-200 items-center dark:hover:bg-gray-700/50"
              >
                <TableCell className="pl-6 py-3 align-middle">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary dark:text-blue-400" />
                    <span className="dark:text-gray-300">{artist.name}</span>
                  </div>
                </TableCell>

                <TableCell className="py-3 align-middle">
                  <div className="flex items-center gap-2">
                    <span className="dark:text-gray-300">{artist.category}</span>
                  </div>
                </TableCell>

                <TableCell className="py-3 align-middle">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary dark:text-blue-400" />
                    <span className="dark:text-gray-300">{artist.location}</span>
                  </div>
                </TableCell>

                <TableCell className="py-3 align-middle">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary dark:text-blue-400" />
                    <span className="dark:text-gray-300">{artist.priceRange}</span>
                  </div>
                </TableCell>

                <TableCell className="text-right pr-6 py-3 align-middle">
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-blue-50 text-primary hover:bg-blue-100 border-border flex items-center gap-1 px-2 py-1 cursor-pointer dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 dark:border-border-dark"
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