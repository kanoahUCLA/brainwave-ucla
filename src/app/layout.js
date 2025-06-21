import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: "Brainwave at UCLA",
  description: "A neuroscience student organization at UCLA focused on outreach, research, and education.",
  keywords: ["Brainwave", "UCLA", "neuroscience", "student org", "research", "neurotech", "education", "Noah St. Clair", "Sharlotta Mozes", "Lily Matalon", "Abhi Singh", "Lotta Mozes"],
  authors: [{ name: "Brainwave at UCLA" }],
  other: {
    'google-site-verification': 'UxvsSWT125roequZNWxi6OmI6U0Zq0EwNTI', // insert your value
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#1A0033] text-white font-sans">
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50 border-b border-pink-500">
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 text-transparent bg-clip-text hover:opacity-80 transition">
            Brain Wave at UCLA
          </Link>
          <div className="space-x-6 text-lg font-medium">
            <Link href="/" className="hover:text-pink-300 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-pink-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-pink-300 transition-colors">Contact</Link>
            <Link href="/affiliates" className="hover:text-pink-300 transition-colors">Affiliates</Link>
          </div>
        </nav>
        <main className="px-6 py-8">{children}</main>
      </body>
    </html>
  );
}