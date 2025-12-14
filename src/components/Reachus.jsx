import React, { useState } from "react";

const RequestCallBackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        state: "",
        date: "",
        message: "",
        notRobot: false
    });

    const services = [
        "Medical Billing",
        "Medical Coding",
        "Medical Credentialing",
        "Verification of Benefits",
        "Prior Authorization",
        "Patient Billing"
    ];

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
        "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
        "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
        "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ];

    const handleChange = () => {
        // const { name, value, type } = e.target;
        // // const checked = (e.target as HTMLInputElement).checked;
        // setFormData(prev => ({
        //     ...prev,
        //     [name]: type === 'checkbox' ? checked : value
        // }));
    };

    const handleSubmit = () => {
        // e.preventDefault();
        // console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 my-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Form */}
                <div className="bg-[#00a7e1] p-8 md:p-12 lg:p-16">
                    <h1 className="text-3xl font-bold text-white mb-10">
                        Request For A Call Back
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full bg-white border border-white rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full bg-white border border-white rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone No."
                                className="w-full bg-white border border-white rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                                required
                            />
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-white border border-white rounded-md px-4 py-3 text-gray-800 appearance-none"
                                required
                            >
                                <option value="" disabled>- Service -</option>
                                {services.map((service) => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                            </select>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full bg-white border border-white rounded-md px-4 py-3 text-gray-800 appearance-none"
                                required
                            >
                                <option value="" disabled>- State -</option>
                                {states.map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full bg-white border border-white rounded-md px-4 py-3 text-gray-800"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Message"
                            className="w-full bg-white border border-white rounded-md px-4 py-4 text-gray-800 placeholder-gray-500 focus:outline-none resize-none"
                            required
                        ></textarea>

                        {/* reCAPTCHA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-md">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="notRobot"
                                    name="notRobot"
                                    checked={formData.notRobot}
                                    onChange={handleChange}
                                    className="h-5 w-5 text-[#00a7e1] rounded focus:ring-[#00a7e1]"
                                    required
                                />
                                <label htmlFor="notRobot" className="ml-3 text-gray-700">
                                    I'm not a robot
                                </label>
                            </div>
                            <div className="flex items-center ml-0 sm:ml-auto">
                                <div className="bg-[#4285f4] text-white text-2xl w-10 h-10 flex items-center justify-center rounded-l">
                                    ↻
                                </div>
                                <div className="bg-gray-100 px-3 py-2 border border-gray-300 rounded-r">
                                    <div className="text-sm font-medium">reCAPTCHA</div>
                                    <div className="text-xs text-gray-600">Privacy - Terms</div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-[#00a7e1] font-bold py-3 rounded-md hover:bg-gray-100 transition"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>

                {/* Right Side - Reach Us + Map */}
                <div className="bg-white p-8 md:p-12  flex flex-col">
                    <h2 className="text-3xl font-bold text-[#2c3e50] mb-8 underline decoration-[#00a7e1] decoration-4 underline-offset-8">
                        Reach Us
                    </h2>

                    <div className="space-y-6 mb-8 text-lg">
                        <p className="flex items-center gap-3">
                            <span className="text-[#00a7e1] text-2xl">📞</span>
                            <span className="font-medium">(501)-424-0123</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-[#00a7e1] text-2xl">✉️</span>
                            <span className="font-medium">info@allstarsmb.com</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-[#00a7e1] text-2xl">📍</span>
                            <span className="font-medium">
                                835 Wilshire Blvd
                                Ste 500 #513
                                Los Angeles, CA 90017
                            </span>
                        </p>
                    </div>

                    {/* Google Map - Responsive */}
                    <div className="flex-1 min-h-96 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&height=450&hl=en&q=835%20Wilshire%20Blvd%20Ste%20500%20%23513%20Los%20Angeles%20CA%2090017&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        ></iframe>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestCallBackForm;