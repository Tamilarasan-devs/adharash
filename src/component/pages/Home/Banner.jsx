import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bnr1 from "../../../assets/img/banner/bnr1.avif";
import bnr2 from "../../../assets/img/banner/bnr2.avif";
import bnr3 from "../../../assets/img/banner/bnr3.avif";
import bnr4 from "../../../assets/img/banner/bnr4.avif";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Banner() {
    const banners = [bnr1, bnr2, bnr3, bnr4];

    const navigation =useNavigate()

    return (
        <section className="relative w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                speed={1200}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                pagination={{
                    clickable: true,
                }}
                className="bannerSwiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            {/* Banner Image */}
                            <img
                                src={banner}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-[280px] sm:h-[450px] md:h-[600px] lg:h-[700px] object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center">
                                <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
                                    <div className="max-w-2xl">
                                        <h1
                                            className="
                                                text-white
                                                font-bold
                                                leading-tight
                                                text-2xl
                                                sm:text-4xl
                                                md:text-5xl
                                                lg:text-6xl
                                                xl:text-7xl
                                            "
                                        >
                                            Excellence in <br />
                                            Education
                                        </h1>

                                        <p
                                            className="
                                                mt-3
                                                md:mt-5
                                                text-gray-200
                                                text-sm
                                                sm:text-base
                                                md:text-lg
                                                lg:text-xl
                                                max-w-xl
                                            "
                                        >
                                            Empowering future leaders through
                                            quality education, innovation, and
                                            lifelong learning.
                                        </p>

                                        <button
                                            className="
                                                mt-5
                                                md:mt-8
                                                px-5
                                                py-2.5
                                                md:px-7
                                                md:py-3.5
                                                bg-amber-500
                                                hover:bg-amber-600
                                                text-white
                                                rounded-full
                                                font-medium
                                                text-sm
                                                md:text-base
                                                transition-all
                                                duration-300
                                                hover:scale-105
                                                shadow-xl
                                            "
                                            onClick={()=>navigation("/about")}
                                        >
                                            Explore More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Previous Button */}
            <button
                className="
                    custom-prev
                    absolute
                    left-3
                    md:left-8
                    top-1/2
                    -translate-y-1/2
                    z-20
                    w-10
                    h-10
                    md:w-14
                    md:h-14
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/20
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:bg-amber-500
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-xl
                "
            >
                <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
            </button>

            {/* Next Button */}
            <button
                className="
                    custom-next
                    absolute
                    right-3
                    md:right-8
                    top-1/2
                    -translate-y-1/2
                    z-20
                    w-10
                    h-10
                    md:w-14
                    md:h-14
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/20
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:bg-amber-500
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-xl
                "
            >
                <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
            </button>
        </section>
    );
}