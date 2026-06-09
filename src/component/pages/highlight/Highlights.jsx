import React from "react";
import { Trophy, Award, GraduationCap, Star } from "lucide-react";
import achive from "../../../assets/img/about/achivements.avif";

export default function Highlights() {
    const achievements = [
        { icon: <Trophy size={20} />, value: "100%", title: "Academic Excellence" },
        { icon: <Award size={20} />, value: "30+", title: "Years of Legacy" },
        { icon: <GraduationCap size={20} />, value: "10,000+", title: "Successful Alumni" },
        { icon: <Star size={20} />, value: "50+", title: "Awards & Recognitions" },
    ];

    const pillars = [
        { label: "Excellence", desc: "Consistent academic performance.", bg: "bg-[#F5EDD8]", border: "border-[#C9A84C]", text: "text-[#0F1B35]" },
        { label: "Leadership", desc: "Building future leaders.", bg: "bg-[#EFF6F1]", border: "border-[#2A7C4F]", text: "text-[#0F1B35]" },
        { label: "Innovation", desc: "Modern learning methods.", bg: "bg-[#EFF3FA]", border: "border-[#3B6BE4]", text: "text-[#0F1B35]" },
        { label: "Values", desc: "Character-driven education.", bg: "bg-[#F3EFF9]", border: "border-[#7C4FBF]", text: "text-[#0F1B35]" },
    ];

    return (
        <section className="bg-[#FAFAF7] py-24 font-sans">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="tracking-[0.22em] text-[11px] font-medium uppercase text-[#C9A84C]">
                        Our Achievements
                    </p>

                    <h2
                        className="mt-4 text-5xl md:text-6xl font-light text-[#0F1B35] leading-tight tracking-tight"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                        Excellence Through{" "}
                        <em className="italic text-[#C9A84C] not-italic" style={{ fontStyle: "italic" }}>
                            Education
                        </em>
                    </h2>

                    <p className="mt-5 text-[#64748b] text-[15px] font-light leading-relaxed max-w-xl mx-auto">
                        Celebrating decades of academic excellence, student success,
                        and a steadfast commitment to shaping future leaders.
                    </p>

                    {/* Gold diamond divider */}
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <span className="h-px w-14 bg-[#C9A84C] opacity-60 block" />
                        <span className="w-2 h-2 bg-[#C9A84C] rotate-45 block" />
                        <span className="h-px w-14 bg-[#C9A84C] opacity-60 block" />
                    </div>
                </div>

                {/* Hero Banner */}
                <div className="relative rounded-3xl overflow-hidden min-h-[420px]">
                    <img
                        src={achive}
                        alt="Achievements"
                        className="w-full h-full object-cover absolute inset-0"
                    />

                    {/* Deep navy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B35]/95 via-[#0F1B35]/80 to-[#1e3a6e]/60" />

                    {/* Left gold accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C] opacity-85" />

                    <div className="relative z-10 flex items-center min-h-[420px] px-12 lg:px-16 py-14">
                        <div className="max-w-lg">
                            <span
                                className="inline-block border border-[#C9A84C]/45 text-[#C9A84C] px-4 py-1.5
                                           rounded-full text-[11px] tracking-[0.18em] uppercase font-medium mb-6"
                            >
                                Adharsh Vidhyalaya Institutions
                            </span>

                            <h2
                                className="text-4xl lg:text-5xl font-light text-[#F5EDD8] leading-tight tracking-tight"
                                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                            >
                                Inspiring Generations Through{" "}
                                <em className="text-[#C9A84C]">Quality Education</em>
                            </h2>

                            <p className="mt-5 text-sm text-[#F5EDD8]/65 font-light leading-loose max-w-md">
                                Our journey is marked by academic achievements, leadership excellence,
                                and thousands of successful students who continue to make a difference
                                around the world.
                            </p>

                            <div className="flex items-center gap-2 mt-7">
                                <span className="h-px w-8 bg-[#C9A84C] opacity-70 block" />
                                <span className="text-[12px] text-[#C9A84C]/70 tracking-[0.15em] uppercase">
                                    Est. 1993
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stat Cards — overlap the banner */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 relative z-10">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#FAFAF7] border border-[#C9A84C]/25 rounded-[18px] p-7 text-center
                                       shadow-[0_4px_32px_rgba(15,27,53,0.07)]
                                       hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div
                                className="w-11 h-11 rounded-xl bg-[#F5EDD8] flex items-center justify-center
                                           mx-auto mb-4 text-[#C9A84C]"
                            >
                                {item.icon}
                            </div>
                            <p
                                className="text-[34px] font-semibold text-[#0F1B35] leading-none"
                                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                            >
                                {item.value}
                            </p>
                            <p className="mt-1.5 text-[12.5px] text-[#64748b] tracking-wide font-normal">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Gold Divider */}
                <div className="flex items-center justify-center gap-3 my-14">
                    <span className="h-px w-14 bg-[#C9A84C] opacity-60 block" />
                    <span className="w-2 h-2 bg-[#C9A84C] rotate-45 block" />
                    <span className="h-px w-14 bg-[#C9A84C] opacity-60 block" />
                </div>

                {/* Bottom: Tradition + Pillars */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h3
                            className="text-3xl lg:text-4xl font-light text-[#0F1B35] leading-snug tracking-tight"
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                        >
                            A Tradition of{" "}
                            <em className="text-[#C9A84C]">Success</em>
                        </h3>

                        <p className="mt-5 text-[14.5px] text-[#64748b] font-light leading-[1.85]">
                            Through years of dedication and commitment to educational excellence,
                            Adharsh Vidhyalaya has consistently nurtured talented students who
                            excel in academics, sports, leadership, and professional careers.
                        </p>

                        <p className="mt-3 text-[14.5px] text-[#64748b] font-light leading-[1.85]">
                            Our achievements reflect the hard work of our students, teachers,
                            and management in building a strong foundation for lifelong success.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {pillars.map((p, i) => (
                            <div
                                key={i}
                                className={`${p.bg} border-l-[3px] ${p.border} rounded-2xl p-5`}
                            >
                                <p
                                    className={`text-lg font-semibold ${p.text}`}
                                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                                >
                                    {p.label}
                                </p>
                                <p className="text-[13px] text-[#64748b] mt-1.5 leading-relaxed font-light">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}