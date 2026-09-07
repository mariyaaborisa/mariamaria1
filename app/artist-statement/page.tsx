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

        <article className="max-w-none">
          <h1 className="text-4xl md:text-6xl font-display tracking-tight mb-12">
            Artist Statement
          </h1>

          <div className="text-lg text-ink leading-relaxed space-y-6 font-body">
            <p>
              I make performances, moving-image works, installations, and speculative writing about technology, ecology, memory, and the conditions of survival. My practice moves through trigueñanismo, a Black, Mexican Indigenous, tri-racial cosmology that I use to work through ancestry, parenting, rupture, pleasure, and the unfinishedness of selfhood.
            </p>

            <p>
              I am interested in the places where the digital, environmental, and intimate become inseparable: where infrastructure distributes safety unevenly, where ecological collapse reorganizes kinship, and where people make care, ritual, and new worlds inside conditions that were not made for them. I work with poetry, performance, sound, interactive technology, participatory design, and research as ways of making those conditions felt rather than only explained.
            </p>

            <p>
              I build speculative worlds that hold grief and humor, breakdown and raving, technological failure and ancestral intelligence. The work asks what becomes possible when people who have been made disposable refuse disappearance, create their own tools, and rehearse collective survival. I make art as a practice of remembering, gathering, and giving shape to futures that can be lived in.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
