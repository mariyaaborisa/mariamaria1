import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rebrew: Wetware for Everyday Healing | María-Teresa Carmier',
  description: 'Rebrew merges speculative design and bio-material exploration to create rehydratable papers infused with herbs and flowers.',
};

export default function Rebrew() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="text-brown-100 transition-colors duration-300 hover:text-accent mb-12 inline-block"
        >
          ← All projects
        </Link>

        <header className="mb-16">
          <div className="text-sm uppercase tracking-widest font-body text-brown-200 mb-4">
            5. Human Nature Interactions
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Rebrew
          </h1>
          <p className="text-xl text-brown-100">
            Wetware for everyday healing
          </p>
        </header>

        <div className="space-y-12">
          <p className="text-lg text-brown-100 leading-relaxed">
            How might we disrupt the kitchen as a site of care? Rebrew merges speculative design and bio-material exploration to create rehydratable papers infused with herbs and flowers. Each sheet activates when steeped in water and transforms tea, broth, or poultice into ritual medicine.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Domain</span>
              <h3 className="text-xl font-display font-semibold mb-3">Emerging Tech Design · Material Futures · Sensory Interaction</h3>
              <p className="text-brown-100">Exploring bio-material storytelling that bridges speculative technology and embodied care.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Format</span>
              <h3 className="text-xl font-display font-semibold mb-3">Rehydratable wetware sheets</h3>
              <p className="text-brown-100">Infused papers that steep into tea, broth, steam, or poultice-based remedies.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Practice</span>
              <h3 className="text-xl font-display font-semibold mb-3">Ethnography · Bio-material prototyping</h3>
              <p className="text-brown-100">Grounded in interviews around domestic wellness rituals and iterative material trials.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-brown-200/10 text-brown-100 text-sm uppercase tracking-wider">Dissolvable paper</span>
            <span className="px-4 py-2 border border-brown-200/10 text-brown-100 text-sm uppercase tracking-wider">Traditional herbalism</span>
            <span className="px-4 py-2 border border-brown-200/10 text-brown-100 text-sm uppercase tracking-wider">Zero-waste system</span>
            <span className="px-4 py-2 border border-brown-200/10 text-brown-100 text-sm uppercase tracking-wider">Biodegradable materials</span>
          </div>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Process</h2>
            <ul className="space-y-3 text-brown-100">
              <li>Conducted ethnographic interviews around domestic wellness rituals</li>
              <li>Prototyped biodegradable wetware forms balancing aesthetics and functionality</li>
              <li>Documented sensory experiences to inform material taxonomy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Recognition</h2>
            <ul className="space-y-3 text-brown-100">
              <li><strong className="text-bone">San Francisco Design Week 2024, Best Student Design</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Impact</h2>
            <p className="text-brown-100 leading-relaxed">
              Rebrew transforms the ordinary act of brewing into a multi-sensory interaction that reconnects technology, body, and nature.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Learn More</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.behance.net/gallery/198306547/Rebrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-100 transition-colors duration-300 hover:text-accent"
                >
                  View on Behance →
                </a>
              </li>
              <li>
                <a
                  href="https://sfdesignweek.org/awards/rebrew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-100 transition-colors duration-300 hover:text-accent"
                >
                  SF Design Week Awards →
                </a>
              </li>
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
                View Full Resume
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
