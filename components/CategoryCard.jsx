import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ title, image, description }) {
  return (
    <Card className="group w-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} category`}
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <Link href="/artists" className="block">
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore {title}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}