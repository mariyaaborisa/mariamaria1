'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const projects = [
  // Design Engineering, Strategy & AI
  {
    id: 'show-me-your-colors',
    category: 'design',
    tag: 'Child safety · AI policy',
    title: 'Show Me Your Colors',
    description: 'Co-created child safety and AI governance tools designed to protect K-12 learners from data exploitation and platform harm.',
    href: '/show-me-your-colors',
  },
  {
    id: 'responsible-ai',
    category: 'design',
    tag: 'Responsible AI · Public humanities',
    title: 'Responsible AI in the Humanities',
    description: 'Developed an accountable AI experience that translated responsible innovation principles into a public-facing humanities context.',
    href: '/responsible-ai',
  },
  {
    id: 'junipers-clompass',
    category: 'design',
    tag: 'Learning science · Creative literacies',
    title: "Juniper's Clompass",
    description: 'Analog-digital learning companion that turns a vintage clock into a compass and storytelling tool for kids.',
    href: '/junipers-clompass',
  },
  {
    id: 'black-eco-feminisms',
    category: 'design',
    tag: 'Community resilience · Environmental justice',
    title: 'Black Eco Feminisms',
    description: 'Built participatory research tools that supported collective knowledge-building, community resilience, and justice-centered collaboration.',
    href: '/black-eco-feminisms',
  },
  {
    id: 'rebrew',
    category: 'design',
    tag: 'Speculative design · Material futures',
    title: 'ReBrew',
    description: 'Wetware for everyday healing: rehydratable papers infused with herbs and flowers.',
    href: '/rebrew',
  },
  // Art & Performance
  {
    id: 'art',
    category: 'art',
    tag: 'Mixed media · Performance',
    title: 'Art Portfolio',
    description: 'Creative practice spanning mixed media installation, speculative storytelling, participatory design, and self-published works.',
    href: '/art',
  },
];

export default function ProjectGallery() {
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set());
  const projectRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-project-id');
            if (id) {
              setVisibleProjects((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    projectRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const designProjects = projects.filter((p) => p.category === 'design');
  const artProjects = projects.filter((p) => p.category === 'art');

  return (
    <section className="py-16 md:py-24 px-8 md:px-16" aria-labelledby="projects-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-display tracking-tight mb-6">
          Project highlights
        </h2>

        <p className="text-lg text-ink/80 mb-16">
          Selected projects across child online safety, accountable AI, justice-centered digital systems, and interdisciplinary art practice.
        </p>

        {/* Design Engineering, Strategy & AI */}
        <div className="mb-20">
          <h3 className="text-sm uppercase tracking-widest font-body text-ink/60 mb-8">
            Design Engineering, Strategy & AI
          </h3>
          <div className="space-y-12">
            {designProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                data-project-id={project.id}
                ref={(el) => {
                  if (el) projectRefs.current.set(project.id, el);
                }}
                className={`block group transition-all duration-700 ${
                  visibleProjects.has(project.id)
                    ? 'opacity-100 blur-0 translate-y-0'
                    : 'opacity-0 blur-sm translate-y-4'
                }`}
              >
                <article className="py-8 border-t border-b border-ink/20 transition-all duration-300 hover:border-accent-ink">
                  <span className="text-xs uppercase tracking-widest font-body text-accent-ink block mb-3">
                    {project.tag}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-display tracking-tight mb-3 transition-colors duration-300 group-hover:text-accent-ink">
                    {project.title}
                  </h4>
                  <p className="text-ink/80 leading-relaxed">
                    {project.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Art & Performance */}
        <div className="mb-16">
          <h3 className="text-sm uppercase tracking-widest font-body text-ink/60 mb-8">
            Art & Performance
          </h3>
          <div className="space-y-12">
            {artProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                data-project-id={project.id}
                ref={(el) => {
                  if (el) projectRefs.current.set(project.id, el);
                }}
                className={`block group transition-all duration-700 ${
                  visibleProjects.has(project.id)
                    ? 'opacity-100 blur-0 translate-y-0'
                    : 'opacity-0 blur-sm translate-y-4'
                }`}
              >
                <article className="py-8 border-t border-b border-ink/20 transition-all duration-300 hover:border-accent-ink">
                  <span className="text-xs uppercase tracking-widest font-body text-accent-ink block mb-3">
                    {project.tag}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-display tracking-tight mb-3 transition-colors duration-300 group-hover:text-accent-ink">
                    {project.title}
                  </h4>
                  <p className="text-ink/80 leading-relaxed">
                    {project.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA link */}
        <p className="text-center">
          <Link
            href="/projects"
            className="text-ink/80 transition-colors duration-300 hover:text-accent-ink font-medium"
          >
            Browse the full project library →
          </Link>
        </p>
      </div>
    </section>
  );
}
