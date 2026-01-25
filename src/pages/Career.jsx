import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { jobs } from '../constants/data';
export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-deep via-primary-dark to-primary text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Invest in your career,<br />
            <span className="text-secondary">Grow</span> with tech's top talent.
          </h1>

          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Job Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full outline-2 text-white outline-secondary px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
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
            <span className="inline-block bg-primary text-white px-6 py-2 rounded font-semibold">
              Jobs Available: {filteredJobs.length}
            </span>
          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group border-2 border-gray-200 rounded-lg p-6 cursor-pointer bg-white hover:scale-105 hover:bg-gradient-to-br hover:from-primary-dark hover:to-primary-deep hover:border-primary hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {job.title}
                </h3>

                <p className="text-sm mb-4 group-hover:text-red-300 transition-colors duration-300">
                  {job.category}
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0 text-gray-700 group-hover:text-gray-200 transition-colors duration-300" />
                    <span className="text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
                      Last Date:{' '}
                    </span>
                    <span className="font-semibold text-accent-red group-hover:text-red-300 transition-colors duration-300">
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