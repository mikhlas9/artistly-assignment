import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { User, MapPin, DollarSign, Tag } from 'lucide-react';

export default function ArtistCard({ artist }) {
  return (
    <Card className="w-full shadow-md border border-border hover:shadow-lg transition-all duration-200 hover:scale-[1.02] bg-card dark:bg-card-dark">
      <CardHeader className="p-3 pb-2">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2 truncate dark:text-white">
          <User className="w-4 h-4 text-primary flex-shrink-0 dark:text-blue-400" />
          <span className="truncate">{artist.name}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-3 pt-0">
        <div className="relative mb-3 overflow-hidden rounded-md">
          <img
            src={artist.image}
            alt={`${artist.name} profile`}
            className="w-full h-36 sm:h-40 object-cover transition-transform duration-200 hover:scale-105"
          />
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0 dark:text-blue-400" />
            <span className="line-clamp-1">{artist.location}</span>
          </div>
          
          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <DollarSign className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0 dark:text-blue-400" />
            <span className="line-clamp-1">{artist.priceRange}</span>
          </div>
          
          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Tag className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0 dark:text-blue-400" />
            <span className="line-clamp-1">{artist.category}</span>
          </div>
        </div>
        
        <Button
          variant="default"
          className="w-full bg-primary text-white hover:bg-blue-700 transition-colors h-9 text-sm font-medium cursor-pointer dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={() => alert(`Request quote for ${artist.name}`)}
        >
          Ask for Quote
        </Button>
      </CardContent>
    </Card>
  );
}