import React from "react";
import {
    MapPin,
    Users,
    BookOpen,
    Trophy,
    CheckCircle,
} from "lucide-react";

import campusImg from "../../../assets/img/about/matric-campus.avif";
// import campusImg from "../../../assets/img/schools/matric-campus.avif";

export default function IdealMatric() {
    const objectives = [
        "To build the overall personality of every student.",
        "To emphasize academic excellence through strong communication skills.",
        "To provide opportunities that encourage initiative and self-reliance.",
        "To develop leadership qualities among students.",
        "To inculcate honesty, loyalty, truthfulness and discipline.",
        "To nurture respect for elders and traditional Indian values.",
    ];

    return (
        <section className="bg-gradient-to-b from-white via-slate-50 to-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold tracking-wide">
                        Established 1991
                    </span>

                    <h2 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
                        Ideal Matric Hr. Sec. School
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        The founding institution of the Adharsh Group, where a legacy of
                        educational excellence began and continues to inspire generations
                        of learners.
                    </p>

                    <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Campus Section */}
                <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

                    {/* Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition"></div>

                        <img
                            src={campusImg}
                            alt="School Campus"
                            className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-blue-600 uppercase tracking-[3px] font-semibold">
                            Amidst The Scenic Beauty Of Nature
                        </span>

                        <h3 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                            A Campus Designed For Learning & Growth
                        </h3>

                        <p className="mt-6 text-slate-600 leading-8 text-lg">
                            Adharsh Vidhyalaya Public School is spread across a magnificent
                            15-acre campus surrounded by nature's beauty.
                        </p>

                        <p className="mt-4 text-slate-600 leading-8 text-lg">
                            Situated at the foothills of lush green mountains, the campus
                            enjoys a peaceful atmosphere with gentle breezes flowing
                            throughout the year, creating an ideal environment for education,
                            creativity and personal development.
                        </p>

                        <p className="mt-4 text-slate-600 leading-8 text-lg">
                            The pleasant climate and serene surroundings provide students
                            with a refreshing learning experience while promoting both
                            academic excellence and holistic growth.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-24">

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition">
                        <MapPin className="text-blue-600 mb-4" size={40} />
                        <h4 className="text-3xl font-bold text-slate-900">15+</h4>
                        <p className="text-slate-600 mt-2">Acres Campus</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition">
                        <BookOpen className="text-green-600 mb-4" size={40} />
                        <h4 className="text-3xl font-bold text-slate-900">1991</h4>
                        <p className="text-slate-600 mt-2">Established</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition">
                        <Users className="text-purple-600 mb-4" size={40} />
                        <h4 className="text-3xl font-bold text-slate-900">100%</h4>
                        <p className="text-slate-600 mt-2">Student Focused</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition">
                        <Trophy className="text-amber-500 mb-4" size={40} />
                        <h4 className="text-3xl font-bold text-slate-900">30+</h4>
                        <p className="text-slate-600 mt-2">Years Legacy</p>
                    </div>
                </div>

                {/* Aims & Objectives */}
                <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-8 md:p-14">

                    <div className="text-center mb-14">
                        <span className="text-blue-600 uppercase tracking-[3px] font-semibold">
                            Our Mission
                        </span>

                        <h3 className="text-4xl font-bold text-slate-900 mt-4">
                            Aims & Objectives
                        </h3>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Our institution is committed to nurturing responsible,
                            knowledgeable and value-driven individuals prepared for the
                            challenges of the future.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {objectives.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-all duration-300"
                            >
                                <CheckCircle
                                    className="text-blue-600 flex-shrink-0 mt-1"
                                    size={24}
                                />

                                <p className="text-slate-700 leading-7">
                                    {item}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}