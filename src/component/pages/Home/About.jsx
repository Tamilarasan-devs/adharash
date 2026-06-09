import React from "react";
import {
  GraduationCap,
  BookOpen,
  Leaf,
} from "lucide-react";

export default function About() {
  const data = [
    {
      icon: <GraduationCap size={40} />,
      title: "Quality Teachers",
      desc: "Despite writing in black and white, we are here to add color to the life of every student.",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Best Curriculum",
      desc: "Working collaboratively to ensure every student achieves academically, socially, emotionally, spiritually and naturally.",
    },
    {
      icon: <Leaf size={40} />,
      title: "Eco-Friendly Campus",
      desc: "A space to get purified. Come here. Grow green with us.",
    },
  ];

  const stats = [
    {
      title: "6+",
      desc: "Associated Institutions",
    },
    {
      title: "90%",
      desc: "Success Rate",
    },
    {
      title: "500+",
      desc: "Faculty Members",
    },
    {
      title: "60K+",
      desc: "Passed Out Students",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            About ADHARSH VIDHYALAYA
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Building Future Leaders
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
              A Space to Learn, Grow & Excel
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Being a school of Indian ethics, Adharsh Vidhyalaya aims at
              excelling with optimism in all aspects and infuses discipline and
              confidence into students, helping them make the right choices in
              life and career.
            </p>

            <p className="text-slate-600 leading-relaxed">
              We provide a conducive learning environment that inspires every
              student to meet life's challenges while developing leadership,
              responsibility, confidence, and social values.
            </p>

            <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Highlight Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Excellence Through Education
            </h3>

            <p className="text-blue-100 leading-relaxed mb-8">
              Our mission is to nurture young minds with knowledge, values,
              innovation, and leadership skills that prepare them for a
              successful future.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                ✅ Experienced Faculty
              </div>

              <div className="flex items-center gap-3">
                ✅ Modern Learning Environment
              </div>

              <div className="flex items-center gap-3">
                ✅ Holistic Student Development
              </div>

              <div className="flex items-center gap-3">
                ✅ Academic Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}