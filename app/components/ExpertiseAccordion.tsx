'use client';

import { useState } from 'react';

const expertiseAreas = [
  {
    id: 'movement-tech',
    label: 'Movement Technology & Stewardship',
    content: 'Movement-aligned technology stewardship, cross-sector coordination, coalition support, partnership building, trauma-informed engagement, and connecting technical resources to communities building collective power.',
  },
  {
    id: 'ai-safety',
    label: 'AI Safety & Community-Proof Systems',
    content: 'AI safety, cybersecurity for organizing groups, privacy engineering, data flow mapping, OSINT research, vulnerability identification, and digital infrastructure designed to protect communities rather than extract from them.',
  },
  {
    id: 'participatory-research',
    label: 'Participatory Research & Public Knowledge',
    content: 'Ethnographic research, participatory design, policy development, program evaluation, systems mapping, qualitative methods, and translating technical complexity into public knowledge that serves communities and movements.',
  },
  {
    id: 'technical-architecture',
    label: 'Public-Interest Technical Architecture',
    content: 'Public-interest technical architecture including accountable AI/ML systems, trustworthy and privacy-preserving infrastructure, privacy engineering, risk-aware system design, data governance, interoperability, API integration, and technical documentation for secure, community-centered use.',
  },
];

export default function ExpertiseAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 px-8 md:px-16" aria-labelledby="services-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="services-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
          Core Expertise
        </h2>
        <p className="text-lg text-brown-100 mb-12">
          Justice-centered technology practice across AI safety, digital infrastructure, participatory research, and community defense.
        </p>

        <div className="space-y-0" role="region" aria-label="Core expertise areas">
          {expertiseAreas.map((area, index) => (
            <div key={area.id} className="border-t border-brown-200/10 last:border-b">
              <button
                type="button"
                className="w-full py-6 text-left flex justify-between items-center group transition-colors duration-300 hover:text-accent"
                aria-expanded={openIndex === index}
                aria-controls={area.id}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-sm uppercase tracking-widest font-body font-medium">
                  {area.label}
                </span>
                <span className="text-2xl text-brown-200 group-hover:text-accent transition-colors duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <div
                id={area.id}
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
                hidden={openIndex !== index}
              >
                <p className="text-brown-100 leading-relaxed">
                  {area.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
