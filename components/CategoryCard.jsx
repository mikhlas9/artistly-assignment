import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ title, image, description }) {
  return (
    <Card className="group w-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card dark:bg-card-dark">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} category`}
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-gray-900/20" />
      </div>
      
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 dark:text-white dark:group-hover:text-blue-400">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 dark:text-gray-300">
          {description}
        </p>
        <Link href="/artists" className="block">
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer dark:bg-card-dark dark:text-text dark:group-hover:bg-blue-500 dark:group-hover:text-white dark:group-hover:border-blue-500"
          >
            Explore {title}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}