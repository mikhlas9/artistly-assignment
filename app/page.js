'use client';
import { useEffect } from 'react';
import { Button } from '../components/ui/button';
import CategoryCard from '../components/CategoryCard';
import Link from 'next/link';
import { Sparkles, Users, Calendar, Star } from 'lucide-react';

const categories = [
  {
    title: 'Singers',
    "image": "https://www.shutterstock.com/image-photo/singer-holding-microphone-stand-performing-260nw-1039242106.jpg", 
    description: 'Discover talented vocalists for your events.',
  },
  {
    title: 'Dancers',
    "image": "https://static.vecteezy.com/system/resources/thumbnails/041/053/132/small/ai-generated-beautiful-ballerina-in-long-dress-dancing-ai-generative-free-photo.jpeg", 
    description: 'Find professional dancers to light up your stage.',
  },
  {
    title: 'DJs',
    "image": "https://t3.ftcdn.net/jpg/01/10/11/00/360_F_110110063_4kxHX5YKcqrKqFz9udsaqmjkTCoOhKHc.jpg", 
    description: 'Hire top DJs to keep the party going.',
  },
  {
    title: 'Speakers',
    "image": "https://www.shutterstock.com/image-photo/motivational-speaker-headset-performing-on-260nw-2191619627.jpg", 
    description: 'Book inspiring speakers for your events.',
  },
];

const features = [
  {
    icon: Users,
    title: 'Verified Artists',
    description: 'All artists are professionally vetted and verified',
  },
  {
    icon: Calendar,
    title: 'Easy Booking',
    description: 'Simple and secure booking process',
  },
  {
    icon: Star,
    title: 'Top Rated',
    description: 'Only the highest rated performers on our platform',
  },
];



export default function Home() {
  useEffect(() => {
    // Optional: Add future interactivity logic here if needed
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center py-12 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Welcome to <span className="text-yellow-300">Artistly</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Connect with top performing artists for your events. Make every moment unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/artists">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  Explore Artists
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Cards */}
      <section id="categories" className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of talented artists to make your event extraordinary
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Artist?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their ideal performers through Artistly
            </p>
            <Link href="/artists">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}