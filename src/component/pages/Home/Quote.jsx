import React from "react";
import { Quote as QuoteIcon } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-white mt-10">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-100/30 blur-[120px]" />

        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-sky-100/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
            Inspiration
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            Words That Shape
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Lifelong Learning
            </span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">
            Education empowers individuals to discover opportunities,
            unlock potential, and create meaningful impact for generations.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-28 grid lg:grid-cols-12 gap-16 items-center">

          {/* English Quote */}
          <div className="lg:col-span-7">

            <div className="relative">

              <QuoteIcon
                size={120}
                strokeWidth={1}
                className="text-blue-100"
              />

              <blockquote className="mt-6 text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.2] tracking-tight text-slate-900">
                The more that you read,
                <br />
                the more things you will know.
                <br />
                The more that you learn,
                <br />
                the more places you'll go.
              </blockquote>

              <div className="mt-12 flex items-center gap-5">

                <div className="h-[2px] w-14 bg-gradient-to-r from-blue-600 to-indigo-600" />

                <div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    Dr. Seuss
                  </h3>

                  <p className="text-slate-500">
                    Author & Educator
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Tamil Kural */}
          <div className="lg:col-span-5">

            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 p-10 md:p-14">

              {/* Glow Effects */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

              <div className="relative z-10">

                {/* Label */}
                <div className="flex items-center gap-4">

                  <div className="h-px w-12 bg-blue-400" />

                  <span className="text-xs uppercase tracking-[0.35em] text-blue-300 font-semibold">
                    திருக்குறள் • 398
                  </span>

                </div>

                {/* Tamil Quote */}
                <div className="mt-10">

                  <p
                    className="
                      text-[34px]
                      md:text-[42px]
                      text-white
                      font-medium
                      leading-[1.4]
                      tracking-tight
                    "
                    style={{
                      fontFamily: "'Noto Serif Tamil', serif",
                    }}
                  >
                    ஒருமைக்கண் தான்கற்ற கல்வி ஒருவற்கு
                    <br />
                    எழுமையும் ஏமாப்பு உடைத்து
                  </p>

                </div>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-gradient-to-r from-white/20 via-blue-400/40 to-transparent" />

                {/* Author */}
                <div className="mt-8 flex items-end justify-between">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      திருவள்ளுவர்
                    </h3>

                    <p className="mt-3 text-white/60 leading-relaxed">
                      Knowledge learned with complete focus remains
                      an enduring wealth throughout life.
                    </p>
                  </div>

                  <span className="text-7xl leading-none text-white/10">
                    ”
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-14 mb-10">

          <div className="max-w-5xl mx-auto text-center">

            <div className="mx-auto mb-10 h-px w-32 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

            <p className="text-2xl md:text-3xl leading-relaxed font-light text-slate-700">
              Education is not merely the acquisition of knowledge,
              but the cultivation of wisdom, character,
              and the confidence to create a meaningful future.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}