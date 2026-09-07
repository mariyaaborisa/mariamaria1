'use client';

import { useEffect, useRef } from 'react';
import ScrambleText from './ScrambleText';

const exhibitions = [
  { name: "Women's Biennial" },
  { name: "Mount Saint Mary's University" },
  { name: 'The University of Memphis' },
  { name: 'Phoenix Zine Fest' },
  { name: 'Bay Area Queer Zine Fest' },
  { name: 'Long Beach Zine Fest' },
  { name: 'NY Latin Flair Fest' },
  { name: 'Arcus Social Justice Fellow' },
  { name: 'Forthcoming Chapter AU Press' },
  { name: 'SF Design Week' },
  { name: 'Speculative Ecologies Lab' },
  { name: 'Revolutionary Tech Lab' },
  { name: 'Design Futures Alumni' },
  { name: 'University of California, Berkeley' },
  { name: 'University of California, Irvine' },
  { name: 'Abode Press' },
  { name: 'Look What She Did' },
  { name: 'LA Dept of Cultural Affairs' },
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollPosition;

        // Reset when reaching the end
        if (scrollPosition >= scrollContainer.scrollHeight / 2) {
          scrollPosition = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 py-24" aria-labelledby="hero-heading">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Moving Exhibitions */}
          <div className="relative h-[600px] overflow-hidden">
            <div
              ref={scrollRef}
              className="h-full overflow-y-scroll scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Duplicate the list for seamless loop */}
              {[...exhibitions, ...exhibitions].map((exhibition, index) => (
                <div
                  key={`${exhibition.name}-${index}`}
                  className="py-6 border-b border-ink/10"
                >
                  <div className="text-2xl md:text-3xl font-display tracking-tight text-ink">
                    {exhibition.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Static Bio */}
          <div className="space-y-8 md:sticky md:top-32">
            <div>
              <h1 id="hero-heading" className="text-6xl md:text-8xl font-ballet tracking-tight leading-tight mb-6">
                <ScrambleText text="María-Teresa Carmier" delay={300} />
              </h1>
              <p className="text-xl md:text-2xl text-ink/90 font-body leading-relaxed">
                Cyborg Baby Mama
              </p>
            </div>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed font-body max-w-xl">
              South Central Los Angeles–based artist, futures design engineer, and movement technologist working across performance, moving image, installation, speculative writing, and participatory design. Her work explores technology, ecology, memory, and the conditions of survival through trigueñanismo, her framework for a Black, Mexican Indigenous, and tri-cosmology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
