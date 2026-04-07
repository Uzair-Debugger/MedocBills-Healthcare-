// MedicalSpecialties.jsx
import React from 'react';
import SpecialtyCard from './SpecialtyCard';
import '../App.css'
// --- Placeholder Icons ---
// In a real application, you would import these from a library like react-icons
const IconSyringe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1m18-8v-1a3 3 0 00-3-3H6a3 3 0 00-3 3v1"/></svg>;
const IconHeart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>;
const IconSpine = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15M9 5.25v13.5A2.25 2.25 0 0011.25 21v-1.5M15 5.25v13.5A2.25 2.25 0 0112.75 21v-1.5"/></svg>; // Placeholder for spine
const IconTooth = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m4 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>; // Placeholder for tooth
const IconHead = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4-7a4 4 0 100-8 4 4 0 000 8zM12 4v4m0 0a4 4 0 100 8"/></svg>; // Placeholder for head
const IconBrain = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21v-2a4 4 0 00-4-4H3a2 2 0 01-2-2v-4c0-1.66 1.34-3 3-3h18c1.66 0 3 1.34 3 3v4a2 2 0 01-2 2h-2a4 4 0 00-4 4v2m-6 0h4"/></svg>; // Placeholder for brain
const IconEye = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>; // Placeholder for eye
const IconKnee = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l6-7-6-7"/></svg>; // Placeholder for knee
const IconPain = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>; // Placeholder for pain

// Specialty Data Array
const specialties = [
  { title: 'Anesthesiology', icon: IconSyringe },
  { title: 'Cardiology', icon: IconHeart },
  { title: 'Chiropractor', icon: IconSpine },
  { title: 'Dental', icon: IconTooth },
  { title: 'Dermatology', icon: IconSyringe },
  { title: 'Neurology', icon: IconHead },
  { title: 'Neurosurgery', icon: IconBrain },
  { title: 'Ophthalmology', icon: IconEye },
  { title: 'Orthopedics', icon: IconKnee },
  { title: 'Pain Management', icon: IconPain },
];

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