import React, { useState, useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { whatwedo } from "../constants/data.jsx";
import { SquareActivity, Hospital, BriefcaseMedical, Bed, Stethoscope, ShieldPlus, Siren } from "lucide-react";
import MedicalSpecialties from "../components/MedicalSpecialties";
import RequestCallBackForm from "../components/Reachus.jsx";
import Image1 from '../assets/Hero/1.png'
import Image2 from '../assets/Hero/2.png'
import Image3 from '../assets/Hero/3.png'
import '../App.css'
const clientBase = {
    heading: "Trusted by Healthcare Providers Nationwide",
    paragraph: "Clinics and practices nationwide rely on MedocBills to simplify billing, reduce denials, and consistently boost revenue with dependable end-to-end RCM solutions.",
    buttonText: "Get Started Today",
    icons: [Hospital, BriefcaseMedical, Stethoscope, ShieldPlus, Bed, Siren]
};

const successRate = [
    { value: "98%", description: "Clean Claim Rate" },
    { value: "45%", description: "Revenue Increase" },
    { value: "24hrs", description: "Average Turnaround" }
];

const whyToChoose = {
    heading: "Why Healthcare Providers Choose MedocBills",
    points: [
        {
            title: "We Reduce Your Administrative Burden",
            para: "Focus on patients — we take care of the billing complexities."
        },
        {
            title: "We Improve Your Revenue Performance",
            para: "Optimized workflows and expert coding help you capture every dollar you've earned."
        },
        {
            title: "We Deliver Consistency",
            para: "From claim submission to payment posting, our process ensures predictable and reliable results."
        },
        {
            title: "We Offer a Personal Touch",
            para: "Your practice gets a dedicated billing partner, not a generic support desk."
        }
    ]
};

const services = [
    { icon: SquareActivity, title: "Medical Billing", description: "Accurate billing and clean claims that get you paid faster." },
    { icon: Hospital, title: "Practice Management", description: "Streamlined workflows that keep your practice efficient and organized." },
    { icon: BriefcaseMedical, title: "Revenue Cycle Management", description: "Optimized financial processes for stronger, predictable cash flow." },
    { icon: ShieldPlus, title: "Compliance Support", description: "HIPAA-aligned guidance that keeps your practice protected and audit-ready." }
];

const testimonials = [
    { name: "Family Practice, Texas", text: "MedocBills has completely transformed our billing process. Our claim approvals are faster, and denials have dropped noticeably. Highly recommended!" },
    { name: "Pediatrics Clinic, Florida", text: "Their team is responsive, accurate, and easy to work with. We finally have clear visibility into our revenue cycle." },
    { name: "Specialty Clinic, California", text: "Outsourcing to MedocBills has saved us so much time. Our collections improved within the first few months." },
    { name: "Internal Medicine Practice, New York", text: "Professional, dependable, and detail-oriented. Their billing support allows us to focus fully on patient care." }
];

const testimonialVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } }
};

const PersonSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white text-gray-400">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.153.332l-.004.004-.006.007-.021.02a8.775 8.775 0 01-1.01.996.75.75 0 01-.58.12l-.025-.005a9.143 9.143 0 00-1.07.126l-.066-.011a6.6 6.6 0 01-1.428-.152.75.75 0 01-.484-.664v-1.897a.75.75 0 00-.75-.75H12a.75.75 0 00-.75.75v1.897a.75.75 0 01-.484.664 6.6 6.6 0 01-1.428.152l-.066.011a9.143 9.143 0 00-1.07-.126l-.025.005a.75.75 0 01-.58-.12 8.775 8.775 0 01-1.01-.996l-.006-.007-.004-.004a.75.75 0 01-.153-.332z" clipRule="evenodd" />
    </svg>
);

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const slides = [
        {
            title: (<>Welcome, Doctors!<br />Your Billing is Our Priority</>),
            description: "We welcome new clients and are committed to delivering high-quality, reliable service to all customers. Thank you for trusting our experienced team with your medical billing needs.",
            button: "Get in Touch",
            image: Image1,
        },
        {
            title: (<>MEDOCBILLS LLC- Your Trusted Partner in US Healthcare Billing.</>),
            description: "From clean claim submission to denial follow-up, we ensure you get paid on time, every time.",
            button: "Get consultation",
            image: Image2,
        },
        {
            title: "Increase Your Practice Revenue With Accurate & Fast Medical Billing",
            description: "Focus on exceptional patient care while we manage claims, coding, denials, and collections with unmatched accuracy.",
            button: "Free Audit",
            image: Image3,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4, ease: "easeInOut" },
            },
        },
        exit: (direction) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4, ease: "easeInOut" },
            },
        }),
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentSlide((prev) =>
            newDirection > 0
                ? (prev + 1) % slides.length
                : (prev - 1 + slides.length) % slides.length
        );
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="flex justify-center items-center flex-col">
            {/* Hero Slider */}
            <div className="relative w-full h-full bg-gradient-to-br from-teal-50 to-white">
                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 md:pt-0 pt-7 overflow-hidden">
                    <button
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                        onClick={() => paginate(-1)}
                        aria-label="Previous slide"
                    >
                        &#10216;
                    </button>
                    <button
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                        onClick={() => paginate(1)}
                        aria-label="Next slide"
                    >
                        &#10217;
                    </button>

                    <div className="relative w-full min-h-[600px] sm:min-h-[650px] md:min-h-[520px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="w-full h-full"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                                    {/* Text Content */}
                                    <div className="w-full md:w-1/2 text-center md:text-left md:absolute md:pl-4 px-4 md:px-0 pt-4 md:pt-0 z-10">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                                            {slides[currentSlide].title}
                                        </h1>
                                        <p className="leading-6 sm:leading-7 font-light text-sm sm:text-base md:text-lg py-3 sm:py-4 text-gray-700">
                                            {slides[currentSlide].description}
                                        </p>
                                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-3 sm:mt-4">
                                            <button className={`w-full sm:w-auto cursor-pointer py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base font-medium rounded  text-white bg-primary  transition-colors hover:bg-secondary`}>
                                                {slides[currentSlide].button}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full md:w-[57%] flex justify-center items-center md:ml-auto md:left-10 relative mt-auto md:mt-0">
                                        {/* Left gradient overlay - hidden on mobile */}
                                        <div className="hidden md:block w-[60px] relative left-6 h-screen bg-gradient-to-r from-transparent via-teal-50 to-transparent z-50"></div>

                                        <div className="w-full max-w-md md:max-w-none relative">
                                            <img
                                                src={slides[currentSlide].image}
                                                alt="Healthcare Solutions"
                                                className="shadow-lg w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                                            />
                                        </div>

                                        {/* Right gradient overlay - hidden on mobile */}
                                        <div className="hidden md:block w-[60px] right-5 relative h-screen bg-gradient-to-r from-transparent via-teal-50 to-transparent z-50"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Client Base Section */}
            <div className="my-8 sm:my-12 flex w-full max-w-7xl justify-center px-4">
                <AnimatedSection direction="up" className="grid w-full grid-cols-1 justify-between gap-8 sm:gap-10 p-4 sm:p-5 md:grid-cols-2 lg:justify-center">
                    <div className="flex max-w-lg flex-col gap-4 sm:gap-5 justify-self-center md:justify-self-start">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">{clientBase.heading}</h1>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{clientBase.paragraph}</p>
                        <button className="rounded-xl bg-secondary p-3 sm:p-3.5 font-medium text-white hover:bg-secondary-hover transition-colors text-sm sm:text-base">{clientBase.buttonText}</button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-3 sm:gap-4 md:justify-end">
                        {clientBase.icons.map((IconComponent, index) => (
                            <div key={index} className="flex h-max items-center justify-center rounded-lg bg-teal-50 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                                <IconComponent size={40} className="sm:w-[50px] sm:h-[50px] text-secondary" />
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>

            {/* Services Section - Modified with .map() to match the provided image layout */}
            <div className="relative w-full bg-secondary py-12 overflow-hidden">
                {/* Header */}
                <AnimatedSection direction="up" className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-2">Our Services</h2>
                    <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
                    <p className="text-white max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
                        MedocBills LLC has a strong grasp of medical billing, credentialing, medical A/R, and practice billing audit services. With extensive experience in the healthcare billing industry, we are confident in our ability to enhance the financial performance of your healthcare practice.
                    </p>
                </AnimatedSection>



                {/* Grid with .map() */}
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whatwedo.map((service, index) => (
                        <AnimatedSection
                            key={index}
                            direction="up"
                            delay={index * 100}
                            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start"
                        >
                            <div className="bg-cyan-light p-4 rounded-lg mb-6">
                                <service.icon size={40} className="text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4 underline decoration-cyan-accent">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {service.description}
                            </p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>


            {/* Why Choose Section */}
            <AnimatedSection direction="left" className="flex w-full max-w-7xl flex-col-reverse md:flex-row p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 md:ml-5 p-6 sm:p-8 text-center md:items-start mt-6 md:mt-0">
                    <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
                        {successRate.map((item, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">{item.value}</span>
                                <span className="text-base sm:text-lg text-gray-700 font-medium mt-1">{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 flex-col justify-center rounded-t-3xl md:rounded-r-3xl md:rounded-tl-none bg-white p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-left">
                    <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-primary">
                        {whyToChoose.heading}
                    </h1>
                    <ul className="my-3 sm:my-4 space-y-4 sm:space-y-5">
                        {whyToChoose.points.map((item, index) => (
                            <li key={index} className="pl-5 sm:pl-6 relative">
                                <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                                <h3 className="font-medium text-secondary text-base sm:text-lg mb-1">{item.title}</h3>
                                <p className="text-sm sm:text-base text-gray-700">{item.para}</p>
                            </li>
                        ))}
                    </ul>

                    <button className="mt-6 sm:mt-8 self-start rounded-full bg-secondary px-5 sm:px-6 py-2.5 sm:py-3 cursor-pointer font-semibold text-white shadow-lg transition-colors hover:bg-secondary-hover text-sm sm:text-base">
                        Schedule a Consultation
                    </button>
                </div>
            </AnimatedSection>

            {/* Medical Specialities */}
            <MedicalSpecialties />

            {/* Testimonials Section */}
            <div className="relative flex min-h-[600px] sm:min-h-[700px] md:min-h-screen items-center justify-center overflow-hidden font-sans w-full mt-8 sm:mt-10 py-10 sm:py-12 md:py-16 bg-gradient-to-br from-primary to-primary-deep px-4">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
                <AnimatedSection direction="up" className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center text-white">
                    <h2 className="mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        What Healthcare Providers Say
                    </h2>
                    <div className="relative flex w-full max-w-4xl flex-col items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                variants={testimonialVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="mb-8 sm:mb-10 px-6 sm:px-10 md:px-20 text-base sm:text-lg md:text-xl italic leading-relaxed"
                            >
                                "{testimonials[currentTestimonial].text}"
                            </motion.div>
                        </AnimatePresence>
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-secondary/50 p-2 sm:p-3 text-white transition hover:bg-secondary/70 focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-secondary/50 p-2 sm:p-3 text-white transition hover:bg-secondary/70 focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-col items-center">
                        <PersonSVG />
                        <span className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold">
                            {testimonials[currentTestimonial].name}
                        </span>
                    </div>
                </AnimatedSection>

            </div>

            <RequestCallBackForm />

        </section>
    );
};

export default Hero;