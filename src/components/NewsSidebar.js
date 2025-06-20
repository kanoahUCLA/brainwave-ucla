'use client';

import { useEffect, useState } from 'react';

export default function NewsSidebar() {
  const researchLinks = [
    {
      title: 'UCLA Undergraduate Research Portal',
      link: 'https://urp.ucla.edu/',
    },
    {
      title: 'Biomedical Research Minor Program',
      link: 'https://www.biomedresearchminor.ucla.edu/',
    },
    {
      title: 'UCLA CARE Fellows',
      link: 'https://carefellows.research.ucla.edu/',
    },
    {
      title: 'UCLA Undergraduate Science Journal',
      link: 'https://usj.ucla.edu/',
    },
  ];

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/ucla-news');
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Failed to fetch UCLA neuroscience news:', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <aside className="ml-auto md:w-[400px] w-full shrink-0 text-right sticky top-6 self-start">
      {/* Undergraduate Research Links */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research Opportunities @ UCLA</h2>
        <ul className="space-y-2 text-sm list-none">
          {researchLinks.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline whitespace-nowrap overflow-hidden text-ellipsis block"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* News Articles */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Latest Neuroscience @ UCLA</h2>
        <ul className="space-y-2 text-sm list-none">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <li key={index}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline whitespace-nowrap overflow-hidden text-ellipsis block"
                >
                  {article.title}
                </a>
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">Loading latest news...</li>
          )}
        </ul>
      </div>
    </aside>
  );
}