import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Artist Statement | María-Teresa Carmier',
  description: 'Artist statement exploring technology, ecology, memory, and the conditions of survival through trigueñanismo and community-rooted inquiry.',
};

export default function ArtistStatement() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-ink/80 transition-colors duration-300 hover:text-accent-ink mb-12 inline-block"
        >
          ← Back to home
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-6xl font-display tracking-tight mb-8">
            Artist Statement
          </h1>

          <div className="text-lg text-ink leading-relaxed space-y-6 font-body">
            <p>
              [Artist statement content to be provided]
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
