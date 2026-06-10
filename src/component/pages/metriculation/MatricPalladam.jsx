import React from "react";
import {
  MapPin,
  BookOpen,
  Trophy,
  GraduationCap,
  Building2,
  ArrowRight,
  CheckCircle,
  Leaf,
  Users,
  Star,
  Layers,
} from "lucide-react";

import img1 from "../../../assets/img/about/std1.avif";
import img2 from "../../../assets/img/about/std2.avif";

/* ─────────────────────────────────────────────────────────────────
   tailwind.config.js — extend:
   fontFamily: {
     display: ["Playfair Display", "Georgia", "serif"],
     sans:    ["Inter", "sans-serif"],
   },

   index.css — add:
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
───────────────────────────────────────────────────────────────── */

const highlights = [
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Palladam – Sulur NH Road",
    sub: "Near Tiruppur",
  },
  {
    icon: <Building2 size={20} />,
    title: "Campus",
    value: "10-Acre Green Campus",
    sub: "Aarakulam Pirivu",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Education",
    value: "Higher Secondary School",
    sub: "Tamil Nadu Matriculation",
  },
  {
    icon: <Trophy size={20} />,
    title: "Focus",
    value: "Academic Excellence",
    sub: "Values · Discipline · Leadership",
  },
];

const pillars = [
  {
    icon: <Star size={18} />,
    title: "Academic Rigour",
    desc: "Structured, comprehensive matriculation curriculum designed to build conceptual mastery from foundational years through higher secondary.",
  },
  {
    icon: <Users size={18} />,
    title: "Character Building",
    desc: "Rooted in Indian ethics — every programme balances knowledge with integrity, discipline, and responsibility.",
  },
  {
    icon: <Layers size={18} />,
    title: "Modern Infrastructure",
    desc: "International-standard facilities, science labs, digital classrooms, and a fully equipped library on a sprawling 10-acre campus.",
  },
  {
    icon: <Leaf size={18} />,
    title: "Nature-Inspired Campus",
    desc: "Surrounded by scenic greenery and a peaceful atmosphere that fosters focus, creativity, and genuine love of learning.",
  },
];

const values = [
  "Rooted in Indian ethics and values",
  "Encouraging flexible, independent thinking",
  "Building effective communicators and leaders",
  "Holistic development beyond academics",
  "Preparing students for life's real challenges",
  "Supportive mentors and guided learning",
];

const stats = [
  { val: "10", lbl: "Acre Campus" },
  { val: "K–XII", lbl: "All Grades" },
  { val: "1000+", lbl: "Students" },
  { val: "NH", lbl: "Highway Access" },
];

export default function MatricPalladam() {
  return (
    <section className="bg-[#FAFAF6] text-[#0D1B2E] font-sans overflow-hidden">

      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <div className="relative min-h-[90vh] flex items-end overflow-hidden">
        {/* campus image full-bleed */}
        <img
          src={img1}
          alt="Adharsh Vidhyalaya Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* layered overlays — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-[#0D1B2E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2E]/80 via-[#0D1B2E]/40 to-transparent" />

        {/* decorative gold rings */}
        <div className="absolute top-12 right-12 w-[440px] h-[440px] rounded-full border border-[#C9A84C]/15 pointer-events-none" />
        <div className="absolute top-28 right-28 w-[280px] h-[280px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 pt-40">
          {/* badge */}
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 rounded-full px-5 py-2 text-[#C9A84C] text-xs tracking-[2.5px] uppercase mb-7">
            <GraduationCap size={13} />
            Matriculation School · Palladam
          </div>

          <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold text-[#FAFAF6] leading-[1.06] mb-6 max-w-3xl">
            Adharsh Vidhyalaya<br />Hr. Sec. School
          </h1>

          <p className="text-[rgba(250,250,246,0.65)] text-lg leading-[1.85] max-w-[500px] mb-12">
            Providing quality matriculation education in a beautiful,
            peaceful, and inspiring campus at Palladam — shaping future
            leaders rooted in values and excellence.
          </p>

          {/* stat row */}
          <div className="flex flex-wrap gap-8">
            {stats.map(({ val, lbl }) => (
              <div key={lbl} className="border-l-[1.5px] border-[#C9A84C] pl-4">
                <div className="font-display text-[2rem] font-bold text-[#C9A84C] leading-none">{val}</div>
                <div className="text-[11px] tracking-[2px] uppercase text-[rgba(250,250,246,0.45)] mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════ FLOATING HIGHLIGHT CARDS ═══════════════════════ */}
      <div className="relative z-20 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="group bg-white border border-[#E2D9C4] rounded-xl p-6 relative overflow-hidden hover:border-[#C9A84C] hover:shadow-[0_4px_24px_rgba(201,168,76,0.13)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-9 h-9 rounded-lg bg-[#F4F1E8] text-[#B8952A] flex items-center justify-center mb-4">
                  {h.icon}
                </div>
                <p className="text-[11px] tracking-[2px] uppercase text-[#B8952A] font-semibold mb-1">{h.title}</p>
                <p className="font-display text-base font-bold text-[#0D1B2E] leading-snug">{h.value}</p>
                <p className="text-xs text-[#8A9AAA] mt-1">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent mt-16" />

      {/* ═══════════════════════════════ ABOUT ═══════════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* left — image with frame treatment */}
            <div className="relative">
              {/* outer gold frame line */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t border-l border-[#C9A84C]/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-[#C9A84C]/40 rounded-br-2xl pointer-events-none" />
              <img
                src={img2}
                alt="Students at Adharsh Vidhyalaya"
                className="rounded-2xl w-full h-[520px] object-cover"
              />
            </div>

            {/* right — content */}
            <div>
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                About the Institution
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-6 leading-snug">
                A School Built on<br />Values & Excellence
              </h2>
              <p className="text-[#5A6A7A] leading-[1.9] mb-5">
                Rooted in Indian ethics, Adharsh Vidhyalaya strives to excel in
                every aspect of education while nurturing discipline, confidence,
                and character among its students.
              </p>
              <p className="text-[#5A6A7A] leading-[1.9] mb-8">
                The institution creates a supportive and inspiring environment
                that encourages every student to meet life's challenges with
                resilience — empowering them to become flexible thinkers,
                effective communicators, and responsible leaders.
              </p>

              {/* value checklist */}
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#3A4A5C]">
                    <CheckCircle size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ════════════════════════════════ PILLARS ════════════════════════════════ */}
      <div className="bg-[#F4F1E8] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Our Pillars
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-12">
            What Sets Us Apart
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white border border-[#E2D9C4] rounded-xl p-7 relative overflow-hidden group hover:border-[#C9A84C] hover:shadow-[0_4px_24px_rgba(201,168,76,0.12)] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-9 h-9 rounded-lg bg-[#F4F1E8] text-[#B8952A] flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-display text-base font-bold text-[#0D1B2E] mb-2">{p.title}</h3>
                <p className="text-[#5A6A7A] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ══════════════════════════════ CAMPUS SPLIT ══════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-[#E2D9C4] rounded-2xl overflow-hidden grid lg:grid-cols-2">

            {/* image */}
            <div className="relative overflow-hidden min-h-[460px]">
              <img
                src={img1}
                alt="Campus aerial"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* gold vertical rule */}
              <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent" />
              {/* overlay badge */}
              <div className="absolute bottom-6 left-6 bg-[#0D1B2E]/80 backdrop-blur-sm border border-[#C9A84C]/30 rounded-xl px-4 py-3">
                <p className="text-[#C9A84C] text-xs tracking-[2px] uppercase font-semibold">Campus</p>
                <p className="text-[#FAFAF6] font-display text-lg font-bold leading-tight">10 Acres of<br />Green Space</p>
              </div>
            </div>

            {/* content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                Amidst Nature
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-[#0D1B2E] mb-6 leading-snug">
                A Heavenly Abode<br />for Learning
              </h2>
              <p className="text-[#5A6A7A] leading-[1.9] mb-5 text-sm">
                Located near Tiruppur, our campus sits on a sprawling 10-acre
                expanse at Aarakulam Pirivu on the Palladam–Sulur National
                Highway — surrounded by natural beauty and a calm, focused
                atmosphere.
              </p>
              <p className="text-[#5A6A7A] leading-[1.9] mb-5 text-sm">
                Excellent infrastructure, modern science labs, digital
                classrooms, and amenities meeting international standards make
                Adharsh Vidhyalaya a preferred destination for quality education.
              </p>

              {/* campus features */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                {["Digital Classrooms", "Science Labs", "Sports Grounds", "Library & Reading Hall", "Auditorium", "Safe Transport"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#3A4A5C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ══════════════════════════════ QUOTE BAND ════════════════════════════════ */}
      <div className="bg-[#F4F1E8] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-6" />
          <p className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold text-[#0D1B2E] leading-snug italic">
            "Empowering students to become flexible thinkers, effective
            communicators, and responsible leaders — prepared for a
            successful future."
          </p>
          <div className="w-8 h-px bg-[#C9A84C] mx-auto mt-6" />
        </div>
      </div>


    </section>
  );
}