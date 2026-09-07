import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-ink/20 py-16 px-16 opacity-85">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-ink/80 text-center md:text-left">
          © 2026 María-Teresa Carmier
        </div>

        <div className="flex gap-6 text-ink/80">
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
