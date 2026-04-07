// MedicalSpecialties.tsx
import type { ReactElement, SVGProps } from 'react';
import SpecialtyCard from './SpecialtyCard';
import { specialties } from '../constants/data';

const MedicalSpecialties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium c_green uppercase tracking-wider">
            We Cover
          </p>
          <h2 className="text-3xl font-extrabold maroon mt-2 inline-block relative">
            These Medical Specialties
            {/* The blue underline effect */}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-secondary w-3/4"></span>
          </h2>
        </div>

        {/* Specialties Grid */}
        {/* Uses grid-cols-2 for mobile, grid-cols-3 for small screens, and grid-cols-5 for large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard 
              key={index} 
              title={specialty.title} 
              icon={specialty.icon} 
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-secondary cursor-pointer transition duration-150 ease-in-out shadow-lg"
          >
            View All Specialties
          </button>
        </div>
      </div>
    </section>
  );
};

export default MedicalSpecialties;