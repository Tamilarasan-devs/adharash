import React from "react";
import {
  Shield,
  HeartPulse,
  Dumbbell,
  Music,
  Trophy,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function Curriculum() {
  const activities = [
    {
      icon: Shield,
      title: "Karate",
      desc: "Build confidence, discipline, courage, and self-defense skills through structured martial arts training.",
      bg: "from-blue-50 to-indigo-100",
      iconColor: "text-blue-600",
      span: "lg:col-span-7",
    },
    {
      icon: HeartPulse,
      title: "Yoga",
      desc: "Enhance concentration, flexibility, mindfulness, and overall wellness through daily yoga practices.",
      bg: "from-pink-50 to-rose-100",
      iconColor: "text-rose-500",
      span: "lg:col-span-5",
    },
    {
      icon: Music,
      title: "Music & Dance",
      desc: "Explore Bharatanatyam, Folk Dance, Kathak, Peacock Dance, and cultural arts.",
      bg: "from-purple-50 to-violet-100",
      iconColor: "text-violet-600",
      span: "lg:col-span-4",
    },
    {
      icon: Trophy,
      title: "Sports Excellence",
      desc: "From Volleyball and Kabaddi to Chess and Skating, students thrive through competition.",
      bg: "from-amber-50 to-orange-100",
      iconColor: "text-orange-500",
      span: "lg:col-span-4",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Gymnastics",
      desc: "Physical strength, agility, balance, and coordination through structured activities.",
      bg: "from-emerald-50 to-green-100",
      iconColor: "text-emerald-600",
      span: "lg:col-span-4",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafaf7] py-28">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-medium">
              <Sparkles size={16} />
              Academics
            </span>

            <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-slate-900">
              Curriculum &
              <span className="block text-blue-600">
                Co-Curricular Excellence
              </span>
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              Our curriculum blends academic excellence with creativity,
              leadership, wellness, and real-world experiences, helping
              students grow into confident and capable individuals.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[48px] bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)]" />

            <div className="absolute -bottom-10 -left-10 bg-white rounded-[32px] p-8 shadow-[0_25px_80px_rgba(15,23,42,0.12)] max-w-xs">
              <GraduationCap
                size={40}
                className="text-blue-600 mb-4"
              />

              <h3 className="text-xl font-bold text-slate-900">
                Holistic Education
              </h3>

              <p className="mt-3 text-slate-600">
                Balancing academic achievement, wellness, leadership,
                creativity, and life skills.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="relative mt-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 blur-3xl opacity-30 rounded-[48px]" />

          <div className="relative bg-white/70 backdrop-blur-xl rounded-[48px] p-10 md:p-16 shadow-[0_25px_100px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center">
                <GraduationCap
                  size={40}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h3 className="text-4xl font-bold text-slate-900">
                  Holistic Learning Approach
                </h3>

                <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-4xl">
                  Students actively participate in Yoga, Chess,
                  Dance, Karate, Abacus, Drawing, Sports, and
                  Cultural Activities, fostering balanced
                  intellectual, emotional, physical, and social
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Activities */}
        <div className="grid lg:grid-cols-12 gap-6 mt-24">
          {activities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  ${item.span}
                  group
                  rounded-[40px]
                  bg-gradient-to-br
                  ${item.bg}
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                `}
              >
                <div
                  className={`
                    w-16 h-16
                    rounded-2xl
                    bg-white/70
                    backdrop-blur-lg
                    flex items-center justify-center
                    mb-8
                    ${item.iconColor}
                  `}
                >
                  <Icon size={34} />
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold tracking-wide uppercase">
              Student Wellness
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Health,
              <br />
              Confidence &
              <br />
              Lifelong Growth
            </h2>
          </div>

          <div>
            <blockquote className="text-3xl md:text-4xl font-semibold leading-relaxed text-slate-800">
              “He who has health, has hope and he who has hope has everything.”
            </blockquote>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              Physical education, sports, and wellness programs are
              integrated into the curriculum to cultivate resilience,
              leadership, teamwork, discipline, and a lifelong
              commitment to healthy living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
