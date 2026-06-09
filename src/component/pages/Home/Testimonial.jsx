import React from "react";
import { Quote } from "lucide-react";

export default function Testimonial() {
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
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                        Testimonials
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
                        What Our Alumni Say
                    </h2>

                    <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-lg">
                        The success of our students reflects the quality of education,
                        values, and opportunities we provide.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="
                relative
                bg-white
                rounded-3xl
                p-8 md:p-10
                shadow-sm
                border
                border-slate-100
                hover:shadow-xl
                transition-all
                duration-300
              "
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-blue-100">
                                <Quote size={70} strokeWidth={1.5} />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-slate-700 text-lg leading-relaxed pr-10">
                                {item.message}
                            </p>

                            {/* User Info */}
                            <div className="flex items-center mt-8">
                                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                                    {item.name.charAt(0)}
                                </div>

                                <div className="ml-4">
                                    <h3 className="font-bold text-slate-900">
                                        {item.name}
                                    </h3>

                                    <p className="text-slate-500 text-sm">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    {[
                        { number: "60K+", label: "Alumni" },
                        { number: "90%", label: "Success Rate" },
                        { number: "500+", label: "Faculty" },
                        { number: "6+", label: "Institutions" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100"
                        >
                            <h3 className="text-4xl font-bold text-blue-600">
                                {item.number}
                            </h3>

                            <p className="mt-2 text-slate-600">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}