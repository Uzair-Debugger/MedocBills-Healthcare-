import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUsPic = "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&h=800&fit=crop";

const App = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        message: ""
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate form submission
        try {
            // Replace this with your actual API endpoint
            // const response = await fetch('http://127.0.0.1:5000/contact', {
            //     method: 'POST',
            //     body: JSON.stringify(formData),
            //     headers: { 'Content-Type': 'application/json' },
            // })

            // Simulated success
            setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you shortly.' });

            // Clear the form after successful submission
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                message: ""
            });

            // Clear status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);

        } catch (error) {
            console.log("Network/Server error!", error);
            setSubmitStatus({ type: 'error', message: 'Network error! Please try again.' });
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | MedocBills</title>
                <meta
                    name="description"
                    content="Get in touch with MedocBills for professional billing support, consultations, or custom service requests. We’re here to help 24/7."
                />
                <link rel="canonical" href="https://www.medocbills.com/contactus" />
            </Helmet>

            <section className="flex items-center justify-center min-h-screen bg-gradient-to-br  bg-teal-100   ">
                <div
                    className="flex flex-col bg-cover bg-center bg-fixed items-center justify-center  shadow-2xl w-full py-15"
                    style={{
                        backgroundImage: `linear-gradient(rgba(var(--color-primary-rgb), 0.92), rgba(var(--color-secondary-rgb), 0.92)), url(${ContactUsPic})`
                    }}
                >
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className='text-4xl text-white font-bold mb-2'>Get in Touch</h1>
                        <p className='text-white/90 text-lg max-w-2xl mx-auto'>
                            Ready to optimize your medical billing? Contact our team of healthcare IT experts today.
                        </p>
                    </div>

                    {/* Status Message */}
                    {submitStatus && (
                        <div className={`w-full md:w-3/5 mb-4 p-4 rounded-xl ${submitStatus.type === 'success'
                                ? 'bg-green-500/90 text-white'
                                : 'bg-red-500/90 text-white'
                            }`}>
                            <p className="text-center font-medium">{submitStatus.message}</p>
                        </div>
                    )}

                    {/* Form */}
                    <div className="w-full max-w-6xl md:w-3/5 py-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-white text-sm font-semibold mb-2">
                                        First name *
                                    </label>
                                    <input
                                        required
                                        onChange={handleChange}
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        className="w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-white text-sm font-semibold mb-2">
                                        Last name *
                                    </label>
                                    <input
                                        required
                                        onChange={handleChange}
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        className="w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                                    Email Address *
                                </label>
                                <input
                                    required
                                    onChange={handleChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    className="w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                                    placeholder="john.doe@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2">
                                    Phone Number *
                                </label>
                                <div className="flex items-center rounded-xl bg-white/95 backdrop-blur-sm focus-within:ring-2 focus-within:ring-secondary transition duration-200">
                                    <select
                                        id="countryCode"
                                        name="countryCode"
                                        className="bg-transparent text-sm rounded-l-xl px-4 py-3 focus:outline-none cursor-pointer font-medium"
                                    >
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>CA</option>
                                        <option>PAK</option>
                                    </select>
                                    <input
                                        required
                                        onChange={handleChange}
                                        type="tel"
                                        id="phoneNo"
                                        name="phoneNo"
                                        value={formData.phoneNo}
                                        className="w-full px-4 py-3 rounded-r-xl bg-transparent focus:outline-none"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    onChange={handleChange}
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    className="w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                                    placeholder="Tell us about your practice and how we can help..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full cursor-pointer bg-secondary text-white font-bold py-3 rounded-full hover:bg-secondary-dark transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Additional Contact Info */}
                        <div className="mt-10 pt-8 border-t border-white/30">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <p className="font-semibold mb-1">Call Us</p>
                                    <p className="text-sm text-white/80">+1 (929) 621 6059</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="font-semibold mb-1">Email Us</p>
                                    <p className="text-sm text-white/80">support@medstates.com</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="font-semibold mb-1">Visit Us</p>
                                    <p className="text-sm text-white/80">Medocbills</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;