'use client';
import { useEffect } from 'react';
import { useArtistContext } from '../../context/ArtistContext';
import FilterBlock from '../../components/FilterBlock';
import ArtistCard from '../../components/ArtistCard';

// Import static JSON data
import artistsData from '../../data/artists.json';

export default function ArtistsPage() {
  const { loadArtists, filteredArtists } = useArtistContext();

  // Load artists into context on client-side mount
  useEffect(() => {
    loadArtists(artistsData);
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="container mx-auto px-4 py-4 pt-24 bg-background text-text transition-colors duration-300">
      <h1 className="text-3xl font-bold text-primary text-center mb-4 dark:text-blue-400">Find Artists</h1>
      <FilterBlock />
      
      {/* Reduced gap between filter and cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <div className="text-center col-span-full text-gray-600 py-8 dark:text-gray-300">
            <p className="text-lg">No artists found matching your criteria.</p>
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}