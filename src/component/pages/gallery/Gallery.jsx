import React from "react";

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1588072432836-e10032774350", category: "Classroom", color: "amber" },
    { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754", category: "Cultural Fest", color: "red" },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", category: "Sports Day", color: "green" },
    { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", category: "Graduation", color: "purple" },
    { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", category: "Team Activity", color: "amber" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7", category: "Science Fair", color: "blue" },
    { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", category: "Tech Lab", color: "red" },
    { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952", category: "Assembly", color: "green" },
    { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc", category: "Art Class", color: "purple" },
    { url: "https://images.unsplash.com/photo-1544717305-2782549b5136", category: "Library", color: "amber" },
    { url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", category: "Seminar", color: "blue" },
    { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b", category: "School Ground", color: "amber" },
    { url: "https://images.unsplash.com/photo-1513258496099-48168024aec0", category: "Classroom", color: "amber" },
    { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6", category: "Library", color: "green" },
    { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", category: "Cultural Fest", color: "red" },
    { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846", category: "Sports Day", color: "green" },
    { url: "https://images.unsplash.com/photo-1577896852618-ff2d4f6c9c6f", category: "Assembly", color: "amber" },
    { url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f", category: "Seminar", color: "blue" },
    { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754", category: "Cultural Fest", color: "red" },
    { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b", category: "Science Fair", color: "blue" },
  ];

  const colorMap = {
    amber: { dot: "bg-amber-500", text: "text-amber-900", tag: "bg-amber-50 border-amber-200" },
    red: { dot: "bg-red-500", text: "text-red-900", tag: "bg-red-50 border-red-200" },
    green: { dot: "bg-emerald-500", text: "text-emerald-900", tag: "bg-emerald-50 border-emerald-200" },
    purple: { dot: "bg-violet-500", text: "text-violet-900", tag: "bg-violet-50 border-violet-200" },
    blue: { dot: "bg-blue-500", text: "text-blue-900", tag: "bg-blue-50 border-blue-200" },
  };

  const GoldDivider = () => (
    <div className="flex items-center justify-center gap-2.5 my-10">
      <span className="h-px w-10 bg-amber-500 opacity-50 block" />
      <span className="text-amber-500 text-sm">✦</span>
      <span className="h-px w-5 bg-amber-500 opacity-40 block" />
      <span className="text-amber-500 text-xs">◆</span>
      <span className="h-px w-5 bg-amber-500 opacity-40 block" />
      <span className="text-amber-500 text-sm">✦</span>
      <span className="h-px w-10 bg-amber-500 opacity-50 block" />
    </div>
  );

  return (
    <section className="bg-[#FDFAF4] min-h-screen py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-800
                           text-[11px] font-medium tracking-[.14em] uppercase px-4 py-1.5 rounded-full">
            School Gallery
          </span>

          <h1
            className="mt-4 text-5xl md:text-6xl font-light text-[#1C1008] leading-tight tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Capturing{" "}
            <em className="text-amber-600" style={{ fontStyle: "italic" }}>Moments</em>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-[14.5px] text-stone-500 font-light leading-relaxed">
            Explore memorable moments from academics, cultural festivals, sports days,
            and vibrant student life across our campuses.
          </p>

          <GoldDivider />
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
          {images.map((img, index) => {
            const c = colorMap[img.color];
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-[#FFF8EE]
                           border border-amber-100 break-inside-avoid mb-4
                           hover:border-amber-300 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={`${img.url}?auto=format&fit=crop&w=600&q=80`}
                    alt={img.category}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="px-3.5 py-2.5 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                  <span className={`text-[11px] font-medium tracking-wide ${c.text}`}>
                    {img.category}
                  </span>
                  <span className="text-[11px] text-stone-400 ml-auto">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <GoldDivider />

        {/* Bottom CTA */}
        <div className="bg-[#FFF8EE] border border-amber-200/60 rounded-[32px] px-8 py-14 text-center">
          <p className="text-[11px] tracking-[.2em] uppercase text-amber-600 font-medium">
            Our Story in Frames
          </p>

          <h2
            className="mt-3 text-4xl md:text-5xl font-light text-[#1C1008] leading-tight tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Building Memories{" "}
            <em className="text-amber-600">Together</em>
          </h2>

          <p className="mt-4 text-[14.5px] text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
            Every photograph reflects our commitment to excellence, teamwork, creativity,
            and the rich cultural heritage we celebrate every day at Adharsh Vidhyalaya.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium
                               px-7 py-3.5 rounded-full text-[14px] transition-colors duration-200">
              View More Activities
            </button>
            <button className="bg-transparent border-[1.5px] border-amber-500 text-amber-700
                               hover:bg-amber-50 font-medium px-7 py-3.5 rounded-full text-[14px] transition-colors duration-200">
              Explore by Category
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}