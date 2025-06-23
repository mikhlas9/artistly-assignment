'use client'
import { useState } from 'react';
import ArtistContext from './ArtistContext';


export const ArtistContextProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);

  const loadArtists = (data) => {
    setArtists(data);
    setFilteredArtists(data);
  };

  const filterArtists = (filters) => {
    let filtered = artists;
    if (filters.category) {
      filtered = filtered.filter((artist) => artist.category === filters.category);
    }
    if (filters.location) {
      filtered = filtered.filter((artist) => artist.location.includes(filters.location));
    }
    if (filters.priceRange) {
      filtered = filtered.filter((artist) => artist.priceRange === filters.priceRange);
    }
    setFilteredArtists(filtered);
  };

  return (
    <ArtistContext.Provider value={{ artists, filteredArtists, loadArtists, filterArtists }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => useContext(ArtistContext);