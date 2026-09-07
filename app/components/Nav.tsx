'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-8 right-8 z-50 flex gap-3">
      <Link
        href="/art"
        className="px-4 py-2 text-sm font-body uppercase tracking-wider border border-ink/20 bg-ground/90 backdrop-blur-xl text-ink transition-all duration-300 hover:text-accent-ink hover:border-accent-ink"
      >
        Mixed Media
      </Link>
      <Link
        href="/projects"
        className="px-4 py-2 text-sm font-body uppercase tracking-wider border border-ink/20 bg-ground/90 backdrop-blur-xl text-ink transition-all duration-300 hover:text-accent-ink hover:border-accent-ink"
      >
        Projects
      </Link>
      <Link
        href="/about"
        className="px-4 py-2 text-sm font-body uppercase tracking-wider border border-ink/20 bg-ground/90 backdrop-blur-xl text-ink transition-all duration-300 hover:text-accent-ink hover:border-accent-ink"
      >
        CV
      </Link>
      <Link
        href="/artist-statement"
        className="px-4 py-2 text-sm font-body uppercase tracking-wider border border-ink/20 bg-ground/90 backdrop-blur-xl text-ink transition-all duration-300 hover:text-accent-ink hover:border-accent-ink"
      >
        Artist Statement
      </Link>
    </nav>
  );
}
