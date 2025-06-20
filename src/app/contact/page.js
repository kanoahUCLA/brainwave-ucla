'use client';

import { MotionSection } from '../../components/MotionWrapper';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 font-sans text-center">
      {/* Title */}
      <MotionSection
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500">
          Contact Us
        </h1>
      </MotionSection>

      {/* Subtitle */}
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Want to get involved or have questions about Brainwave at UCLA? <br />
          Reach out via email or connect with us on social media!
        </p>
      </MotionSection>

      {/* Divider */}
      <MotionSection
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-115 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 rounded-full mx-auto my-10" />
      </MotionSection>

      {/* Contact Card */}
      <MotionSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white/5 p-6 rounded-xl border border-pink-400 shadow-md max-w-md mx-auto space-y-6 text-lg">
          <p className="flex justify-center items-center gap-3">
            <img
              src="/gmail.jpg"
              alt="Mail Icon"
              width="24"
              height="24"
              className="rounded-sm"
            />
            <a
              href="mailto:brainwaveatucla@gmail.com"
              className="text-blue-400 hover:underline"
            >
              bni.club.ucla@gmail.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-3">
            <img
              src="/instagram.jpg"
              alt="Instagram Icon"
              width="24"
              height="24"
              className="rounded-sm"
            />
            <a
              href="https://instagram.com/brainwave.at.ucla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @brainwave.at.ucla
            </a>
          </p>
        </div>
      </MotionSection>

      {/* Location Note */}
      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-400 text-sm mt-6">📍 Based at UCLA</p>
      </MotionSection>

      {/* CTA Button */}
      <MotionSection
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="/about"
          className="mt-8 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
        >
          Learn More About Us
        </a>
      </MotionSection>
    </main>
  );
}