import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { jobs } from '../constants/data';
import { Container, Typography } from '../components/layout';

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ memoized filtering (performance)
  const filteredJobs = useMemo(() => {
    return jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-deep via-primary-dark to-primary text-white py-24 px-6">
        <Container size="md" className="text-center">
          
          <Typography
            as="h1"
            variant="h1"
            weight="bold"
            color="inherit"
            className="mb-4 leading-tight"
          >
            Invest in your career,<br />
            <span className="text-secondary">Grow</span> with tech's top talent.
          </Typography>

          {/* Search Input */}
          <div className="mt-8 max-w-xl mx-auto">
            <label htmlFor="job-search" className="sr-only">
              Search Jobs
            </label>

            <div className="relative">
              <input
                id="job-search"
                type="text"
                placeholder="Search Job Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg outline-2 outline-secondary"
                aria-label="Search jobs by title or category"
              />

              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                aria-hidden="true"
              />
            </div>
          </div>

        </Container>
      </section>

      {/* Jobs Section */}
      <section className="py-12 px-6">
        <Container className="max-w-7xl">

          {/* Jobs Count */}
          <div className="mb-8">
            <Typography
              as="span"
              size="sm"
              weight="semibold"
              className="inline-block bg-primary text-white px-6 py-2 rounded"
            >
              Jobs Available: {filteredJobs.length}
            </Typography>
          </div>

          {/* Jobs Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                role="listitem"
                className="group border-2 border-gray-200 rounded-lg p-6 cursor-pointer bg-white hover:scale-105 hover:bg-gradient-to-br hover:from-primary-dark hover:to-primary-deep hover:border-primary hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <Typography
                  as="h3"
                  variant="h5"
                  weight="bold"
                  className="mb-2 text-gray-900 group-hover:text-white transition-colors duration-300"
                >
                  {job.title}
                </Typography>

                <Typography
                  as="p"
                  size="sm"
                  className="mb-4 group-hover:text-red-300 transition-colors duration-300"
                >
                  {job.category}
                </Typography>

                <div className="space-y-2">
                  
                  <div className="flex items-start gap-2 text-sm text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0 text-gray-700 group-hover:text-gray-200 transition-colors duration-300" aria-hidden="true" />
                    
                    <Typography
                      as="span"
                      size="sm"
                      className="text-gray-700 group-hover:text-gray-200"
                    >
                      Last Date:
                    </Typography>

                    <Typography
                      as="span"
                      size="sm"
                      weight="semibold"
                      className="text-accent-red group-hover:text-red-300"
                    >
                      {job.lastDate}
                    </Typography>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Typography as="p" size="sm" className="text-gray-500">
                No jobs found matching your search.
              </Typography>
            </div>
          )}

        </Container>
      </section>
    </div>
  );
}