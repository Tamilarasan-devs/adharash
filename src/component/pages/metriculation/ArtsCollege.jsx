import React from "react";
import {
    MapPin,
    Users,
    BookOpen,
    Trophy,
    GraduationCap,
    CheckCircle,
    ArrowRight,
    Star,
    Lightbulb,
    Heart,
    Globe,
    Sparkles,
} from "lucide-react";

import collegeImg from "../../../assets/img/about/collegeImg.avif";
import studentsImg from "../../../assets/img/about/studentsImg.avif";
import bannerImg from "../../../assets/img/about/bannerImg.webp";

/* ─────────────────────────────────────────────────────────────────
   tailwind.config.js — extend:
   fontFamily: {
     display: ["Playfair Display", "Georgia", "serif"],
     sans:    ["Inter", "sans-serif"],
   },

   index.css — add:
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Inter:wght@300;400;500;600&display=swap');
───────────────────────────────────────────────────────────────── */

const highlights = [
    { icon: <MapPin size={20} />, title: "Location", value: "Anthiyur, Erode", sub: "Tamil Nadu" },
    { icon: <Users size={20} />, title: "Institution", value: "Women's College", sub: "Exclusively for women" },
    { icon: <BookOpen size={20} />, title: "Programs", value: "Arts & Science", sub: "UG & PG courses" },
    { icon: <Trophy size={20} />, title: "Established", value: "2007", sub: "17+ years of excellence" },
];

const missions = [
    "Impart value-based knowledge that meets the needs of profession and society.",
    "Achieve excellence in teaching, learning and research at every level.",
    "Involve learners in real-life experiences and practical exposure.",
    "Prepare students to face future challenges with confidence and competence.",
];

const pillars = [
    { icon: <Star size={18} />, title: "Academic Excellence", desc: "Rigorous, outcome-focused curriculum designed to build conceptual depth and professional readiness across all programmes." },
    { icon: <Lightbulb size={18} />, title: "Innovation in Learning", desc: "Student-centred pedagogy, project-based learning and digital tools that make education relevant and engaging." },
    { icon: <Heart size={18} />, title: "Values & Ethics", desc: "A culture rooted in integrity, empathy and social responsibility — shaping graduates who lead with character." },
    { icon: <Globe size={18} />, title: "Rural Empowerment", desc: "Dedicated to uplifting rural women by bridging the educational gap and unlocking access to quality higher education." },
];

const programmes = [
    { dept: "Arts", courses: ["B.A. English", "B.A. Tamil", "B.A. History", "B.Com", "B.B.A."] },
    { dept: "Science", courses: ["B.Sc. Mathematics", "B.Sc. Physics", "B.Sc. Chemistry", "B.Sc. Computer Science", "B.Sc. Nursing"] },
    { dept: "Postgraduate", courses: ["M.A. English", "M.Com", "M.Sc. Mathematics", "M.Sc. Computer Science", "M.B.A."] },
];

const stats = [
    { val: "2007", lbl: "Founded" },
    { val: "1500+", lbl: "Students" },
    { val: "15+", lbl: "Programmes" },
    { val: "100%", lbl: "Women's College" },
];

export default function ArtsCollege() {
    return (
        <section className="bg-[#FAFAF6] text-[#0D1B2E] font-sans overflow-hidden">

            {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
            <div className="relative min-h-[90vh] flex items-end overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Adharsh Vidhyalaya Arts & Science College"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* gradient layers */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-[#0D1B2E]/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2E]/80 via-[#0D1B2E]/30 to-transparent" />

                {/* decorative rings */}
                <div className="absolute top-10 right-10 w-[480px] h-[480px] rounded-full border border-[#C9A84C]/15 pointer-events-none hidden lg:block" />
                <div className="absolute top-28 right-28 w-[300px] h-[300px] rounded-full border border-[#C9A84C]/10 pointer-events-none hidden lg:block" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 pt-40">
                    <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 rounded-full
                          px-4 sm:px-5 py-2 text-[#C9A84C] text-[10px] sm:text-xs
                          tracking-[2px] sm:tracking-[2.5px] uppercase mb-6 sm:mb-8">
                        <Sparkles size={12} />
                        Higher Education · Women's College
                    </div>

                    <h1 className="font-display text-[clamp(2.2rem,5vw,4.8rem)] font-bold text-[#FAFAF6]
                         leading-[1.06] mb-5 max-w-3xl">
                        Adharsh Vidhyalaya<br />Arts & Science<br className="hidden sm:block" />College for Women
                    </h1>

                    <p className="text-[rgba(250,250,246,0.65)] text-base sm:text-lg leading-[1.85]
                        max-w-[500px] mb-10 sm:mb-14">
                        Empowering women through quality education, leadership, innovation,
                        and academic excellence — in the heart of Anthiyur.
                    </p>

                    {/* stat row */}
                    <div className="flex flex-wrap gap-6 sm:gap-10">
                        {stats.map(({ val, lbl }) => (
                            <div key={lbl} className="border-l-[1.5px] border-[#C9A84C] pl-4">
                                <div className="font-display text-[1.6rem] sm:text-[2rem] font-bold text-[#C9A84C] leading-none">{val}</div>
                                <div className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-[rgba(250,250,246,0.45)] mt-1">{lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══════════════════════ FLOATING HIGHLIGHT CARDS ════════════════════════ */}
            <div className="relative z-20 bg-[#FAFAF6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-10 sm:-mt-14">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {highlights.map((h, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-[#E2D9C4] rounded-xl p-4 sm:p-6 relative overflow-hidden
                           hover:border-[#C9A84C] hover:shadow-[0_4px_24px_rgba(201,168,76,0.13)] transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96E]
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F4F1E8] text-[#B8952A]
                                flex items-center justify-center mb-3 sm:mb-4">
                                    {h.icon}
                                </div>
                                <p className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-[#B8952A] font-semibold mb-1">{h.title}</p>
                                <p className="font-display text-sm sm:text-base font-bold text-[#0D1B2E] leading-snug">{h.value}</p>
                                <p className="text-[11px] sm:text-xs text-[#8A9AAA] mt-1 hidden sm:block">{h.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* gold hairline */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent mt-14 sm:mt-20" />

            {/* ═══════════════════════════════ ABOUT ═══════════════════════════════════ */}
            <div className="bg-[#FAFAF6] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* image — gold corner frame */}
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32
                              border-t border-l border-[#C9A84C]/40 rounded-tl-2xl pointer-events-none" />
                            <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32
                              border-b border-r border-[#C9A84C]/40 rounded-br-2xl pointer-events-none" />
                            <img
                                src={collegeImg}
                                alt="College Campus"
                                className="rounded-2xl w-full h-[340px] sm:h-[460px] lg:h-[520px] object-cover"
                            />
                        </div>

                        {/* content */}
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                                <span className="w-6 h-px bg-[#C9A84C]" />
                                About the Institution
                            </div>
                            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-5 leading-snug">
                                Nurturing Women Leaders<br />for Tomorrow
                            </h2>
                            <p className="text-[#5A6A7A] leading-[1.9] mb-4 text-sm sm:text-base">
                                Adharsh Vidhyalaya Arts and Science College for Women, located in
                                Anthiyur, is dedicated to empowering women through transformative
                                education rooted in values and professional competence.
                            </p>
                            <p className="text-[#5A6A7A] leading-[1.9] mb-4 text-sm sm:text-base">
                                The institution equips students with academic excellence, practical
                                skills and ethical values necessary to thrive in a rapidly changing
                                world — through innovative teaching and a student-centred environment.
                            </p>
                            <p className="text-[#5A6A7A] leading-[1.9] text-sm sm:text-base">
                                Through purposeful programmes and mentored learning, the college
                                fosters confidence, leadership and the spirit of lifelong growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* gold hairline */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

            {/* ════════════════════════════════ PILLARS ════════════════════════════════ */}
            <div className="bg-[#F4F1E8] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                        <span className="w-6 h-px bg-[#C9A84C]" />
                        Our Pillars
                    </div>
                    <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-10 sm:mb-12">
                        What Defines Us
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {pillars.map((p, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-[#E2D9C4] rounded-xl p-6 sm:p-7 relative overflow-hidden
                           hover:border-[#C9A84C] hover:shadow-[0_4px_24px_rgba(201,168,76,0.12)] transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96E]
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="w-9 h-9 rounded-lg bg-[#F4F1E8] text-[#B8952A] flex items-center justify-center mb-5">
                                    {p.icon}
                                </div>
                                <h3 className="font-display text-[15px] font-bold text-[#0D1B2E] mb-2">{p.title}</h3>
                                <p className="text-[#5A6A7A] text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* gold hairline */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

            {/* ════════════════════════════ VISION & MISSION ═══════════════════════════ */}
            <div className="bg-[#FAFAF6] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                        <span className="w-6 h-px bg-[#C9A84C]" />
                        Purpose
                    </div>
                    <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-10 sm:mb-12">
                        Vision & Mission
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-6">

                        {/* Vision — dark navy card */}
                        <div className="bg-[#0D1B2E] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            {/* subtle watermark */}
                            <div aria-hidden="true"
                                className="absolute -bottom-6 -right-6 font-display font-bold text-white/[0.04]
                              text-[8rem] leading-none pointer-events-none select-none">V</div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/15 text-[#C9A84C] flex items-center justify-center mb-5">
                                    <GraduationCap size={20} />
                                </div>
                                <div className="text-[11px] tracking-[2.5px] uppercase text-[#C9A84C] font-semibold mb-3">Vision</div>
                                <p className="text-[rgba(250,250,246,0.75)] text-sm sm:text-base leading-[1.9]">
                                    To ensure success for rural women students and uplift their quality of life
                                    by imparting knowledge through need-based, quality education — empowering
                                    them to become confident, independent and socially responsible individuals.
                                </p>
                            </div>
                        </div>

                        {/* Mission — parchment card */}
                        <div className="bg-white border border-[#E2D9C4] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            <div className="h-[1.5px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96E] absolute top-0 left-0 right-0" />
                            <div className="text-[11px] tracking-[2.5px] uppercase text-[#B8952A] font-semibold mb-5">Mission</div>
                            <div className="space-y-4">
                                {missions.map((m, i) => (
                                    <div key={i} className={`flex items-start gap-3 pb-4 text-sm text-[#3A4A5C] leading-[1.85]
                                           ${i < missions.length - 1 ? "border-b border-[#F0EBE0]" : ""}`}>
                                        <CheckCircle size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                                        {m}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* gold hairline */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

            {/* ══════════════════════════════ PROGRAMMES ═══════════════════════════════ */}
            <div className="bg-[#F4F1E8] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                        <span className="w-6 h-px bg-[#C9A84C]" />
                        Academics
                    </div>
                    <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-10 sm:mb-12">
                        Programmes Offered
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {programmes.map((p, i) => (
                            <div key={i} className="bg-white border border-[#E2D9C4] rounded-xl overflow-hidden">
                                <div className="h-[1.5px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96E]" />
                                <div className="p-6 sm:p-7">
                                    <p className="font-display text-lg font-bold text-[#0D1B2E] mb-1">{p.dept}</p>
                                    <p className="text-[11px] tracking-[2px] uppercase text-[#B8952A] font-semibold mb-5">{p.courses.length} Programmes</p>
                                    <ul className="space-y-0">
                                        {p.courses.map((c, j) => (
                                            <li key={j} className={`flex items-center gap-2.5 text-sm text-[#5A6A7A] py-2.5
                                              ${j < p.courses.length - 1 ? "border-b border-[#F0EBE0]" : ""}`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* gold hairline */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

            {/* ══════════════════════════ STUDENT DEVELOPMENT ══════════════════════════ */}
            <div className="bg-[#FAFAF6] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* content */}
                        <div>
                            <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                                <span className="w-6 h-px bg-[#C9A84C]" />
                                Student Development
                            </div>
                            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-5 leading-snug">
                                Excellence Through<br />Knowledge & Values
                            </h2>
                            <p className="text-[#5A6A7A] leading-[1.9] mb-4 text-sm sm:text-base">
                                Our college focuses on holistic development — combining academic
                                rigour with leadership training, personality development and
                                community engagement for every student.
                            </p>
                            <p className="text-[#5A6A7A] leading-[1.9] mb-8 text-sm sm:text-base">
                                Students are encouraged to think critically, act responsibly and
                                contribute meaningfully to society while building successful, purposeful careers.
                            </p>

                            {/* dark stat panel */}
                            <div className="bg-[#0D1B2E] rounded-xl px-6 py-5 inline-flex flex-wrap gap-6 sm:gap-8">
                                {[["100%", "Placement Support"], ["15+", "Active Clubs"], ["Annual", "Cultural Fest"], ["Community", "Outreach"]].map(([v, l]) => (
                                    <div key={l}>
                                        <div className="font-display text-lg sm:text-xl font-bold text-[#C9A84C] leading-none">{v}</div>
                                        <div className="text-[10px] sm:text-[11px] tracking-[1.5px] uppercase text-[rgba(250,250,246,0.45)] mt-1">{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* image */}
                        <div className="relative">
                            <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32
                              border-t border-r border-[#C9A84C]/40 rounded-tr-2xl pointer-events-none" />
                            <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32
                              border-b border-l border-[#C9A84C]/40 rounded-bl-2xl pointer-events-none" />
                            <img
                                src={studentsImg}
                                alt="Students"
                                className="rounded-2xl w-full h-[340px] sm:h-[460px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════ QUOTE BAND ════════════════════════════════ */}
            <div className="bg-[#F4F1E8] py-14 sm:py-16 px-4 sm:px-6 text-center border-y border-[#E2D9C4]">
                <div className="max-w-3xl mx-auto">
                    <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-6" />
                    <p className="font-display text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-[#0D1B2E] leading-snug italic px-4">
                        "Empowering rural women to rise — through knowledge, values,
                        and the confidence to shape their own futures."
                    </p>
                    <div className="w-8 h-px bg-[#C9A84C] mx-auto mt-6" />
                </div>
            </div>
        </section>
    );
}