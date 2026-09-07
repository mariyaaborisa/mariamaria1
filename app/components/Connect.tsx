'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function Connect() {
  useEffect(() => {
    // Calendar initialization will happen after script loads
    const initCalendar = () => {
      if (typeof window !== 'undefined' && (window as any).calendar) {
        const target = document.getElementById('calendar-target');
        if (target) {
          (window as any).calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ247n1Ktc4V-cvE5iPgrfZFxX-4vIGLM5Qxn5_7rD3o-48qqW_FDCxxQtXdU1iSRLBtN-MUi7GX?gv=true',
            color: '#2A6F2A',
            label: 'Schedule a conversation',
            target,
          });
        }
      }
    };

    // Try to init if script already loaded
    initCalendar();

    // Also listen for the script load event
    window.addEventListener('load', initCalendar);
    return () => window.removeEventListener('load', initCalendar);
  }, []);

  return (
    <>
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize when script loads
          if (typeof window !== 'undefined' && (window as any).calendar) {
            const target = document.getElementById('calendar-target');
            if (target) {
              (window as any).calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ247n1Ktc4V-cvE5iPgrfZFxX-4vIGLM5Qxn5_7rD3o-48qqW_FDCxxQtXdU1iSRLBtN-MUi7GX?gv=true',
                color: '#2A6F2A',
                label: 'Schedule a conversation',
                target,
              });
            }
          }
        }}
      />

      <section className="bg-accent-surface py-16 md:py-24 px-8 md:px-16 text-center" id="connect">
        <div className="container mx-auto max-w-3xl">
          <div className="text-sm uppercase tracking-widest font-body text-bone/60 mb-6">
            Let's Connect
          </div>

          <p className="text-lg md:text-xl text-bone leading-relaxed mb-8">
            <strong className="font-semibold text-bone">
              Available for mission-aligned roles, collaborations, and research opportunities
            </strong>{' '}
            across AI safety, public-interest technology, digital infrastructure, and community-centered design.
            <br />
            <span className="text-bone/90">
              West Coast (PNW, California) · Remote, hybrid, or in-person · Open to US, Mexico, Canada, and EU contexts · Bilingual (English/Spanish)
            </span>
          </p>

          <div id="calendar-target" className="flex justify-center"></div>
        </div>
      </section>
    </>
  );
}
