import React from 'react';
import { Building2, Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { services, rcmSteps, whyChoose, keyPoints } from '../constants/data';
import { AnimatedSection } from '../components/Animation';
import { Typography } from '../components/layout';
import { Container } from '../components/layout/Container';
import { CustomButton } from '../components/layout';

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-12 px-3">
        <Container>
          <AnimatedSection direction="up">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <div className="flex gap-3">
                  <Typography as="span" size="sm" weight="semibold" className="bg-primary text-white px-4 py-2 rounded-full">
                    RCMS
                  </Typography>
                  <Typography as="span" size="sm" weight="semibold" className="bg-secondary text-white px-4 py-2 rounded-full">
                    Book a Process
                  </Typography>
                </div>

                <Typography as="h1" variant="h1" className="text-gray-900">
                  Healthcare Systems
                </Typography>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {[
                    `In the last decade, hospitals have seen charges come ever more and with rising costs, shortage of trained staff, and tightening of billing regulations, RCM is here to be an extension of your team and free the time to practicing care for patients.`,
                    `Revenue Cycle Management is defined as a process of identifying errors of claims, appealing denied claims, and keeping up with patient's insurance eligibility at every touchpoint where the patient and providers intersect, resulting in smoother payment to match your healthcare system's unique requirements.`,
                    `A discerning healthcare payments lifecycle begins with admission of a patient or encounter and finishes up till all the claims are accurately paid in full. Our team gives you the authority of medical procedures, quality care, and effective revenue cycle software together.`,
                  ].map((text, idx) => (
                    <Typography key={idx} as="p" size="sm" className="text-gray-700 leading-relaxed">
                      {text}
                    </Typography>
                  ))}
                </div>

                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
                  alt="Healthcare Professional"
                  loading="lazy"
                  className="rounded-lg shadow-lg w-full mt-6"
                />
              </div>

              {/* Right Sidebar */}
              <div className="w-full lg:w-80 space-y-4">
                <AnimatedSection direction="right">
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary text-center">
                    <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <Typography as="h3" variant="h5" weight="bold">
                      Our Clients
                    </Typography>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={100}>
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-secondary space-y-3">
                    <Typography as="h3" variant="h5" weight="bold">
                      Make An Appointment
                    </Typography>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Phone className="w-4 h-4 text-secondary" />
                      <Typography as="span" size="sm">Phone Number</Typography>
                    </div>
                    <Typography as="p" size="sm" className="text-gray-600">How can help today you?</Typography>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <Typography as="span" size="sm">Medical Coding & Billing</Typography>
                    </div>
                    <Typography as="p" size="sm" className="text-gray-600">Message</Typography>
                    <CustomButton fullWidth>Send Message</CustomButton>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-3">
        <Container>
          <AnimatedSection direction="up">
            <Typography as="h2" variant="h3" weight="bold" align="center" className="mb-4">
              Medical Billing Services We Offer to Healthcare Systems
            </Typography>
            <Typography as="p" size="lg" align="center" className="mb-12 max-w-3xl mx-auto text-gray-600">
              We provide comprehensive Medical billing services so you as a healthcare system could focus on your key service - Excellent.
            </Typography>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} direction="left" delay={index * 100}>
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-secondary">
                  <Typography as="h3" variant="h5" weight="bold" className="mb-3">
                    {service.title}
                  </Typography>
                  <Typography as="p" size="sm" className="text-gray-600 leading-relaxed">
                    {service.description}
                  </Typography>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* RCM Steps Section */}
      <section className="py-16 px-3">
        <Container>
          <AnimatedSection direction="up">
            <Typography as="h2" variant="h3" weight="bold" align="center" className="mb-4">
              RCM in Medical Billing Healthcare System Revenue Cycle Management Process
            </Typography>
            <Typography as="p" size="sm" align="center" className="mb-12 max-w-4xl mx-auto text-gray-600">
              Revenue Cycle Management (RCM) is used in healthcare IT and for enhancement and is common processes right from the patient care appointment, when an individual first meets the medical billing services up to the final stage of payment...
            </Typography>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rcmSteps.map((step, index) => (
              <AnimatedSection key={index} direction="left" delay={index * 50}>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <Typography as="span" size="sm" className="text-gray-700">{step}</Typography>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

   {/* Why Choose Section */}
<section className="py-16 bg-primary-deep text-white px-3">
  <Container>
    <AnimatedSection direction="up">
      <Typography as="h2" variant="h3" weight="bold" align="center" className="mb-4 text-secondary">
        RCM Software's Right Medical Billing Supports
      </Typography>
      <Typography as="p" size="sm" align="center" className="mb-12 max-w-4xl mx-auto text-white/80">
        RCM provides an excellent benefit of Medical Billing Process. Every healthcare system software is designed to allow frameworks with electronic billing, receiving, and efficient coding.
      </Typography>
    </AnimatedSection>

    <AnimatedSection direction="left">
      <div className="rounded-lg p-8 backdrop-blur-sm bg-white/10">
        <Typography as="h3" variant="h4" weight="bold" className="mb-6 text-white">
          Why Choose Right Medical Billing for Healthcare System Billing Services
        </Typography>
        <Typography as="p" size="sm" className="mb-6 text-white/80">
          RCM allows a comprehensive range of Medical Billing features to keep the workplace sector of your healthcare organization.
        </Typography>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {whyChoose.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
              <Typography as="span" size="sm" className="text-white/90">
                {item}
              </Typography>
            </div>
          ))}
        </div>

        <Typography as="p" size="sm" className="text-white/80">
          When you collaborate your healthcare system billing services to Right Medical Billing, you gain an organized and standardized set of features for better billing and coding practices.
        </Typography>
      </div>
    </AnimatedSection>
  </Container>
</section>

      {/* Key Points Section */}
      <section className="py-16 px-3">
        <Container>
          <AnimatedSection direction="up">
            <Typography as="h2" variant="h3" weight="bold" align="center" className="mb-4">
              <span className="text-secondary">Key Points</span> That Makes Us Best Medical Billing Company
            </Typography>
          </AnimatedSection>

          <div className="mt-12 space-y-3">
            {keyPoints.map((point, index) => (
              <AnimatedSection key={index} direction="left" delay={index * 50}>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <Typography as="span" size="sm" className="text-gray-700">{point}</Typography>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 px-3 bg-gradient-to-br from-primary-deep via-primary-dark to-primary text-white relative overflow-hidden">
        <AnimatedSection direction="up">
          <Container>
            <div className="text-center relative z-10 space-y-6">
              <Typography as="h2" variant="h2" weight="bold" className="text-secondary">
                Get In Touch
              </Typography>
              <Typography as="p" size="sm" className="opacity-90 text-white">
                Right Medical Billing experts in United State bring customizable with real experts. Contact us at{' '}
                <span className="underline cursor-pointer font-semibold">+92 3087 658 325</span> or{' '}
                <span className="underline cursor-pointer font-semibold">info@rightmedicalbilling.com</span>
              </Typography>
              <CustomButton>Schedule An Appointment</CustomButton>
            </div>
          </Container>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary opacity-10 rounded-tr-full"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary opacity-10 rounded-bl-full"></div>
        </AnimatedSection>
      </section>
    </div>
  );
}