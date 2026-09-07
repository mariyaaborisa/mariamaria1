'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  // Design Engineering, Strategy & AI - ordered most artistic → most tech per spec
  {
    id: 'responsible-ai',
    category: 'design',
    tag: 'Responsible AI · Public humanities',
    title: 'Responsible AI in the Humanities',
    description: 'AI-driven interactive exhibit reviving the 19th-century poet George Moses Horton through spoken dialogue.',
    href: '/responsible-ai',
    image: '/images/projects/george-moses-horton/museum-visitor.webp',
    imageAlt: 'Museum visitor interacting with George Moses Horton AI exhibit',
  },
  {
    id: 'rebrew',
    category: 'design',
    tag: 'Speculative design · Material futures',
    title: 'ReBrew',
    description: 'Wetware for everyday healing: rehydratable papers infused with herbs and flowers.',
    href: '/rebrew',
    image: '/images/projects/rebrew/hero.svg',
    imageAlt: 'ReBrew rehydratable paper prototype',
  },
  {
    id: 'black-eco-feminisms',
    category: 'design',
    tag: 'Community resilience · Environmental justice',
    title: 'Black Eco Feminisms',
    description: 'Participatory research tools supporting collective knowledge-building and justice-centered collaboration.',
    href: '/black-eco-feminisms',
    image: '/images/projects/black-eco-feminisms/hero.svg',
    imageAlt: 'Black Eco Feminisms research toolkit',
  },
  {
    id: 'junipers-clompass',
    category: 'design',
    tag: 'Learning science · Creative literacies',
    title: "Juniper's Clompass",
    description: 'Analog-digital learning companion turning a vintage clock into a compass and storytelling tool.',
    href: '/junipers-clompass',
    image: '/images/projects/junipers-clompass/final-prototype.webp',
    imageAlt: "Juniper's Clompass final prototype",
  },
  {
    id: 'show-me-your-colors',
    category: 'design',
    tag: 'Child safety · AI policy',
    title: 'Show Me Your Colors',
    description: 'Co-created child safety and AI governance tools protecting K-12 learners from data exploitation.',
    href: '/show-me-your-colors',
    image: '/images/projects/show-me-your-colors/hero.svg',
    imageAlt: 'Show Me Your Colors workshop materials',
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

  return (
    <section className="py-16 md:py-24 px-8 md:px-16" aria-labelledby="projects-heading">
      <div className="container mx-auto max-w-6xl">
        <h2 id="projects-heading" className="text-3xl md:text-5xl font-display tracking-tight mb-6">
          Selected Work
        </h2>

        <p className="text-lg text-ink/80 mb-16 max-w-3xl">
          Projects across accountable AI, justice-centered digital systems, speculative design, and participatory research.
        </p>

        {/* All projects in continuous scroll */}
        <div className="space-y-24">
          {projects.map((project, index) => (
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
              <article className={`grid gap-8 ${
                index % 2 === 0 ? 'md:grid-cols-[1.5fr,1fr]' : 'md:grid-cols-[1fr,1.5fr]'
              }`}>
                {/* Image - alternating left/right */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] w-full bg-ink/5">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      unoptimized={project.image.endsWith('.svg')}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="text-xs uppercase tracking-widest font-body text-accent-ink block mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display tracking-tight mb-4 transition-colors duration-300 group-hover:text-accent-ink">
                    {project.title}
                  </h3>
                  <p className="text-ink/80 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-24 text-center">
          <Link
            href="/projects"
            className="text-ink/80 transition-colors duration-300 hover:text-accent-ink font-medium text-lg"
          >
            Browse the full project library →
          </Link>
        </div>
      </div>
    </section>
  );
}
