import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-ink/20 py-16 px-16 opacity-85">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-sm">
        <div className="text-ink/80 text-center md:text-left">
          © 2025 María-Teresa Carmier
        </div>

        <div className="text-ink/60 uppercase tracking-wider text-xs text-center font-body">
          <span>AI Safety</span> · <span>Digital Infrastructure</span> · <span>Public-Interest Technology</span>
        </div>

        <div className="flex gap-6 justify-center md:justify-end text-ink/80">
          <a
            href="mailto:mtcarmier@berkeley.edu"
            className="transition-colors duration-300 hover:text-accent-ink"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/mtcarmier"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-accent-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
