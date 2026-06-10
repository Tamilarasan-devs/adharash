import React from "react";
import {
  GraduationCap,
  Music,
  Trophy,
  Sparkles,
  CheckCircle,
  School,
  BookOpen,
  ChevronRight,
  Star,
  Users,
  Award,
  Palette,
  Shield,
  Lightbulb,
  Mic,
  Book,
  HelpCircle,
  Activity,
  Target,
  Dumbbell,
  Zap,
  Swords,
  Waves,
  Crown,
  Utensils,
  Scissors,
  Keyboard,
  Leaf,
  Heart,
  Shuffle,
  Smile,
  Pencil,
  Microscope,
} from "lucide-react";

import heroImg from "../../../assets/img/about/heroImg.webp";
import img1 from "../../../assets/img/about/img.avif";
import img2 from "../../../assets/img/about/img2.avif";
import img3 from "../../../assets/img/about/img3.avif";

/* ─────────────────────────────────────────────────────────────────
 AVPS Anthiyur — top-tier light-theme page
 Stack: React + Tailwind CSS (JIT)
 ───────────────────────────────────────────────────────────────── */

export default function AvpsAnthiyur() {
  /* ── data ── */
  const clubs = [
    { name: "Music Club", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop" },
    { name: "Art & Craft Club", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop" },
    { name: "Road Safety Club", img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&h=300&fit=crop" },
    { name: "Life Skills Club", img: "https://images.unsplash.com/photo-1536337005238-94b997371b40?w=400&h=300&fit=crop" },
    { name: "Oratorical Club", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop" },
    { name: "Literary Club", img: "https://plus.unsplash.com/premium_photo-1683887034327-169259e60076?q=80&w=869&auto=format&fit=crop" },
    { name: "Reading Club", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop" },
    { name: "Dance Club", img: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=300&fit=crop" },
    { name: "Quiz Club", img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop" },
  ];

  const games = [
    { name: "Athletics", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=870&auto=format&fit=crop" },
    { name: "Football", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop" },
    { name: "Basketball", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop" },
    { name: "Volleyball", img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop" },
    { name: "Kho-Kho", img: "https://media.gettyimages.com/id/2193093718/photo/in-this-photograph-taken-on-january-8-members-of-indias-mens-kho-kho-team-take-part-in.jpg?s=612x612&w=0&k=20&c=dteiyGYHOONZ4nahOkjdIRHMXyTfoUuolknKzZZ-YQU=" },
    { name: "Kabaddi", img: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/uuxwzqgagbynk3nr1nzi" },
    { name: "Throw Ball", img: "https://www.niviasports.com/cdn/shop/articles/Throwball_Rules_1d55d3ee-2bb8-4d91-9297-80e4234c4cdd.jpg?v=1771508434&width=1100" },
    { name: "Swimming", img: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&h=300&fit=crop" },
  ];

  const eca = [
    { name: "Archery", img: "https://images.unsplash.com/photo-1641531105535-1ead3c1784ab?q=80&w=811&auto=format&fit=crop" },
    { name: "Classical Dance", img: "https://images.unsplash.com/photo-1756370256926-e48ca54c5efe?q=80&w=870&auto=format&fit=crop" },
    { name: "Western Dance", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=300&fit=crop" },
    { name: "Boxing", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop" },
    { name: "Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop" },
    { name: "Skating", img: "https://images.unsplash.com/photo-1655009316723-e4af5fe7afe1?q=80&w=870&auto=format&fit=crop" },
    { name: "Chess", img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=300&fit=crop" },
    { name: "Taekwondo", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=300&fit=crop" },
    { name: "Silambam", img: "https://www.kamarajschool.edu.in/sites/default/files/ss2.jpg" },
    { name: "Aerobics & Sports Fitness", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop" },
  ];

  const supw = [
    { name: "Meal Planning & Preparation", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop" },
    { name: "Dress Designing", img: "https://plus.unsplash.com/premium_photo-1683141084792-510897cbca07?q=80&w=387&auto=format&fit=crop" },
    { name: "Textile Designing", img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop" },
    { name: "Type Writing", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop" },
    { name: "Gardening", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop" },
    { name: "Craft Work", img: "https://plus.unsplash.com/premium_photo-1705717318393-fc1b452f6de8?q=80&w=870&auto=format&fit=crop" },
    { name: "Tailoring & Embroidery", img: "https://plus.unsplash.com/premium_photo-1677355760435-8c1f1d81edc5?q=80&w=870&auto=format&fit=crop" },
  ];

  const pillars = [
    { label: "Academic Excellence", icon: <BookOpen size={16} /> },
    { label: "Character & Discipline", icon: <Star size={16} /> },
    { label: "Sports & Fitness", icon: <Trophy size={16} /> },
    { label: "Arts & Culture", icon: <Sparkles size={16} /> },
    { label: "Innovation & Robotics", icon: <Award size={16} /> },
    { label: "Life Skills", icon: <Users size={16} /> },
  ];

  const curriculum = [
    {
      grade: "Kindergarten",
      icon: <Smile size={20} style={{ color: "#D97706" }} />,
      stripeClass: "bg-gradient-to-r from-amber-400 to-yellow-300",
      iconBg: "#FFFBEB",
      dotColor: "#D97706",
      subjects: ["Cognitive Development", "Physical Development", "Language Skills", "Life Skills"],
    },
    {
      grade: "Grade I – V",
      icon: <Pencil size={20} style={{ color: "#2563EB" }} />,
      stripeClass: "bg-gradient-to-r from-blue-500 to-sky-400",
      iconBg: "#EFF6FF",
      dotColor: "#2563EB",
      subjects: ["English", "Mathematics", "Science", "Robotics", "Arts"],
    },
    {
      grade: "Grade VI – X",
      icon: <Microscope size={20} style={{ color: "#059669" }} />,
      stripeClass: "bg-gradient-to-r from-emerald-500 to-teal-400",
      iconBg: "#ECFDF5",
      dotColor: "#059669",
      subjects: ["Science", "Social Science", "Mathematics", "Coding", "Sports"],
    },
    {
      grade: "Grade XI – XII",
      icon: <GraduationCap size={20} style={{ color: "#6D28D9" }} />,
      stripeClass: "bg-gradient-to-r from-violet-600 to-purple-400",
      iconBg: "#F5F3FF",
      dotColor: "#6D28D9",
      subjects: ["Physics", "Chemistry", "Biology", "Commerce", "Computer Science"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');
        .avps-root { font-family: 'DM Sans', sans-serif; }
        .avps-serif { font-family: 'Playfair Display', Georgia, serif; }
        .curr-card:hover { box-shadow: 0 8px 32px rgba(14,27,46,0.10); transform: translateY(-3px); }
        .pillar-item:hover { background: rgba(201,168,76,0.07); }
        .gallery-img:hover { transform: scale(1.03); }
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px);} to { opacity:1; transform:none;} }
        .fade-up { animation: fadeUp 0.7s ease both; }
      `}</style>

      <div className="avps-root bg-[#FAFAF8] text-[#0E1B2E] overflow-x-hidden">

        {/* ══════════════════════════════════════
         HERO
         ══════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <img src={img1} alt="AVPS Anthiyur" className="absolute inset-0 w-full h-full object-cover object-right" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #0A1628 0%, rgba(10,22,40,0.98) 18%, rgba(10,22,40,0.90) 35%, rgba(10,22,40,0.70) 52%, rgba(10,22,40,0.30) 75%, rgba(10,22,40,0) 100%)" }} />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />
          <div className="absolute -bottom-32 -left-16 w-[360px] h-[360px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent" />

          <div className="relative z-10 w-full px-5 sm:px-10 lg:px-20 py-24 sm:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                <GraduationCap size={13} className="text-[#C9A84C]" />
                <span className="text-[11px] tracking-[2.5px] uppercase text-[#C9A84C] font-medium">CBSE School · Anthiyur</span>
              </div>
              <h1 className="avps-serif text-[clamp(3.2rem,8vw,6rem)] font-bold text-white leading-[1.05] mb-6">
                AVPS<br /><span className="text-[#C9A84C]">Anthiyur</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-[520px] mb-12 font-light">
                A distinguished institution shaping minds through academic excellence, discipline, and the timeless values of holistic education.
              </p>
              <div className="flex flex-wrap gap-8 sm:gap-10">
                {[
                  ["2010", "Established"],
                  ["CBSE", "Curriculum"],
                  ["K–XII", "All Grades"],
                ].map(([val, lbl]) => (
                  <div key={lbl} className="border-l-[1.5px] border-[#C9A84C] pl-4">
                    <div className="avps-serif text-[2rem] font-bold text-[#C9A84C] leading-none">{val}</div>
                    <div className="text-[11px] tracking-[2px] uppercase text-white/40 mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
        </section>

        {/* ══════════════════════════════════════
         ABOUT
         ══════════════════════════════════════ */}
        <section className="bg-[#FAFAF8] px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">
            <div>
              <Eyebrow icon={<School size={12} />} label="About the School" />
              <h2 className="avps-serif text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#0E1B2E] leading-[1.2] mb-5">
                Learning Beyond<br />the Classroom
              </h2>
              <p className="text-[#5A6A7A] leading-[1.95] mb-4 text-[15px]">
                Our academics are rooted in experiential learning, creativity, and discipline — all aligned with CBSE standards and designed to prepare students for the world ahead.
              </p>
              <p className="text-[#5A6A7A] leading-[1.95] text-[15px]">
                Through yoga, robotics, arts, and co-curricular engagement, every student at AVPS Anthiyur discovers their own path to excellence.
              </p>
              <div className="flex flex-wrap gap-2 mt-7">
                {["CBSE Certified", "Established 2010", "K–XII", "Holistic Education"].map((t) => (
                  <span key={t} className="text-[12px] font-medium px-3 py-1 rounded-full border border-[#E2D9C4] bg-[#F4F1E8] text-[#7A6840]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#0E1B2E] rounded-2xl p-7 sm:p-8">
              <p className="text-[10px] tracking-[2.5px] uppercase text-[#C9A84C] font-semibold mb-5">School Pillars</p>
              <div className="space-y-1">
                {pillars.map((p, i) => (
                  <div key={i} className="pillar-item flex items-center gap-3 px-2 py-3 rounded-lg transition-colors cursor-default" style={{ borderBottom: i < pillars.length - 1 ? "0.5px solid rgba(201,168,76,0.15)" : "none" }}>
                    <span className="text-[#C9A84C] opacity-80">{p.icon}</span>
                    <span className="text-white/75 text-[14px] font-light">{p.label}</span>
                    <ChevronRight size={13} className="text-[#C9A84C]/30 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
         CAMPUS GALLERY
         ══════════════════════════════════════ */}
        <section className="px-5 sm:px-10 lg:px-20 pb-20 sm:pb-28">
          <div className="max-w-6xl mx-auto">
            <Eyebrow icon={<School size={12} />} label="Campus" />
            <h2 className="avps-serif text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-[#0E1B2E] mb-6">Our Campus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[img1, img2, img3].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl aspect-[4/3] bg-[#F4F1E8]">
                  <img src={src} alt={`Campus view ${i + 1}`} className="gallery-img w-full h-full object-cover transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

        {/* ══════════════════════════════════════
         TAG SECTIONS (IMAGE-CARD STYLE)
         ══════════════════════════════════════ */}
        <TagSection
          eyebrowIcon={<Music size={12} />}
          eyebrow="Student Life"
          title="Student Clubs"
          items={clubs}
          bg="bg-[#F4F1E8]"
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

        <TagSection
          eyebrowIcon={<Trophy size={12} />}
          eyebrow="Sports"
          title="Sports & Games"
          items={games}
          bg="bg-[#FAFAF8]"
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

        <TagSection
          eyebrowIcon={<Sparkles size={12} />}
          eyebrow="Activities"
          title="Extra Curricular Activities"
          items={eca}
          bg="bg-[#F4F1E8]"
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

       

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2D9C4] to-transparent" />

        {/* ══════════════════════════════════════
         CURRICULUM / ACADEMIC STRUCTURE
         ══════════════════════════════════════ */}
        <section className="bg-[#F4F1E8] px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <Eyebrow icon={<GraduationCap size={12} />} label="Academics" />
            <h2 className="avps-serif text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#0E1B2E] leading-[1.2] mb-10">Academic Structure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {curriculum.map((c) => (
                <CurrCard key={c.grade} data={c} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
         FOOTER BANNER
         ══════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center px-5 sm:px-10 py-20 sm:py-28" style={{ background: "linear-gradient(135deg, #0A1628 0%, #0E1B2E 60%, #162540 100%)" }}>
          <div aria-hidden="true" className="avps-serif absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.025] font-bold pointer-events-none select-none whitespace-nowrap" style={{ fontSize: "clamp(5rem,20vw,14rem)" }}>AVPS</div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
          <div className="relative z-10 max-w-xl mx-auto">
            <div className="w-12 h-[2px] bg-[#C9A84C] mx-auto mb-7" />
            <h2 className="avps-serif text-[clamp(2rem,5vw,3.2rem)] font-bold text-white mb-4">AVPS Anthiyur</h2>
            <p className="text-white/50 text-[15px] leading-[1.9] mb-7 font-light">
              Established in 2010, shaping futures through modern CBSE education, strong values, and holistic development in the heart of Anthiyur.
            </p>
            <div className="w-12 h-[2px] bg-[#C9A84C] mx-auto mb-6" />
            <p className="text-[10px] tracking-[3px] uppercase text-white/25">Excellence · Discipline · Growth</p>
          </div>
        </section>

      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
 Eyebrow label
───────────────────────────────────────────── */
function Eyebrow({ icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-6 h-[1px] bg-[#C9A84C] flex-shrink-0" />
      <span className="text-[#C9A84C]">{icon}</span>
      <span className="text-[10.5px] font-semibold tracking-[2.5px] uppercase text-[#B8952A]">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
 TagSection — Full-image cards with overlay title
───────────────────────────────────────────── */
function TagSection({ eyebrowIcon, eyebrow, title, items, bg }) {
  return (
    <section className={`${bg} px-5 sm:px-10 lg:px-20 py-16 sm:py-24`}>
      <div className="max-w-6xl mx-auto">
        <Eyebrow icon={eyebrowIcon} label={eyebrow} />
        <h2 className="avps-serif text-[clamp(2rem,4vw,2.6rem)] font-bold text-[#0E1B2E] leading-[1.15] mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative border-[3px] border-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-default transition-all duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-[#E8E2D5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Bottom gradient overlay for title readability */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

                {/* Title overlaid at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <h3 className="text-white text-[13px] sm:text-[15px] font-semibold leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                    {item.name}
                  </h3>
                </div>

                {/* Gold accent line at bottom on hover */}
                <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
 CurrCard — Curriculum tile
───────────────────────────────────────────── */
function CurrCard({ data }) {
  const { grade, stripeClass, iconBg, dotColor, icon, subjects } = data;

  return (
    <div className="curr-card relative bg-white border border-[#E8E2D5] rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(14,27,46,0.11)]">
      <div className={`h-1 w-full ${stripeClass}`} />
      <div className="px-[18px] pt-5 pb-[14px]">
        <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-2.5" style={{ background: iconBg }}>
          {icon}
        </div>
        <p className="avps-serif text-[20px] font-bold text-[#0E1B2E] leading-tight mb-0.5">{grade}</p>
        <p className="text-[13px] text-[#8A9BAB] font-normal">{subjects.length} subjects</p>
      </div>
      <div className="px-[18px] pb-[18px]">
        <div className="h-px bg-[#F0EBE0] mb-3" />
        <ul className="space-y-0">
          {subjects.map((s, i) => (
            <li key={i} className="flex items-center gap-2 py-[5px] text-[16px] text-[#374151]" style={{ borderBottom: i < subjects.length - 1 ? "0.5px solid #F7F4EE" : "none" }}>
              <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: dotColor }} />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}