import React from "react";
import logo from "../../assets/img/logo.avif";
import {
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    ChevronRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

const campuses = [
    {
        region: "Tiruppur",
        accent: "from-blue-600 to-sky-500",
        dot: "bg-blue-400",
        institutions: [
            {
                name: "Adharsh Vidhyalaya Public School",
                address: "Adharsh Nagar, K.S.N Puram (PO), Palladam (TK), Tiruppur",
                pin: "641 662",
                phones: ["7373 - 11 - 3333"],
            },
            {
                name: "Adharsh Vidhyalaya Matric Hr Sec School",
                address: "Adharsh Nagar, K.S.N Puram (PO), Palladam (TK), Tiruppur",
                pin: "641 662",
                phones: ["04255 - 278 222", "04255 - 278 333"],
            },
        ],
    },
    {
        region: "Erode (Anthiyur)",
        accent: "from-indigo-600 to-blue-500",
        dot: "bg-indigo-400",
        institutions: [
            {
                name: "Adharsh Vidhyalaya Public School",
                address: "Adharsh Nagar, Bhavani (TK), Erode",
                pin: "638 312",
                phones: ["+91 75987 80009"],
            },
            {
                name: "Adharsh Vidhyalaya Matric Hr Sec School",
                address: "Adharsh Nagar, Bhavani (TK), Erode",
                pin: "638 312",
                phones: ["+91 75987 80006"],
            },
            {
                name: "Adharsh Vidhyalaya College of Arts & Science for Women",
                address: "Adharsh Nagar, Bhavani (TK), Erode",
                pin: "638 312",
                phones: ["+91 75987 80010"],
            },
            {
                name: "VRUKSHA Adharsh Vidhyalaya Play School",
                address: "KS Complex, Bhavani Main Road, beside Karur Vysya Bank, Anthiyur",
                pin: "638 501",
                phones: ["+91 94424 12394"],
            },
        ],
    },
];

const quickLinks = ["Home", "About Us", "CBSE", "Matriculation", "Gallery", "Highlights", "Alumni"];
const infoLinks = ["Admissions Open", "Academic Calendar", "Events & Highlights", "Careers"];

const socials = [
    { label: "Facebook", icon: FaFacebookF, href: "#" },
    { label: "Instagram", icon: FaInstagram, href: "#" },
    { label: "YouTube", icon: FaYoutube, href: "#" },
    { label: "X (Twitter)", icon: FaTwitter, href: "#" },
];
export default function Footer() {
    return (
        <footer className="bg-[#070C18] text-white">

            {/* ── Top accent bar ─────────────────────────────────────── */}
            <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

            {/* ── Campus Addresses Section ───────────────────────────── */}
            <div className="border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-2">
                                Our Institutions
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Two cities. Six institutions.
                            </h2>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs md:text-right leading-relaxed">
                            Decades of academic excellence across Tamil Nadu.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {campuses.map((campus) => (
                            <div key={campus.region} className="space-y-4">
                                {/* Region label */}
                                <div className="flex items-center gap-2.5 mb-5">
                                    <div className={`w-2 h-2 rounded-full ${campus.dot}`} />
                                    <span className="text-white font-bold text-base tracking-wide">
                                        {campus.region}
                                    </span>
                                    <div className="flex-1 h-px bg-white/5" />
                                </div>

                                {campus.institutions.map((inst, i) => (
                                    <div
                                        key={i}
                                        className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-2xl p-5 transition-all duration-200"
                                    >
                                        <h4 className="text-white font-semibold text-sm leading-snug pr-6">
                                            {inst.name}
                                        </h4>
                                        <div className="mt-3 space-y-1.5">
                                            <div className="flex items-start gap-2 text-slate-500 text-xs">
                                                <MapPin size={11} className="mt-0.5 shrink-0 text-slate-600" />
                                                <span>{inst.address} — <span className="text-slate-400">{inst.pin}</span></span>
                                            </div>
                                            {inst.phones.map((p) => (
                                                <div key={p} className="flex items-center gap-2 text-xs">
                                                    <Phone size={11} className="shrink-0 text-sky-600" />
                                                    <a
                                                        href={`tel:${p.replace(/[\s-]/g, "")}`}
                                                        className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
                                                    >
                                                        {p}
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Main Footer Grid ───────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <img
                                src={logo}
                                alt="Adharsh Vidhyalaya logo"
                                className="h-10 w-10 rounded-xl ring-1 ring-white/10 object-cover"
                            />
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">Adharsh</p>
                                <p className="text-slate-400 text-xs leading-tight">Vidhyalaya</p>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Empowering students with quality education, discipline, and
                            excellence for a brighter future since our founding.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-2.5 mt-6">
                            {socials.map(({ label, icon: Icon, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="group flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors duration-150"
                                    >
                                        <ChevronRight
                                            size={12}
                                            className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-sky-400"
                                        />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">
                            Information
                        </h3>
                        <ul className="space-y-2">
                            {infoLinks.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="group flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors duration-150"
                                    >
                                        <ChevronRight
                                            size={12}
                                            className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-sky-400"
                                        />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Summary */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-1.5">
                                    Palladam Campus
                                </p>
                                <div className="space-y-1">
                                    {["04255 - 278 222 / 333", "7373 - 11 - 2222 / 3333"].map((p) => (
                                        <a
                                            key={p}
                                            href={`tel:${p.replace(/[\s-/]/g, "")}`}
                                            className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-xs transition-colors"
                                        >
                                            <Phone size={11} className="text-slate-600" />
                                            {p}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-1.5">
                                    Anthiyur Campus
                                </p>
                                <div className="space-y-1">
                                    {["+91 75987 80006", "+91 75987 80005"].map((p) => (
                                        <a
                                            key={p}
                                            href={`tel:${p.replace(/[\s]/g, "")}`}
                                            className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-xs transition-colors"
                                        >
                                            <Phone size={11} className="text-slate-600" />
                                            {p}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={11} className="text-slate-600 shrink-0" />
                                <a
                                    href="mailto:info.adharshvidhyalaya@gmail.com"
                                    className="hover:text-sky-400 transition-colors break-all"
                                >
                                    info.adharshvidhyalaya@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ────────────────────────────────────────── */}
            <div className="border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-slate-600 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Adharsh Vidhyalaya Educational Institutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {["Privacy Policy", "Terms of Use", "Sitemap"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}