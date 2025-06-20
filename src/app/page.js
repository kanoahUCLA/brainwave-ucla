export const metadata = {
  title: 'Brain Wave at UCLA',
  description: 'A neuroscience club at UCLA',
};

import { ArrowRight } from 'lucide-react';
import { MotionSection } from '../components/MotionWrapper';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-white via-[#f9f3ff] to-[#e9d8fd] text-black px-6 md:px-12 lg:px-20 py-12 flex justify-center font-sans text-[1.05rem]"
      style={{
        backgroundImage: "url('/brainwave-bg.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-w-8xl w-full flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Hero Text Section */}
        <MotionSection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-2/3 flex flex-col justify-center"
        >
          <h1 className="text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500">
            Brain Wave
          </h1>
          <p className="text-lg text-gray-200 mb-4">
            Empowering future physicians through neuroscience, mentorship, and opportunity.
          </p>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed tracking-wide">
            Brainwave at UCLA is a clinically guided, student-led organization that offers a safe haven and close-knit
            community for pre-medical undergraduates. We support student growth through neurological education,
            career-building opportunities, and peer mentorship. Our adventurous, hands-on approach promotes academic excellence,
            while fundraising efforts directly support research at the Barrow Neurological Institute.
          </p>
          <a
            href="/about"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out w-fit flex items-center"
          >
            Learn More <ArrowRight className="ml-2" size={20} />
          </a>
        </MotionSection>

        {/* Image Section */}
        <MotionSection
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3 flex justify-center items-center"
        >
          <img
            src="brainwave.jpg"
            alt="Brainwave Graphic"
            className="w-full max-w-sm rounded-xl shadow-lg border border-purple-200"
          />
        </MotionSection>
      </div>
    </main>
  );
}