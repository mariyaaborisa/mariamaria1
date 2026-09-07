import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Show Me Your Colors | María-Teresa Carmier',
  description: "Show Me Your Colors is a Master's thesis demonstrating policy design for AI systems interacting with vulnerable users.",
};

export default function ShowMeYourColors() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-8 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="text-ink/80 transition-colors duration-300 hover:text-accent-ink mb-12 inline-block"
        >
          ← All projects
        </Link>

        <header className="mb-16">
          <div className="text-sm uppercase tracking-widest font-body text-ink/70 mb-4">
            1. AI Policy Design
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Show Me Your Colors
          </h1>
          <p className="text-xl text-ink/80">
            Master of Design Graduate Thesis Project — UC Berkeley, MDes, 2025
          </p>
        </header>

        <div className="space-y-12">
          <div className="space-y-6 text-lg text-ink/80 leading-relaxed">
            <p>
              Children don't have a neutral language for feelings. This project tried to build one. Working with K-5 students during the 2024 election, I watched kids map Inside Out colors onto political candidates. Red meant Trump meant anger meant power. Blue meant Kamala meant sadness meant losing. The system needed a new metaphor entirely.
            </p>
            <p>
              Ice cream melts. It's temporary, normal, and nobody's fault. That became the framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-ink/20 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-ink/70 block mb-4">Domain</span>
              <h3 className="text-xl font-display font-semibold mb-3">AI Policy Design · Child Privacy · Ethical AI · Education</h3>
              <p className="text-ink/80">Designing governance frameworks for AI systems that support vulnerable populations without creating surveillance or dependency.</p>
            </div>
            <div className="border border-ink/20 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-ink/70 block mb-4">Challenge</span>
              <h3 className="text-xl font-display font-semibold mb-3">Privacy vs. Parental Awareness</h3>
              <p className="text-ink/80">How to give parents visibility into their child's emotional well-being without creating surveillance that undermines trust or autonomy.</p>
            </div>
            <div className="border border-ink/20 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-ink/70 block mb-4">Approach</span>
              <h3 className="text-xl font-display font-semibold mb-3">Three-Tier Privacy Architecture</h3>
              <p className="text-ink/80">Information access levels designed to preserve child autonomy while enabling parental support without interrogation.</p>
            </div>
            <div className="border border-ink/20 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-ink/70 block mb-4">Impact</span>
              <h3 className="text-xl font-display font-semibold mb-3">Policy Framework for Vulnerable Users</h3>
              <p className="text-ink/80">Demonstrates that effective AI policy requires understanding human behavior, developmental psychology, and ethics of surveillance vs. support.</p>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">The Challenge</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Children experience heightened stress during daily transitions — moving between classes, returning home, processing external events like political elections. While emotional self-awareness is crucial for development, existing approaches either:
            </p>
            <ul className="space-y-2 text-ink/80 list-disc list-inside">
              <li>Ignore children's internal states entirely</li>
              <li>Create surveillance systems that undermine trust and autonomy</li>
              <li>Pathologize normal emotional responses</li>
            </ul>
            <p className="text-ink/80 leading-relaxed mt-4">
              <strong className="text-ink">Core Policy Question:</strong> How do you give parents visibility into their child's emotional well-being without creating surveillance that undermines trust or autonomy?
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Design Decisions: Technology Selection</h2>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">Why AI Over Physiological Markers</h3>
            <p className="text-ink/80 leading-relaxed mb-3">
              <strong className="text-ink">Initial approach:</strong> Chromatic stickers that changed color based on cortisol detection
            </p>
            <p className="text-ink/80 leading-relaxed mb-3">
              <strong className="text-ink">Problem:</strong> Physiological detection alone provided data but no intervention framework. Parents would see stress indicators without understanding context or having tools to respond appropriately.
            </p>
            <p className="text-ink/80 leading-relaxed">
              <strong className="text-ink">Solution:</strong> Shifted to HRV-based detection paired with AI-guided breathing exercises. This choice was fundamentally about policy control — AI allowed me to design governance rules for: when to intervene, what language to use, how to prevent dependency, and what information parents should access.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Policy Framework</h2>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">Privacy Architecture</h3>
            <p className="text-ink/80 leading-relaxed mb-6">
              The system implements a three-tier information architecture designed to preserve child autonomy while enabling parental support:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent-ink">
                    <th className="text-left py-4 px-4 font-display font-semibold">Stakeholder</th>
                    <th className="text-left py-4 px-4 font-display font-semibold">Access Level</th>
                    <th className="text-left py-4 px-4 font-display font-semibold">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-ink/20">
                    <td className="py-4 px-4 text-ink/80">Child</td>
                    <td className="py-4 px-4 text-ink/80">Full AI conversation, real-time breathing prompts, complete interaction history</td>
                    <td className="py-4 px-4 text-ink/80">Child receives immediate support and maintains control over disclosure</td>
                  </tr>
                  <tr className="border-b border-ink/20">
                    <td className="py-4 px-4 text-ink/80">Parent</td>
                    <td className="py-4 px-4 text-ink/80">Notification: "Feelings were big today" with ice cream visual. NO trigger details, NO conversation content, NO real-time alerts</td>
                    <td className="py-4 px-4 text-ink/80">Creates opening for gentle inquiry without enabling interrogation or real-time intervention</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-ink/80">System</td>
                    <td className="py-4 px-4 text-ink/80">HRV data, AI prompt logs, intervention patterns</td>
                    <td className="py-4 px-4 text-ink/80">Enables improvement of AI prompts and safety monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-ink/80 leading-relaxed mt-6">
              <strong className="text-ink">Key Policy Principle:</strong> Parents receive enough information to offer support ("I saw you had big feelings") without enough information to interrogate, punish, or override the child's choice to share or not share details.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">Language Framework</h3>
            <p className="text-ink/80 leading-relaxed mb-3">
              <strong className="text-ink">Challenge:</strong> Initial user research revealed children associated emotions with Inside Out color coding (red = anger, blue = sadness). During the 2024 election period, children were mapping these colors onto political narratives: red = Trump = anger = "good," blue = Kamala = sadness = "loser."
            </p>
            <p className="text-ink/80 leading-relaxed mb-3">
              <strong className="text-ink">Discovery moment:</strong> At an ice cream parlor with my sons, watching ice cream melt, I realized this metaphor captured what I needed: temporary, normal, manageable, and politically neutral.
            </p>
            <p className="text-ink/80 leading-relaxed mb-3">
              <strong className="text-ink">Result:</strong> Shifted from color-coded emotions to "melts" — avoiding both political contamination and pathologizing language like "meltdown" or "episode."
            </p>
            <p className="text-ink/80 leading-relaxed">
              Credit to my son, Baby E, for co-creating these playful melting phases and giving the interface its joyful energy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">User Research Insights</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Conducted emotion mapping exercises with elementary students to understand how children conceptualize and express emotional states. Key findings:
            </p>
            <ul className="space-y-3 text-ink/80">
              <li><strong className="text-ink">Complex emotion vocabulary:</strong> Children used terms like "disgust," "surprised anger," "mad sad," "fear," indicating sophisticated emotional awareness beyond simple happy/sad binary</li>
              <li><strong className="text-ink">Visual representation variation:</strong> Drawings showed diverse ways of expressing same emotion, confirming need for personalized rather than prescriptive emotional frameworks</li>
              <li><strong className="text-ink">Cultural influence:</strong> Strong influence from Inside Out movie created shared emotional vocabulary but also political contamination during election</li>
              <li><strong className="text-ink">Body awareness:</strong> Children could identify physical sensations ("my tummy feels weird") but needed support connecting these to emotional states</li>
            </ul>
            <p className="text-ink/80 leading-relaxed mt-4">
              <strong className="text-ink">Design implication:</strong> AI prompts needed to meet children where they are — using their language, validating their experience, and building connection between physical sensation and emotional awareness without imposing adult frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Outcomes & Next Steps</h2>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">What Worked</h3>
            <p className="text-ink/80 leading-relaxed mb-6">
              The privacy architecture held. Children maintained control over disclosure. Parents had enough to open a conversation, not enough to interrogate.
            </p>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">Open Questions for Scale</h3>
            <p className="text-ink/80 leading-relaxed">
              Open questions remain around cultural adaptation, long-term scaffolding versus dependency, and what happens when children compare their melts with peers.
            </p>
          </section>

          <div className="mt-16 pt-16 border-t border-ink/20">
            <h3 className="text-sm uppercase tracking-widest font-body text-ink/70 mb-6">
              Want to learn more about my work?
            </h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/about"
                className="px-6 py-3 bg-accent-surface text-ink transition-all duration-300 hover:bg-accent hover:text-brown-600 font-body uppercase tracking-wider text-sm font-medium text-center"
              >
                View Full Resume
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-ink/20 text-ink/80 transition-all duration-300 hover:border-accent hover:text-accent-ink font-body uppercase tracking-wider text-sm font-medium text-center"
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
