import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Building2,
    Send,
    ChevronRight,
    CheckCircle2,
} from "lucide-react";

const campuses = [
    {
        name: "Anthiyur Campus",
        phone: "+91 75987 80005",
        location: "Anthiyur, Erode District, Tamil Nadu",
        mapSrc:
            "https://maps.google.com/maps?q=Anthiyur%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed",
        tag: "Est. Campus",
    },
    {
        name: "Palladam Campus",
        phone: "+91 73731 13333",
        location: "Palladam, Tiruppur District, Tamil Nadu",
        mapSrc:
            "https://maps.google.com/maps?q=Palladam%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed",
        tag: "New Campus",
    },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        campus: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="relative bg-white overflow-hidden">

            {/* ── Hero Banner ──────────────────────────────────────────── */}
            <div className="relative bg-[#0B1120] overflow-hidden">
                {/* Subtle grid texture */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                {/* Soft glow blobs */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-40 right-10 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                            Get in Touch
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                            We'd love to{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                                hear
                            </span>{" "}
                            from you
                        </h1>
                        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl">
                            Reach out for admissions, academic enquiries, or campus visits.
                            Our team responds within one business day.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-6">
                            {[
                                { icon: Mail, label: "info.adharshvidhyalaya@gmail.com" },
                                { icon: Clock, label: "Mon–Sat · 8 AM–5 PM" },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2.5 text-slate-300 text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                                        <Icon size={15} />
                                    </div>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Campus Cards + Form ──────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-5 gap-10 items-start">

                    {/* Left — campus info */}
                    <div className="lg:col-span-2 space-y-5">
                        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                            Our Campuses
                        </p>

                        {campuses.map((campus) => (
                            <div
                                key={campus.name}
                                className="group relative bg-white rounded-2xl border border-slate-100 p-6 hover:border-blue-100 hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.12)] transition-all duration-300"
                            >
                                <div className="absolute top-5 right-5 text-[10px] font-bold tracking-wider text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full">
                                    {campus.tag}
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                                        <Building2 size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-base">
                                            {campus.name}
                                        </h3>
                                        <div className="mt-2 flex items-start gap-1.5 text-slate-500 text-sm">
                                            <MapPin size={13} className="mt-0.5 shrink-0 text-slate-400" />
                                            {campus.location}
                                        </div>
                                        <a
                                            href={`tel:${campus.phone.replace(/\s/g, "")}`}
                                            className="mt-2 flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                                        >
                                            <Phone size={13} />
                                            {campus.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Quick links */}
                        <div className="bg-gradient-to-br from-[#0B1120] to-[#0d1d3a] rounded-2xl p-6 space-y-4">
                            <p className="text-white font-semibold text-sm">Quick links</p>
                            {["Admissions", "Academic Calendar", "Student Portal", "Fee Structure"].map((link) => (
                                <button
                                    key={link}
                                    className="w-full flex items-center justify-between text-slate-400 hover:text-sky-400 text-sm py-2 border-b border-white/5 last:border-0 transition-colors group"
                                >
                                    {link}
                                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="lg:col-span-3">
                        <div className="relative bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* top accent stripe */}
                            <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400" />

                            <div className="p-8 md:p-10">
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                                            <CheckCircle2 size={32} className="text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">Message sent!</h3>
                                        <p className="text-slate-500 mt-2 max-w-sm">
                                            Thank you for reaching out. We'll get back to you within one
                                            business day.
                                        </p>
                                        <button
                                            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", campus: "", message: "" }); }}
                                            className="mt-8 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h2 className="text-3xl font-bold text-slate-900">
                                                Send us a message
                                            </h2>
                                            <p className="text-slate-500 mt-1.5 text-sm">
                                                Fill in your details and we'll be in touch shortly.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        placeholder="e.g. Arjun Kumar"
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        placeholder="you@example.com"
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 XXXXX XXXXX"
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                                                        Campus
                                                    </label>
                                                    <select
                                                        name="campus"
                                                        value={form.campus}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all appearance-none"
                                                    >
                                                        <option value="">Select a campus</option>
                                                        <option>Anthiyur Campus</option>
                                                        <option>Palladam Campus</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    placeholder="Tell us what you'd like to know..."
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                                            >
                                                <Send size={16} />
                                                Send Message
                                            </button>

                                            <p className="text-center text-xs text-slate-400">
                                                We respect your privacy. Your details are never shared.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Campus Locations ─────────────────────────────────────── */}
            <div className="bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    {/* Section header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
                                Campus Locations
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Visit us in person
                            </h2>
                        </div>
                        <p className="text-slate-500 max-w-sm md:text-right text-sm leading-relaxed">
                            Both campuses are open Monday through Saturday, 8 AM to 5 PM.
                            Walk-ins welcome.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {campuses.map((campus) => (
                            <div
                                key={campus.name}
                                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Map */}
                                <div className="relative h-[260px]">
                                    <iframe
                                        title={campus.name}
                                        src={campus.mapSrc}
                                        className="w-full h-full"
                                        loading="lazy"
                                    />
                                    {/* Overlay tag */}
                                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur rounded-lg text-xs font-bold text-slate-800 shadow-sm border border-slate-200">
                                        {campus.tag}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {campus.name}
                                    </h3>

                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center gap-2.5 text-slate-600 text-sm">
                                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                                                <MapPin size={13} />
                                            </div>
                                            {campus.location}
                                        </div>
                                        <div className="flex items-center gap-2.5 text-slate-600 text-sm">
                                            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                                                <Phone size={13} />
                                            </div>
                                            <a
                                                href={`tel:${campus.phone.replace(/\s/g, "")}`}
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                {campus.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-slate-600 text-sm">
                                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                                                <Mail size={13} />
                                            </div>
                                            info.adharshvidhyalaya@gmail.com
                                        </div>
                                    </div>

                                    <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                            <Clock size={12} />
                                            Mon–Sat · 8:00 AM – 5:00 PM
                                        </div>
                                        <a
                                            href={`https://maps.google.com/?q=${encodeURIComponent(campus.location)}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                                        >
                                            Get directions
                                            <ChevronRight size={12} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}