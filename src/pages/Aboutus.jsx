import React, { useEffect, useRef, useState } from 'react';
import { Users, Heart, Award, Phone, PhoneOutgoing, Mail, MessageSquare } from 'lucide-react';

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

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20 px-6">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About MEDOCBILLS LLC: Your Partner in Business Growth</h1>
            <p className="text-lg leading-relaxed opacity-90">
              MEDOCBILLS LLC is a premier provider of comprehensive business solutions, specializing in Business Process Outsourcing (BPO), expert healthcare revenue cycle management (RCM), and results-driven digital marketing services. 
              Established in 2025, MEDOCBILLS LLC was founded on the principle of helping businesses—especially in the complex healthcare sector—to not just survive, but grow and thrive in the digital age. Our dedicated team of experienced and passionate professionals is committed to delivering the highest level of service and support, ensuring our clients overcome operational challenges and achieve their strategic goals.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="left">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-sm">
              <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">
                  Leadership <span className="text-cyan-400">Perspective</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A Message from Our Founder & CEO! <br/>
                  At medocbills llc, we firmly believe that every organization holds immense potential for success. That’s why we are dedicated to providing the highest quality outsourced business services, backed by a team of skilled and passionate experts. We specialize in solutions ranging from cutting-edge medical billing and RCM to impactful digital marketing and branding. Our core values—Innovation, Efficiency, and Customer Satisfaction—guide everything we do. We are proud that our clients trust us to manage their critical, non-core tasks, enabling them to focus on their core competencies and patient care. Our ultimate goal is to reduce your workload and deliver outstanding outcomes that consistently exceed your expectations.
                </p>
                <p className="font-semibold text-gray-800">— Muhammad Younas Khan, Founder & CEO, MEDOCBILLS LLC</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-4">
              The Three Core Pillars of <span className="text-cyan-400">MEDOCBILLS </span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              At MEDOCBILLS LLC, our success and the success of our clients are built on three guiding principles:</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Curiosity */}
            <AnimatedSection direction="left" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Be Curious</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We continuously seek better, efficient solutions and stay ahead of industry trends, especially in complex areas of healthcare coding and reimbursement.</p>
              </div>
            </AnimatedSection>

            {/* Empathy */}
            <AnimatedSection direction="left" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Be Empathetic</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  MedocBills understand the unique challenges faced by each client and tailor our BPO and RCM solutions to meet specific organizational needs.</p>
              </div>
            </AnimatedSection>

            {/* Honoring Our Word */}
            <AnimatedSection direction="left" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Keep Promises</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                   We are committed to delivering on our promises, ensuring transparency, timely execution, and reliable results in every service we provide. </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart?</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <AnimatedSection direction="left" delay={0}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Employees</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={100}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1+</div>
                <div className="text-sm opacity-80">Years in Business</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Clients Dealt To</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={300}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-80">Accuracy</div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up">
            <div className="text-center">
              <p className="text-lg mb-2">What work best for you? Explore More</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-4">
              Our Customized <span className="text-cyan-400">Solutions</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              MEDOCBILLS LLC is your dedicated partner in growth. We specialize in providing top-notch Business Process Outsourcing (BPO) services, including expert medical billing, claims management, and healthcare solutions, alongside effective digital marketing strategies.</p>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* BPO */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">BPO</h3>
              </div>
              
              {/* Health Care */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Health Care</h3>
              </div>
              
              {/* Digital Marketing */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inbound Calls */}
            <AnimatedSection direction="left" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Inbound Calls</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Inbound calls are essential for providing excellent customer service. MedocBills can help you improve your customer service by providing professional and efficient call handling services and patient and client satisfaction.
                </p>
                <a href="#" className="text-cyan-400 text-sm font-semibold hover:underline">Read More →</a>
              </div>
            </AnimatedSection>

            {/* Outbound Calls */}
            <AnimatedSection direction="right" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <PhoneOutgoing className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Outbound Calls</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Outbound call centers can be a great way to reach new customers and grow your business. However, outsourcing your outbound call center operations to MedocBills can be more cost-effective and efficient solution.
                </p>
                <a href="#" className="text-cyan-400 text-sm font-semibold hover:underline">Read More →</a>
              </div>
            </AnimatedSection>

            {/* Email and Chat Support */}
            <AnimatedSection direction="left" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email and Chat Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                 MedocBills LLC can help you to create and deploy effective and chat platforms. Their team of experts will help you develop marketing strategies that are beneficial and chat to engage customers and drive sales.
                </p>
                <a href="#" className="text-cyan-400 text-sm font-semibold hover:underline">Read More →</a>
              </div>
            </AnimatedSection>

            {/* SMS Support */}
            <AnimatedSection direction="right" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">SMS Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Small texts about their platforms are essential for engaging customers in today's business world. MedocBills can help you to develop and deploy SMS marketing messages, while chat platforms can be used to provide real-time customer support.
                </p>
                <a href="#" className="text-cyan-400 text-sm font-semibold hover:underline">Read More →</a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden">
        <AnimatedSection direction="up">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-8">READY TO START YOUR PROJECT</h2>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Let's Start Together →
            </button>
          </div>
        </AnimatedSection>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400 opacity-20 rounded-tr-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400 opacity-20 rounded-tl-full"></div>
      </section>
    </div>
  );
}