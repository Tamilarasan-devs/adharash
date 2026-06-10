import React from "react";
import {
  MapPin,
  BookOpen,
  Trophy,
  GraduationCap,
  Building2,
  Award,
  ArrowRight,
  CheckCircle,
  Mountain,
  Users,
  Star,
  Globe,
  HeartHandshake,
  Microscope,
} from "lucide-react";

import campusImg  from "../../../assets/img/about/std3.jpg";
import studentsImg from "../../../assets/img/about/std4.jpg";

/* ─────────────────────────────────────────────────────────────────
   tailwind.config.js — extend:
   fontFamily: {
     display: ["Playfair Display", "Georgia", "serif"],
     sans:    ["Inter", "sans-serif"],
   },

   index.css — add:
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Inter:wght@300;400;500;600&display=swap');
───────────────────────────────────────────────────────────────── */

/* ── data ──────────────────────────────────────────────────────── */
const highlights = [
  { icon: <MapPin    size={20} />, title: "Location",    value: "Anthiyur, Erode",     sub: "Western Ghats Foothills"   },
  { icon: <Building2 size={20} />, title: "Campus",      value: "50+ Acre Campus",     sub: "Facing Western Ghats"      },
  { icon: <BookOpen  size={20} />, title: "Board",       value: "State Board",         sub: "Higher Secondary School"   },
  { icon: <Trophy    size={20} />, title: "Established", value: "2004",                sub: "Two decades of excellence" },
];

const pillars = [
  { icon: <Star        size={18} />, title: "Academic Rigour",       desc: "State-board aligned curriculum crafted to build conceptual depth and examination readiness from foundational years to higher secondary." },
  { icon: <HeartHandshake size={18} />, title: "Values & Character", desc: "Rooted in Indian ethics — nurturing integrity, discipline, and a sense of responsibility alongside academic growth." },
  { icon: <Mountain   size={18} />, title: "Inspiring Setting",      desc: "A 50+ acre serene campus facing the Western Ghats — a landscape that fosters focus, creativity, and a genuine love of learning." },
  { icon: <Users      size={18} />, title: "Safe Hostel Facilities", desc: "Separate, fully-supervised hostel blocks for boys and girls — ensuring a secure, comfortable residential experience." },
];

const alumni = [
  { icon: <Microscope size={18} />, title: "Government Doctors",    desc: "Hundreds of alumni serving across public healthcare systems in Tamil Nadu and beyond." },
  { icon: <Globe      size={18} />, title: "Global Professionals",  desc: "Graduates thriving as engineers, researchers, and business leaders across continents." },
  { icon: <Award      size={18} />, title: "Entrepreneurs",         desc: "Alumni founding companies and leading ventures that drive local and national economies." },
  { icon: <Star       size={18} />, title: "Civil Servants",        desc: "Distinguished public servants, IAS and IPS officers, shaped by our values-first education." },
];

const values = [
  "Holistic development beyond academics",
  "Separate hostel for boys and girls",
  "Expert faculty across all subjects",
  "State-board toppers year after year",
  "Rich co-curricular and sports culture",
  "Inspiring Western Ghats campus",
];

const stats = [
  { val: "2004",  lbl: "Founded"        },
  { val: "50+",   lbl: "Acres Campus"   },
  { val: "20+",   lbl: "Years Legacy"   },
  { val: "1000+", lbl: "Alumni Globally"},
];

/* ── component ─────────────────────────────────────────────────── */
export default function MatricAnthiyur() {
  return (
    <section className="bg-[#FAFAF6] text-[#0D1B2E] font-sans overflow-hidden">

      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <div className="relative min-h-[90vh] flex items-end overflow-hidden">
        <img
          src={campusImg}
          alt="Adharsh Vidhyalaya Anthiyur campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-[#0D1B2E]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2E]/80 via-[#0D1B2E]/30 to-transparent" />

        {/* decorative gold rings */}
        <div className="absolute top-10 right-10 w-[480px] h-[480px] rounded-full border border-[#C9A84C]/15 pointer-events-none hidden lg:block" />
        <div className="absolute top-28 right-28 w-[300px] h-[300px] rounded-full border border-[#C9A84C]/10 pointer-events-none hidden lg:block" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 pt-40">
          {/* badge */}
          <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 rounded-full px-4 sm:px-5 py-2 text-[#C9A84C] text-[10px] sm:text-xs tracking-[2px] sm:tracking-[2.5px] uppercase mb-6 sm:mb-8">
            <GraduationCap size={12} />
            State Board · Anthiyur
          </div>

          <h1 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] font-bold text-[#FAFAF6] leading-[1.06] mb-5 max-w-3xl">
            Adharsh Vidhyalaya<br className="hidden sm:block" /> Hr. Sec. School
          </h1>

          <p className="text-[rgba(250,250,246,0.65)] text-base sm:text-lg leading-[1.85] max-w-[500px] mb-10 sm:mb-14">
            Shaping future leaders through academic excellence, discipline,
            and values — in a majestic 50-acre campus facing the Western Ghats.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-10 sm:mt-14">
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

            {/* image with gold corner frame */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32
                              border-t border-l border-[#C9A84C]/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32
                              border-b border-r border-[#C9A84C]/40 rounded-br-2xl pointer-events-none" />
              <img
                src={studentsImg}
                alt="Students at Adharsh Vidhyalaya"
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
                A Legacy of<br />Educational Excellence
              </h2>
              <p className="text-[#5A6A7A] leading-[1.9] mb-4 text-sm sm:text-base">
                Established in 2004, Adharsh Vidhyalaya quickly grew into a
                respected Higher Secondary School known for its commitment to
                academic excellence and holistic student development.
              </p>
              <p className="text-[#5A6A7A] leading-[1.9] mb-7 text-sm sm:text-base">
                The 50+ acre campus faces the magnificent Western Ghats —
                a serene, inspiring backdrop that shapes not just scholars,
                but confident, values-driven human beings.
              </p>

              {/* checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A4A5C]">
                    <CheckCircle size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
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
      <div className="bg-[#F4F1E8] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Our Pillars
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-10 sm:mb-12">
            What Sets Us Apart
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

      {/* ═══════════════════════════════ CAMPUS SPLIT ════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-[#E2D9C4] rounded-2xl overflow-hidden grid lg:grid-cols-2">

            {/* image */}
            <div className="relative overflow-hidden min-h-[300px] sm:min-h-[420px] lg:min-h-[500px]">
              <img
                src={campusImg}
                alt="Campus facing Western Ghats"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="hidden lg:block absolute top-0 right-0 w-px h-full
                              bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent" />
              {/* floating badge */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6
                              bg-[#0D1B2E]/80 backdrop-blur-sm border border-[#C9A84C]/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                <p className="text-[#C9A84C] text-[10px] tracking-[2px] uppercase font-semibold">Campus</p>
                <p className="text-[#FAFAF6] font-display text-base sm:text-lg font-bold leading-tight">50 Acres &<br/>Western Ghats</p>
              </div>
            </div>

            {/* content */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                Campus Life
              </div>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-[#0D1B2E] mb-5 leading-snug">
                A Heavenly Abode<br />for Learning
              </h2>
              <p className="text-[#5A6A7A] leading-[1.9] mb-4 text-sm">
                Located in Anthiyur, the campus stretches across 50+ acres of
                serene landscape facing the magnificent Western Ghats — a
                setting that fuels curiosity, focus, and personal growth.
              </p>
              <p className="text-[#5A6A7A] leading-[1.9] mb-6 text-sm">
                Excellent infrastructure combined with modern facilities and
                amenities meeting international standards make Adharsh
                Vidhyalaya a preferred destination for quality education.
              </p>

              {/* campus features grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {["Digital Classrooms","Science Laboratories","Sports Grounds","Boys & Girls Hostel","Library & Reading Hall","Transport Facilities"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#3A4A5C]">
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

      {/* ═══════════════════════════════ ALUMNI ══════════════════════════════════ */}
      <div className="bg-[#F4F1E8] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* left — headline + sub */}
            <div>
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                Our Achievements
              </div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-5 leading-snug">
                Creating Professionals<br />Across the Globe
              </h2>
              <p className="text-[#5A6A7A] leading-[1.9] mb-5 text-sm sm:text-base">
                Over two decades, Adharsh Vidhyalaya has nurtured countless
                students who have emerged as successful professionals in
                India and abroad.
              </p>
              <p className="text-[#5A6A7A] leading-[1.9] text-sm sm:text-base">
                Their achievements reflect the strong academic foundation,
                disciplined environment, and values-first culture that
                define the institution.
              </p>

              {/* dark stat panel */}
              <div className="mt-8 bg-[#0D1B2E] rounded-xl px-6 py-5 inline-flex flex-wrap gap-6">
                {[["1000+","Alumni"],["20+","Years"],["Pan-India","Presence"],["Global","Reach"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#C9A84C] leading-none">{v}</div>
                    <div className="text-[10px] sm:text-[11px] tracking-[1.5px] uppercase text-[rgba(250,250,246,0.45)] mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* right — alumni cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {alumni.map((a, i) => (
                <div key={i} className="bg-white border border-[#E2D9C4] rounded-xl p-5 sm:p-6
                                        hover:border-[#C9A84C] hover:shadow-[0_4px_20px_rgba(201,168,76,0.10)] transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#F4F1E8] text-[#B8952A] flex items-center justify-center mb-4">
                    {a.icon}
                  </div>
                  <h3 className="font-display text-[14px] font-bold text-[#0D1B2E] mb-1.5">{a.title}</h3>
                  <p className="text-[#5A6A7A] text-xs sm:text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════ QUOTE BAND ════════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-14 sm:py-16 px-4 sm:px-6 text-center border-y border-[#E2D9C4]">
        <div className="max-w-3xl mx-auto">
          <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-6" />
          <p className="font-display text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-[#0D1B2E] leading-snug italic px-4">
            "Empowering every student to become a flexible thinker,
            an effective communicator, and a responsible leader
            — prepared for a successful future."
          </p>
          <div className="w-8 h-px bg-[#C9A84C] mx-auto mt-6" />
        </div>
      </div>


    </section>
  );
}