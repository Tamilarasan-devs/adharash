import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, BookOpen, Leaf, ChevronRight, Award, Users, TrendingUp, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.toString().replace(/\D/g, ""));
    const duration = 1800;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function ProgressBar({ label, pct, delay, animate }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-slate-300 font-medium">{label}</span>
        <span className="text-sm text-blue-400 font-semibold">{pct}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
          style={{
            width: animate ? `${pct}%` : "0%",
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

const stats = [
  { icon: <Award size={22} />, value: "25", suffix: "+", label: "Years of Excellence" },
  { icon: <Users size={22} />, value: "5000", suffix: "+", label: "Students Enrolled" },
  { icon: <TrendingUp size={22} />, value: "98", suffix: "%", label: "Pass Rate" },
  { icon: <Building2 size={22} />, value: "40", suffix: "+", label: "Clubs & Activities" },
];

const features = [
  {
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    label: "Pedagogy",
    title: "Quality Teachers",
    desc: "Despite writing in black and white, we are here to add color to the life of every student. Our educators are lifelong learners dedicated to your growth.",
  },
  {
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80",
    label: "Curriculum",
    title: "Best Curriculum",
    desc: "Working collaboratively to ensure every student achieves academically, socially, emotionally, spiritually, and naturally — a truly holistic framework.",
  },
  {
    icon: <Leaf size={28} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    label: "Campus",
    title: "Eco-Friendly Campus",
    desc: "A space to breathe, reflect, and grow. Our green campus nurtures both the mind and the environment — come here, grow green with us.",
  },
];

const checkpoints = [
  "Experienced & passionate faculty",
  "Modern, technology-rich classrooms",
  "Holistic student development",
  "Award-winning academic excellence",
];

export default function About() {
  const [headerRef, headerInView] = useInView();
  const [contentRef, contentInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [featuresRef, featuresInView] = useInView();
  const [activeCard, setActiveCard] = useState(null);
  const navigation = useNavigate()
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden font-sans">

      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="text-center mb-20"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-blue-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
            About Adharsh Vidhyalaya
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Building Future
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Leaders of Tomorrow
            </span>
          </h2>

          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Rooted in Indian values, reaching for global excellence — nurturing every student's potential since inception.
          </p>

          <div className="flex items-center justify-center gap-2 mt-7">
            <div className="h-0.5 w-8 bg-blue-600 rounded-full" />
            <div className="h-0.5 w-2 bg-cyan-500 rounded-full" />
            <div className="h-0.5 w-1 bg-slate-300 rounded-full" />
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          style={{
            opacity: statsInView ? 1 : 0,
            transform: statsInView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white border border-slate-100 rounded-2xl px-6 py-7 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <p className="text-3xl font-bold text-slate-900 tracking-tight">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-slate-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── About Content ── */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24"
          style={{
            opacity: contentInView ? 1 : 0,
            transform: contentInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Left copy */}
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-4">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-snug tracking-tight mb-6">
              A Space to Learn,<br />
              <span className="text-blue-600">Grow &amp; Excel</span>
            </h2>

            <p className="text-base text-slate-500 leading-relaxed mb-4">
              Being a school of Indian ethics, Adharsh Vidhyalaya aims at excelling with optimism in all aspects — infusing discipline and confidence into students, helping them make the right choices in life and career.
            </p>

            <p className="text-base text-slate-500 leading-relaxed mb-9">
              We provide a conducive learning environment that inspires every student to meet life's challenges while developing leadership, responsibility, confidence, and lasting social values.
            </p>

            {/* Checkpoints */}
            <div className="flex flex-col gap-3 mb-10">
              {checkpoints.map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                      <path d="M1 4L4 7L10 1" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200" onClick={()=>navigation('/about')} >
              Learn More <ChevronRight size={16} />
            </button>
          </div>

          {/* Right dark card */}
          <div className="relative bg-slate-900 rounded-3xl p-10 lg:p-12 overflow-hidden">
            <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full bg-blue-600/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-cyan-500/15 blur-2xl" />

            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7">
              Our Mission
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug tracking-tight mb-5">
              Excellence Through Education
            </h3>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-9">
              Our mission is to nurture young minds with knowledge, values, innovation, and leadership skills that prepare them for a successful future in a rapidly evolving world.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { label: "Experienced Faculty", pct: 95, delay: 0.4 },
                { label: "Modern Learning Environment", pct: 88, delay: 0.6 },
                { label: "Holistic Development", pct: 92, delay: 0.8 },
              ].map((item, i) => (
                <ProgressBar key={i} label={item.label} pct={item.pct} delay={item.delay} animate={contentInView} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <div ref={featuresRef} className="flex flex-col gap-8 lg:gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onFocus={() => setActiveCard(index)}
              onBlur={() => setActiveCard(null)}
              tabIndex={0}
              className="relative w-full rounded-3xl overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
              style={{
                height: "clamp(320px, 55vw, 560px)",
                opacity: featuresInView ? 1 : 0,
                transform: featuresInView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
              }}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transform: activeCard === index ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.8s ease",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

              {/* Mobile bottom overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="text-white px-8 sm:px-12 lg:px-16 max-w-lg lg:max-w-2xl">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-5 sm:mb-6">
                    {item.icon}
                  </div>

                  <span className="block mb-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-white/75">
                    {item.label}
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5">
                    {item.title}
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 mb-6 sm:mb-8 max-w-md">
                    {item.desc}
                  </p>

                  <button className="inline-flex items-center gap-2 bg-white text-slate-900 text-sm font-semibold px-5 sm:px-6 py-3 rounded-full hover:bg-slate-100 transition-colors duration-200 shadow-lg" onClick={()=>navigation('/about')}>
                    Discover More
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Decorative side label */}
              <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 opacity-40">
                <div className="w-px h-20 bg-white" />
                <span
                  className="text-white text-xs font-bold tracking-[0.25em] uppercase"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-px h-20 bg-white" />
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 px-8 sm:px-12 lg:px-16 py-12 lg:py-14 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-500/30">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Ready to be part of our family?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Admissions are now open for the {new Date().getFullYear()}–{new Date().getFullYear() + 1} academic year.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow" onClick={() => navigation('/contact')}>
              Apply Now <ChevronRight size={16} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors duration-200" onClick={() => navigation('/contact')}>
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}