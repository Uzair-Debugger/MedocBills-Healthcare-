import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { jobs } from '../constants/data';
export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Invest in your career,<br />
            <span className="text-cyan-400">Grow</span> with tech's top talent.
          </h1>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Job Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Jobs Available Badge */}
          <div className="mb-8">
            <span className="inline-block bg-indigo-800 text-white px-6 py-2 rounded font-semibold">
              Jobs Available: {filteredJobs.length}
            </span>
          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onMouseEnter={() => setHoveredCard(job.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === job.id ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.3s ease-in-out',
                  background: hoveredCard === job.id 
                    ? 'linear-gradient(135deg, #3730a3 0%, #312e81 100%)'
                    : 'white',
                  borderColor: hoveredCard === job.id ? '#3730a3' : '#e5e7eb',
                  boxShadow: hoveredCard === job.id 
                    ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
                    : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
                className="border-2 rounded-lg p-6 cursor-pointer"
              >
                <h3 
                  style={{
                    color: hoveredCard === job.id ? 'white' : '#111827',
                    transition: 'color 0.3s ease-in-out'
                  }}
                  className="text-xl font-bold mb-2"
                >
                  {job.title}
                </h3>
                
                <p 
                  style={{
                    color: hoveredCard === job.id ? '#67e8f9' : '#4b5563',
                    transition: 'color 0.3s ease-in-out'
                  }}
                  className="text-sm mb-4"
                >
                  {job.category}
                </p>
                
                <div className="space-y-2">
                  <div 
                    style={{
                      color: hoveredCard === job.id ? '#e5e7eb' : '#374151',
                      transition: 'color 0.3s ease-in-out'
                    }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  
                  <div 
                    style={{
                      transition: 'color 0.3s ease-in-out'
                    }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Calendar 
                      style={{
                        color: hoveredCard === job.id ? '#e5e7eb' : '#374151'
                      }}
                      className="w-4 h-4 flex-shrink-0" 
                    />
                    <span 
                      style={{
                        color: hoveredCard === job.id ? '#e5e7eb' : '#374151'
                      }}
                    >
                      Last Date:{' '}
                    </span>
                    <span 
                      style={{
                        color: hoveredCard === job.id ? '#fca5a5' : '#ef4444'
                      }}
                      className="font-semibold"
                    >
                      {job.lastDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No jobs found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}