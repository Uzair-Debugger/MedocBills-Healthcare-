import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SquareActivity, Hospital, BriefcaseMedical, Bed, Stethoscope, ShieldPlus, Siren } from "lucide-react";
import { Helmet } from "react-helmet-async";
// import { logo } from '../assets/logo.png'

// Mock images - replace with your actual imports
const Main = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop";
const Second = "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop";

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
            para: "Optimized workflows and expert coding help you capture every dollar you’ve earned."
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-24 w-24 rounded-full bg-white text-gray-400">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.153.332l-.004.004-.006.007-.021.02a8.775 8.775 0 01-1.01.996.75.75 0 01-.58.12l-.025-.005a9.143 9.143 0 00-1.07.126l-.066-.011a6.6 6.6 0 01-1.428-.152.75.75 0 01-.484-.664v-1.897a.75.75 0 00-.75-.75H12a.75.75 0 00-.75.75v1.897a.75.75 0 01-.484.664 6.6 6.6 0 01-1.428.152l-.066.011a9.143 9.143 0 00-1.07-.126l-.025.005a.75.75 0 01-.58-.12 8.775 8.775 0 01-1.01-.996l-.006-.007-.004-.004a.75.75 0 01-.153-.332z" clipRule="evenodd" />
    </svg>
);

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const slides = [
        {
            title: "Increase Your Practice Revenue With Accurate & Fast Medical Billing",
            description: "Focus on exceptional patient care while we manage claims, coding, denials, and collections with unmatched accuracy.",
            button: "Get Audit",
            image: Main,
        },
        {
            title: "Reliable Claim Management That Boosts Your Cash Flow",
            description: "From clean claim submission to denial follow-up, we ensure you get paid on time, every time.",
            button: "Start Now",
            image: Second,
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
        <>
            <Helmet>
                {/* ===== Basic SEO ===== */}
                <title>MedocBills | Professional Medical Billing Services</title>
                <meta
                    name="description"
                    content="MedocBills provides secure, fast, and accurate medical billing solutions for healthcare professionals. Save time and ensure compliance with our expert billing team."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="MedocBills Team" />
                <meta
                    name="keywords"
                    content="medical billing, medocbills, healthcare, healthcare services, health, billing, medical billings, healthcare billing, insurance claims, HIPAA compliant"
                />
                <meta name="theme-color" content="#0b3d91" />
                <link rel="canonical" href="https://www.medocbills.com/" />

                {/* ===== Open Graph (Facebook, LinkedIn, etc.) ===== */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="MedocBills - Professional Medical Billing Services" />
                <meta
                    property="og:description"
                    content="Fast, accurate, and secure billing for healthcare professionals."
                />
                <meta property="og:image" content="/src/assets/logo.png" />
                <meta property="og:url" content="https://www.medocbills.com/" />
                <meta property="og:site_name" content="MedocBills" />

                {/* ===== Twitter Card Metadata ===== */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MedocBills - Professional Medical Billing Services" />
                <meta
                    name="twitter:description"
                    content="Fast, accurate, and secure billing for healthcare professionals."
                />
                <meta name="twitter:image" content="/src/assets/logo.png" />

                {/* ===== Structured Data (Schema.org JSON-LD) ===== */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MedocBills",
      "url": "https://www.medocbills.com",
      "logo": "https://www.medocbills.com/assets/logo.png",
      "sameAs": [
        "https://www.facebook.com/medocbills",
        "https://www.linkedin.com/company/medocbills",
        "https://x.com/medocbills"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-555-1234",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    }
    `}
                </script>
            </Helmet>

            <section className="flex justify-center items-center flex-col">
                {/* Hero Slider */}
                <div className="relative w-full h-full bg-gradient-to-br from-teal-50 to-white">
                    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 md:pt-0 pt-7 overflow-hidden">
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#8B1538] text-white hover:bg-[#6B0F28]"
                            onClick={() => paginate(-1)}
                        >
                            &#10216;
                        </button>
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#8B1538] text-white hover:bg-[#6B0F28]"
                            onClick={() => paginate(1)}
                        >
                            &#10217;
                        </button>

                        <div className="relative w-full min-h-[700px] md:min-h-[600px]">
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
                                        <div className="w-full md:w-1/2 text-center md:text-left">
                                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#8B1538]">
                                                {slides[currentSlide].title}
                                            </h1>
                                            <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-[#1B7C8C] mt-2">
                                                {slides[currentSlide].subtitle}
                                            </h3>
                                            <p className="leading-7 font-light text-base md:text-lg py-4 text-gray-700">
                                                {slides[currentSlide].description}
                                            </p>
                                            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-4">
                                                <button className={`w-full sm:w-auto rounded-full cursor-pointer py-2 px-6  ${slides[currentSlide].button === "Start Now" ? `bg-white text-[#1B7C8C] border border-[#1B7C8C] hover:text-[#136d7b] hover:border-[#136d7b]` : `text-white bg-[#8B1538] hover:bg-[#6B0F28]`} transition-colors `}>
                                                    {slides[currentSlide].button}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 flex justify-center items-center">
                                            <div className="w-full max-w-md md:max-w-none">
                                                <img
                                                    src={slides[currentSlide].image}
                                                    alt="Healthcare Solutions"
                                                    className="rounded-lg shadow-lg w-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px] object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Client Base Section */}
                <div className="sm:my-25 my-10 flex w-full max-w-7xl justify-center">
                    <div className="grid w-full grid-cols-1 justify-between gap-10 p-5 md:grid-cols-2 lg:justify-center">
                        <div className="flex max-w-lg flex-col gap-5 justify-self-center md:justify-self-start">
                            <h1 className="sm:text-5xl text-4xl font-bold text-[#8B1538] brooklyn">{clientBase.heading}</h1>
                            <p className="text-gray-700">{clientBase.paragraph}</p>
                            <button className="rounded-xl bg-[#1B7C8C] p-2 font-medium text-white hover:bg-[#157A89] transition-colors">{clientBase.buttonText}</button>
                        </div>
                        <div className="grid grid-cols-1 items-center justify-center gap-3 sm:grid-cols-2 md:grid-cols-3 md:justify-end">
                            {clientBase.icons.map((IconComponent, index) => (
                                <div key={index} className="flex h-max items-center justify-center rounded-lg bg-teal-50 p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <IconComponent size={50} className="text-[#1B7C8C]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Section */}
                <div className="flex w-full max-w-7xl flex-col-reverse md:flex-row lg:p-10 rounded-lg shadow-lg">
                    <div className="flex flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 md:ml-5 p-8 text-center md:items-start">
                        <div className="flex flex-col gap-16">
                            {successRate.map((item, index) => (
                                <div key={index} className="flex flex-col items-center md:items-start">
                                    <span className="text-5xl font-bold md:text-6xl text-[#8B1538]">{item.value}</span>
                                    <span className="text-lg text-gray-700 font-medium">{item.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-center rounded-r-3xl bg-white p-8 text-left md:p-16 lg:p-20">
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#8B1538] md:text-4xl lg:text-5xl">
                            {whyToChoose.heading}
                        </h1>
                        <ul className="my-4 space-y-3">
                            {whyToChoose.points.map((item, index) => (
                                <li key={index} className="pl-6 relative my-5">
                                    {/* Custom bullet */}
                                    <span className="absolute left-0 top-2 w-2 h-2 bg-[#8B1538] rounded-full"></span>

                                    <h3 className="font-medium text-[#1B7C8C]">{item.title}</h3>
                                    <p>{item.para}</p>
                                </li>
                            ))}
                        </ul>

                        <button className="mt-8 self-start rounded-full bg-[#1B7C8C] px-6 py-3 cursor-pointer font-semibold text-white shadow-lg transition-colors hover:bg-[#157A89]">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-20 flex w-full max-w-7xl flex-col items-center text-center">
                    <h2 className="mb-10 text-4xl font-extrabold text-[#8B1538]">Our Healthcare Solutions</h2>
                    {/* <p className="mb-12 max-w-2xl text-center text-gray-600">
                        Comprehensive medical billing and IT services designed to optimize your practice's financial performance and operational efficiency.
                    </p> */}
                    <div className="grid my-10 w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-center p-4 hover:transform hover:scale-105 transition-transform">
                                <service.icon size={48} strokeWidth={1} className="mb-4 text-[#1B7C8C]" />
                                <h3 className="mb-3 text-xl font-semibold hover:text-[#8B1538] cursor-pointer">{service.title}</h3>
                                <p className="text-center text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="relative flex min-h-screen items-center justify-center overflow-hidden font-sans w-full mt-10 py-10 bg-gradient-to-br from-[#8B1538] to-[#4B0A1C]">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                    </div>
                    <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center min-[400px]:p-8 p-2 text-center text-white">
                        <h2 className="mb-10 text-4xl font-extrabold md:text-5xl">
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
                                    className="mb-10 px-10 text-lg italic leading-relaxed md:text-xl md:px-20"
                                >
                                    "{testimonials[currentTestimonial].text}"
                                </motion.div>
                            </AnimatePresence>
                            <button
                                onClick={prevTestimonial}
                                className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-[#1B7C8C]/50 min-[400px]:p-3 p-1 text-white transition hover:bg-[#1B7C8C]/70 focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-[#1B7C8C]/50 min-[400px]:p-3 p-1 text-white transition hover:bg-[#1B7C8C]/70 focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-8 flex flex-col items-center">
                            <PersonSVG />
                            <span className="mt-4 text-xl font-bold">
                                {testimonials[currentTestimonial].name}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;