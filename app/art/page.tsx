import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creative Practice | María-Teresa Carmier',
  description: 'Creative practice spanning mixed media installation, speculative storytelling, participatory design, and self-published works.',
};

export default function Art() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-brown-100 transition-colors duration-300 hover:text-accent mb-12 inline-block"
        >
          ← Back to landing
        </Link>

        <header className="mb-16">
          <div className="text-sm uppercase tracking-widest font-body text-brown-200 mb-4">
            6. Mixed Media
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Creative Practice
          </h1>
          <p className="text-xl text-brown-100">
            Mixed Media, Speculative Storytelling, and Community-Centered Art
          </p>
        </header>

        <div className="space-y-12">
          <p className="text-lg text-brown-100 leading-relaxed">
            Creative practice spanning mixed media installation, speculative storytelling, children's learning environments, self-publishing, and community-rooted experimentation. This page gathers selected exhibitions, art-centered works, fellowships, and publications that shape my interdisciplinary practice across visual art, education, and design research.
          </p>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
              Selected Exhibitions & Presentations
            </h2>
            <ul className="space-y-3 text-brown-100">
              <li><strong className="text-bone">Women's Biennial</strong>, 2020</li>
              <li><strong className="text-bone">Mount Saint Mary's University</strong>, Los Angeles</li>
              <li><strong className="text-bone">The University of Memphis</strong></li>
              <li><strong className="text-bone">Phoenix Zine Fest</strong>, 2020</li>
              <li><strong className="text-bone">Bay Area Queer Zine Fest</strong>, 2018</li>
              <li><strong className="text-bone">Long Beach Zine Fest</strong>, 2018</li>
              <li><strong className="text-bone">NY Latin Flair Fest</strong>, 2017</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
              Selected Works
            </h2>
            <ul className="space-y-3 text-brown-100">
              <li><strong className="text-bone">George Moses Horton AI/VR Interactive Exhibit</strong> — Interactive exhibit using AI, XR, and VR to preserve and amplify Black oral history, UC Berkeley, 2023–2024</li>
              <li><strong className="text-bone">Rebrew: A Pocket Apothecary</strong> — Awarded Best Student Design, SF Design Week, 2024</li>
              <li><strong className="text-bone">The Dream Tree</strong> — Mixed media installation, Southern California Children's Museum, 2018</li>
              <li><strong className="text-bone">Acorn House</strong> — Interactive children's installation exploring Indigenous storytelling and play, UC Berkeley, 2023–2025</li>
              <li><strong className="text-bone">Juniper's Clompass</strong> — STEAM educational tool integrating microcontrollers and creative writing, UC Berkeley, 2023–2025</li>
              <li><strong className="text-bone">UniiFriend</strong> — AI learning companion for children supporting emotional engagement, UC Berkeley, 2023–2025</li>
              <li><strong className="text-bone">Show Me Your Colors</strong> — SEL tool using art, ritual, and color for emotional literacy, UC Berkeley, 2023–2025</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
              Self-Publications
            </h2>
            <ul className="space-y-3 text-brown-100">
              <li><em>Decolonizing Parenting Zine</em> (Co-editor, 2018–Present)</li>
              <li>Self-published zines (2017–present) on Afro-Indigenous cosmology, grief, and survival</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
              Fellowships & Residencies
            </h2>
            <ul className="space-y-3 text-brown-100">
              <li>Design Science Studio Fellow, Cohort 4, Buckminster Fuller Institute — 2025–2026</li>
              <li>Abode Press Speculative Fiction Fellow — Summer 2025</li>
              <li>UC Berkeley Speculative Ecologies Lab Residency — 2024–2025</li>
              <li>Arcus Social Justice Fellow, UC Berkeley — 2024–2025</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
              Awards & Funding
            </h2>
            <ul className="space-y-3 text-brown-100">
              <li>Best Student Design, San Francisco Design Week, 2024</li>
              <li>Arcus Social Justice Fellowship, UC Berkeley, 2024–2025</li>
              <li>W.M. Keck Foundation Zine Research Fellow, Mount Saint Mary's University, 2018</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
              Publications
            </h2>
            <ul className="space-y-3 text-brown-100">
              <li>Decolonizing Environmental Research Ethics, University of Arizona Press (Forthcoming)</li>
              <li><em>Decolonizing Parenting Zine</em> (Co-editor, 2018–Present)</li>
              <li>Self-published zines (2017–present) on Afro-Indigenous cosmology, grief, and survival</li>
            </ul>
          </section>

          <div className="mt-16 pt-16 border-t border-brown-200/10">
            <h3 className="text-sm uppercase tracking-widest font-body text-brown-200 mb-6">
              Want to learn more about my work?
            </h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/about"
                className="px-6 py-3 bg-accent-surface text-bone transition-all duration-300 hover:bg-accent hover:text-brown-600 font-body uppercase tracking-wider text-sm font-medium text-center"
              >
                View CV / Resume
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-brown-200/10 text-brown-100 transition-all duration-300 hover:border-accent hover:text-accent font-body uppercase tracking-wider text-sm font-medium text-center"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
