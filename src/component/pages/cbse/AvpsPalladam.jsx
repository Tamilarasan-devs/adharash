import React from "react";
import {
  GraduationCap,
  Shield,
  Flower2,
  Music,
  Dumbbell,
} from "lucide-react";

import img1 from "../../../assets/img/about/img.avif";
import img2 from "../../../assets/img/about/img2.avif";

/* ─────────────────────────────────────────────────────────────────
   Add to your global CSS / index.css:

   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

   And extend tailwind.config.js:
   theme: {
     extend: {
       fontFamily: {
         display: ["Playfair Display", "Georgia", "serif"],
         sans:    ["Inter", "sans-serif"],
       },
       colors: {
         navy:  "#0D1B2E",
         gold:  "#C9A84C",
         gold2: "#B8952A",
         ivory: "#FAFAF6",
         parch: "#F4F1E8",
         border-gold: "#E2D9C4",
       },
     },
   },
───────────────────────────────────────────────────────────────── */

export default function AvpsPalladam() {
  return (
    <section className="bg-[#FAFAF6] text-[#0D1B2E] font-sans overflow-hidden">

      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <div className="relative min-h-[88vh] flex items-center overflow-hidden">
  {/* Background Image */}
  <img
    src={img1}
    alt="AVPS Palladam campus"
    className="absolute inset-0 w-full h-full object-cover object-right opacity-100"
  />

  {/* Left → Right Gradient Overlay */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, #0D1B2E 0%, rgba(13,27,46,0.98) 18%, rgba(13,27,46,0.92) 35%, rgba(13,27,46,0.75) 50%, rgba(13,27,46,0.35) 70%, rgba(13,27,46,0) 100%)",
    }}
  />

  {/* Decorative Gold Rings */}
  <div className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full border border-[#C9A84C]/15 pointer-events-none" />
  <div className="absolute -bottom-32 -left-16 w-[380px] h-[380px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />
  <div className="absolute top-1/2 right-1/4 w-[240px] h-[240px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />

  {/* Optional Gold Glow */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/10 blur-[140px] rounded-full pointer-events-none" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
    <div className="max-w-2xl">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 rounded-full px-5 py-2 text-[#C9A84C] text-xs tracking-[2.5px] uppercase mb-8 backdrop-blur-sm">
        <GraduationCap size={13} />
        CBSE School · Palladam
      </div>

      {/* Heading */}
      <h1 className="font-display text-[clamp(3rem,6vw,5.2rem)] font-bold text-[#FAFAF6] leading-[1.06] mb-6">
        Adharsh
        <br />
        Vidhyalaya
      </h1>

      {/* Description */}
      <p className="text-[rgba(250,250,246,0.72)] text-lg leading-[1.85] max-w-[520px] mb-12">
        A legacy of excellence in education — shaping young minds
        with knowledge, discipline, and enduring values.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-8">
        {[
          ["CBSE", "Curriculum"],
          ["K–X", "All Grades"],
          ["2010", "Established"],
        ].map(([val, lbl]) => (
          <div
            key={lbl}
            className="border-l-[1.5px] border-[#C9A84C] pl-4"
          >
            <div className="font-display text-[2rem] font-bold text-[#C9A84C] leading-none">
              {val}
            </div>
            <div className="text-[11px] tracking-[2px] uppercase text-[rgba(250,250,246,0.45)] mt-1">
              {lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ══════════════════════════════ LEADERSHIP ════════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* section eyebrow */}
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Leadership
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-14">
            Guided by Vision
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Chairman */}
            <LeaderCard
              image={img1}
              role="Chairman"
              roleColor="text-[#B8952A]"
              name="Ideal Thiru. K. Sivalingam"
              bio="A visionary leader dedicated to shaping young minds through Adharsh Vidhyalaya Educational Institutions. His mission is expanding quality education across Anthiyur and Palladam for holistic student development."
            />

            {/* Correspondent */}
            <LeaderCard
              image={img2}
              role="Correspondent"
              roleColor="text-[#6B4FB8]"
              name="Dr. S. Selvamani Sivalingam"
              bio="A dynamic leader with strong academic credentials who motivates students and staff to achieve excellence through teamwork, discipline, and innovation at every level."
            />

          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ═══════════════════════════════ ACADEMICS ════════════════════════════════ */}
      <div className="bg-[#F4F1E8] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Academics
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-6">
            21st-Century Learning
          </h2>
          <p className="text-[#5A6A7A] leading-[1.9] max-w-2xl">
            Our curriculum is rooted in real-life application and future-ready skills.
            Structured subjects are enriched with co-curricular programs — Yoga, Karate,
            Dance, Abacus, Chess, Robotics, and Arts — ensuring every student grows
            beyond the textbook.
          </p>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ═══════════════════════════════ ACTIVITIES ═══════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Activities
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-10">
            Beyond the Classroom
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ActivityCard
              icon={<Shield size={22} className="text-[#C9A84C]" />}
              title="Karate"
              desc="Self-defence, discipline, and confidence building"
            />
            <ActivityCard
              icon={<Flower2 size={22} className="text-[#C9A84C]" />}
              title="Yoga"
              desc="Physical balance and mental wellness from an early age"
            />
            <ActivityCard
              icon={<Music size={22} className="text-[#C9A84C]" />}
              title="Dance"
              desc="Classical and folk dance training for expression"
            />
            <ActivityCard
              icon={<Dumbbell size={22} className="text-[#C9A84C]" />}
              title="Sports"
              desc="Fitness, games, and the spirit of teamwork"
            />
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ═══════════════════════════════ CURRICULUM ═══════════════════════════════ */}
      <div className="bg-[#F4F1E8] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Curriculum
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-10">
            Academic Structure
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <CurrCard
              title="Kindergarten"
              subtitle="SPICE Framework"
              items={["Social Skills","Physical Skills","Integrated Curriculum","Creative Skills","Emotional Skills"]}
            />
            <CurrCard
              title="Grade I – V"
              subtitle="CBSE"
              items={["English","Tamil / Hindi","Mathematics","EVS","Life Skills","IT & Communication","Art & Craft"]}
            />
            <CurrCard
              title="Grade VI – X"
              subtitle="CBSE"
              items={["English","Tamil / Hindi","Mathematics","Science","Social Science","IT & Life Skills","Art & Craft"]}
            />
          </div>
        </div>
      </div>

      {/* ════════════════════════════ FOOTER BANNER ═══════════════════════════════ */}
      <div className="relative bg-[#0D1B2E] py-24 px-6 text-center overflow-hidden">
        {/* watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="font-display text-[16rem] font-bold text-white/[0.025] whitespace-nowrap">
            AVPS
          </span>
        </div>

        <div className="relative z-10">
          <div className="w-14 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#FAFAF6] mb-4">
            AVPS Palladam
          </h2>
          <p className="text-[rgba(250,250,246,0.6)] max-w-md mx-auto leading-[1.85]">
            Adharsh Vidhyalaya — nurturing excellence, discipline, and character
            in every student we serve.
          </p>
          <div className="w-14 h-0.5 bg-[#C9A84C] mx-auto mt-6 mb-5" />
          <p className="text-[11px] tracking-[3px] uppercase text-[rgba(250,250,246,0.28)]">
            Excellence · Discipline · Growth
          </p>
        </div>
      </div>

    </section>
  );
}

/* ─── Leader card — split portrait / content layout ───────────── */
function LeaderCard({ image, role, roleColor, name, bio }) {
  return (
    <div className="group bg-white border border-[#E2D9C4] rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:shadow-[0_4px_32px_rgba(201,168,76,0.12)] transition-shadow duration-300">
      {/* portrait */}
      <div className="sm:w-[220px] shrink-0 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[220px] sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* gold vertical rule on right edge */}
        <div className="hidden sm:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />
      </div>

      {/* content */}
      <div className="p-8 flex flex-col justify-center">
        {/* top gold rule */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-5 h-px bg-[#C9A84C]" />
          <span className={`text-[11px] tracking-[2.5px] uppercase font-semibold ${roleColor}`}>
            {role}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-[#0D1B2E] mb-3 leading-snug">
          {name}
        </h3>

        <p className="text-[#5A6A7A] text-sm leading-[1.9]">{bio}</p>
      </div>
    </div>
  );
}

/* ─── Activity card ────────────────────────────────────────────── */
function ActivityCard({ icon, title, desc }) {
  return (
    <div className="group bg-white border border-[#E2D9C4] rounded-xl p-6 relative overflow-hidden hover:border-[#C9A84C] hover:shadow-[0_2px_20px_rgba(201,168,76,0.12)] transition-all duration-300">
      {/* gold top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mb-4 p-2.5 bg-[#F4F1E8] rounded-lg inline-flex">
        {icon}
      </div>

      <h3 className="font-display text-lg font-bold text-[#0D1B2E] mb-2">{title}</h3>
      <p className="text-[#5A6A7A] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Curriculum card ──────────────────────────────────────────── */
function CurrCard({ title, subtitle, items }) {
  return (
    <div className="bg-white border border-[#E2D9C4] rounded-2xl overflow-hidden relative">
      {/* gold top bar */}
      <div className="h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96E]" />

      <div className="p-8">
        <h3 className="font-display text-xl font-bold text-[#0D1B2E] leading-snug">{title}</h3>
        <p className="text-[11px] tracking-[2px] uppercase text-[#B8952A] font-semibold mt-1 mb-6">{subtitle}</p>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-[#5A6A7A] pb-3 border-b border-[#F0EBE0] last:border-b-0 last:pb-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}