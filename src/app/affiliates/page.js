'use client';

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      {/* Title centered above image and text */}
      <div className="text-center mb-16">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500">
          Our Affiliates
        </h1>
      </div>

      {/* Image and Text aligned side-by-side */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2">
        {/* Image Section */}
        <div className="md:w-[50%] flex justify-center">
          <img
            src="/bni.jpg"
            alt="Barrow Neurological Institute building"
            className="rounded-xl shadow-lg w-full max-w-[500px] object-cover border-4 border-purple-500"
          />
        </div>

        {/* Text Section */}
        <div className="bg-white/10 text-white p-6 rounded-xl border-4 border-pink-400 md:w-[45%] shadow-md -ml-4">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 mb-4">
            Barrow Neurological Institute
          </h2>
          <p className="text-lg leading-relaxed">
            Brain Wave at UCLA is proud to affiliate with the Barrow Neurological Institute (BNI), one of the world’s
            leading centers for neuroscience research and education. This partnership offers students exposure to
            groundbreaking work in clinical neurology and neuroscience, and supports Brain Wave’s mission of promoting
            research, mentorship, and innovation in brain science.
          </p>
        </div>
      </div>
    </main>
  );
}
