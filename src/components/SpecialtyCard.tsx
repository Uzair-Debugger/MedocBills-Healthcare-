// SpecialtyCard.jsx
import React from 'react';

const SpecialtyCard = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer min-h-[180px]">
      <div className="text-4xl text-blue-600 mb-4">
        {/* Placeholder for the icon. In a real app, 'Icon' would be an imported React component (e.g., from 'react-icons') */}
        <Icon className="w-12 h-12 maroon" />
      </div>
      <p className="text-lg font-semibold c_green text-center">{title}</p>
    </div>
  );
};

export default SpecialtyCard;