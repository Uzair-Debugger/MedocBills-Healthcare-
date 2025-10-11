import Doctor1 from '../assets/Doctors/Doctor1.jpg'
import Doctor2 from '../assets/Doctors/Doctor2.jpg'
import Doctor3 from '../assets/Doctors/Doctor3.jpg'
import Doctor4 from '../assets/Doctors/Doctor4.jpg'
import Doctor5 from '../assets/Doctors/Doctor5.jpg'




import { Rocket, HeartPulse, Bug, Users,
    SquareActivity, Hospital, BriefcaseMedical, Bed, Stethoscope, Siren
 } from "lucide-react";


export const successRate = [
    { value: '99.9%', description: 'First Pass Rate' },
    { value: '30%', description: 'Increase in Revenue' },
    { value: '24', description: 'Hours Claim Turnaround' },
    { value: '>25', description: 'Days in A/R' }
];

export const whyToChoose = 
    {
        heading: "Why Choose RMB as your Medical Billing Services Provider?",
        para1: "As your dedicated medical billing services provider, we’re an extension of your practice. Imagine us as your financial team. While you focus on patient care, we’ll handle the complex world of insurance claims, patient billing, and revenue collection. Together, we'll ensure your practice runs smoothly and efficiently.",
        para2: "Your healthcare facility is a complex system with many moving parts, all working together to deliver exceptional patient care. We at Right Medical Billing are proud to be a vital component of that system. As a trusted medical billing services provider, we handle the financial aspects of your practice, allowing your team to focus on what they do best: providing compassionate care."
    }


export const services = [
  {
    icon: Rocket,
    title: "24/7 Emergency",
    description: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
  },
  {
    icon: HeartPulse,
    title: "Expert Consultation",
    description: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
  },
  {
    icon: Bug,
    title: "Intensive Care",
    description: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
  },
  {
    icon: Users,
    title: "Family Planning",
    description: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
  }
];


export const clientBase = {
  heading: "Our Client Base",
  paragraph: "Carecloud offers comprehensive medical billing and revenue cycle management services to a diverse client base. We partner with healthcare providers of all sizes, from solo practitioners navigating complex healthcare landscapes to large healthcare systems managing bustling operations. Our commitment lies in delivering tailored solutions that drive revenue and efficiency.",
  buttonText: "Let's Streamline Your Billing",
  icons: [
    SquareActivity,
    Hospital,
    BriefcaseMedical,
    Bed,
    Stethoscope,
    Siren
  ]
};


export const testimonials = [
  {
    text: "Lorem consequat massa quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate eget Nulla consequat massa quis enim.Donec pede justo, fringilla vel, vulputate eget ut ex ac nulla pellentesque mollis in a enim. Praesent placerat sapien mauris, vitae sodales tellus venenatis ac....",
    name: "John Smith",
  },
  {
    text: "This is a second testimonial. The service was excellent and I am very happy with the results. Highly recommended for anyone looking for professional medical billing services.",
    name: "Jane Doe",
  },
  {
    text: "My third testimonial. The team at RMB is incredibly efficient and has made a huge difference in our revenue cycle management. Their expertise is unmatched.",
    name: "Peter Jones",
  },
];


    // Testimonial navigation
// Testimonials data


export const testimonialVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } },
    };



// Our Services Section

export const servicesData = [
  { 
    title: 'Medical Billing & Coding', 
    description: "Accurate billing and coding services designed to minimize errors, ensure compliance, and maximize reimbursements." 
  },
  { 
    title: 'Insurance Claim Management', 
    description: "Streamlined claim submission, tracking, and follow-up that improves approval rates and reduces denials." 
  },
  { 
    title: 'Patient Support & Assistance', 
    description: "Compassionate guidance to help patients navigate healthcare bills, insurance policies, and payment options with ease." 
  },
  { 
    title: 'Compliance & Reporting', 
    description: "HIPAA-compliant processes and detailed reporting to safeguard patient data and maintain financial transparency." 
  },
  { 
    title: 'Revenue Cycle Management', 
    description: "End-to-end management of the revenue cycle, from scheduling to collections, for increased efficiency and profitability." 
  },
  { 
    title: 'Telehealth Billing', 
    description: "Specialized billing solutions tailored for virtual care and telehealth services, aligned with modern insurance policies." 
  },
];

export const statsData = [
  { label: 'Years of Expertise', value: 15 },
  { label: 'Healthcare Providers Served', value: 452 },
  { label: 'Certifications & Accreditations', value: 26 },
  { label: 'Dedicated Professionals', value: 12 },
];

export const doctorsData = [
  { name: 'Dr. Janet Johnson', specialization: 'Tooth Specialist', image:Doctor1 },
  { name: 'Dr. Charles Smith', specialization: 'Orthodontist', image: Doctor2},
  { name: 'Dr. Olivia Bayneitle', specialization: 'Hygienist', image: Doctor3 },
  { name: 'Dr. Alex Brown', specialization: 'Periodontist', image: Doctor4 },
  { name: 'Dr. Emily Davis', specialization: 'Pediatric Dentist', image: Doctor5 },
];