export const metadata = {
  title: 'Brain Wave at UCLA',
  description: 'A neuroscience club at UCLA',
};

import { ArrowRight } from 'lucide-react';
import { MotionSection } from '../components/MotionWrapper';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-12 font-sans text-[1.05rem]">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-16">

        {/* LEFT: TEXT CONTENT */}
        <MotionSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-2/3 flex flex-col justify-center"
        >
          <h1 className="text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 text-transparent bg-clip-text">
            Brain Wave
          </h1>

          {/* MISSION — NOW WHITE */}
          <p className="text-lg text-white mb-4">
            Empowering future physicians through neuroscience, mentorship, and opportunity.
          </p>

          {/* DESCRIPTION — NOW WHITE */}
          <p className="text-xl text-white mb-10 leading-relaxed tracking-wide">
            Brain Wave at UCLA is a clinically guided, student-led organization that offers a safe haven
            and close-knit community for pre-medical undergraduates. We support student growth through
            neurological education, career-building opportunities, and peer mentorship. Our hands-on
            approach promotes academic excellence while fundraising efforts directly support research
            at the Barrow Neurological Institute.
          </p>

          {/* Publications */}
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 text-transparent bg-clip-text">
              Our Publications
            </h2>

            <div className="text-lg leading-relaxed">
              <p className="text-white">
                St. Clair N, Mahajan S, Leung C, Srinivas C, Oushana L, Zhou F, Dewan N.
              </p>

              <a
                href="https://doi.org/10.1101/2025.11.17.688558"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-pink-400 hover:text-pink-300 transition-colors"
              >
                Posterior Cortex Isolation Enhances Detection of Alpha Desynchronization During Sustained Attention.
              </a>

              <p className="mt-1 text-white italic">
                bioRxiv, November 2025.
              </p>

              <a
                href="https://doi.org/10.1101/2025.11.17.688558"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-pink-400 hover:text-pink-300 underline underline-offset-4 transition-colors text-sm"
              >
                https://doi.org/10.1101/2025.11.17.688558
              </a>
            </div>
          </div>

          {/* Recruitment */}
          <div>
            <h2 className="text-4xl font-extrabold text-pink-500 mb-1">
              Winter 2026 Recruitment Form
            </h2>
            <p className="text-xl text-pink-400 italic mb-4">
              Due October 16th, 11:59pm
            </p>
            <p className="text-lg text-white mb-6">
              Opportunity for a world-renowned internship, volunteering, research, and more.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQNbLXq7TJIcXzejGVJgd_tc8rQcTfe0WeotI_0qqEDk-E9g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Apply Here <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </MotionSection>

        {/* RIGHT: IMAGE ONLY */}
        <MotionSection
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3 flex flex-col items-center gap-8"
        >
          <div className="rounded-xl p-[6px] bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500">
            <img
              src="/brainwave.jpg"
              alt="Brain Wave Graphic"
              className="w-full max-w-sm rounded-xl object-cover shadow-lg"
            />
          </div>
        </MotionSection>

      </div>
    </main>
  );
}
