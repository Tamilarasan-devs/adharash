
import React from "react";
import {
    GraduationCap,
    TrendingUp,
    Building2,
    School,
    Trophy,
    Users,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

export default function Founder() {
    const milestones = [
        {
            year: "1981",
            title: "IDEAL Tutorial College",
            description:
                "The foundation of our educational journey began with a vision to transform student success.",
            color: "from-blue-500 to-indigo-500",
        },
        {
            year: "1987",
            title: "Entrance Coaching Centre",
            description:
                "Competitive exam coaching introduced to help students achieve professional dreams.",
            color: "from-violet-500 to-purple-500",
        },
        {
            year: "1991",
            title: "Ideal Matriculation School",
            description:
                "Expanded into school education with a commitment to academic excellence.",
            color: "from-cyan-500 to-sky-500",
        },
        {
            year: "1996",
            title: "Higher Secondary School",
            description:
                "Upgraded to provide advanced education and career-focused learning.",
            color: "from-emerald-500 to-green-500",
        },
        {
            year: "2004",
            title: "Adharsh Vidhyalaya",
            description:
                "A modern institution combining holistic education with entrance coaching.",
            color: "from-orange-500 to-amber-500",
        },
        {
            year: "2016+",
            title: "Educational Ecosystem",
            description:
                "CBSE Schools, Colleges, Teacher Education, Hostels and more.",
            color: "from-pink-500 to-rose-500",
        },
    ];

    const stats = [
        { value: "40+", label: "Years Legacy" },
        { value: "50+", label: "Acres Campus" },
        { value: "500+", label: "Medical Admissions" },
        { value: "1000+", label: "Professionals Produced" },
    ];

    const admissions = [
        "1990 • 4",
        "1991 • 7",
        "1992 • 10",
        "1996 • 25",
        "1998 • 90",
        "2000 • 200",
        "2003 • 300",
        "2006 • 500",
    ];

    return (
        <section className="bg-[#FCFCFD] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                            <Sparkles size={16} />
                            Since 1981
                        </div>

                        <h1 className="mt-6 text-5xl lg:text-7xl font-bold tracking-tight text-slate-900">
                            Building
                            <span className="block text-blue-600">
                                Educational Excellence
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
                            From coaching just two medical aspirants to producing
                            thousands of successful professionals worldwide,
                            our journey is built on vision, dedication, and excellence.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-50 rounded-full" />

                        <div className="relative bg-white rounded-[32px] border border-slate-200 p-8 shadow-xl">
                            <div className="flex items-center justify-between">
                                <GraduationCap
                                    size={42}
                                    className="text-blue-600"
                                />

                                <ArrowUpRight className="text-slate-400" />
                            </div>

                            <h3 className="mt-6 text-2xl font-bold">
                                The Beginning
                            </h3>

                            <p className="mt-4 text-slate-600 leading-7">
                                Founded as IDEAL Tutorial College in 1981,
                                the institution began with a mission to empower
                                students through quality education and career guidance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}

                <div className="grid md:grid-cols-4 gap-5 mt-14">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[28px] border border-slate-200 p-6 hover:shadow-lg transition"
                        >
                            <h3 className="text-4xl font-bold text-slate-900">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-slate-500">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Journey */}

                <div className="mt-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold">
                                Growth Journey
                            </h2>

                            <p className="text-slate-500 mt-2">
                                Milestones that shaped our institution.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-5">
                        {milestones.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-slate-200 rounded-[28px] p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div
                                    className={`w - 14 h - 14 rounded - 2xl bg - gradient - to - r ${item.color} `}
                                />

                                <div className="mt-5 text-blue-600 font-semibold">
                                    {item.year}
                                </div>

                                <h3 className="mt-2 text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Admissions Dashboard */}

                <div className="mt-16 rounded-[36px] bg-slate-900 text-white p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                        <TrendingUp className="text-blue-400" />

                        <h2 className="text-3xl font-bold">
                            Medical Admissions Growth
                        </h2>
                    </div>

                    <p className="mt-3 text-slate-400">
                        Consistent growth over the years reflecting
                        academic excellence and dedicated coaching.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
                        {admissions.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-lg"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expansion */}

                <div className="mt-16 grid lg:grid-cols-3 gap-5">
                    <div className="rounded-[32px] bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                        <School className="text-blue-600" size={36} />

                        <h3 className="mt-5 text-2xl font-bold">
                            Schools
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Matriculation and CBSE schools across
                            multiple campuses.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-gradient-to-br from-violet-50 to-purple-100 p-8">
                        <Building2 className="text-violet-600" size={36} />

                        <h3 className="mt-5 text-2xl font-bold">
                            Higher Education
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Women's Arts & Science College and
                            Teacher Education programs.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-gradient-to-br from-amber-50 to-orange-100 p-8">
                        <Trophy className="text-orange-500" size={36} />

                        <h3 className="mt-5 text-2xl font-bold">
                            Student Success
                        </h3>

                        <p className="mt-3 text-slate-600">
                            Thousands of doctors, engineers,
                            entrepreneurs and professionals.
                        </p>
                    </div>
                </div>

                {/* CTA */}

                <div className="mt-16 rounded-[36px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-10 text-white">
                    <Users size={42} />

                    <h2 className="mt-6 text-4xl font-bold">
                        A Legacy That Continues To Grow
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-3xl leading-8">
                        Guided by visionary leadership, committed educators,
                        supportive parents, and determined students,
                        our institution continues to inspire future generations.
                    </p>
                </div>
            </div>
        </section>
    );
}

