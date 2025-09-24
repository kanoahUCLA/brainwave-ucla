import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: "Brainwave at UCLA",
  description: "A neuroscience student organization at UCLA focused on outreach, research, and education.",
  keywords: [
    "Brainwave", "UCLA", "neuroscience", "student org", "research", "neurotech", "education",
    "Noah St. Clair", "Sharlotta Mozes", "Lily Matalon", "Abhi Singh", "Lotta Mozes"
  ],
  authors: [{ name: "Brainwave at UCLA" }],
  alternates: {
    canonical: "https://brainwaveucla.org/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
  },
  other: {
    'google-site-verification': 'UxvsSWT125roequZNWxi6OmI6U0Zq0EwNTI',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50 border-b-2 border-pink-500">
          {/* Logo / Title */}
          <Link
            href="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 text-transparent bg-clip-text hover:opacity-80 transition"
          >
            Brain Wave at UCLA
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/affiliates", label: "Affiliates" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-center w-28 h-10 
                           bg-gradient-to-r from-purple-600 to-pink-500 
                           rounded-md font-bold text-white 
                           shadow-md transition-all duration-200 
                           hover:scale-105 hover:from-purple-500 hover:to-pink-400"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}