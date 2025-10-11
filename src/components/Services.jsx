import React, { useEffect, useState, useRef } from 'react';
import { Activity, Stethoscope, FileText, Users, Clock, Award, Heart, Shield } from 'lucide-react';

// Mock data for demonstration
const servicesData = [
  {
    title: "Medical Billing",
    description: "Comprehensive billing solutions for healthcare providers with accurate coding and timely claim submission."
  },
  {
    title: "Revenue Cycle Management",
    description: "End-to-end revenue cycle optimization to maximize collections and reduce administrative burden."
  },
  {
    title: "Claims Processing",
    description: "Efficient claims management with high first-pass approval rates and quick reimbursements."
  },
  {
    title: "Compliance Support",
    description: "Stay compliant with healthcare regulations including HIPAA, ICD-10, and insurance requirements."
  }
];

const statsData = [
  { value: 98, label: "Accuracy Rate", suffix: "%" },
  { value: 500, label: "Clients Served", suffix: "+" },
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 95, label: "Client Satisfaction", suffix: "%" }
];

const doctorsData = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. James Chen",
    specialty: "Billing Specialist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Compliance Director",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=400&fit=crop&crop=face"
  }
];

const Counter = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = timestamp - startTimestamp;
          const increment = Math.min(progress / duration, 1);
          setCount(Math.floor(increment * value));
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
        observer.current.disconnect();
      }
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }
    return () => observer.current?.disconnect();
  }, [value, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
};

const DoctorsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctorsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + doctorsData.length) % doctorsData.length);
  };

  return (
    <div className="py-16 px-5 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#8B1538] mb-2">OUR EXPERT TEAM</h2>
          <div className="w-16 h-1 bg-[#1B7C8C] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated professionals committed to optimizing your healthcare revenue cycle
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {doctorsData.map((doctor, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-center bg-gradient-to-br from-white to-teal-50">
                        <div className="mb-4">
                          <Heart className="w-12 h-12 text-[#1B7C8C] mb-3" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#8B1538] mb-2">{doctor.name}</h3>
                        <p className="text-[#1B7C8C] text-lg font-semibold mb-4">{doctor.specialty}</p>
                        <p className="text-gray-600 leading-relaxed">
                          Dedicated to providing exceptional healthcare billing solutions with a focus on accuracy, 
                          compliance, and maximizing revenue for medical practices.
                        </p>
                        <button className="mt-6 bg-[#8B1538] text-white px-6 py-2 rounded-full hover:bg-[#6B0F28] transition-colors w-max">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-[#8B1538] p-3 rounded-full shadow-lg hover:bg-[#8B1538] hover:text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-[#8B1538] p-3 rounded-full shadow-lg hover:bg-[#8B1538] hover:text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {doctorsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-[#8B1538]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesRef = useRef(null);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    return () => {
      if (servicesRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Services Section */}
      <div
        ref={servicesRef}
        className="relative py-20 px-5 text-center bg-gradient-to-br from-[#8B1538] via-[#6B0F28] to-[#4B0A1C]"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10">
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <Stethoscope className="w-16 h-16 text-[#1B7C8C]" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl text-white font-bold tracking-wider mb-3">
              OUR SERVICES
            </h2>
            <div className="w-20 h-1 bg-[#1B7C8C] mx-auto"></div>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Comprehensive healthcare billing solutions designed to optimize your revenue cycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`group p-8 text-left bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-[#1B7C8C] transition-all duration-700 ease-out transform ${
                  isServicesVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#1B7C8C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#1B7C8C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#1B7C8C] to-[#157A89] py-16 px-5 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
              <div className="mb-3">
                {index === 0 && <Activity className="w-10 h-10 text-white/80" />}
                {index === 1 && <Users className="w-10 h-10 text-white/80" />}
                {index === 2 && <Clock className="w-10 h-10 text-white/80" />}
                {index === 3 && <Award className="w-10 h-10 text-white/80" />}
              </div>
              <h3 className="text-5xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm uppercase tracking-wider text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Doctors Section with Slider */}
      <DoctorsSlider />
    </div>
  );
};

export default Services;