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
  ArrowRight,
  Calendar,
  CircleDot,
} from "lucide-react";

export default function Founder() {
  const milestones = [
    {
      year: "1981",
      title: "IDEAL Tutorial College",
      description:
        "The foundation of our educational journey began with a vision to transform student success.",
      color: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      year: "1987",
      title: "Entrance Coaching Centre",
      description:
        "Competitive exam coaching introduced to help students achieve professional dreams.",
      color: "from-violet-500 to-purple-500",
      bgLight: "bg-violet-50",
      textColor: "text-violet-600",
    },
    {
      year: "1991",
      title: "Ideal Matriculation School",
      description:
        "Expanded into school education with a commitment to academic excellence.",
      color: "from-cyan-500 to-sky-500",
      bgLight: "bg-cyan-50",
      textColor: "text-cyan-600",
    },
    {
      year: "1996",
      title: "Higher Secondary School",
      description:
        "Upgraded to provide advanced education and career-focused learning.",
      color: "from-emerald-500 to-green-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      year: "2004",
      title: "Adharsh Vidhyalaya",
      description:
        "A modern institution combining holistic education with entrance coaching.",
      color: "from-orange-500 to-amber-500",
      bgLight: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      year: "2016+",
      title: "Educational Ecosystem",
      description:
        "CBSE Schools, Colleges, Teacher Education, Hostels and more.",
      color: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50",
      textColor: "text-pink-600",
    },
  ];

  const stats = [
    { value: "40+", label: "Years Legacy", icon: Calendar },
    { value: "50+", label: "Acres Campus", icon: Building2 },
    { value: "500+", label: "Medical Admissions", icon: TrendingUp },
    { value: "1000+", label: "Professionals Produced", icon: Trophy },
  ];

  const admissions = [
    { year: "1990", count: 4 },
    { year: "1991", count: 7 },
    { year: "1992", count: 10 },
    { year: "1996", count: 25 },
    { year: "1998", count: 90 },
    { year: "2000", count: 200 },
    { year: "2003", count: 300 },
    { year: "2006", count: 500 },
  ];

  const maxAdmission = Math.max(...admissions.map((a) => a.count));

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* ── Hero Section ── */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <Sparkles size={14} />
              Since 1981
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Building
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Educational
              </span>
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl">
              From coaching just two medical aspirants to producing thousands of
              successful professionals worldwide, our journey is built on vision,
              dedication, and an unwavering commitment to excellence.
            </p>

            <button className="mt-10 group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/10">
              Explore Our Legacy
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative bg-white rounded-3xl border border-slate-200/80 p-8 shadow-2xl shadow-slate-200/50">
              {/* Decorative top gradient bar */}
              <div className="absolute top-0 left-8 right-8 h-1.5 rounded-b-full bg-gradient-to-r from-blue-500 to-indigo-500" />

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  <GraduationCap size={24} className="text-blue-600" />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-400 hover:bg-slate-100 transition-colors cursor-pointer">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                The Beginning
              </h3>

              <p className="mt-4 text-slate-500 leading-relaxed">
                Founded as IDEAL Tutorial College in 1981, the institution began
                with a mission to empower students through quality education and
                career guidance.
              </p>

              {/* Mini visual */}
              <div className="mt-6 flex items-center gap-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-violet-200 border-2 border-white" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-slate-900">
                    2 Students
                  </span>{" "}
                  <span className="text-slate-500">in 1981</span>
                </div>
              </div>
            </div>

            {/* Background accent shape */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-blue-50 border border-blue-100" />
          </div>
        </div>

        {/* ── Stats Section ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-24">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-200/80 p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 border border-slate-100 group-hover:border-blue-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-4xl font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </h3>
                <p className="mt-2 text-slate-500 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Growth Journey Timeline ── */}
        <div className="mt-32">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
              <CircleDot size={14} />
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Growth Timeline
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              Milestones that shaped our institution and transformed thousands of
              lives over four decades.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* The Line */}
            <div className="absolute left-[23px] lg:left-1/2 top-0 bottom-0 w-px bg-slate-200 lg:-translate-x-px" />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot on Timeline */}
                  <div className="absolute left-[16px] lg:left-1/2 top-2 w-[18px] h-[18px] rounded-full border-[3px] border-white shadow-md bg-gradient-to-br ${item.color} lg:-translate-x-[9px] z-10" 
                       style={{ background: "linear-gradient(to bottom right, var(--tw-gradient-stops))" }}
                  />

                  {/* Content Card */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-[calc(50%-40px)] ${
                      index % 2 === 0
                        ? "lg:text-right lg:pr-0"
                        : "lg:text-left lg:pl-0"
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${item.bgLight} ${item.textColor} mb-3`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Admissions Dashboard ── */}
        <div className="mt-32 rounded-[32px] bg-slate-950 text-white p-8 lg:p-12 overflow-hidden relative">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <TrendingUp className="text-blue-400" size={22} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Medical Admissions Growth
                </h2>
                <p className="mt-1 text-slate-400 text-sm">
                  Consistent growth reflecting academic excellence and dedicated
                  coaching.
                </p>
              </div>
            </div>

            {/* Visual Chart */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
              {admissions.map((item, index) => {
                const heightPercent = (item.count / maxAdmission) * 100;
                return (
                  <div key={index} className="flex flex-col items-center gap-3 group">
                    <span className="text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.count}
                    </span>
                    <div className="relative w-full h-48 bg-white/5 rounded-xl overflow-hidden flex items-end">
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg transition-all duration-700 group-hover:from-blue-500 group-hover:to-cyan-300"
                        style={{ height: `${Math.max(heightPercent, 5)}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
                      {item.year}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Expansion Section ── */}
        <div className="mt-32 grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: School,
              title: "Schools",
              desc: "Matriculation and CBSE schools across multiple campuses providing foundational excellence.",
              gradient: "from-blue-50 to-indigo-50",
              iconBg: "bg-blue-100",
              iconColor: "text-blue-600",
              border: "border-blue-100/80",
              hoverBorder: "hover:border-blue-200",
            },
            {
              icon: Building2,
              title: "Higher Education",
              desc: "Women's Arts & Science College and Teacher Education programs shaping future leaders.",
              gradient: "from-violet-50 to-purple-50",
              iconBg: "bg-violet-100",
              iconColor: "text-violet-600",
              border: "border-violet-100/80",
              hoverBorder: "hover:border-violet-200",
            },
            {
              icon: Trophy,
              title: "Student Success",
              desc: "Thousands of doctors, engineers, entrepreneurs, and professionals across the globe.",
              gradient: "from-amber-50 to-orange-50",
              iconBg: "bg-amber-100",
              iconColor: "text-amber-600",
              border: "border-amber-100/80",
              hoverBorder: "hover:border-amber-200",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl bg-gradient-to-br ${item.gradient} border ${item.border} ${item.hoverBorder} p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden`}
              >
                {/* Watermark Icon */}
                <Icon
                  size={120}
                  className="absolute -bottom-6 -right-6 opacity-[0.04] text-slate-900 rotate-12 group-hover:scale-110 transition-transform duration-500"
                />

                <div
                  className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} mb-6`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:gap-3 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA Section ── */}
        <div className="mt-32 relative rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-10 lg:p-16 text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6">
                <Users size={22} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                A Legacy That Continues To Grow
              </h2>
              <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
                Guided by visionary leadership, committed educators, supportive
                parents, and determined students, our institution continues to
                inspire future generations.
              </p>
            </div>

            <button className="group flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg shadow-black/10">
              Join Our Community
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}