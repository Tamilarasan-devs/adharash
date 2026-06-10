import React from "react";
import {
  Shield,
  HeartPulse,
  Dumbbell,
  Music,
  Trophy,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Play,
  Quote,
  Star,
  ChevronRight,
} from "lucide-react";

import school from "../../../assets/img/about/school.png";
import student from "../../../assets/img/about/student.jpg";

export default function Curriculum() {
  const activities = [
    {
      icon: Shield,
      title: "Karate",
      desc: "Build confidence, discipline, courage, and self-defense skills through structured martial arts training.",
      gradient: "from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50/80",
      span: "lg:col-span-7",
      stat: "500+",
      statLabel: "Students Trained",
    },
    {
      icon: HeartPulse,
      title: "Yoga",
      desc: "Enhance concentration, flexibility, mindfulness, and overall wellness through daily yoga practices.",
      gradient: "from-rose-500 to-pink-600",
      lightBg: "bg-rose-50/80",
      span: "lg:col-span-5",
      stat: "Daily",
      statLabel: "Practice Sessions",
    },
    {
      icon: Music,
      title: "Music & Dance",
      desc: "Explore Bharatanatyam, Folk Dance, Kathak, Peacock Dance, and cultural arts.",
      gradient: "from-violet-500 to-purple-600",
      lightBg: "bg-violet-50/80",
      span: "lg:col-span-4",
      stat: "8+",
      statLabel: "Art Forms",
    },
    {
      icon: Trophy,
      title: "Sports Excellence",
      desc: "From Volleyball and Kabaddi to Chess and Skating, students thrive through competition.",
      gradient: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50/80",
      span: "lg:col-span-4",
      stat: "12+",
      statLabel: "Sports Offered",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Gymnastics",
      desc: "Physical strength, agility, balance, and coordination through structured activities.",
      gradient: "from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50/80",
      span: "lg:col-span-4",
      stat: "100%",
      statLabel: "Participation",
    },
  ];

  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "5000+", label: "Happy Students" },
    { value: "50+", label: "Expert Faculty" },
    { value: "98%", label: "Parent Satisfaction" },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ── Top Hero ── */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 text-sm font-medium mb-8">
                <Sparkles size={14} className="text-blue-400" />
                Academics & Beyond
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
                Curriculum &
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Co-Curricular
                </span>
                <span className="block mt-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>

              <p className="mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-lg">
                Our curriculum blends academic excellence with creativity,
                leadership, wellness, and real-world experiences — shaping
                students into confident, capable individuals.
              </p>


              {/* Mini Stats */}
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-white">
                      {s.value}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <img
                  src={school}
                  alt="School Campus"
                  className="w-full h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl p-5 shadow-2xl shadow-black/20 max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Accredited</div>
                    <div className="text-sm font-bold text-slate-900">CBSE</div>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500"
                    />
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                    +
                  </div>
                </div>
              </div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 shadow-2xl shadow-blue-900/40 max-w-[240px]">
                <Star size={24} className="text-yellow-300 mb-3" />
                <h4 className="text-white font-bold text-lg">
                  Holistic Education
                </h4>
                <p className="mt-2 text-blue-100 text-sm leading-relaxed">
                  Balancing academic achievement, wellness, leadership &
                  creativity.
                </p>
              </div>

              {/* Decorative Ring */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 rounded-full border-[20px] border-blue-500/10" />
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 53.3C672 58.7 768 69.3 864 69.3C960 69.3 1056 58.7 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ── Highlight Banner ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 -mt-8">
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl p-10 md:p-14 shadow-xl shadow-blue-900/20 overflow-hidden">
          {/* Inner Decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-2xl" />

          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10">
              <GraduationCap size={32} className="text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Holistic Learning Approach
              </h3>
              <p className="mt-4 text-lg text-blue-100/80 leading-relaxed max-w-4xl">
                Students actively participate in Yoga, Chess, Dance, Karate,
                Abacus, Drawing, Sports, and Cultural Activities — fostering
                balanced intellectual, emotional, physical, and social
                development.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Yoga", "Chess", "Dance", "Karate", "Abacus", "Drawing", "Sports"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Activities Bento Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            <Sparkles size={14} />
            Our Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Beyond the Classroom
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            A thoughtfully designed ecosystem of co-curricular activities
            that nurture every dimension of a student's growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          {activities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`${item.span} group relative rounded-3xl ${item.lightBg} border border-slate-200/60 p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/80 overflow-hidden`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-7 shadow-lg`}
                  >
                    <Icon size={26} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-4 text-slate-500 leading-relaxed text-[15px]">
                    {item.desc}
                  </p>

                  {/* Stat */}
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900">
                        {item.stat}
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5 uppercase tracking-wider">
                        {item.statLabel}
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Quote / Wellness Section ── */}
      <div className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28">
        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/40">
                <img
                  src={student}
                  alt="Students Wellness"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>

                {/* Bottom Stat Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">98%</div>
                      <div className="text-xs text-white/60 mt-0.5">Active</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">15+</div>
                      <div className="text-xs text-white/60 mt-0.5">Activities</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                      <div className="text-xl font-bold text-white">100%</div>
                      <div className="text-xs text-white/60 mt-0.5">Engagement</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Shape */}
              <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full rounded-3xl border-2 border-blue-200/50" />
              <div className="absolute -z-10 -top-5 -left-5 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100" />
            </div>

            {/* Content Side */}
            <div>
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
                Student Wellness
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Health,
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Confidence
                </span>
                <br />
                & Lifelong Growth
              </h2>

              {/* Quote */}
              <div className="mt-10 relative pl-8">
                <Quote
                  size={48}
                  className="absolute -left-2 -top-2 text-blue-100"
                />
                <blockquote className="relative text-xl md:text-2xl font-semibold leading-relaxed text-slate-700 italic">
                  "He who has health, has hope and he who has hope has
                  everything."
                </blockquote>
                <div className="mt-3 ml-1 w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              </div>

              <p className="mt-8 text-lg text-slate-500 leading-relaxed">
                Physical education, sports, and wellness programs are
                integrated into the curriculum to cultivate resilience,
                leadership, teamwork, discipline, and a lifelong commitment
                to healthy living.
              </p>

              {/* Feature List */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  "Daily Yoga Sessions",
                  "Competitive Sports",
                  "Martial Arts Training",
                  "Cultural Programs",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}