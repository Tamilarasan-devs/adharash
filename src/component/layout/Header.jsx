import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import logo from "../../assets/img/logo.avif";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const headerRef = useRef(null);

    // Scroll detection for sticky effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setMobileAccordion(null);
    }, [location.pathname]);

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navItems = [
        { label: "Home", path: "/" },
        {
            label: "About",
            path: "/about",
            dropdown: [
                { label: "Curriculum", path: "/about/curriculum" },
                { label: "Founders", path: "/about/founders" },
            ],
        },
        {
            label: "CBSE",
            path: "/cbse",
            dropdown: [
                { label: "AVPS Anthiyur", path: "/cbse/avps-anthiyur" },
                { label: "AVPS Palladam", path: "/cbse/avps-palladam" },
                { label: "Vruksha AVOS", path: "/cbse/vruksha-avos" },
            ],
        },
        {
            label: "Matriculation",
            path: "/matriculation",
            dropdown: [
                { label: "Adharsh Vidhyalaya Hr Sec School, Palladam", path: "/matriculation/palladam" },
                { label: "Adharsh Vidhyalaya Hr Sec School, Anthiyur", path: "/matriculation/anthiyur" },
                { label: "Adharsh Vidyalaya Arts & Science College", path: "/matriculation/arts-college" },
                { label: "Ideal Matric Hr Sec School", path: "/matriculation/ideal-matric" },
            ],
        },
        { label: "Highlights", path: "/highlight" },
        { label: "Gallery", path: "/gallery" },
        { label: "Alumni", path: "/alumini" },
        { label: "Contact", path: "/contact" },
    ];

    const isActive = (path) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    const toggleAccordion = (label) => {
        setMobileAccordion(mobileAccordion === label ? null : label);
    };

    return (
        <header ref={headerRef} className="sticky top-0 z-50">
            {/* Top Bar — hidden on mobile */}
            <div className="hidden lg:block bg-slate-900 text-slate-300">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-xs">
                    <div className="flex items-center gap-6">
                        <a href="tel:+914256123456" className="flex items-center gap-1.5 hover:text-white transition no-underline text-slate-300">
                            <Phone size={12} />
                            <span>+91 4256 123456</span>
                        </a>
                        <a href="mailto:info@adharshvidhyalaya.edu.in" className="flex items-center gap-1.5 hover:text-white transition no-underline text-slate-300">
                            <Mail size={12} />
                            <span>info@adharshvidhyalaya.edu.in</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>Anthiyur • Palladam</span>
                        <Link
                            to="/contact"
                            className="px-3 py-1 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition no-underline text-xs"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`
                    bg-white/95 backdrop-blur-lg border-b transition-all duration-300
                    ${scrolled ? "border-slate-200 shadow-lg" : "border-transparent shadow-sm"}
                `}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 shrink-0 no-underline group">
                            <div className="relative">
                                <img
                                    src={logo}
                                    alt="Adharsh Vidhyalaya"
                                    className="h-11 w-11 lg:h-13 lg:w-13 rounded-full ring-2 ring-blue-500/30 shadow-md group-hover:ring-blue-500/60 transition-all duration-300"
                                />
                                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                            </div>
                            <div className="leading-tight">
                                <h1 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
                                    Adharsh Vidhyalaya
                                </h1>
                                <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide">
                                    Educational Institutions
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div key={item.label} className="relative group">
                                    {/* Nav Link */}
                                    <Link
                                        to={item.path}
                                        className={`
                                            flex items-center gap-1 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-200
                                            ${isActive(item.path)
                                                ? "text-blue-700 bg-blue-50"
                                                : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                                            }
                                        `}
                                    >
                                        {item.label}
                                        {item.dropdown && (
                                            <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-transform duration-300 group-hover:rotate-180" />
                                        )}
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {item.dropdown && (
                                        <div className="
                                            absolute left-1/2 -translate-x-1/2 top-full pt-2
                                            invisible opacity-0 translate-y-2
                                            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                                            transition-all duration-200 ease-out z-50
                                        ">
                                            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden min-w-[280px]">
                                                {/* Dropdown Arrow */}
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45"></div>

                                                <div className="py-2 relative">
                                                    {item.dropdown.map((sub, i) => (
                                                        <Link
                                                            key={sub.label}
                                                            to={sub.path}
                                                            className={`
                                                                flex items-center gap-3 px-5 py-3 text-sm no-underline transition-all duration-150
                                                                ${isActive(sub.path)
                                                                    ? "text-blue-700 bg-blue-50 font-medium"
                                                                    : "text-slate-600 hover:text-blue-700 hover:bg-slate-50"
                                                                }
                                                            `}
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/40 shrink-0"></span>
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                to="/contact"
                                className="px-5 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 no-underline"
                            >
                                Admissions Open
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-5 h-5">
                                <span className={`absolute left-0 w-5 h-[2px] bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? "top-[9px] rotate-45" : "top-1"}`}></span>
                                <span className={`absolute left-0 top-[9px] w-5 h-[2px] bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"}`}></span>
                                <span className={`absolute left-0 w-5 h-[2px] bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? "top-[9px] -rotate-45" : "top-[17px]"}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                        lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                        ${mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"}
                    `}
                >
                    <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-white">

                        {/* Mobile Nav Items */}
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    {/* Main Item */}
                                    <div className="flex items-center">
                                        <Link
                                            to={item.path}
                                            onClick={() => !item.dropdown && setMobileOpen(false)}
                                            className={`
                                                flex-1 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all
                                                ${isActive(item.path)
                                                    ? "text-blue-700 bg-blue-50"
                                                    : "text-slate-700 hover:bg-slate-50"
                                                }
                                            `}
                                        >
                                            {item.label}
                                        </Link>

                                        {item.dropdown && (
                                            <button
                                                onClick={() => toggleAccordion(item.label)}
                                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition"
                                            >
                                                <ChevronDown
                                                    size={16}
                                                    className={`text-slate-400 transition-transform duration-300 ${
                                                        mobileAccordion === item.label ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Sub-menu Accordion */}
                                    {item.dropdown && (
                                        <div
                                            className={`
                                                overflow-hidden transition-all duration-300 ease-in-out
                                                ${mobileAccordion === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            <div className="ml-4 pl-4 border-l-2 border-blue-100 space-y-0.5 py-1">
                                                {item.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        to={sub.path}
                                                        onClick={() => setMobileOpen(false)}
                                                        className={`
                                                            block px-4 py-2.5 rounded-lg text-sm no-underline transition-all
                                                            ${isActive(sub.path)
                                                                ? "text-blue-700 bg-blue-50 font-medium"
                                                                : "text-slate-600 hover:text-blue-700 hover:bg-slate-50"
                                                            }
                                                        `}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                            <Link
                                to="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm hover:shadow-lg transition-all no-underline"
                            >
                                Admissions Open
                            </Link>

                            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                                <a href="tel:+914256123456" className="flex items-center gap-1 no-underline text-slate-500 hover:text-blue-600 transition">
                                    <Phone size={12} />
                                    <span>Call Us</span>
                                </a>
                                <span>•</span>
                                <a href="mailto:info@adharshvidhyalaya.edu.in" className="flex items-center gap-1 no-underline text-slate-500 hover:text-blue-600 transition">
                                    <Mail size={12} />
                                    <span>Email Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}