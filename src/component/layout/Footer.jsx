import React from "react";
import logo from "../../assets/img/logo.avif";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white mt-10">

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-10 w-10 rounded-full ring-2 ring-blue-500"
                            />
                            <h2 className="text-lg font-bold">
                                Adharsh Vidhyalaya
                            </h2>
                        </div>

                        <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                            Empowering students with quality education, discipline, and excellence
                            for a brighter future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {["Home", "About", "CBSE", "Matriculation", "Gallery"].map((item) => (
                                <li
                                    key={item}
                                    className="hover:text-blue-400 cursor-pointer transition"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Information</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Admissions Open</li>
                            <li>Academic Calendar</li>
                            <li>Events & Highlights</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>📍 Anthiyur / Palladam</li>
                            <li>📞 +91 XXXXX XXXXX</li>
                            <li>✉️ info@school.com</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Adharsh Vidhyalaya Educational Institutions. All rights reserved.
                    </p>

                    {/* Social Icons Style Buttons */}
                    <div className="flex gap-3">
                        {["FB", "IG", "YT", "X"].map((icon) => (
                            <span
                                key={icon}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition cursor-pointer text-xs font-bold"
                            >
                                {icon}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}