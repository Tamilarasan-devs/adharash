import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Quote,
} from "lucide-react";

import img1 from "../../../assets/img/about/img.avif";
import img2 from "../../../assets/img/about/img2.avif";
import img3 from "../../../assets/img/about/img3.avif";
import img4 from "../../../assets/img/about/img4.avif";

export default function About() {
  const [expanded, setExpanded] = useState({});

  const leaders = [
    {
      image: img1,
      role: "Founder & Chairman",
      degree: "M.A., M.A., M.A.",
      name: "Ideal Thiru. K. Sivalingam",
      content: [
        "Mr. Ideal K. Sivalingam, Founder and Chairman of Ideal Educational Institutions, has devoted more than 45 years to transforming education.",
        "Coming from an agricultural background, he envisioned bringing quality education to every child, including those in remote villages.",
        "His educational journey began with Ideal Tutorial Center and later expanded into a network of respected institutions.",
        "His dedication has empowered thousands of students worldwide and strengthened communities through education.",
        "Today, his vision continues to inspire generations through excellence, innovation, and accessibility."
      ]
    },
    {
      image: img2,
      role: "Correspondent",
      degree: "M.A., M.Ed., M.Phil., Ph.D.",
      name: "Dr. Selvamani Sivalingam",
      content: [
        "Starting as a primary school teacher, she transformed her passion into a remarkable educational journey.",
        "Her belief in perseverance and lifelong learning has guided countless students.",
        "She continues to inspire through leadership, innovation, and educational excellence.",
        "Her commitment to nurturing talent has shaped a culture of achievement and growth."
      ]
    },
    {
      image: img3,
      role: "Vice Chairman",
      degree: "",
      name: "Mr. S. ArulMozhiVarman",
      content: [
        "An academic achiever who secured one of Tamil Nadu's highest medical cut-offs.",
        "He transitioned from medicine to education, bringing a fresh vision to institutional leadership.",
        "His innovative mindset drives modernization and continuous growth.",
        "He is committed to building future-ready educational experiences."
      ]
    },
    {
      image: img4,
      role: "Junior Correspondent",
      degree: "MBBS",
      name: "Dr. Snekhanandhini Sivalingam",
      content: [
        "Dedicated to early childhood education and holistic development.",
        "She believes every child possesses unique strengths and potential.",
        "Her vision centers around personalized learning experiences.",
        "She continues to foster creativity, confidence, and curiosity in young learners."
      ]
    }
  ];

  const founder = leaders[0];
  const executives = leaders.slice(1);

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 relative z-10">
        {/* HERO */}
        <div className="relative text-center max-w-5xl mx-auto">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[120px]" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
              <Sparkles
                size={16}
                className="text-amber-500"
              />
              <span className="text-sm font-medium">
                Leadership Excellence
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-none">
              The Minds Behind
              <span className="block text-amber-600">
                The Legacy
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Meet the visionary leaders shaping generations
              through innovation, integrity, and educational
              excellence.
            </p>
          </div>
        </div>

        {/* Founder Spotlight */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-amber-100 via-white to-blue-100" />

          <div className="relative grid lg:grid-cols-2 gap-10 p-8 lg:p-14">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-amber-300/30 to-blue-300/30 blur-xl" />

              <img
                src={founder.image}
                alt={founder.name}
                className="relative w-full h-full min-h-[500px] object-cover rounded-[32px] shadow-2xl"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-amber-600 uppercase tracking-[0.3em] font-semibold text-sm">
                {founder.role}
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                {founder.name}
              </h2>

              <p className="mt-2 text-slate-500">
                {founder.degree}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "45+ Years Legacy",
                  "Educational Visionary",
                  "Institution Founder"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4 text-slate-600 leading-8">
                {founder.content
                  .slice(
                    0,
                    expanded.founder
                      ? founder.content.length
                      : 3
                  )
                  .map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
              </div>

              <button
                onClick={() =>
                  toggleExpand("founder")
                }
                className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-600"
              >
                {expanded.founder
                  ? "Show Less"
                  : "Read Full Story"}

                {expanded.founder ? (
                  <ArrowLeft size={16} />
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            {
              number: "45+",
              label: "Years Legacy"
            },
            {
              number: "10K+",
              label: "Students"
            },
            {
              number: "100+",
              label: "Educators"
            },
            {
              number: "Global",
              label: "Impact"
            }
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-black text-slate-900">
                {item.number}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900">
              Leadership Team
            </h2>

            <p className="mt-4 text-slate-500">
              Dedicated leaders driving excellence and
              innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {executives.map((leader, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-7">
                  <span className="text-xs uppercase tracking-[0.25em] text-amber-600 font-semibold">
                    {leader.role}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {leader.name}
                  </h3>

                  {leader.degree && (
                    <p className="mt-1 text-slate-500">
                      {leader.degree}
                    </p>
                  )}

                  <div className="mt-5 space-y-4 text-slate-600 leading-7">
                    {leader.content
                      .slice(
                        0,
                        expanded[index]
                          ? leader.content.length
                          : 2
                      )
                      .map((paragraph, i) => (
                        <p key={i}>
                          {paragraph}
                        </p>
                      ))}
                  </div>

                  <button
                    onClick={() =>
                      toggleExpand(index)
                    }
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-amber-600"
                  >
                    {expanded[index]
                      ? "Show Less"
                      : "Read More"}

                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Banner */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-10 md:p-16 text-white">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-[150px]" />

            <Quote
              size={60}
              className="text-amber-400"
            />

            <h2 className="mt-8 text-3xl md:text-4xl font-black leading-tight max-w-4xl">
              Building Futures Through Knowledge,
              Leadership & Innovation
            </h2>

            <p className="mt-8 text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed">
              Adharsh Vidhyalaya Educational
              Institutions continues its legacy by
              nurturing confident learners, visionary
              thinkers, and responsible leaders who
              shape tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}