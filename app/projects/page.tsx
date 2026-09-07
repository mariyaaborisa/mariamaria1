import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectGallery from '../components/ProjectGallery';

export const metadata: Metadata = {
  title: 'Participatory Design + Engineering | María-Teresa Carmier',
  description: 'Projects across accountable AI, justice-centered digital systems, speculative design, and participatory research.',
};

export default function Projects() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="px-8 md:px-16 mb-12">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-ink/80 transition-colors duration-300 hover:text-accent-ink inline-block"
          >
            ← Back to home
          </Link>
        </div>
      </div>
      <ProjectGallery />
    </main>
  );
}
