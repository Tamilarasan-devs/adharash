import React from "react";
import {
  Globe,
  Laptop,
  Brain,
  GraduationCap,
  Sparkles,
  Users,
  BookOpen,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Monitor,
  Wifi,
  HeartHandshake,
} from "lucide-react";

import heroImg from "../../../assets/img/about/herimg.webp";


const features = [
  {
    icon: <Laptop size={22} />,
    title: "Online Learning",
    desc: "Live interactive digital classrooms with real-time teacher engagement and recorded replays.",
  },
  {
    icon: <Brain size={22} />,
    title: "Smart Education",
    desc: "AI-assisted, concept-based learning that adapts to each student's pace and strengths.",
  },
  {
    icon: <Globe size={22} />,
    title: "Global Exposure",
    desc: "A curriculum designed to build global competency, awareness, and cross-cultural thinking.",
  },
  {
    icon: <Users size={22} />,
    title: "Student-Centric",
    desc: "Personalised attention, one-on-one mentoring, and progress tracking for every learner.",
  },
];

const howItWorks = [
  {
    icon: <Monitor size={20} />,
    step: "01",
    title: "Enrol Online",
    desc: "Simple digital admission — complete your registration from anywhere in minutes.",
  },
  {
    icon: <Wifi size={20} />,
    step: "02",
    title: "Attend Live Classes",
    desc: "Join scheduled live sessions or revisit recorded lessons at your own pace.",
  },
  {
    icon: <BookOpen size={20} />,
    step: "03",
    title: "Complete Assessments",
    desc: "Regular tests, assignments and projects keep learning on track and measurable.",
  },
  {
    icon: <Award size={20} />,
    step: "04",
    title: "Earn Your Certificate",
    desc: "Graduate with a CBSE-recognised certificate and a portfolio of skills.",
  },
];

const stats = [
  { val: "2,000+", lbl: "Students Enrolled" },
  { val: "CBSE", lbl: "Recognised Board" },
  { val: "100%", lbl: "Digital Delivery" },
  { val: "K–XII", lbl: "All Grades" },
];

const curriculum = [
  {
    grade: "Kindergarten",
    tag: "Foundation",
    subjects: ["Social Skills", "Creative Play", "Language & Literacy", "Numeracy Basics", "Physical & Emotional Wellness"],
  },
  {
    grade: "Grade I – V",
    tag: "CBSE Primary",
    subjects: ["English", "Mathematics", "Environmental Science", "Hindi / Tamil", "Art & Craft", "Life Skills", "Digital Literacy"],
  },
  {
    grade: "Grade VI – X",
    tag: "CBSE Secondary",
    subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi / Tamil", "IT & Coding", "Critical Thinking"],
  },
  {
    grade: "Grade XI – XII",
    tag: "CBSE Senior",
    subjects: ["Physics / Commerce", "Chemistry / Economics", "Biology / Business", "Computer Science", "English", "Mathematics"],
  },
];

const whyChoose = [
  "Fully CBSE-aligned curriculum delivered online",
  "Qualified and experienced faculty across all subjects",
  "Flexible scheduling — learn from home or anywhere",
  "Regular parent-teacher engagement and reporting",
  "Dedicated academic counsellors for each student",
  "Affordable fee structure with scholarship options",
];

export default function VrukshaAvos() {
  return (
    <section className="bg-[#FAFAF6] text-[#0D1B2E] font-sans overflow-hidden">

      {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://storage.googleapis.com/cdn-edustoke/mysql_images/full/5d8f1f75-ee45-4340-8e21-ac08376f2dc1_c3233605.webp"
          alt="Vruksha AVOS"
          className="absolute inset-0 w-full h-full object-cover object-right opacity-95"
        />

        {/* Left → Right Fade Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0D1B2E 0%, rgba(13,27,46,0.98) 18%, rgba(13,27,46,0.85) 35%, rgba(13,27,46,0.55) 55%, rgba(13,27,46,0.20) 75%, rgba(13,27,46,0) 100%)",
          }}
        />

        {/* Decorative Rings */}
        <div className="absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full border border-[#C9A84C]/15 pointer-events-none" />
        <div className="absolute -bottom-36 -left-20 w-[420px] h-[420px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-[280px] h-[280px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 rounded-full px-5 py-2 text-[#C9A84C] text-xs tracking-[2.5px] uppercase mb-8 backdrop-blur-sm">
              <Sparkles size={12} />
              CBSE Online School
            </div>

            {/* Heading */}
            <h1 className="font-display text-[clamp(3rem,6vw,5.2rem)] font-bold text-[#FAFAF6] leading-[1.06] mb-6">
              Vruksha
              <br />
              AVOS
            </h1>

            {/* Description */}
            <p className="text-[rgba(250,250,246,0.72)] text-lg leading-[1.85] max-w-[520px] mb-12">
              Vruksha Adharsh Vidyalaya Online School — redefining education
              through technology, innovation, and the freedom to learn from
              anywhere.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map(({ val, lbl }) => (
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

      {/* ═══════════════════════════════ FEATURES ═════════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Why AVOS
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-12">
            Learning Redefined
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
            {features.map((item, i) => (
              <div key={i} className="relative rounded-xl p-[2px] overflow-hidden animated-border h-full">

                <div className="relative bg-white border border-[#E2D9C4] rounded-xl p-7 z-10 h-full flex flex-col">

                  <div className="w-10 h-10 rounded-lg bg-[#F4F1E8] text-[#B8952A] flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0D1B2E] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[#5A6A7A] text-md leading-relaxed flex-1">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ═══════════════════════════════ ABOUT ═══════════════════════════════════ */}
      <div className="bg-[#F4F1E8] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* left — text */}
            <div>
              <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
                <span className="w-6 h-px bg-[#C9A84C]" />
                About the School
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-6">
                The Future of<br />CBSE Education
              </h2>
              <p className="text-[#5A6A7A] leading-[1.9] mb-5">
                Vruksha AVOS is the next evolution of the Adharsh Vidhyalaya
                educational philosophy — combining the rigour of CBSE with the
                flexibility and reach of modern technology.
              </p>
              <p className="text-[#5A6A7A] leading-[1.9] mb-5">
                We nurture creativity, critical thinking, and global awareness
                while keeping strong academic discipline and values at the core.
                Every student receives a learning environment tailored to their
                individual needs.
              </p>
              <p className="text-[#5A6A7A] leading-[1.9]">
                Through interactive classes, AI-assisted tools, and dedicated
                mentors, Vruksha AVOS prepares students not just for exams —
                but for life.
              </p>
            </div>

            {/* right — why choose */}
            <div className="bg-[#0D1B2E] rounded-2xl p-8">
              <div className="text-[11px] tracking-[2px] uppercase text-[#C9A84C] font-semibold mb-5">
                Why Choose Us
              </div>
              {whyChoose.map((point, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 py-3.5 text-sm text-[rgba(250,250,246,0.8)] ${i < whyChoose.length - 1 ? "border-b border-[#C9A84C]/15" : ""}`}
                >
                  <CheckCircle size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ═══════════════════════════════ HOW IT WORKS ════════════════════════════ */}
      <div className="bg-[#FAFAF6] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            The Process
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-12">
            How It Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <div
                key={i}
                className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/80
        backdrop-blur-xl
        p-8
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
      "
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C9A84C]/20 blur-3xl rounded-full" />
                </div>



                {/* Icon */}
                <div
                  className="
          relative z-10
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br
          from-[#C9A84C]
          to-[#E8C96E]
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          mb-6
          group-hover:scale-110
          transition-transform
          duration-500
        "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="
          relative z-10
          font-display
          text-xl
          font-semibold
          text-[#0D1B2E]
          mb-3
        "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
          relative z-10
          text-[#64748B]
          text-md
          leading-7
        "
                >
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-gradient-to-r
          from-[#C9A84C]
          to-[#E8C96E]
          group-hover:w-full
          transition-all
          duration-500
        "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ═══════════════════════════════ CURRICULUM ══════════════════════════════ */}
      <div className="bg-[#F4F1E8] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-[#B8952A] font-semibold mb-3">
            <span className="w-6 h-px bg-[#C9A84C]" />
            Curriculum
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0D1B2E] mb-12">
            Academic Structure
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((c, i) => (
              <div
                key={i}
                className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-[#E7DFC9]
        bg-white
        p-7
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
      "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#C9A84C]/20 blur-3xl" />
                </div>

                {/* Grade Watermark */}
                {/* <div className="absolute top-3 right-5 text-[5rem] font-black text-[#C9A84C]/10 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div> */}

                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#E8C96E] to-[#C9A84C]" />

                {/* Curriculum Title */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-[#0D1B2E] leading-tight">
                    {c.grade}
                  </h3>

                  <div className="inline-flex mt-3 items-center rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 px-3 py-1">
                    <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[#B8952A]">
                      {c.tag}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative z-10 my-6 h-px bg-gradient-to-r from-transparent via-[#E6DCC3] to-transparent" />

                {/* Subjects */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {c.subjects.map((subject, j) => (
                    <span
                      key={j}
                      className="
              px-3
              py-2
              rounded-xl
              bg-[#F8F6F0]
              border
              border-[#ECE4D1]
              text-[#425466]
              text-sm
              font-medium
              transition-all
              duration-300
              group-hover:bg-white
              group-hover:border-[#D9C48B]
            "
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 mt-7 flex items-center gap-2 text-[#B8952A] text-sm font-semibold">
                  Explore Curriculum
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* gold hairline */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

      {/* ═══════════════════════════════ HIGHLIGHTS BAR ══════════════════════════ */}
      <div className="bg-[#FAFAF6] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Clock size={20} />, label: "Flexible Timings", sub: "Learn on your schedule" },
              { icon: <HeartHandshake size={20} />, label: "Dedicated Mentors", sub: "Personal academic support" },
              { icon: <BookOpen size={20} />, label: "Rich Study Material", sub: "Notes, videos & practice tests" },
              { icon: <Award size={20} />, label: "CBSE Certified", sub: "Board-recognised programme" },
            ].map((h, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#E2D9C4] rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#F4F1E8] text-[#B8952A] flex items-center justify-center shrink-0">
                  {h.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0D1B2E]">{h.label}</div>
                  <div className="text-xs text-[#8A9AAA] mt-0.5">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════ CTA / FOOTER BANNER ════════════════════════ */}
      <div className="relative bg-[#0D1B2E] py-28 px-6 text-center overflow-hidden">
        {/* watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="font-display text-[14rem] font-bold text-white/[0.025] whitespace-nowrap">
            AVOS
          </span>
        </div>

        {/* decorative rings */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-[#C9A84C]/10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-[#C9A84C]/08 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-14 h-0.5 bg-[#C9A84C] mx-auto mb-7" />

          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#FAFAF6] mb-5 leading-tight">
            The Future of<br />Education is Digital
          </h2>

          <p className="text-[rgba(250,250,246,0.6)] leading-[1.85] mb-10">
            Experience a new era of CBSE learning — with flexibility, innovation,
            and global exposure. Vruksha AVOS brings the classroom to you,
            wherever you are.
          </p>

          <button className="inline-flex items-center gap-2.5 bg-[#C9A84C] hover:bg-[#B8952A] text-[#0D1B2E] font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full transition-colors duration-200">
            Explore AVOS
            <ArrowRight size={15} />
          </button>

          <div className="w-14 h-0.5 bg-[#C9A84C] mx-auto mt-10 mb-5" />
          <p className="text-[11px] tracking-[3px] uppercase text-[rgba(250,250,246,0.28)]">
            Learn · Grow · Excel
          </p>
        </div>
      </div>

      <style>{`
        .animated-border {
          position: relative;
        }

        .animated-border::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          border-radius: 12px;
     background: linear-gradient(
  90deg,
  #1e3a8a,
  transparent,
  #3b82f6,
  transparent,
  #1e3a8a
);
          background-size: 300% 300%;
          animation: borderMove 10s linear infinite;
          -webkit-mask: 
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        @keyframes borderMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
      `}</style>

    </section>
  );
}