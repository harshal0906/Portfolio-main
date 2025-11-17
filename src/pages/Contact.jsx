import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } 
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        setTimeout(() => {
            console.log("Feedback submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitting(false);
            setTimeout(() => setSubmitted(false), 5000);
        }, 1000);
    };

    const contactInfo = [
        { label: "Phone", value: "+91 xxxxx xx656" },
        {
            label: "Email",
            value: "harshalgadher04@gmail.com",
            link: 'mailto:yourname@example.com',
        },
        {
            label: "GitHub",
            value: "github.com/harshalgadher",
            link: "https://github.com/harshal0906",
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/harshalgadher",
            link: "https://www.linkedin.com/in/harshal-gadher-565661308/",
        },
    ];

    return (
        <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Fade-In Main Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900/70 backdrop-blur-md"
                >
                    {/* Left Side */}
                    <div className="bg-gradient-to-br from-purple-700/40 via-indigo-700/20 to-transparent p-10 flex flex-col justify-center items-center text-center">
                        <div className="text-6xl mb-6"></div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Thank You!</h2>
                        <p className="text-gray-300 max-w-md text-lg leading-relaxed">
                            I truly appreciate you taking the time to visit my portfolio. Your
                            feedback helps me grow and improve. Let's connect!
                        </p>
                    </div>

                    {/* Right Side - Feedback Form */}
                    <div className="p-10 bg-gray-800/50">
                        <h3 className="text-3xl font-semibold mb-8 text-center text-white">
                            Send Feedback 💬
                        </h3>

                        {submitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="text-6xl mb-4">✅</div>
                                <h4 className="text-2xl text-green-400 font-medium mb-2">
                                    Message Sent!
                                </h4>
                                <p className="text-gray-300">Thank you for reaching out.</p>
                            </motion.div>
                        ) : (
                            <form className="space-y-6">
                                {/* Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-xl bg-gray-900/60 border-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${errors.name ? "border-red-400" : "border-gray-700"
                                            }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-xl bg-gray-900/60 border-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${errors.email ? "border-red-400" : "border-gray-700"
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message *"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full p-4 rounded-xl bg-gray-900/60 border-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all ${errors.message ? "border-red-400" : "border-gray-700"
                                            }`}
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${isSubmitting
                                            ? "bg-gray-600 cursor-not-allowed"
                                            : "bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex justify-center items-center gap-2">
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Feedback.."
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>

                {/* Contact Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/60 border border-gray-700 rounded-3xl p-10 shadow-lg"
                >
                    <h3 className="text-3xl font-semibold text-center mb-10 ">
                       <span className="bg-gradient-to-r font-extrabold from-purple-500 to-pink-500 bg-clip-text text-transparent"> Let’s Connect</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 rounded-2xl text-center bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700 transition-all hover:scale-[1.03] hover:shadow-xl"
                            >
                                <h4 className="text-lg font-semibold mb-1">{item.label}</h4>
                                <p className="text-gray-400 text-sm break-all">{item.value}</p>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
