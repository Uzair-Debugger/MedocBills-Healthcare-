import React, { useEffect, useRef, useState } from 'react';
import { Building2, Calendar, Phone, Mail, MapPin, CheckCircle2, Users, FileText, TrendingUp, Shield } from 'lucide-react';

const AnimatedSection = ({ children, delay = 0, direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-100px)';
      case 'right':
        return 'translateX(100px)';
      case 'up':
        return 'translateY(50px)';
      default:
        return 'translateX(-100px)';
    }
  };

  return (
    <div
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getInitialTransform(),
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default function ClientsPage() {
  const services = [
    {
      title: 'Insurance Eligibility Verification Services',
      description: 'We provide comprehensive eligibility verification services to ensure that your patients\' insurance policies are verified before services are authorized or referrals are made.'
    },
    {
      title: 'Demographics & Charge Entry Services',
      description: 'We manage the initial workflow stages to charge entry, which include the capture of payment for the healthcare system. Our trained team accurately processes patient demographics and insurance information in real-time.'
    },
    {
      title: 'Billing & Analysis',
      description: 'We understand that healthcare billing is a patient\'s file, including the payer\'s information, claims, payments, and accounts receivable. We send crucial healthcare data back to insurance or claim services, coding consultants, and a dedicated workflow that facilitates high-level analytics of payor, patient, and practice working trends.'
    },
    {
      title: 'AR Follow-up Services',
      description: 'We pursue AR at all accounts receivables and call for a free consultancy and others at what. We advise closest tracking on follow up and conduct timely audits, for evaluating the efficiency of what you deserve from insurance companies and third party payers at each of the follow up period.'
    }
  ];

  const rcmSteps = [
    'Registration/ RCM Software',
    'Financial Eligibility verification',
    'Medical coding and charge submission',
    'Claims transmission',
    'Co-payment and Deductibles',
    'EOBs',
    'Payment posting and claim denial re-reversal',
    'Manage denials',
    'Billing & collection activities',
    'Reporting',
    'Refund'
  ];

  const whyChoose = [
    'Allow health freedom',
    'Efficiently maintain health ID/MSN',
    'Medical codes',
    'Accurate Medicaid',
    'Cost-effective',
    'Trusted partner'
  ];

  const keyPoints = [
    'Our team arrives that your fixed cost places you 30% less',
    'Reduce your administrative burden and allows RCM highest efficiency',
    'Supports the compliance of the RCM audit team',
    'Use of Advance Technologies',
    'Our professionals hold their years of high-level experience',
    'Assured coverage reimbursements at your requirements',
    'Provide high quality care three billing and collections departments',
    'We help you in finding the best ways and ensure a better account receivable practice and your time follow up',
    'Use advance technology and tools',
    'Professional trained people available at all time',
    'Our quality related procedures and structured billing processes to ensure error free billing'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    RCMS
                  </span>
                  <span className="ml-3 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Book a Process
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Healthcare Systems
                </h1>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    In the last decade, hospitals have seen charges come ever more and with rising costs, shortage of trained staff, and tightening of billing regulations, RCM is here to be an extension of your team and free the time to practicing care for patients.
                  </p>
                  <p>
                    Revenue Cycle Management is defined as a process of identifying errors of claims, appealing denied claims, and keeping up with patient's insurance eligibility at every touchpoint where the patient and providers intersect, resulting in smoother payment to match your healthcare system's unique requirements.
                  </p>
                  <p>
                    A discerning healthcare payments lifecycle begins with admission of a patient or encounter and finishes up till all the claims are accurately paid in full. Our team gives you the authority of medical procedures, quality care, and effective revenue cycle software together.
                  </p>
                </div>

                <div className="mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
                    alt="Healthcare Professional"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-full lg:w-80 space-y-4">
                <AnimatedSection direction="right">
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
                    <div className="flex items-center justify-center mb-4">
                      <Building2 className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-center font-bold text-gray-900 mb-2">Our Clients</h3>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={100}>
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-secondary">
                    <h3 className="font-bold text-gray-900 mb-4">Make An Appointment</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Phone className="w-4 h-4 text-secondary" />
                        <span>Phone Number</span>
                      </div>
                      <div className="text-sm text-gray-600">How can help today you?</div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>Medical Coding & Billing</span>
                      </div>
                      <div className="text-sm text-gray-600">Message</div>
                      <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                        Send Message
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-4">
              Medical Billing Services We Offer to Healthcare Systems
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We provide comprehensive Medical billing services so you as a healthcare system could focus on your key service - Excellent.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} direction="left" delay={index * 100}>
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RCM Process Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-4">
              RCM in Medical Billing Healthcare System Revenue Cycle Management Process
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Revenue Cycle Management (RCM) is used in healthcare IT and for enhancement and is common processes right from the patient care appointment, when an individual first meets the medical billing services up to the final stage of payment. All types of the working breakdown--patient MCM helps providers, you're an entity define high-quality claim accuracy, financial, a smoother, and efficient follow up of your Management Accounting Systems. This illustrated guide will have you know how to obtain the fullest potential through 11 steps:-
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rcmSteps.map((step, index) => (
              <AnimatedSection key={index} direction="left" delay={index * 50}>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{step}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 bg-primary-deep text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-4">
              RCM Software's Right Medical Billing Supports
            </h2>
            <p className="text-center mb-12 max-w-4xl mx-auto opacity-90">
              RCM (Revenue Cycle Management) provides an excellent benefit of Medical Billing Process. Consequently, every healthcare system software is designed to allow the frameworks with electronic billing, receiving, and making efficient in certain tactics to bring software is provided that helps will be as required and accurate swift coding, filing, and appealing claims.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Right Medical Billing for Healthcare System Billing Services
              </h3>
              <p className="mb-6 opacity-90">
                RCM allows a comprehensive range of Medical Billing features to keep the workplace sector of your healthcare organization. RCM will ensure a large-force of looking with about right about right about right across and hospital working team in achieving their targets who provide better clinical care and be more medical of giving a right set from patients in medical care.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="opacity-90">
                When you collaborate your healthcare system billing services to Right Medical Billing, you gain an organized, to standardize, some of the important features as follows are the real leading billing and coding practice, includes revenue cycle management outsourcing, and payment posting.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-secondary">Key Points</span> That Makes Us Best Medical Billing Company
            </h2>
          </AnimatedSection>

          <div className="mt-12 space-y-3">
            {keyPoints.map((point, index) => (
              <AnimatedSection key={index} direction="left" delay={index * 50}>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary-deep via-primary-dark to-primary text-white relative overflow-hidden">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg mb-8 opacity-90">
              Right Medical Billing experts in United State bring customizable with real experts. By doing so, we ensure that the quality of our patients meet standards. You've reached us at{' '}
              <span className="text-secondary font-semibold">+92 3087 658 325</span> or mail us at{' '}
              <span className="text-secondary font-semibold">info@rightmedicalbilling.com</span>
            </p>
            <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-hover transition-colors shadow-lg">
              Schedule An Appointment
            </button>
          </div>
        </AnimatedSection>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary opacity-10 rounded-tr-full"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-secondary opacity-10 rounded-bl-full"></div>
      </section>
    </div>
  );
}