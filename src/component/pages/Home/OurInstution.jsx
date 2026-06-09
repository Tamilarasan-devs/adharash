import React from "react";

import g1 from "../../../assets/img/logo/avmhslogo.avif";
import g2 from "../../../assets/img/logo/AVPS LOGO.avif";
import g3 from "../../../assets/img/logo/ideal-logo.avif";
import g4 from "../../../assets/img/logo/vruskalogo.avif";
import g5 from "../../../assets/img/logo/logo1.avif";

export default function OurInstitution() {
    const institutions = [
        {
            image: g1,
            name: "Adharsh Vidhya Mandir Higher Secondary School",
        },
        {
            image: g2,
            name: "Adharsh Vidyalaya Public School",
        },
        {
            image: g3,
            name: "Ideal Tuition Centre",
        },
        {
            image: g4,
            name: "Vruksha International School",
        },
        {
            image: g5,
            name: "Adharsh Educational Institutions",
        },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/20 blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold uppercase tracking-[4px]">
                        Our Institutions
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Educational Excellence
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mt-6" />

                    <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
                        A family of institutions committed to nurturing excellence,
                        innovation, leadership and lifelong learning.
                    </p>
                </div>

                {/* Institution Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {institutions.map((item, index) => (
                        <div
                            key={index}
                            className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                hover:border-blue-400/40
                hover:bg-white/10
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-blue-500/20
              "
                        >
                            <div className="flex flex-col items-center text-center">

                                {/* Logo */}
                                <div className="bg-white rounded-2xl p-4 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center shadow-lg">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-contain transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="mt-5 text-white font-semibold text-sm md:text-base leading-relaxed">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    {[
                        { value: "6+", label: "Institutions" },
                        { value: "60K+", label: "Students Graduated" },
                        { value: "500+", label: "Faculty Members" },
                        { value: "90%", label: "Success Rate" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                text-center
              "
                        >
                            <h3 className="text-4xl font-bold text-blue-400">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-slate-300">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}