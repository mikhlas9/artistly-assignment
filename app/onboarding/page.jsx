'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, Upload, User, MapPin, DollarSign, Briefcase, FileText } from 'lucide-react';

export default function OnboardingPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [fileName, setFileName] = useState(''); // Track selected file name

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      bio: '',
      categories: [],
      languages: [],
      feeRange: '',
      location: '',
      profileImage: null,
    },
  });

  const onSubmit = (data) => {
    // Convert file to a readable format if needed (for console logging)
    const formData = {
      ...data,
      profileImage: data.profileImage ? data.profileImage.name : null,
    };
    console.log('Form Submitted:', formData);
    setShowSuccess(true);
    reset();
    setFileName(''); // Clear file name on reset
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-24 text-text transition-colors duration-300">
        <div className="bg-card rounded-lg shadow-md p-8 text-center max-w-md w-full border border-border dark:bg-card-dark dark:border-border-dark">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 dark:bg-gray-800">
            <CheckCircle className="w-8 h-8 text-primary dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">Welcome Aboard!</h2>
          <p className="text-gray-600 mb-6 dark:text-gray-300">Your artist profile has been successfully created.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 pt-24 text-text transition-colors duration-300">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 dark:text-blue-400">Become an Artist</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto dark:text-gray-300">
            Join our community of talented artists
          </p>
        </div>

        <div className="space-y-8">
          {/* Personal Information Card */}
          <div className="bg-card rounded-lg shadow-md p-6 border border-border dark:bg-card-dark dark:border-border-dark">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-primary dark:text-blue-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Full Name *
                </label>
                <Input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="h-12 bg-white dark:bg-gray-800 dark:text-text"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 dark:text-gray-500" />
                  <Input
                    id="location"
                    {...register('location', { required: 'Location is required' })}
                    className="h-12 pl-11 bg-white dark:bg-gray-800 dark:text-text"
                    placeholder="Enter your city"
                  />
                </div>
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
              </div>

              {/* Bio */}
              <div className="lg:col-span-2">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Bio *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5 dark:text-gray-500" />
                  <Textarea
                    id="bio"
                    {...register('bio', { 
                      required: 'Bio is required', 
                      maxLength: { value: 500, message: 'Bio cannot exceed 500 characters' } 
                    })}
                    className="min-h-24 pl-11 bg-white dark:bg-gray-800 dark:text-text"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
              </div>

              {/* Profile Image */}
              <div className="lg:col-span-2">
                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Profile Image
                </label>
                <Controller
                  name="profileImage"
                  control={control}
                  render={({ field }) => (
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors dark:border-border-dark dark:hover:border-blue-400">
                      <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2 dark:text-gray-500" />
                      <input
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          field.onChange(file);
                          setFileName(file ? file.name : '');
                        }}
                      />
                      <label htmlFor="profileImage" className="cursor-pointer">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {fileName || 'Click to upload or drag and drop'}
                        </span>
                        <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">PNG, JPG up to 10MB</p>
                      </label>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Professional Information Card */}
          <div className="bg-card rounded-lg shadow-md p-6 border border-border dark:bg-card-dark dark:border-border-dark">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-primary dark:text-blue-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Details</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Categories *
                </label>
                <Controller
                  name="categories"
                  control={control}
                  rules={{ required: 'At least one category is required' }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      {['Singer', 'Dancer', 'DJ', 'Speaker'].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={field.value.includes(category)}
                            onCheckedChange={(checked) => {
                              const updated = checked
                                ? [...field.value, category]
                                : field.value.filter((val) => val !== category);
                              field.onChange(updated);
                            }}
                            className="dark:border-gray-600 dark:bg-card-dark dark:checked:bg-primary dark:checked:border-primary"
                          />
                          <label htmlFor={`category-${category}`} className="text-sm dark:text-gray-300">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                />
                {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories.message}</p>}
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Languages *
                </label>
                <Controller
                  name="languages"
                  control={control}
                  rules={{ required: 'At least one language is required' }}
                  render={({ field }) => (
                    <div className="space-y-2">
                      {['English', 'Spanish', 'French', 'German'].map((language) => (
                        <div key={language} className="flex items-center space-x-2">
                          <Checkbox
                            id={`language-${language}`}
                            checked={field.value.includes(language)}
                            onCheckedChange={(checked) => {
                              const updated = checked
                                ? [...field.value, language]
                                : field.value.filter((val) => val !== language);
                              field.onChange(updated);
                            }}
                            className="dark:border-gray-600 dark:bg-card-dark dark:checked:bg-primary dark:checked:border-primary"
                          />
                          <label htmlFor={`language-${language}`} className="text-sm dark:text-gray-300">
                            {language}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                />
                {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages.message}</p>}
              </div>

              {/* Fee Range */}
              <div className="lg:col-span-2">
                <label htmlFor="feeRange" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Fee Range *
                </label>
                <Controller
                  name="feeRange"
                  control={control}
                  rules={{ required: 'Fee range is required' }}
                  render={({ field }) => (
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 dark:text-gray-500" />
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="h-12 pl-11 bg-white dark:bg-gray-800 dark:text-text">
                          <SelectValue placeholder="Select your fee range" />
                        </SelectTrigger>
                        <SelectContent className="bg-card dark:bg-card-dark dark:text-text">
                          <SelectItem value="$400 - $800">$400 - $800</SelectItem>
                          <SelectItem value="$500 - $1000">$500 - $1000</SelectItem>
                          <SelectItem value="$800 - $1500">$800 - $1500</SelectItem>
                          <SelectItem value="$1000 - $2000">$1000 - $2000</SelectItem>
                          <SelectItem value="$2000+">$2000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
                {errors.feeRange && <p className="text-red-500 text-sm mt-1">{errors.feeRange.message}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              type="submit" 
              onClick={handleSubmit(onSubmit)}
              className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg cursor-pointer dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Complete Registration
            </Button>
            <p className="text-sm text-gray-600 mt-4 dark:text-gray-300">
              By submitting, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}