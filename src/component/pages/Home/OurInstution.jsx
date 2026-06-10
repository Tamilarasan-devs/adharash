import React, { useEffect, useRef, useState } from "react";

import g1 from "../../../assets/img/logo/avmhslogo.avif";
import g2 from "../../../assets/img/logo/AVPS LOGO.avif";
import g3 from "../../../assets/img/logo/ideal-logo.avif";
import g4 from "../../../assets/img/logo/vruskalogo.avif";
import g5 from "../../../assets/img/logo/logo1.avif";

/* ── intersection hook ── */
function useInView(threshold = 0.12) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

/* ── animated counter ── */
function Counter({ end, suffix = "" }) {
    const [val, setVal] = useState(0);
    const [ref, inView] = useInView(0.4);
    useEffect(() => {
        if (!inView) return;
        let frame = 0;
        const total = 70;
        const tick = () => {
            frame++;
            setVal(Math.round((frame / total) * end));
            if (frame < total) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, end]);
    return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ════════════════════════════════════════ */
export default function OurInstitution() {
    const [hRef, hIn] = useInView(0.1);
    const [iRef, iIn] = useInView(0.08);
    const [sRef, sIn] = useInView(0.1);
    const [hov, setHov] = useState(null);

    const institutions = [
        { image: g1, name: "Adharsh Vidhya Mandir Higher Secondary School", short: "AVMHS" },
        { image: g2, name: "Adharsh Vidyalaya Public School", short: "AVPS" },
        { image: g3, name: "Ideal Tuition Centre", short: "ITC" },
        { image: g4, name: "Vruksha International School", short: "VIS" },
        { image: g5, name: "Adharsh Educational Institutions", short: "AEI" },
    ];

    const metrics = [
        { end: 6, suffix: "+", label: "Institutions", sub: "Under one vision" },
        { end: 60000, suffix: "+", label: "Students Graduated", sub: "And still counting" },
        { end: 500, suffix: "+", label: "Faculty Members", sub: "Passionate educators" },
        { end: 90, suffix: "%", label: "Success Rate", sub: "Academic achievement" },
    ];

    return (
        <section
            className="relative overflow-hidden bg-white"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
            {/* ░░ background texture ░░ */}
            <div className="pointer-events-none absolute inset-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.03 }}>
                    <defs>
                        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="0.6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* soft orbs */}
                <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,.07) 0%, transparent 70%)" }} />
                <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(99,102,241,.06) 0%, transparent 70%)" }} />
            </div>

            <div className="relative mx-auto max-w-[1180px] mt-16">

                {/* ══════════ HEADER ══════════ */}
                <div
                    ref={hRef}
                    className="mb-20 text-center"
                    style={{
                        opacity: hIn ? 1 : 0,
                        transform: hIn ? "translateY(0)" : "translateY(32px)",
                        transition: "opacity .8s ease, transform .8s ease",
                    }}
                >
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                        Our Institutions
                    </span>

                    <h2 className="mt-3 text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 lg:text-6xl">
                        A Family of
                        <span
                            className="block"
                            style={{
                                background: "linear-gradient(120deg,#1d4ed8 20%,#0891b2 80%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Educational Excellence
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
                        A network of institutions committed to nurturing excellence, innovation, leadership,
                        and lifelong learning — all under one guiding vision.
                    </p>

                    <div className="mx-auto mt-8 flex items-center justify-center gap-2">
                        <div className="h-px w-14 rounded-full bg-blue-500" />
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />
                        <div className="h-px w-6 rounded-full bg-slate-200" />
                    </div>
                </div>


                {/* ══════════ INSTITUTION ROW ══════════
            Design: floating logo circles with a connecting spine line,
            name revealed below — no card boxes at all.
        ══════════ */}
                <div ref={iRef} className="relative">

                    {/* ── connecting spine (desktop only) ── */}
                    <div
                        className="absolute left-[10%] right-[10%] hidden lg:block"
                        style={{
                            top: 64, height: 1,
                            background: "linear-gradient(90deg, transparent, #e2e8f0 15%, #e2e8f0 85%, transparent)",
                            overflow: "hidden",
                        }}
                    >
                        {/* animated shimmer on the line */}
                        <div
                            style={{
                                position: "absolute", inset: 0,
                                background: "linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)",
                                width: "30%",
                                animation: iIn ? "shimmerLine 2.5s ease-in-out infinite" : "none",
                            }}
                        />
                    </div>

                    <style>{`
            @keyframes shimmerLine {
              0%   { left: -30%; }
              100% { left: 130%; }
            }
            @keyframes floatUp {
              0%, 100% { transform: translateY(0px); }
              50%       { transform: translateY(-6px); }
            }
          `}</style>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
                        {institutions.map((inst, i) => {
                            const active = hov === i;
                            return (
                                <div
                                    key={i}
                                    onMouseEnter={() => setHov(i)}
                                    onMouseLeave={() => setHov(null)}
                                    className="flex flex-col items-center text-center"
                                    style={{
                                        opacity: iIn ? 1 : 0,
                                        transform: iIn ? "translateY(0)" : "translateY(28px)",
                                        transition: `opacity .65s ease ${i * 0.1}s, transform .65s ease ${i * 0.1}s`,
                                        cursor: "default",
                                    }}
                                >
                                    {/* node dot above */}
                                    <div style={{
                                        width: 10, height: 10, borderRadius: "50%",
                                        // background: active ? "#3b82f6" : "#e2e8f0",
                                        // marginBottom: 16,
                                        // boxShadow: active ? "0 0 0 4px rgba(59,130,246,.18)" : "none",
                                        transition: "all .35s ease",
                                    }} />

                                    {/* logo circle */}
                                    <div
                                        style={{
                                            width: 128, height: 128,
                                            // borderRadius: "50%",
                                            background: "#fff",
                                            // border: active ? "2px solid #3b82f6" : "1.5px solid #e2e8f0",
                                            // boxShadow: active
                                            //     ? "0 16px 48px rgba(59,130,246,.18), 0 4px 16px rgba(0,0,0,.06)"
                                            //     : "0 4px 20px rgba(0,0,0,.06)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            overflow: "hidden",
                                            transition: "all .4s cubic-bezier(.34,1.56,.64,1)",
                                            transform: active ? "scale(1.1)" : "scale(1)",
                                            animation: active ? "floatUp 2s ease-in-out infinite" : "none",
                                        }}
                                    >
                                        <img
                                            src={inst.image}
                                            alt={inst.name}
                                            style={{ width: "72%", height: "72%", objectFit: "contain" }}
                                        />
                                    </div>

                                    {/* short badge */}
                                    <span
                                        style={{
                                            marginTop: 14,
                                            display: "inline-block",
                                            fontSize: 10, fontWeight: 800,
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: active ? "#fff" : "#94a3b8",
                                            background: active
                                                ? "linear-gradient(135deg,#2563eb,#0891b2)"
                                                : "transparent",
                                            padding: active ? "3px 12px" : "3px 0",
                                            borderRadius: 999,
                                            transition: "all .35s ease",
                                        }}
                                    >
                                        {inst.short}
                                    </span>

                                    {/* full name */}
                                    <p
                                        style={{
                                            marginTop: 8,
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: active ? "#0f172a" : "#64748b",
                                            lineHeight: 1.5,
                                            maxWidth: 140,
                                            transition: "color .3s ease",
                                        }}
                                    >
                                        {inst.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}