import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume | María-Teresa Carmier',
  description: 'Artist CV and resume for María-Teresa Carmier: interdisciplinary artist, design researcher, and technologist.',
};

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <nav className="mb-12">
          <Link
            href="/"
            className="text-ink/80 transition-colors duration-300 hover:text-accent-ink-ink"
          >
            ← María-Teresa Carmier
          </Link>
        </nav>

        <section aria-labelledby="resume-heading">
          <div className="mb-16">
            <h2 id="resume-heading" className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Artist CV / Resume
            </h2>
            <div className="text-lg text-ink/80 leading-relaxed space-y-4 mb-6 max-w-3xl">
              <p>
                María-Teresa Carmier (Cyborg Baby Mama) is a South Central Los Angeles–based artist, futures design engineer, and movement technologist working across performance, moving image, installation, speculative writing, and participatory design. Her work explores technology, ecology, memory, and the conditions of survival through trigueñanismo, her framework for a Black, Mexican Indigenous, and tri-cosmology; parenting; and community-rooted inquiry.
              </p>
              <p>
                Cyborg Baby Mama holds a Master of Design Engineering with an emphasis in New Media from The University of California, Berkeley and has been an Arcus Social Justice Fellow and a College of Environmental Design Speculative Ecologies Lab resident. She is currently developing Cyborg Babymama, a performance work of poetry, movement, sound, and speculative world-building.
              </p>
            </div>
            <p className="text-ink/80">
              For project documentation and case studies, visit the{' '}
              <Link href="/projects" className="text-accent-ink hover:underline">
                Projects page
              </Link>.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 pb-2 border-b border-ink/20">
                Fellowships & Residencies
              </h3>
              <ul className="space-y-3 text-ink/80">
                <li>Design Science Studio Fellow, Cohort 4, Buckminster Fuller Institute — 2025–2026</li>
                <li>Abode Press Speculative Fiction Fellow — Summer 2025</li>
                <li>UC Berkeley Speculative Ecologies Lab Residency — 2024–2025</li>
                <li>Arcus Social Justice Fellow, UC Berkeley — 2024–2025</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 pb-2 border-b border-ink/20">
                Movement & Safety Work
              </h3>
              <ul className="space-y-3 text-ink/80">
                <li>Movement Technologist, Safety and Security Collective — May 2025–Present</li>
                <li>Technical Projects Manager, Parent Voices Oakland — Nov 2025–June 2026 (Contract)</li>
                <li>Freelance Trust & Safety / Civic Tech Specialist — Los Angeles, CA · May 2025–Present</li>
                <li>OSINT Consultant, Center for Long-Term Cybersecurity, UC Berkeley — Berkeley, CA · Jan–May 2025</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 pb-2 border-b border-ink/20">
                Teaching & Community Engagement
              </h3>
              <ul className="space-y-3 text-ink/80">
                <li>Graduate Student Instructor, UC Berkeley, Rausser College of Natural Resources — Jan 2025–May 2025</li>
                <li>Visual and Digital Media Arts Instructor, Albany Unified School District — 2024–2025</li>
                <li>Urban Planning and Environmental Design Intern, Ninth Root, Oakland, CA — 2024</li>
                <li>Community Teaching Artist, Central Ave Arts School Project — 2017–2020</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 pb-2 border-b border-ink/20">
                Awards & Funding
              </h3>
              <ul className="space-y-3 text-ink/80">
                <li>Best Student Design, San Francisco Design Week, 2024</li>
                <li>Arcus Social Justice Fellowship, UC Berkeley — 2024–2025</li>
                <li>W.M. Keck Foundation Zine Research Fellow, Mount Saint Mary's University — 2018</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 pb-2 border-b border-ink/20">
                Publications
              </h3>
              <ul className="space-y-3 text-ink/80">
                <li>"Black Stewardship as Resilient Design," in <em>Decolonizing Environmental Research Ethics</em> (University of Arizona Press, forthcoming)</li>
                <li>Decolonizing Parenting Zine (Co-editor, 2018–Present)</li>
                <li>Self-published zines (2017–present) on Afro-Indigenous cosmology, grief, and survival</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 pb-2 border-b border-ink/20">
                Selected Exhibitions & Presentations
              </h3>
              <ul className="space-y-3 text-ink/80">
                <li>Women's Biennial — 2020</li>
                <li>Mount Saint Mary's University, Los Angeles</li>
                <li>The University of Memphis</li>
                <li>Phoenix Zine Fest — 2020</li>
                <li>Bay Area Queer Zine Fest — 2018</li>
                <li>Long Beach Zine Fest — 2018</li>
                <li>NY Latin Flair Fest — 2017</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 pb-2 border-b border-ink/20">
                Education
              </h3>
              <ul className="space-y-3 text-ink/80">
                <li><strong className="text-ink">Master of Design Engineering</strong> with an emphasis in New Media — The University of California, Berkeley</li>
                <li><strong className="text-ink">Master of Innovation and Entrepreneurship</strong> — University of California, Irvine</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16 pt-16 border-t border-ink/20">
          <h3 className="text-sm uppercase tracking-widest font-body text-ink/70 mb-6">
            Get in Touch
          </h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:mtcarmier@berkeley.edu"
              className="text-ink/80 transition-colors duration-300 hover:text-accent-ink-ink"
            >
              Email
            </a>
            <a
              href="https://instagram.com/cyborg.bmstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/80 transition-colors duration-300 hover:text-accent-ink-ink"
            >
              Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
