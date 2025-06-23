'use client';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { useArtistContext } from '../context/ArtistContext';
import { Filter, RotateCcw } from 'lucide-react';

export default function FilterBlock() {
  const { filterArtists } = useArtistContext();
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const activeFilters = {};
    if (filters.category && filters.category !== 'all') {
      activeFilters.category = filters.category;
    }
    if (filters.location && filters.location !== 'all') {
      activeFilters.location = filters.location;
    }
    if (filters.priceRange && filters.priceRange !== 'all') {
      activeFilters.priceRange = filters.priceRange;
    }
    filterArtists(activeFilters);
  };

  const resetFilters = () => {
    setFilters({ category: '', location: '', priceRange: '' });
    filterArtists({});
  };

  return (
    <div className="bg-card rounded-lg shadow-md border border-border p-4 mb-4 dark:bg-card-dark dark:border-border-dark">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="w-4 h-4 text-primary dark:text-blue-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Artists</h2>
      </div>
      
      {/* Mobile: Filters in row, buttons in row. Desktop: Everything in single row */}
      <div className="space-y-3 lg:space-y-0 lg:flex lg:items-center lg:gap-2">
        {/* Filter row */}
        <div className="grid grid-cols-3 gap-2 lg:flex lg:gap-2">
          <Select
            value={filters.category}
            onValueChange={(value) => handleFilterChange('category', value)}
          >
            <SelectTrigger className="h-9 border-border focus:border-primary focus:ring-primary text-xs lg:text-sm lg:w-32 dark:border-border-dark dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:bg-card-dark dark:text-text dark:placeholder-gray-400">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-card dark:bg-card-dark dark:text-text">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Singer">Singer</SelectItem>
              <SelectItem value="Dancer">Dancer</SelectItem>
              <SelectItem value="DJ">DJ</SelectItem>
              <SelectItem value="Speaker">Speaker</SelectItem>
            </SelectContent>
          </Select>
          
          <Select
            value={filters.location}
            onValueChange={(value) => handleFilterChange('location', value)}
          >
            <SelectTrigger className="h-9 border-border focus:border-primary focus:ring-primary text-xs lg:text-sm lg:w-32 dark:border-border-dark dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:bg-card-dark dark:text-text dark:placeholder-gray-400">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-card dark:bg-card-dark dark:text-text">
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="New York, NY">New York, NY</SelectItem>
              <SelectItem value="Los Angeles, CA">Los Angeles, CA</SelectItem>
              <SelectItem value="Chicago, IL">Chicago, IL</SelectItem>
              <SelectItem value="Miami, FL">Miami, FL</SelectItem>
            </SelectContent>
          </Select>
          
          <Select
            value={filters.priceRange}
            onValueChange={(value) => handleFilterChange('priceRange', value)}
          >
            <SelectTrigger className="h-9 border-border focus:border-primary focus:ring-primary text-xs lg:text-sm lg:w-36 dark:border-border-dark dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:bg-card-dark dark:text-text dark:placeholder-gray-400">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent className="bg-card dark:bg-card-dark dark:text-text">
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="$400 - $800">$400 - $800</SelectItem>
              <SelectItem value="$500 - $1000">$500 - $1000</SelectItem>
              <SelectItem value="$800 - $1500">$800 - $1500</SelectItem>
              <SelectItem value="$1000 - $2000">$1000 - $2000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Button row */}
        <div className="flex gap-2 lg:ml-2">
          <Button 
            onClick={applyFilters} 
            className="bg-primary text-white hover:bg-blue-700 px-3 py-2 h-9 flex-1 lg:flex-initial lg:px-4 text-sm cursor-pointer dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Apply Filters
          </Button>
          <Button 
            onClick={resetFilters} 
            variant="outline" 
            className="px-2 py-2 h-9 flex items-center justify-center lg:px-3 cursor-pointer border-border dark:border-border-dark dark:text-text dark:hover:bg-gray-700"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}