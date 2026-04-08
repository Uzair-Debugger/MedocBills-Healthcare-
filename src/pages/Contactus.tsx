import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactUsPic from '../assets/Hero/contactus.webp';
import { Container, Typography, CustomButton } from '../components/layout';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        message: '',
    });

    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Simulate API submission
            setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you shortly.' });
            setFormData({ firstName: '', lastName: '', email: '', phoneNo: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Network error! Please try again.' });
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    // Memoize contact info to avoid re-renders
    const contactInfo = useMemo(() => [
        { icon: 'phone', label: 'Call Us', value: '+1 (929) 621 6059' },
        { icon: 'mail', label: 'Email Us', value: 'support@medstates.com' },
        { icon: 'location', label: 'Visit Us', value: 'MedocBills HQ' },
    ], []);

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


            <section
                className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${ContactUsPic})` }}
            >
                {/* Overlay for gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>

                <Container className="relative z-10 flex flex-col items-center justify-center py-16 text-center w-full">
                    <div className="mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    aria-label="Email Icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <Typography as="h1" size="4xl" color="white" weight="bold" className="mb-2 text-center">
                            Get in Touch
                        </Typography>
                        <Typography as="p" size="lg" color="white/90" className="max-w-2xl mx-auto text-center">
                            Ready to optimize your medical billing? Contact our team of healthcare IT experts today.
                        </Typography>
                    </div>

                    {/* Status */}
                    {submitStatus && (
                        <Container
                            className={`w-full mb-4 p-4 rounded-xl transition-colors ${submitStatus.type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90'
                                } text-white`}
                            role="alert"
                        >
                            <Typography as="p" size="base" weight="medium" align="center">
                                {submitStatus.message}
                            </Typography>
                        </Container>
                    )}

                    {/* Form */}
                    <Container className="w-full md:w-[600px] py-6">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { name: 'firstName', label: 'First name', placeholder: 'John' },
                                    { name: 'lastName', label: 'Last name', placeholder: 'Doe' },
                                ].map((field) => (
                                    <div key={field.name}>
                                        <Typography
                                            as="label"
                                            htmlFor={field.name}
                                            size="sm"
                                            weight="semibold"
                                            color="white"
                                            className="block mb-2"
                                        >
                                            {field.label} *
                                        </Typography>
                                        <input
                                            required
                                            aria-required="true"
                                            onChange={handleChange}
                                            type="text"
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name as keyof typeof formData]}
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <Typography as="label" htmlFor="email" size="sm" weight="semibold" color="white" className="block mb-2">
                                    Email Address *
                                </Typography>
                                <input
                                    required
                                    aria-required="true"
                                    onChange={handleChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder="john.doe@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                                />
                            </div>

                            <div>
                                <Typography as="label" htmlFor="phoneNo" size="sm" weight="semibold" color="white" className="block mb-2">
                                    Phone Number *
                                </Typography>
                                <div className="flex items-center rounded-xl bg-white/95 backdrop-blur-sm focus-within:ring-2 focus-within:ring-secondary transition duration-200">
                                    <select
                                        id="countryCode"
                                        name="countryCode"
                                        className="bg-transparent text-sm rounded-l-xl px-4 py-3 focus:outline-none cursor-pointer font-medium"
                                        aria-label="Select Country Code"
                                    >
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="CA">CA</option>
                                        <option value="PAK">PAK</option>
                                    </select>
                                    <input
                                        required
                                        aria-required="true"
                                        onChange={handleChange}
                                        type="tel"
                                        id="phoneNo"
                                        name="phoneNo"
                                        value={formData.phoneNo}
                                        placeholder="(555) 123-4567"
                                        className="w-full px-4 py-3 rounded-r-xl bg-transparent focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <Typography as="label" htmlFor="message" size="sm" weight="semibold" color="white" className="block mb-2">
                                    Your Message *
                                </Typography>
                                <textarea
                                    required
                                    aria-required="true"
                                    onChange={handleChange}
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    placeholder="Tell us about your practice and how we can help..."
                                    className="w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                                ></textarea>
                            </div>

                            <CustomButton type="submit" className="w-full">
                                Send Message
                            </CustomButton>
                        </form>

                        {/* Contact Info */}
                        <Container className="mt-10 pt-8 border-t border-white/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                                        {/* Use role & aria-label for icons */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label={info.label}>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d={
                                                    info.icon === 'phone'
                                                        ? 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                                        : info.icon === 'mail'
                                                            ? 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                                            : 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                                }
                                            />
                                        </svg>
                                    </div>
                                    <Typography as="p" size="base" weight="semibold" className="mb-1">
                                        {info.label}
                                    </Typography>
                                    <Typography as="p" size="sm" color="white/80">
                                        {info.value}
                                    </Typography>
                                </div>
                            ))}
                        </Container>
                    </Container>
                </Container>
            </section>

        </>
    );
};

export default ContactUs;