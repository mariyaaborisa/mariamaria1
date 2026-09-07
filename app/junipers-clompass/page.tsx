import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Juniper's Clompass | María-Teresa Carmier",
  description: "Juniper's Clompass is an analog-digital learning companion that turns a vintage clock into a compass and storytelling tool for kids.",
};

export default function JunipersClompass() {
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
            3. Human Computer Interactions
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Juniper's Clompass
          </h1>
          <p className="text-xl text-brown-100">
            Re-enchanting learning through analog-digital hybridity
          </p>
        </header>

        <div className="space-y-12">
          <div className="space-y-6 text-lg text-brown-100 leading-relaxed">
            <p>
              A vintage clock housing an Arduino and a magnetometer. Point it north and a story begins. Point it east and the adventure opens. Children learned magnetism because they needed it to unlock the next scene.
            </p>
            <p>
              Juniper's Clompass fuses navigation and narrative. The compass is both the tool and the metaphor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Domain</span>
              <h3 className="text-xl font-display font-semibold mb-3">Creative Literacies · Technical Making · Curiosity-Driven Learning</h3>
              <p className="text-brown-100">Merging storytelling, writing, and electronics to create hybrid learning experiences.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Experience</span>
              <h3 className="text-xl font-display font-semibold mb-3">Analog clock → digital compass</h3>
              <p className="text-brown-100">Hands-on exploration that encourages learners to orient themselves through story and sky.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Toolkit</span>
              <h3 className="text-xl font-display font-semibold mb-3">Arduino · Magnetometer · LCD</h3>
              <p className="text-brown-100">Modular electronics coupled with narrative prompts for classroom tinkering.</p>
            </div>
            <div className="border border-brown-200/10 p-8">
              <span className="text-xs uppercase tracking-widest font-body text-brown-200 block mb-4">Curriculum</span>
              <h3 className="text-xl font-display font-semibold mb-3">Co-designed lesson plans</h3>
              <p className="text-brown-100">Tested with K–5 learners to strengthen spatial reasoning and creative writing.</p>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">The Challenge</h2>
            <p className="text-brown-100 leading-relaxed">
              Educators observed that students struggled with persistence and confidence when facing ambiguous, open-ended problems. Traditional STEM curricula celebrated correct answers over process reflection, leaving little room for students to grapple with uncertainty.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Design Process</h2>
            <div className="space-y-6 text-brown-100 leading-relaxed">
              <p>
                Traditional education separates creative writing from technical building. The Clompass fuses both — students build a compass and use it to navigate stories embedded in physical, directional space.
              </p>
              <p>
                Vintage clock, Arduino, and magnetometer. Compass directions linked to narrative elements — North means beginning, East means adventure. Writing prompts emerge from physical orientation.
              </p>
              <p>
                Students wanted to understand magnetism because it unlocked story possibilities. Curiosity drove learning across both domains.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Design Decisions</h2>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">Learning Framework</h3>
            <p className="text-brown-100 leading-relaxed mb-6">
              Juniper's Compass integrates embodied cognition and maker pedagogy. Students manipulate materials—gears, magnets, and recycled parts—to build personal "compass" artifacts that represent how they orient to challenges.
            </p>
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">Technology Integration</h3>
            <ul className="space-y-3 text-brown-100 mb-6">
              <li>Physical prototyping with 3D-printed parts and Arduino sensors (light and tilt)</li>
              <li>Simple coding tasks introducing coordinate systems and directionality</li>
              <li>Optional digital layer using Scratch for virtual compass visualization</li>
            </ul>
            <p className="text-brown-100 leading-relaxed">
              Students inquire, build, reflect, and iterate. The compass becomes a record of how they navigate uncertainty, not whether they got it right.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">User Research & Insights</h2>
            <p className="text-brown-100 leading-relaxed mb-4">
              <strong className="text-bone">Participants:</strong> 50 students (Grades 3–5) and 5 teachers in mixed-language classrooms.
            </p>
            <p className="text-brown-100 leading-relaxed mb-4">
              <strong className="text-bone">Methods:</strong> Observation, think-alouds, student journaling, and teacher reflection logs.
            </p>
            <ul className="space-y-3 text-brown-100 mb-6">
              <li>Students who typically disengaged showed increased persistence when "navigation" language replaced "right/wrong."</li>
              <li>Peer-to-peer guidance emerged naturally, strengthening empathy and collaboration.</li>
              <li>Teachers observed stronger articulation of how problems were solved rather than whether they were solved.</li>
            </ul>
            <p className="text-brown-100 leading-relaxed">
              <strong className="text-bone">Design implication:</strong> Curriculum should make uncertainty visible and playable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">Outcomes</h2>
            <p className="text-brown-100 leading-relaxed">
              Students who typically disengaged showed stronger persistence when navigation replaced evaluation. Peer guidance emerged without prompting.
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
