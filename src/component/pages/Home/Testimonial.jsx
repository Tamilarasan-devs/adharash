import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "ABINAYA K",
            role: "Alumni",
            message:
                "It was a great learning experience. I had the best teachers who made my life strong, confident, and happy.",
        },
        {
            name: "YUVARAJA M",
            role: "Alumni",
            message:
                "Awesome school with dedicated teachers and management. I learned many valuable lessons and developed skills that continue to help me today.",
        },
        {
            name: "PRIYA S",
            role: "Alumni",
            message:
                "The guidance and encouragement I received helped me achieve academic and personal success.",
        },
        {
            name: "ARUN KUMAR",
            role: "Alumni",
            message:
                "An inspiring environment that shaped my confidence, leadership skills, and future goals.",
        },
        {
            name: "DIVYA R",
            role: "Alumni",
            message:
                "The teachers genuinely cared about every student and motivated us to dream bigger.",
        },
        {
            name: "KARTHIK V",
            role: "Alumni",
            message:
                "The school provided excellent opportunities that prepared me for higher education.",
        },
        {
            name: "NISHA P",
            role: "Alumni",
            message:
                "I cherish the memories, friendships, and life lessons that continue to inspire me.",
        },
        {
            name: "RAHUL M",
            role: "Alumni",
            message:
                "A truly transformative experience that gave me the confidence to pursue my ambitions.",
        },
        {
            name: "SNEHA K",
            role: "Alumni",
            message:
                "The academic excellence and extracurricular activities helped me become a well-rounded individual.",
        },
        {
            name: "VIGNESH R",
            role: "Alumni",
            message:
                "Supportive mentors and a positive environment made learning enjoyable and meaningful.",
        },
        {
            name: "MEENA S",
            role: "Alumni",
            message:
                "Every teacher inspired us to believe in ourselves and strive for excellence.",
        },
        {
            name: "HARISH P",
            role: "Alumni",
            message:
                "One of the best educational experiences that shaped my career and personality.",
        },
    ];

    const firstRow = testimonials.slice(0, 6);
    const secondRow = testimonials.slice(6);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Blurs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60" />

            <div className="relative max-w-7xl mx-auto px-5 mt-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold">
                        Trusted by 60,000+ Alumni
                    </span>

                    <h2 className="mt-8 text-4xl md:text-5xl font-bold text-slate-900">
                        What Our Alumni Say
                    </h2>

                    <p className="mt-6 text-slate-600 text-lg">
                        Real stories from students whose journeys were shaped by quality
                        education, mentorship, and opportunities.
                    </p>
                </div>

                {/* First Row */}
                

                {/* Second Row */}
                <div className=" group">
                    <div className="flex gap-5 animate-marquee-reverse w-max group-hover:[animation-play-state:paused]">
                        {[...secondRow, ...secondRow].map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-4">
                    {[
                        {
                            number: "60K+",
                            label: "Alumni",
                        },
                        {
                            number: "90%",
                            label: "Success Rate",
                        },
                        {
                            number: "500+",
                            label: "Faculty",
                        },
                        {
                            number: "6+",
                            label: "Institutions",
                        },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                border
                border-slate-100
                p-6
                text-center
                shadow-lg
              "
                        >
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                {stat.number}
                            </h3>

                            <p className="mt-2 text-slate-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marqueeReverse 35s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }
      `}</style>
        </section>
    );
}

function Card({ item }) {
    return (
        <div
            className="
        w-[340px]
        flex-shrink-0
        rounded-3xl
        bg-white/80
        backdrop-blur-xl
        border
        border-slate-100
        p-6
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300 mb-4
      "
        >
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>

            <Quote
                size={32}
                className="text-blue-200 mb-3"
            />

            <p className="text-slate-700 leading-relaxed text-sm min-h-[90px]">
                {item.message}
            </p>

            <div className="flex items-center mt-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {item.name.charAt(0)}
                </div>

                <div className="ml-3">
                    <h4 className="font-semibold text-slate-900 text-sm">
                        {item.name}
                    </h4>

                    <p className="text-xs text-slate-500">
                        {item.role}
                    </p>
                </div>
            </div>
        </div>
    );
}