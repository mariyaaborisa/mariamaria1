import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | María-Teresa Carmier',
  description: 'Project and research portfolio: digital safety, trust infrastructure, and liberation-centered design.',
};

const projects = [
  {
    id: 'responsible-ai',
    tag: 'Responsible AI',
    title: 'Responsible AI in the Humanities',
    description: 'Accountable AI exhibit honoring consent and community memory',
    href: '/responsible-ai',
  },
  {
    id: 'show-me-your-colors',
    tag: 'Child Safety',
    title: 'Show Me Your Colors',
    description: 'Co-created AI guidance with youth, caregivers, and educators',
    href: '/show-me-your-colors',
  },
  {
    id: 'junipers-clompass',
    tag: 'Learning Science',
    title: "Juniper's Clompass",
    description: 'Bilingual STEM adventure for safe device usage',
    href: '/junipers-clompass',
  },
  {
    id: 'black-eco-feminisms',
    tag: 'Climate Justice',
    title: 'Black Eco Feminisms',
    description: 'Research kits elevating environmental liberation leaders',
    href: '/black-eco-feminisms',
  },
  {
    id: 'rebrew',
    tag: 'Circular Design',
    title: 'ReBrew',
    description: 'Transforming spent grain into regenerative materials',
    href: '/rebrew',
  },
  {
    id: 'art',
    tag: 'Mixed Media',
    title: 'Art Portfolio',
    description: 'Explorations of surveillance, consent, and collective care',
    href: '/art',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-ink/80 transition-colors duration-300 hover:text-accent-ink mb-12 inline-block"
        >
          ← Back to landing
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Project & Research Portfolio
          </h1>
          <p className="text-lg md:text-xl text-ink/80 mb-8 max-w-4xl">
            Digital safety, trust infrastructure, and liberation-centered design for communities who deserve more than off-the-shelf security. Each project was built with participatory methods, cultural rigor, and measurable care outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-accent-surface text-ink transition-all duration-300 hover:bg-accent hover:text-brown-600 font-body uppercase tracking-wider text-sm font-medium"
            >
              View resume
            </Link>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ247n1Ktc4V-cvE5iPgrfZFxX-4vIGLM5Qxn5_7rD3o-48qqW_FDCxxQtXdU1iSRLBtN-MUi7GX?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-ink/20 text-ink/80 transition-all duration-300 hover:border-accent hover:text-accent-ink font-body uppercase tracking-wider text-sm font-medium"
            >
              Schedule a conversation
            </a>
          </div>
        </header>

        <section aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="text-3xl font-display font-bold tracking-tight mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group border border-ink/20 p-8 transition-all duration-300 hover:border-accent hover:translate-y-[-4px]"
              >
                <span className="text-xs uppercase tracking-widest font-body text-ink/70 block mb-4">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-display font-semibold tracking-tight mb-3 transition-colors duration-300 group-hover:text-accent-ink">
                  {project.title}
                </h3>
                <p className="text-ink/80 leading-relaxed">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
