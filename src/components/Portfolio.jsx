import React, { useState } from 'react';
import { Star, ChevronDown, Menu, X, Phone, Mail, MapPin, Send, Award, Users, Briefcase, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const skills = [
    { name: 'Web Design', level: 85 },
    { name: 'Graphic Design', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Brand Identity', level: 95 }
  ];

  const portfolioItems = [
    {
      title: 'Modern E-commerce Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
    },
    {
      title: 'Mobile App UI Design',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop'
    },
    {
      title: 'Restaurant Branding',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    },
    {
      title: 'Fashion E-commerce',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      rating: 5,
      text: 'Brandon delivered exceptional work on our brand identity. His creativity and attention to detail exceeded our expectations.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c937?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Mike Chen',
      role: 'Marketing Director',
      rating: 5,
      text: 'Working with Brandon was a pleasure. He understood our vision perfectly and delivered outstanding results on time.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      role: 'Startup Founder',
      rating: 5,
      text: 'Brandon\'s web design skills are top-notch. Our website conversion rate increased by 40% after his redesign.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on scope and complexity. A typical website design takes 2-4 weeks, while brand identity projects usually take 1-3 weeks. I always provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients worldwide. I use various communication tools and project management systems to ensure smooth collaboration regardless of time zones.'
    },
    {
      question: 'What is included in your design packages?',
      answer: 'My packages include initial consultation, concept development, multiple design revisions, final files in various formats, and post-project support. Specific inclusions vary by package type.'
    },
    {
      question: 'Can you help with ongoing maintenance?',
      answer: 'Absolutely! I offer ongoing maintenance and support packages for websites and can provide regular updates for brand materials as your business grows.'
    }
  ];

  return (
    <>

      <Helmet>
        <title>Portfolio | MedocBills</title>
        <meta
          name="description"
          content="See how MedocBills has helped healthcare providers optimize their billing and maximize revenue with real case studies."
        />
        <link rel="canonical" href="https://www.medocbills.com/portfolio" />
      </Helmet>

      <section className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-teal-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#8B1538] mb-6">
                  MedocBills Healthcare
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Specialized in US Healthcare & IT Solutions, delivering innovative
                  medical billing and healthcare technology services that make a lasting impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-pink-600 to-cyan-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-cyan-900 transition-all">
                    View My Work
                  </button>
                  <button className="border-2 border-cyan-800 text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                    Get In Touch
                  </button>
                </div>
              </div>
              <div className="flex-1 max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Brandon - Creative Developer"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#8B1538] mb-6">About</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  Hi, I'm Brandon - a Creative Developer
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 5 years of experience in creative design and development,
                  I specialize in creating unique digital experiences that blend
                  functionality with stunning visual design. My passion lies in
                  transforming ideas into compelling digital realities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I believe great design should not only look beautiful but also
                  solve real problems and create meaningful connections between
                  brands and their audiences.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=400&fit=crop"
                  alt="Creative workspace"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-4">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">80+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mx-auto mb-4">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-4">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* Skills */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">My Skills</h4>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-teal-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-pink-600 to-teal-600 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Work Ethics</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Quality First</h5>
                      <p className="text-gray-600 text-sm">Every project receives meticulous attention to detail</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Client Collaboration</h5>
                      <p className="text-gray-600 text-sm">Working closely with clients throughout the process</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Innovation</h5>
                      <p className="text-gray-600 text-sm">Always exploring new technologies and design trends</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Timely Delivery</h5>
                      <p className="text-gray-600 text-sm">Meeting deadlines without compromising quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#8B1538] mb-6">Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I offer comprehensive creative services to help bring your vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-pink-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Web Design</h3>
                <p className="text-gray-600 mb-6">
                  Custom website design that combines beautiful aesthetics with
                  optimal user experience and performance.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Responsive Design</li>
                  <li>• User Experience</li>
                  <li>• Performance Optimization</li>
                  <li>• SEO Friendly</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-teal-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Brand Identity</h3>
                <p className="text-gray-600 mb-6">
                  Complete brand identity solutions including logo design,
                  color schemes, and brand guidelines.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Logo Design</li>
                  <li>• Brand Guidelines</li>
                  <li>• Color Schemes</li>
                  <li>• Typography</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8  bg-cyan-700 rounded-lg transform rotate-45"></div>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  User interface and experience design for web and mobile
                  applications with focus on usability.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• User Research</li>
                  <li>• Wireframing</li>
                  <li>• Prototyping</li>
                  <li>• User Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*Resume Section */}

        {/* Resume Section */}
        <section id="resume" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#8B1538] mb-6">Resume</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Summary & Education */}
              <div className="space-y-12">
                {/* Summary */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-8 h-8 bg-pink-700 rounded-full mr-3"></div>
                    Summary
                  </h3>

                  <div className="ml-5 border-l-2 border-pink-200 pl-6 relative">
                    <div className="absolute w-4 h-4 bg-pink-600 rounded-full -left-2 top-0"></div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">BRANDON JOHNSON</h4>
                    <p className="text-gray-600 text-sm italic mb-4">
                      Innovative and deadline-driven Graphic Designer with 3+ years of experience designing
                      and developing user-centered digital/print marketing material from initial concept to final,
                      polished deliverable.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Portland par 127, Orlando, FL</li>
                      <li>• (123) 456-7891</li>
                      <li>• alice.barkley@example.com</li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-8 h-8 bg-teal-700 rounded-full mr-3"></div>
                    Education
                  </h3>

                  <div className="ml-5 border-l-2 border-teal-200 pl-6 space-y-8">
                    {/* Master's Degree */}
                    <div className="relative">
                      <div className="absolute w-4 h-4 bg-teal-600 rounded-full -left-8 top-0"></div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        MASTER OF FINE ARTS & GRAPHIC DESIGN
                      </h4>
                      <div className="bg-gradient-to-r from-pink-100 to-teal-100 text-pink-800 px-3 py-1 rounded text-sm font-medium inline-block mb-2">
                        2015 - 2016
                      </div>
                      <p className="text-gray-600 text-sm italic mb-3">
                        Rochester Institute of Technology, Rochester, NY
                      </p>
                      <p className="text-gray-600 text-sm">
                        Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.
                        Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
                      </p>
                    </div>

                    {/* Bachelor's Degree */}
                    <div className="relative">
                      <div className="absolute w-4 h-4 bg-teal-600 rounded-full -left-8 top-0"></div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        BACHELOR OF FINE ARTS & GRAPHIC DESIGN
                      </h4>
                      <div className="bg-gradient-to-r from-pink-100 to-teal-100 text-pink-800 px-3 py-1 rounded text-sm font-medium inline-block mb-2">
                        2010 - 2014
                      </div>
                      <p className="text-gray-600 text-sm italic mb-3">
                        Rochester Institute of Technology, Rochester, NY
                      </p>
                      <p className="text-gray-600 text-sm">
                        Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius
                        vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae
                        consequatur neque etlon sader mart dila
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Professional Experience */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-blue-700 rounded-full mr-3"></div>
                  Professional Experience
                </h3>

                <div className="ml-5 border-l-2 border-blue-200 pl-6 space-y-8">
                  {/* Senior Position */}
                  <div className="relative">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-0"></div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      SENIOR GRAPHIC DESIGN SPECIALIST
                    </h4>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium inline-block mb-2">
                      2019 - Present
                    </div>
                    <p className="text-gray-600 text-sm italic mb-3">
                      Experion, New York, NY
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                      <li>• Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                      <li>• Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                      <li>• Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                    </ul>
                  </div>

                  {/* Previous Position */}
                  <div className="relative">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-0"></div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      GRAPHIC DESIGN SPECIALIST
                    </h4>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium inline-block mb-2">
                      2017 - 2018
                    </div>
                    <p className="text-gray-600 text-sm italic mb-3">
                      Stepping Stone Advertising, New York, NY
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      <li>• Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).</li>
                      <li>• Managed up to 5 projects or tasks at a given time while under pressure</li>
                      <li>• Recommended and consulted with clients on the most appropriate graphic design</li>
                      <li>• Created 4+ design presentations and proposals a month for clients and account managers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#8B1538] mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${openFAQ === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-[#8B1538] to-[#ff014d]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contact Us</h2>
                <p className="text-blue-100 mb-8 text-lg">
                  Ready to start your next project? Let's discuss how I can help
                  bring your vision to life.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-blue-100">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-100">hello@creativefreeland.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-blue-100">123 Creative Street, Design City</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>Web Design</option>
                      <option>Brand Identity</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ad204a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>


      </section>
    </>
  );
}