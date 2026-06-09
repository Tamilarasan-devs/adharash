import React from "react";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
            Inspiration
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Words That Inspire Learning
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-5"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* English Quote */}
          <div className="relative bg-white rounded-3xl p-10 shadow-lg border border-slate-100 overflow-hidden">
            <div className="absolute top-6 right-6 text-blue-100">
              <QuoteIcon size={70} />
            </div>

            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed">
              “The more that you read, the more things you will know,
              the more that you learn, the more places you'll go.”
            </p>

            <div className="mt-8">
              <h3 className="text-blue-600 font-bold text-xl">
                — Dr. Seuss
              </h3>
            </div>
          </div>

          {/* Tamil Quote */}
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 shadow-xl text-white overflow-hidden">
            <div className="absolute top-6 right-6 text-white/20">
              <QuoteIcon size={70} />
            </div>

            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              திருக்குறள்
            </span>

            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              ஒருமைக்கண் தான்கற்ற கல்வி ஒருவற்கு
              எழுமையும் ஏமாப்பு உடைத்து.
            </p>

            <div className="mt-8">
              <h3 className="font-bold text-xl">
                — திருவள்ளுவர்
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed">
            Education is not merely the acquisition of knowledge, but the
            foundation for wisdom, character, and lifelong success.
          </p>
        </div>
      </div>
    </section>
  );
}