import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Black Eco Feminisms | María-Teresa Carmier',
  description: 'Community-centered environmental planning internship with Ninth Root, focusing on collaborative land stewardship and civic design.',
};

export default function BlackEcoFeminisms() {
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
            4. Human Nature Interactions
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Black Eco Feminisms
          </h1>
          <p className="text-xl text-brown-100">
            Community-Led Environmental Rights & Land Stewardship
          </p>
        </header>

        <div className="space-y-12">
          <div className="space-y-6 text-lg text-brown-100 leading-relaxed">
            <p className="text-xl font-semibold">
              How can civic design protect community land stewardship when development pressures and ecological harm threaten cultural survival?
            </p>
            <p>
              As part of my Berkeley fieldwork, I worked with Ninth Root, an Oakland-based environmental rights nonprofit, to document how Black communities maintain ecological stewardship despite displacement and environmental injustice. This project explored how participatory design tools—listening sessions, systems mapping, and co-creation workshops—could strengthen community agency in environmental decision-making and preserve cultural connections to land.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Focus</span>
              <h3 className="text-xl font-display font-semibold mb-3">Environmental Justice · Urban Planning</h3>
              <p className="text-brown-100">Community-centered civic design addressing land use, displacement, and ecological care.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Role</span>
              <h3 className="text-xl font-display font-semibold mb-3">Urban Planning Intern</h3>
              <p className="text-brown-100">Designed listening sessions and co-creation workshops with Oakland residents and organizers.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Methods</span>
              <h3 className="text-xl font-display font-semibold mb-3">Systems Mapping · Co-design · Storytelling</h3>
              <p className="text-brown-100">Translating lived experiences into civic intelligence and design artifacts.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Publication</span>
              <h3 className="text-xl font-display font-semibold mb-3">Routledge Chapter (Forthcoming)</h3>
              <p className="text-brown-100">Contributing to "Indigenous Sovereignty in Environmental Research" on land stewardship.</p>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Project Overview</h2>
            <p className="text-brown-100 leading-relaxed">
              In the summer of 24, I completed an Urban Planning Internship with Ninth Root, an Oakland-based environmental justice nonprofit. I worked alongside community organizers and residents to design listening sessions that addressed land use, displacement, and ecological care. This project investigated how civic design tools, such as systems mapping, co-creation workshops, and storytelling, could strengthen community agency in environmental planning and stewardship.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Key Contributions</h2>
            <ul className="space-y-3 text-brown-100">
              <li><strong className="text-bone">Listening sessions:</strong> Centered intergenerational narratives around environmental impact, community healing, and land stewardship</li>
              <li><strong className="text-bone">Civic design strategy:</strong> Mapped relationships between community assets, governance, and environmental inequities</li>
              <li><strong className="text-bone">Workshop design:</strong> Merged art, policy dialogue, and activism to translate stories into action</li>
              <li><strong className="text-bone">Training & tools:</strong> Produced volunteer materials, facilitation guides, and visual systems maps</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Ongoing Scholarship</h2>
            <p className="text-brown-100 leading-relaxed">
              This fieldwork informs my forthcoming chapter on Community-Centered Land Stewardship in <em>Indigenous Sovereignty in Environmental Research: Decolonizing Ethics and Methodologies</em> (Routledge, forthcoming). The chapter extends this applied design work, positioning stewardship as both a civic design practice and a framework of care within environmental and technological systems.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Impact</h2>
            <p className="text-brown-100 leading-relaxed">
              Turned community listening into civic intelligence by translating lived experiences into design artifacts that guide equitable environmental planning and future coalition-building.
            </p>
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
