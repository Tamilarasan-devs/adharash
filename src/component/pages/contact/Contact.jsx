import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: "Address",
            desc: "Adharsh Nagar, Anthiyur, Erode District, Tamil Nadu",
        },
        {
            icon: <Phone size={24} />,
            title: "Phone",
            desc: "+91 4256 123456",
        },
        {
            icon: <Mail size={24} />,
            title: "Email",
            desc: "info@adharshvidhyalaya.edu.in",
        },
        {
            icon: <Clock size={24} />,
            title: "Office Hours",
            desc: "Mon – Sat: 8:00 AM – 5:00 PM",
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                        Get In Touch
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-5"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Send us a Message
                        </h3>
                        <form className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition"
                            />
                            <textarea
                                rows={5}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
