import React, { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { whatwedo } from '../constants/data';
import MedicalSpecialties from '../components/MedicalSpecialties';
import RequestCallBackForm from '../components/Reachus';
import { Typography, CustomButton } from '../components/layout';
import {
    clientBase,
    successRate,
    whyToChoose,
    testimonials,
    testimonialVariants,
    slides,
} from '../constants/data';
import { PersonSVG } from '../constants/icons';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const slideVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4, ease: 'easeInOut' as const },
            },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: {
                x: { type: 'spring' as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4, ease: 'easeInOut' as const },
            },
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentSlide((prev) =>
            newDirection > 0
                ? (prev + 1) % slides.length
                : (prev - 1 + slides.length) % slides.length,
        );
    };

    const navigateButtonClass = 'absolute top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-[2px] bg-primary text-white hover:bg-primary-dark transition-colors'

    return (
        <section className="flex flex-col items-center justify-center">
            {/* Hero Slider */}
            <div className="relative w-full bg-gradient-to-br from-teal-50 to-white overflow-hidden">
                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 md:pt-0 pt-7">
                    <button
                        className={` left-2 sm:left-4 ${navigateButtonClass}`}
                        onClick={() => paginate(-1)}
                        aria-label="Previous slide"
                    >
                        &#10216;
                    </button>
                    <button
                        className={` right-2 sm:right-4 ${navigateButtonClass}`}
                        onClick={() => paginate(1)}
                        aria-label="Next slide"
                    >
                        &#10217;
                    </button>

                    {/* Fixed height container to prevent jumping */}
                    <div className="relative w-full min-h-[600px] sm:min-h-[650px] md:min-h-[520px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="w-full"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    {/* Text Content */}
                                    <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0 pt-4 md:pt-0">
                                        <Typography as="h1" variant="h1" className="text-primary leading-tight">
                                            {slides[currentSlide].title}
                                        </Typography>
                                        <Typography as="p" variant="p" className="leading-6 sm:leading-7 font-light text-sm sm:text-base md:text-lg py-3 sm:py-4 text-gray-700">
                                            {slides[currentSlide].description}
                                        </Typography>
                                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-3 sm:mt-4">
                                            <CustomButton variant="secondary" className="w-full sm:w-auto py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base font-medium rounded-full text-white bg-primary hover:bg-secondary">
                                                {slides[currentSlide].button}
                                            </CustomButton>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2 flex justify-center items-center">
                                        <div className="w-full max-w-md md:max-w-none">
                                            <img
                                                src={slides[currentSlide].image}
                                                alt="Healthcare Solutions"
                                                className="shadow-lg w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            {/* ── Client Base ──────────────────────────────────────────── */}
            <div className="my-8 flex w-full max-w-7xl justify-center px-4 sm:my-12">
                <AnimatedSection
                    direction="up"
                    className="grid w-full grid-cols-1 gap-8 p-4 sm:gap-10 sm:p-5 md:grid-cols-2"
                >
                    <div className="flex max-w-lg flex-col gap-4 justify-self-center sm:gap-5 md:justify-self-start">
                        <h1 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                            {clientBase.heading}
                        </h1>
                        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                            {clientBase.paragraph}
                        </p>
                        <button className="rounded-xl bg-secondary p-3 text-sm font-medium text-white transition-colors hover:bg-secondary-hover sm:p-3.5 sm:text-base">
                            {clientBase.buttonText}
                        </button>
                    </div>
                    <div className="grid grid-cols-2 items-center justify-center gap-3 sm:gap-4 md:grid-cols-3 md:justify-end">
                        {clientBase.icons.map((IconComponent, index) => (
                            <div
                                key={index}
                                className="flex h-max items-center justify-center rounded-lg bg-teal-50 p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
                            >
                                <IconComponent size={40} className="text-secondary sm:h-[50px] sm:w-[50px]" />
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>

            {/* ── Services ─────────────────────────────────────────────── */}
            <div className="relative w-full overflow-hidden bg-secondary py-12">
                <AnimatedSection direction="up" className="mx-auto max-w-7xl px-4 text-center">
                    <h2 className="mb-2 text-4xl font-bold text-white">Our Services</h2>
                    <div className="mx-auto mb-8 h-1 w-32 bg-white" />
                    <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-white">
                        MedocBills LLC has a strong grasp of medical billing, credentialing, medical A/R, and
                        practice billing audit services. With extensive experience in the healthcare billing
                        industry, we are confident in our ability to enhance the financial performance of your
                        healthcare practice.
                    </p>
                </AnimatedSection>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                    {whatwedo.map((service, index) => (
                        <AnimatedSection
                            key={index}
                            direction="up"
                            delay={index * 100}
                            className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-lg"
                        >
                            <div className="mb-6 rounded-lg bg-cyan-light p-4">
                                <service.icon size={40} className="text-secondary" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-primary underline decoration-cyan-accent">
                                {service.title}
                            </h3>
                            <p className="leading-relaxed text-gray-700">{service.description}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* ── Why Choose ───────────────────────────────────────────── */}
            <AnimatedSection
                direction="left"
                className="flex w-full max-w-7xl flex-col-reverse rounded-lg p-4 shadow-lg sm:p-6 md:flex-row lg:p-8"
            >
                <div className="mt-6 flex flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 p-6 text-center sm:p-8 md:ml-5 md:mt-0 md:items-start">
                    <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
                        {successRate.map((item, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                                <span className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
                                    {item.value}
                                </span>
                                <span className="mt-1 text-base font-medium text-gray-700 sm:text-lg">
                                    {item.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 flex-col justify-center rounded-t-3xl bg-white p-6 text-left sm:p-8 md:rounded-r-3xl md:rounded-tl-none md:p-12 lg:p-16 xl:p-20">
                    <h1 className="mb-4 text-2xl font-extrabold leading-tight text-primary sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
                        {whyToChoose.heading}
                    </h1>
                    <ul className="my-3 space-y-4 sm:my-4 sm:space-y-5">
                        {whyToChoose.points.map((item, index) => (
                            <li key={index} className="relative pl-5 sm:pl-6">
                                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />
                                <h3 className="mb-1 text-base font-medium text-secondary sm:text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-700 sm:text-base">{item.para}</p>
                            </li>
                        ))}
                    </ul>
                    <button className="mt-6 self-start rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-secondary-hover sm:mt-8 sm:px-6 sm:py-3 sm:text-base">
                        Schedule a Consultation
                    </button>
                </div>
            </AnimatedSection>

            {/* ── Medical Specialties ──────────────────────────────────── */}
            <MedicalSpecialties />

            {/* ── Testimonials ─────────────────────────────────────────── */}
            <div className="relative mt-8 flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-deep px-4 py-10 font-sans sm:mt-10 sm:py-12 md:py-16">
                <div className="pointer-events-none absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <AnimatedSection
                    direction="up"
                    className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center p-4 text-center text-white sm:p-6 md:p-8"
                >
                    <h2 className="mb-8 text-3xl font-extrabold sm:mb-10 sm:text-4xl md:text-5xl">
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
                                className="mb-8 px-10 text-base italic leading-relaxed sm:mb-10 sm:px-14 sm:text-lg md:px-20 md:text-xl"
                            >
                                "{testimonials[currentTestimonial].text}"
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary/50 p-2 text-white transition hover:bg-secondary/70 sm:left-2 sm:p-3"
                            aria-label="Previous testimonial"
                        >
                            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonials.length)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-secondary/50 p-2 text-white transition hover:bg-secondary/70 sm:right-2 sm:p-3"
                            aria-label="Next testimonial"
                        >
                            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6 flex flex-col items-center sm:mt-8">
                        <PersonSVG />
                        <span className="mt-3 text-lg font-bold sm:mt-4 sm:text-xl">
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