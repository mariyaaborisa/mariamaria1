'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 'show-me-your-colors',
    tag: 'Child safety',
    title: 'Show Me Your Colors',
    description: 'Co-created child safety and AI governance tools designed to protect K-12 learners from data exploitation and platform harm.',
    href: '/show-me-your-colors',
  },
  {
    id: 'responsible-ai',
    tag: 'Responsible AI',
    title: 'Responsible AI in the Humanities',
    description: 'Developed an accountable AI experience that translated responsible innovation principles into a public-facing humanities context.',
    href: '/responsible-ai',
  },
  {
    id: 'black-eco-feminisms',
    tag: 'Community resilience',
    title: 'Black Eco Feminisms',
    description: 'Built participatory research tools that supported collective knowledge-building, community resilience, and justice-centered collaboration.',
    href: '/black-eco-feminisms',
  },
];

export default function ProjectHighlightsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const totalSlides = projects.length;

  const goToSlide = (index: number) => {
    const newSlide = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentSlide(newSlide);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [currentSlide]);

  // Touch/swipe support
  useEffect(() => {
    if (!trackRef.current) return;

    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) < minSwipeDistance) return;

      if (swipeDistance > 0) {
        goToSlide(currentSlide + 1);
      } else {
        goToSlide(currentSlide - 1);
      }
    };

    const track = trackRef.current;
    track.addEventListener('touchstart', handleTouchStart, { passive: true });
    track.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide]);

  return (
    <section className="py-16 md:py-24 px-8 md:px-16" aria-labelledby="projects-heading">
      <div className="container mx-auto max-w-4xl">
        {/* Header with arrows */}
        <div className="flex justify-between items-center mb-6">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Project highlights
          </h2>

          {/* Arrow controls (desktop only) */}
          <div className="hidden md:flex gap-4" aria-label="Slider controls">
            <button
              className="w-11 h-11 flex items-center justify-center border border-brown-200/10 backdrop-blur-xl text-brown-100 transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-brown-200/10 disabled:hover:text-brown-100"
              aria-label="Previous slide"
              onClick={() => goToSlide(currentSlide - 1)}
              disabled={currentSlide === 0}
            >
              ←
            </button>
            <button
              className="w-11 h-11 flex items-center justify-center border border-brown-200/10 backdrop-blur-xl text-brown-100 transition-all duration-300 hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-brown-200/10 disabled:hover:text-brown-100"
              aria-label="Next slide"
              onClick={() => goToSlide(currentSlide + 1)}
              disabled={currentSlide === totalSlides - 1}
            >
              →
            </button>
          </div>
        </div>

        <p className="text-lg text-brown-100 mb-12">
          Selected projects across child online safety, accountable AI, and justice-centered digital systems.
        </p>

        {/* Slider */}
        <div className="relative overflow-hidden mb-8">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            role="list"
            aria-label="Featured projects"
          >
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="min-w-full flex-shrink-0 flex flex-col gap-2 py-6 border-t border-b border-brown-200/10 transition-all duration-300 hover:pl-4 group"
                role="listitem"
              >
                <span className="text-xs uppercase tracking-widest font-body text-brown-200">
                  {project.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-medium transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="text-brown-100 leading-relaxed">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Dot navigation (mobile only) */}
        <div className="flex md:hidden justify-center gap-2 mb-8" aria-label="Slide indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-accent border-accent'
                  : 'bg-transparent border-brown-200/50 hover:border-brown-200'
              } border`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* CTA link */}
        <p className="text-center">
          <Link
            href="/projects"
            className="text-brown-100 transition-colors duration-300 hover:text-accent font-medium"
          >
            Browse the full project library →
          </Link>
        </p>
      </div>
    </section>
  );
}
