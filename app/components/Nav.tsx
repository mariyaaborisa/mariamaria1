'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-8 right-8 z-50 flex gap-3">
      <Link
        href="/about"
        className="px-4 py-2 text-sm font-body uppercase tracking-wider border border-brown-200/10 bg-brown-600/80 backdrop-blur-xl text-brown-100 transition-all duration-300 hover:text-accent hover:border-accent"
      >
        Resume
      </Link>
      <Link
        href="/projects"
        className="px-4 py-2 text-sm font-body uppercase tracking-wider border border-brown-200/10 bg-brown-600/80 backdrop-blur-xl text-brown-100 transition-all duration-300 hover:text-accent hover:border-accent"
      >
        Projects
      </Link>
    </nav>
  );
}
