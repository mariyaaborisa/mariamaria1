import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The George Moses Horton Project | María-Teresa Carmier',
  description: 'The George Moses Horton Project is an interactive responsible AI case study that revives the 19th-century poet through an AI-driven avatar.',
};

export default function ResponsibleAI() {
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
            2. Human Computer Interactions
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            The George Moses Horton Project
          </h1>
          <p className="text-xl text-brown-100">
            Examining responsible AI through an interactive, archival case study
          </p>
        </header>

        <div className="space-y-12">
          <p className="text-lg text-brown-100 leading-relaxed">
            How might we use AI to resurrect suppressed histories? The George Moses Horton Project reimagines the 19th-century poet's voice through an AI-driven, interactive avatar. Visitors can ask Horton questions and receive spoken responses synthesized from historical text and machine learning models, turning archival study into dialogue.
          </p>

          <section>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-6">Demo</h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/NY2jyJgr7Sw"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Historical Context</h2>
            <p className="text-brown-100 leading-relaxed">
              George Moses Horton (1798-1883) was an enslaved poet who taught himself to read and attempted to purchase his freedom through his writing. As one of the first African American published poets in the South, Horton's work challenged the dehumanization of slavery while navigating the constraints of his bondage. His voice, suppressed by systems of oppression, deserves amplification—but how do we resurrect historical figures ethically through technology?
            </p>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Domain</span>
              <h3 className="text-xl font-display font-semibold mb-3">AI · AR · Exhibition Design · Historical Storytelling</h3>
              <p className="text-brown-100">Blending responsible machine learning with immersive interpretation inside museum and classroom settings.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Experience</span>
              <h3 className="text-xl font-display font-semibold mb-3">Interactive avatar installation</h3>
              <p className="text-brown-100">Conversation-led encounters where visitors pose questions directly to a resurrected Horton.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Stack</span>
              <h3 className="text-xl font-display font-semibold mb-3">Speech-to-Text · GPT · AWS Polly · D-ID API</h3>
              <p className="text-brown-100">Combining language models with voice and facial synthesis for responsive dialogue.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Setting</span>
              <h3 className="text-xl font-display font-semibold mb-3">Case study in responsible AI</h3>
              <p className="text-brown-100">Designed to interrogate ethics, authorship, and empathy within cultural heritage technologies.</p>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Technical Stack</h2>
            <ul className="space-y-3 text-brown-100">
              <li><strong className="text-bone">Speech-to-Text + GPT:</strong> Historically grounded conversational responses</li>
              <li><strong className="text-bone">AWS Polly + D-ID API:</strong> Lifelike voice and facial synthesis</li>
              <li><strong className="text-bone">Gradio interface:</strong> Accessible museum/classroom interaction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Design Process</h2>
            <div className="space-y-4 text-brown-100 leading-relaxed">
              <p>
                <strong className="text-bone">Research & ethical framework:</strong> Analyzed Horton's complete corpus and established guidelines for responsible AI representation—transparency about AI generation, no speculation beyond documented history.
              </p>
              <p>
                <strong className="text-bone">Technical development:</strong> Integrated speech-to-text, GPT, and avatar synthesis to create responsive, historically grounded dialogue.
              </p>
              <p>
                <strong className="text-bone">Key question:</strong> Who has the right to resurrect suppressed voices? This project confronts fundamental questions of consent, cultural sovereignty, and technological power—demonstrating how AI can serve historical memory and human dignity rather than extraction and exploitation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Impact</h2>
            <p className="text-brown-100 leading-relaxed">
              This prototype reframes AI as a tool for cultural preservation rather than replacement by bridging human memory, algorithmic interpretation, and empathy.
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
