import React from 'react';
import { Users, Heart, Award, Phone, PhoneOutgoing, Mail, MessageSquare } from 'lucide-react';
import { AnimatedSection } from '../components/Animation';
import { Container, Typography, CustomButton } from '../components/layout';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-deep via-primary-dark to-primary text-white py-20 px-6">
        <Container className="max-w-4xl text-center">
          <AnimatedSection direction="up">
            <Typography as="h1" variant="h1" weight="bold" className="mb-6 text-secondary text-center">
              About MEDOCBILLS LLC: Your Partner in Business Growth
            </Typography>
            <Typography as="p" size="sm" className="leading-relaxed text-white/90">
              MEDOCBILLS LLC is a premier provider of comprehensive business solutions, specializing in Business Process Outsourcing (BPO), expert healthcare revenue cycle management (RCM), and results-driven digital marketing services.
              Established in 2025, MEDOCBILLS LLC was founded on the principle of helping businesses—especially in the complex healthcare sector—to not just survive, but grow and thrive in the digital age. Our dedicated team of experienced and passionate professionals is committed to delivering the highest level of service and support, ensuring our clients overcome operational challenges and achieve their strategic goals.
            </Typography>
          </AnimatedSection>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-6 bg-gray-50">
        <Container className="max-w-6xl">
          <AnimatedSection direction="left">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-sm">
              <div className="w-48 h-48 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex-shrink-0 flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="flex-1">
                <Typography as="h2" variant="h3" weight="bold" className="mb-4">
                  Leadership <span className="text-secondary">Perspective</span>
                </Typography>
                <Typography as="p" size="sm" className="text-gray-600 leading-relaxed mb-4">
                  A Message from Our Founder & CEO! <br />
                  At medocbills llc, we firmly believe that every organization holds immense potential for success. That’s why we are dedicated to providing the highest quality outsourced business services, backed by a team of skilled and passionate experts. We specialize in solutions ranging from cutting-edge medical billing and RCM to impactful digital marketing and branding. Our core values—Innovation, Efficiency, and Customer Satisfaction—guide everything we do. We are proud that our clients trust us to manage their critical, non-core tasks, enabling them to focus on their core competencies and patient care. Our ultimate goal is to reduce your workload and deliver outstanding outcomes that consistently exceed your expectations.
                </Typography>
                <Typography as="p" weight="semibold" className="text-gray-800">
                  — Muhammad Younas Khan, Founder & CEO, MEDOCBILLS LLC
                </Typography>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 px-6">
        <Container className="max-w-6xl">
          <AnimatedSection direction="up">
            <Typography as="h2" variant="h3" weight="bold" align="center" className="mb-4">
              The Three Core Pillars of <span className="text-secondary">MEDOCBILLS</span>
            </Typography>
            <Typography as="p" size="sm" align="center" className="text-gray-600 mb-12 max-w-3xl mx-auto">
              At MEDOCBILLS LLC, our success and the success of our clients are built on three guiding principles:
            </Typography>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8 text-white" />, title: 'Be Curious', text: 'We continuously seek better, efficient solutions and stay ahead of industry trends, especially in complex areas of healthcare coding and reimbursement.', bg: 'from-primary-medium to-primary' },
              { icon: <Heart className="w-8 h-8 text-white" />, title: 'Be Empathetic', text: 'MedocBills understand the unique challenges faced by each client and tailor our BPO and RCM solutions to meet specific organizational needs.', bg: 'from-secondary to-secondary-dark' },
              { icon: <Award className="w-8 h-8 text-white" />, title: 'Keep Promises', text: 'We are committed to delivering on our promises, ensuring transparency, timely execution, and reliable results in every service we provide.', bg: 'from-primary to-primary-dark' },
            ].map((pillar, idx) => (
              <AnimatedSection key={idx} direction="left" delay={idx * 200}>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${pillar.bg}`}>
                    {pillar.icon}
                  </div>
                  <Typography as="h3" variant="h5" weight="bold" className="mb-3">{pillar.title}</Typography>
                  <Typography as="p" size="sm" className="text-gray-600 leading-relaxed">{pillar.text}</Typography>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary-deep via-primary-dark to-primary text-white py-16 px-6">
        <Container className="max-w-6xl">
          <AnimatedSection direction="up">
            <Typography as="h2" variant="h3" weight="bold" align="center" className="mb-12 text-secondary">
              What Sets Us Apart?
            </Typography>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: '100+', label: 'Employees' },
              { number: '1+', label: 'Years in Business' },
              { number: '100+', label: 'Clients Dealt To' },
              { number: '95%', label: 'Accuracy' },
            ].map((stat, idx) => (
              <AnimatedSection key={idx} direction="left" delay={idx * 100}>
                <div className="text-center">
                  <Typography as="div" variant="h2" weight="bold" className="mb-2">{stat.number}</Typography>
                  <Typography as="div" size="sm" className="opacity-80">{stat.label}</Typography>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up">
            <Typography as="p" size="sm" align="center" className="text-white">
              What work best for you? Explore More
            </Typography>
          </AnimatedSection>
        </Container>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6">
        <Container className="max-w-6xl">
          <AnimatedSection direction="up">
            <Typography as="h2" variant="h3" weight="bold" align="center" className="mb-4">
              Our Customized <span className="text-secondary">Solutions</span>
            </Typography>
            <Typography as="p" size="sm" align="center" className="text-gray-600 mb-12 max-w-4xl mx-auto">
              MEDOCBILLS LLC is your dedicated partner in growth. We specialize in providing top-notch Business Process Outsourcing (BPO) services, including expert medical billing, claims management, and healthcare solutions, alongside effective digital marketing strategies.
            </Typography>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
              {['BPO', 'Health Care', 'Digital Marketing'].map((item, idx) => (
                <Typography key={idx} as="h3" variant="h5" weight="bold" className={idx === 0 ? 'text-secondary' : '' + ' mb-4'}>
                  {item}
                </Typography>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Phone className="w-8 h-8 text-white" />, title: 'Inbound Calls', text: 'Inbound calls are essential for providing excellent customer service. MedocBills can help you improve your customer service by providing professional and efficient call handling services and patient and client satisfaction.', gradient: 'from-secondary to-secondary-dark' },
              { icon: <PhoneOutgoing className="w-8 h-8 text-white" />, title: 'Outbound Calls', text: 'Outbound call centers can be a great way to reach new customers and grow your business. However, outsourcing your outbound call center operations to MedocBills can be more cost-effective and efficient solution.', gradient: 'from-secondary to-secondary-dark' },
              { icon: <Mail className="w-8 h-8 text-white" />, title: 'Email and Chat Support', text: 'MedocBills LLC can help you to create and deploy effective and chat platforms. Their team of experts will help you develop marketing strategies that are beneficial and chat to engage customers and drive sales.', gradient: 'from-primary to-primary-dark' },
              { icon: <MessageSquare className="w-8 h-8 text-white" />, title: 'SMS Support', text: 'Small texts about their platforms are essential for engaging customers in today\'s business world. MedocBills can help you to develop and deploy SMS marketing messages, while chat platforms can be used to provide real-time customer support.', gradient: 'from-primary to-primary-dark' },
            ].map((solution, idx) => (
              <AnimatedSection key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={0}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${solution.gradient}`}>
                    {solution.icon}
                  </div>
                  <Typography as="h3" variant="h5" weight="bold" className="mb-3">{solution.title}</Typography>
                  <Typography as="p" size="sm" className="text-gray-600 mb-4">{solution.text}</Typography>
                  <a href="#" className="text-secondary text-sm font-semibold hover:underline">Read More →</a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden">
        <Container className="max-w-4xl text-center relative z-10">
          <AnimatedSection direction="up">
            <Typography as="h2" variant="h3" weight="bold" className="mb-8">
              READY TO START YOUR PROJECT
            </Typography>
            <CustomButton className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Let's Start Together →
            </CustomButton>
          </AnimatedSection>

          {/* Decorative elements */}
          <div className="absolute -z-10 bottom-0 left-0 w-32 h-32 bg-secondary opacity-20 rounded-tr-full"></div>
          <div className="absolute -z-10 bottom-0 right-0 w-32 h-32 bg-secondary opacity-20 rounded-tl-full"></div>
        </Container>
      </section>
    </div>
  );
}