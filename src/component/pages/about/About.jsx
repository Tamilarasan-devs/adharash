
import React, { useState } from "react";
import { Sparkles, ArrowRight, Quote } from "lucide-react";
import img1 from "../../../assets/img/about/img.avif";
import img2 from "../../../assets/img/about/img2.avif";
import img3 from "../../../assets/img/about/img3.avif";
import img4 from "../../../assets/img/about/img4.avif";
import img5 from "../../../assets/img/about/img5.avif";
export default function About() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const leaders = [{ image: img1, role: "Founder & Chairman", degree: "M.A., M.A., M.A.", name: "Ideal Thiru. K. Sivalingam", color: "amber", content: ["Mr. Ideal K. Sivalingam, the Founder and Chairman of Ideal Educational Institutions, has dedicated over 45 years to the field of education. Coming from an agricultural background, he possessed a strong determination to bring education even to the most remote villages.", "His unwavering commitment to the purpose of education has resulted in the creation of thousands of scholars across the globe.", "Mr. Sivalingam's journey began with the establishment of Ideal Tutorial Center, which later evolved into Ideal Educational Institutions.", "Recognizing the need for quality education, he expanded his vision and established Adharsh Vidhyalaya Educational Institutions.", "This endeavor further flourished and eventually led to the establishment of its own branch in Palladam.", "Through his leadership and vision, Mr. Ideal K. Sivalingam has played a pivotal role in providing access to education in previously underserved areas.", "His dedication has not only transformed the lives of countless students but has also contributed to the overall development of the communities in which his institutions operate.",], }, { image: img2, role: "Correspondent", degree: "M.A., M.Ed., M.Phil., Ph.D.", name: "Dr. Selvamani Sivalingam", color: "blue", content: ["Starting her career as a primary school teacher, she embarked on a journey fueled by her unwavering belief that dreams could come true through hard work and persistence.", "With a strong determination to excel, she dedicated herself to her profession and embraced every opportunity for growth.", "Her passion for education and her firm belief in the transformative power of knowledge propelled her forward.", "Through her dedication and commitment, she not only became an exceptional educationalist but also a role model for her students.", "Her relentless pursuit of excellence led her to surpass expectations and achieve remarkable success in her career.", "Her ability to inspire and motivate her students created an environment where dreams were nurtured and aspirations were realized.", "Her journey serves as a testament to the power of perseverance and the impact that one individual can have on the lives of many.", "Through her hard work and determination, she has become a shining example of what can be accomplished when one believes in their dreams and is willing to put in the effort to make them a reality.",], }, { image: img3, role: "Vice Chairman", degree: "", name: "Mr. S. ArulMozhiVarman", color: "emerald", content: ["The trailblazer, who commenced his journey by achieving the highest medical cut-off in Tamil Nadu, embarked on a promising path pursuing a Bachelor of Medicine driven by a passion for healing and excellence.", "He made a pivotal decision that altered the course of his journey, choosing to step away from his MBBS pursuit and turning towards the family legacy institution with a vision to innovate and elevate.", "The transition from medicine to education was seamless, as he brought a unique perspective to the educational sector, aiming to integrate knowledge and experience for a holistic approach.", "Upon joining the family business, he infused fresh energy and a forward-thinking mindset.", "Once a topper, he now channels his passion into steering the institution toward new heights of success, becoming a catalyst for innovation and transformation.",], }, { image: img4, role: "Junior Correspondent", degree: "", name: "Dr. Snekhanandhini Sivalingam", color: "purple", content: ["Step into a world of educational excellence at Adharsh Vidhyalaya Educational Institutions, guided by our distinguished Junior Correspondent.", "Drawing on a rich background in MBBS, she has chosen to channel her expertise into cultivating young minds, with a particular focus on the playgroup level.", "At Adharsh Vidhyalaya, we stand firm in the belief that education is a dynamic, personalized experience, far from the confines of a one-size-fits-all approach.", "Within our institution, we celebrate the uniqueness of each child, fostering an environment that prizes curiosity and equips them for the challenges of our ever-evolving world.", "Our Junior Correspondent holds a strong conviction that education is a transformative force capable of shaping not just individuals but the destinies of entire families.", "We ardently uphold the philosophy that every child is distinctive, and our commitment lies in unveiling their utmost potential.", "Embark on a journey of holistic education with us at Adharsh Vidhyalaya, where we are dedicated to unlocking the brilliance within every child who becomes part of our educational family.", "Join us in sculpting a future where each student thrives and excels.",], },];
  const founder = leaders[0];
  const executives = leaders.slice(1);

  return (
    <section className="bg-[#FCFCFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
            <Sparkles size={16} />
            Leadership Team
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Visionaries Behind
            <span className="block text-blue-600">
              Educational Excellence
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Meet the distinguished leaders whose dedication,
            innovation, and commitment continue to shape future
            generations through quality education.
          </p>
        </div>

        {/* FOUNDER SPOTLIGHT */}
        <div className="mt-14 rounded-[32px] bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full min-h-[420px] object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-8 lg:p-10">
              <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                {founder.role}
              </span>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">
                {founder.name}
              </h2>

              <p className="mt-2 text-slate-500">
                {founder.degree}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-2 rounded-full bg-white border text-sm">
                  45+ Years Leadership
                </span>

                <span className="px-3 py-2 rounded-full bg-white border text-sm">
                  Educational Visionary
                </span>

                <span className="px-3 py-2 rounded-full bg-white border text-sm">
                  Institution Founder
                </span>
              </div>

              <div className="mt-6 space-y-4 text-slate-600 leading-8">
                {founder.content
                  .slice(
                    0,
                    expanded["founder"]
                      ? founder.content.length
                      : 3
                  )
                  .map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
              </div>

              <button
                onClick={() =>
                  setExpanded((prev) => ({
                    ...prev,
                    founder: !prev.founder,
                  }))
                }
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold"
              >
                {expanded["founder"]
                  ? "Show Less"
                  : "Read Full Story"}

                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* EXECUTIVE TEAM */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Leadership Team
              </h2>

              <p className="text-slate-500 mt-2">
                Dedicated leaders driving innovation and
                excellence.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {executives.map((leader, index) => (
              <div
                key={index}
                className="group bg-white rounded-[30px] border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-sm font-medium">
                      {leader.role}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900">
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
                        <p key={i}>{paragraph}</p>
                      ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-5 text-blue-600 font-semibold inline-flex items-center gap-2"
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

        {/* VISION BANNER */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-[36px] bg-slate-900 text-white p-8 md:p-12">
            <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

            <Quote
              size={40}
              className="text-blue-400"
            />

            <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
              Shaping Future Generations Through
              Knowledge, Leadership & Innovation
            </h2>

            <p className="mt-6 text-slate-300 max-w-3xl text-lg leading-8">
              Adharsh Vidhyalaya Educational Institutions
              continues its legacy of excellence by nurturing
              students with knowledge, values, confidence,
              leadership, and lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

