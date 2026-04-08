import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Activity, Users, Clock, Award,
  Stethoscope, Shield, ChevronDown, Heart
} from 'lucide-react';
import type { CounterProps } from '../constants/types';
import { servicesData, statsData, doctorsData, faqs } from '../constants/data';
import { Container, Typography, CustomButton } from '../components/layout';

// ─── Counter Component ──────────────────────
const Counter = ({ value, duration = 2000, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start: number | null = null;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          setCount(Math.floor(Math.min(progress / duration, 1) * value));
          if (progress < duration) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
        observer.current?.disconnect();
      }
    });
    if (ref.current) observer.current.observe(ref.current);
    return () => observer.current?.disconnect();
  }, [value, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
};

// ─── Service Card ──────────────────────────
const ServiceCard = ({ title, description, index, isVisible }: any) => (
  <div
    className={`group p-4 text-left bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-secondary transition-all duration-700 ease-out transform ${isVisible
      ? 'translate-y-0 opacity-100'
      : 'translate-y-12 opacity-0'
      }`}
    style={{ transitionDelay: `${index * 0.15}s` }}
  >
    <div className="flex flex-col sm:flex-row items-start gap-3">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <Typography as="h3" variant="h3" color="secondary" className="mb-3 group-hover:text-secondary transition-colors">
          {title}
        </Typography>
        <Typography as="p" color="white">
          {description}
        </Typography>
      </div>
    </div>
  </div>
);

// ─── Stat Card ─────────────────────────────
const StatCard = ({ icon: Icon, value, suffix, label }: any) => (
  <div className="flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
    <div className="mb-3">
      <Icon className="w-10 h-10 text-white/80" />
    </div>
    <Typography as="h3" variant="h1" color="white" className="mb-2 text-5xl font-bold">
      <Counter value={value} suffix={suffix} />
    </Typography>
    <Typography as="p" color="white" className="text-sm uppercase tracking-wider">{label}</Typography>
  </div>
);

// ─── Doctor Card ───────────────────────────
const DoctorCard = ({ doctor }: any) => (
  <div className="w-full flex-shrink-0">
    <div className="bg-white max-sm:max-w-[400px] m-auto rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mx-auto">
        <div className="">
          <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 md:col-span-2 flex flex-col gap-5 justify-center bg-gradient-to-br from-white to-teal-50">
          <div className="mb-4">
            <Heart className="w-12 h-12 text-secondary mb-3" />
          </div>
          <Typography as="h3" variant="h3" color="primary">
            {doctor.name}
          </Typography>
          <Typography as="p" color="secondary" className="text-lg font-semibold">
            {doctor.specialty}
          </Typography>
          <Typography as="p" color="gray" className="leading-relaxed">
            Dedicated to providing exceptional healthcare billing solutions with focus on accuracy, compliance, and maximizing revenue.
          </Typography>
          <CustomButton variant="primary" size="md" roundedFull className=" w-max m-auto sm:m-0">View Profile</CustomButton>
        </div>
      </div>
    </div>
  </div>
);

// ─── Doctors Slider ────────────────────────
const DoctorsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % doctorsData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + doctorsData.length) % doctorsData.length);

  return (
    <section className="py-16 px-5 bg-gradient-to-b from-white to-teal-50">
      <Container size="lg" className="text-center">
        <Typography as="h2" variant="h2" color="primary" className="mb-2">OUR EXPERT TEAM</Typography>
        <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
        <Typography as="p" color="gray" className="max-w-2xl mx-auto">
          Meet our dedicated professionals committed to optimizing your healthcare revenue cycle
        </Typography>

        <div className="relative max-w-4xl mx-auto mt-10 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {doctorsData.map((doctor, index) => <DoctorCard key={index} doctor={doctor} />)}
          </div>

          {/* Navigation Buttons */}
          {/* <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          <div className="flex justify-center mt-6 gap-2">
            {doctorsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// ─── FAQ Item ──────────────────────────────
const FAQItem = ({ faq, isOpen, onClick }: any) => (
  <div className="border border-gray-200 rounded-lg">
    <button
      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <span className="font-semibold text-gray-900">{faq.question}</span>
      <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && <div className="px-6 pb-4"><Typography as="p" color="gray">{faq.answer}</Typography></div>}
  </div>
);

// ─── Services Page ─────────────────────────
const Services = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsServicesVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Services | MedocBills</title>
        <meta name="description" content="Explore MedocBills’ range of medical billing services." />
        <link rel="canonical" href="https://www.medocbills.com/services" />
      </Helmet>

      {/* Services Section */}
      <section ref={servicesRef} className="relative py-20 px-5 text-center bg-gradient-to-br from-primary via-primary-dark to-primary-deep font-sans overflow-x-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,...")` }}></div>
        <Container size="lg" className="relative z-10">
          <Stethoscope className="w-16 h-16 text-secondary mx-auto mb-4" strokeWidth={1.5} />
          <Typography as="h2" variant="h2" color="white" className="mb-3 text-center">OUR SERVICES</Typography>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <Typography as="p" color="white" className="max-w-2xl mx-auto mb-12">
            Comprehensive healthcare billing solutions designed to optimize your revenue cycle
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {servicesData.map((service, i) => (
              <ServiceCard key={i} title={service.title} description={service.description} index={i} isVisible={isServicesVisible} />
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-hover py-16 px-5 text-white">
        <Container size="lg" className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <StatCard key={i} icon={[Activity, Users, Clock, Award][i]} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </Container>
      </section>

      {/* Doctors Slider */}
      <DoctorsSlider />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container size="md" className="space-y-4">
          <Typography as="h2" variant="h2" color="primary" className="text-center mb-6">Frequently Asked Questions</Typography>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? null : i)} />
          ))}
        </Container>
      </section>
    </>
  );
};

export default Services;