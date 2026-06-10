import React from "react";
import img1 from "../../../assets/img/alumini/alumini1.avif";
import img2 from "../../../assets/img/alumini/alumini2.avif";
import img3 from "../../../assets/img/alumini/alumini3.avif";
import img4 from "../../../assets/img/alumini/alumini4.avif";
import img5 from "../../../assets/img/alumini/alumini5.avif";
import img6 from "../../../assets/img/alumini/alumini6.avif";
import img7 from "../../../assets/img/alumini/alumini7.avif";
import img8 from "../../../assets/img/alumini/alumini8.avif";
import img9 from "../../../assets/img/alumini/alumini9.avif";

export default function Alumini() {
    const data = [
        {
            name: "Viswanathan U",
            image: img1,
            role: "Joint Secretary, Govt. TN",
            desc: "Lucky to work as a Chemistry tutor from 1986–89 in ITC. A +2 student of the 1982–83 batch.",
        },
        {
            name: "S. Saravanan IAS",
            image: img2,
            role: "IAS — Sub Collector & SDM",
            desc: "Adharsh is a confluence point of excellence and achievement. Most memorable experience.",
        },
        {
            name: "Dr. S. Senthamarai",
            image: img3,
            role: "Doctor, Meenakshi Medical",
            desc: "Ideal school changed our life. Great, friendly teachers dedicated their life for students.",
        },
        {
            name: "Dr. S. Balamurugan",
            image: img4,
            role: "Head, Bariatric Surgery",
            desc: "Best school that motivated me towards the medical profession and enriched my knowledge.",
        },
        {
            name: "Karthikraja",
            image: img5,
            role: "Junior Doctor, Royal Care",
            desc: "Teachers helped me find my full potential and secure an MBBS seat.",
        },
        {
            name: "A. Gokulakrishnan",
            image: img6,
            role: "Advocate, Madras High Court",
            desc: "Mr. Sivalingam is the reason for what I am today. A mentor who shaped my entire career.",
        },
        {
            name: "Mugunthan G",
            image: img7,
            role: "Founder, Live Farm Aquaculture",
            desc: "A wonderful institution to begin your career journey with the right values and vision.",
        },
        {
            name: "Divakar",
            image: img8,
            role: "Aircraft Technician, Singapore",
            desc: "Good to grow up. Good to learn. Adharsh gave me the confidence to soar.",
        },
        {
            name: "Abinaya K",
            image: img9,
            role: "Systems Engineer, Trivandrum",
            desc: "A great learning experience with the best teachers who shaped my engineering career.",
        },
    ];

    const Divider = () => (
        <div className="flex items-center justify-center gap-3 my-10">
            <span className="h-px w-12 bg-blue-500/50 block" />
            <span className="w-2 h-2 bg-blue-500 rotate-45 block" />
            <span className="h-px w-12 bg-blue-500/50 block" />
        </div>
    );

    return (
        <section className="bg-slate-50 py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full
            bg-blue-100 text-blue-700 text-sm font-semibold"
                    >
                        Success Stories
                    </span>

                    <h2
                        className="mt-6 text-5xl md:text-7xl font-bold text-slate-900 leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Distinguished{" "}
                        <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                            Alumni
                        </span>
                    </h2>

                    <Divider />

                    <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
                        Celebrating the achievements of our alumni who continue to inspire
                        future generations through leadership, innovation, excellence, and
                        service to society.
                    </p>
                </div>

                {/* Alumni Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-slate-200 rounded-[30px]
              overflow-hidden hover:-translate-y-3 hover:border-blue-300
              hover:shadow-[0_20px_60px_rgba(37,99,235,.15)]
              transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-[430px] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-top
                  group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-7 pt-4">
                                <span
                                    className="inline-flex items-center px-3 py-1.5 rounded-full
                  bg-blue-50 border border-blue-200
                  text-blue-700 text-xs font-semibold"
                                >
                                    {item.role}
                                </span>

                                <h3
                                    className="mt-4 text-3xl font-bold text-slate-900"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    {item.name}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-sm mt-2">
                                    {item.desc}
                                </p>

                                <div className="flex items-center gap-3 mt-6">
                                    <span className="h-[2px] w-8 bg-blue-500" />

                                    <span className="text-xs text-blue-700 uppercase tracking-[0.25em] font-semibold">
                                        Alumni Voice
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Divider />

                {/* CTA Section */}
                <div
                    className="relative mt-20 overflow-hidden rounded-[40px]
          bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500
          px-8 md:px-16 py-16 text-center shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-24 -translate-y-24" />

                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl translate-x-24 translate-y-24" />

                    <div className="relative z-10">
                        <span
                            className="inline-flex items-center px-4 py-2 rounded-full
              bg-white/10 backdrop-blur-md border border-white/20
              text-white text-sm font-medium"
                        >
                            Join The Legacy
                        </span>

                        <h3
                            className="mt-6 text-4xl md:text-6xl font-bold text-white"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Be Part of Our Story
                        </h3>

                        <p className="mt-5 max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed">
                            Thousands of Adharsh alumni are shaping industries, serving
                            society, leading organizations, and creating meaningful impact
                            across the globe.
                        </p>

                        <button
                            className="mt-8 bg-white text-blue-700
              px-8 py-4 rounded-full font-semibold
              hover:bg-blue-50 hover:scale-105
              transition-all duration-300"
                        >
                            Meet All Alumni
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}