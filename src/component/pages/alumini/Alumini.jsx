import React from "react";
import img1 from '../../../assets/img/alumini/alumini1.avif'
import img2 from '../../../assets/img/alumini/alumini2.avif'
import img3 from '../../../assets/img/alumini/alumini3.avif'
import img4 from '../../../assets/img/alumini/alumini4.avif'
import img5 from '../../../assets/img/alumini/alumini5.avif'
import img6 from '../../../assets/img/alumini/alumini6.avif'
import img7 from '../../../assets/img/alumini/alumini7.avif'
import img8 from '../../../assets/img/alumini/alumini8.avif'
import img9 from '../../../assets/img/alumini/alumini9.avif'

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

    const GoldDivider = () => (
        <div className="flex items-center justify-center gap-2.5 my-10">
            <span className="h-px w-10 bg-amber-500 opacity-50 block" />
            <span className="w-2 h-2 bg-amber-500 rotate-45 block" />
            <span className="h-px w-10 bg-amber-500 opacity-50 block" />
        </div>
    );

    return (
        <section className="bg-[#FAFAF7] py-24 px-6 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="tracking-[.2em] text-[11px] font-medium uppercase text-amber-600">
                        Success Stories
                    </p>

                    <h2
                        className="mt-3 text-5xl md:text-6xl font-light text-[#1C1008] leading-tight tracking-tight"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                        Distinguished{" "}
                        <em className="text-amber-600" style={{ fontStyle: "italic" }}>Alumni</em>
                    </h2>

                    <GoldDivider />

                    <p className="text-[14.5px] text-stone-500 font-light leading-relaxed max-w-xl mx-auto">
                        Celebrating the achievements of our alumni who continue to inspire
                        future generations through excellence and leadership.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-[#F0EBE0] rounded-[20px] overflow-hidden
                                       hover:-translate-y-1.5 hover:border-amber-400
                                       hover:shadow-[0_12px_40px_rgba(217,119,6,.10)]
                                       transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="h-100 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-top
                                               group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Fade out bottom of image into white card */}
                                <div className="absolute bottom-0 left-0 right-0 h-16
                                                bg-gradient-to-t from-white to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-6 pt-2">
                                {/* Role badge */}
                                <span
                                    className="inline-block bg-amber-50 border border-amber-200
                                               text-amber-900 text-[11px] font-medium tracking-wide
                                               px-3 py-1 rounded-full mb-3"
                                >
                                    {item.role}
                                </span>

                                <h3
                                    className="text-[21px] font-semibold text-[#1C1008] leading-tight mb-1"
                                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                                >
                                    {item.name}
                                </h3>

                                {/* Large decorative quote mark */}
                                <p
                                    className="text-amber-400 text-[52px] font-light leading-none mb-1"
                                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                                >
                                    "
                                </p>

                                <p className="text-[13.5px] text-stone-500 font-light leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Footer rule */}
                                <div className="flex items-center gap-2 mt-4">
                                    <span className="h-[1.5px] w-5 bg-amber-500 block" />
                                    <span className="text-[11px] text-amber-700 tracking-[.12em] uppercase font-medium">
                                        Alumni Voice
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <GoldDivider />

                {/* CTA Banner */}
                <div className="bg-[#FFF8EE] border border-amber-200 rounded-[24px] px-8 py-14 text-center">
                    <p className="text-[11px] tracking-[.2em] uppercase text-amber-600 font-medium">
                        Join the Legacy
                    </p>

                    <h3
                        className="mt-3 text-4xl md:text-5xl font-light text-[#1C1008] leading-tight tracking-tight"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                        Be Part of Our{" "}
                        <em className="text-amber-600">Story</em>
                    </h3>

                    <p className="mt-4 text-[14px] text-stone-500 font-light leading-relaxed max-w-md mx-auto">
                        Thousands of Adharsh alumni are shaping industries, serving society,
                        and leading with purpose around the world.
                    </p>

                    <button
                        className="mt-7 bg-amber-600 hover:bg-amber-700 text-white font-medium
                                   px-8 py-3.5 rounded-full text-[14px] transition-colors duration-200"
                    >
                        Meet All Alumni
                    </button>
                </div>

            </div>
        </section>
    );
}