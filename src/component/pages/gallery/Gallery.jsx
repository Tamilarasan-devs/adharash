import React from "react";

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      category: "Classroom",
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      category: "Cultural Fest",
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      category: "Sports Day",
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      category: "Graduation",
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      category: "Team Activity",
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      category: "Science Fair",
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Tech Lab",
    },
    {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      category: "Assembly",
    },
    {
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
      category: "Art Class",
    },
    {
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136",
      category: "Library",
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      category: "Seminar",
    },
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      category: "School Ground",
    },
    {
      url: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
      category: "Classroom",
    },
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
      category: "Library",
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      category: "Cultural Fest",
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      category: "Sports Day",
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}

        <div className="text-center mb-16">

          <h1 className="mt-6 text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Moments of
            <span
              className="block bg-gradient-to-r
              from-blue-700 via-blue-500 to-sky-400
              bg-clip-text text-transparent"
            >
              Excellence
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
            Explore unforgettable memories from academics, cultural
            celebrations, sports achievements, student leadership activities,
            and the vibrant learning environment at our school.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-700 to-sky-400" />
          </div>
        </div>

        {/* Gallery */}

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-6 group overflow-hidden
              rounded-3xl bg-white shadow-md
              hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`${img.url}?auto=format&fit=crop&w=800&q=80`}
                  alt={img.category}
                  className="w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t
                  from-blue-950/80 via-blue-900/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className="bg-white/95 backdrop-blur-md
                    text-blue-700 px-3 py-1 rounded-full
                    text-xs font-semibold"
                  >
                    {img.category}
                  </span>
                </div>

                <div
                  className="absolute bottom-4 left-4 right-4
                  opacity-0 group-hover:opacity-100
                  transition duration-500"
                >
                  <h3 className="text-white font-semibold">
                    {img.category}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}