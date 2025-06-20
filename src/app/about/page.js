'use client';

import { MotionSection } from '../../components/MotionWrapper';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center font-sans">
      {/* Title with Animation */}
      <MotionSection
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 mb-4">
          About Brain Wave at UCLA
        </h1>
      </MotionSection>

      {/* Paragraph with Animation */}
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-xl max-w-2xl text-center text-gray-300 mb-12">
          Brainwave at UCLA is a student-run neuroscience organization that fosters collaboration, curiosity, and exploration of the brain. We host events, research seminars, and outreach programs to connect students with the latest in brain science and neurotechnology.
        </p>
      </MotionSection>

      {/* Founder Profiles with Animation */}
      <MotionSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex justify-center"
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 max-w-6xl">
          {[
            {
              name: 'Sharlotta Mozes: Founder',
              img: '/founder.jpg',
              quote: 'Starting Brainwave has been the most fulfilling experience of my time at UCLA. We’re building a family here.',
            },
            {
              name: 'Noah St. Clair: Co-Founder',
              img: '/cofounder1.jpg',
              quote: 'This community opened doors I never thought possible — in science and in friendship.',
            },
            {
              name: 'Abhi Singh: Co-Founder',
              img: '/cofounder2.jpg',
              quote: 'We created Brainwave to bring neuroscience to everyone, not just researchers.',
            },
            {
              name: 'Lily Matolon: Co-Founder',
              img: '/cofounder3.jpg',
              quote: 'Brainwave lets us connect the science of the brain to the heart of the community.',
            },
          ].map(({ name, img, quote }, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <img
                src={img}
                alt={name}
                className="w-48 h-48 rounded-full object-cover mb-4 border border-purple-300"
              />
              <h3 className="font-semibold text-xl mb-2">{name}</h3>
              <p className="text-base text-gray-400 italic">&ldquo;{quote}&rdquo;</p>
            </div>
          ))}
        </section>
      </MotionSection>

      {/* Class of 2026 Section Title + Image */}
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-18"
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-400 to-purple-400 mb-8">
          Class of 2026
        </h2>
        <img
          src="/2026.jpg"
          alt="Class of 2026"
          className="max-w-6xl rounded-xl shadow-lg border border-purple-300"
        />
      </MotionSection>
    </main>
  );
}