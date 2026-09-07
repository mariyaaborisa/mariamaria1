export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-display font-bold tracking-tight mb-4">
          María-Teresa Carmier
        </h1>
        <p className="text-xl text-brown-100 mb-8">
          Interdisciplinary Artist, Design Researcher, Technologist
        </p>
        <div className="bg-accent-surface p-8 text-bone">
          <p className="text-lg">
            Migration in progress - Next.js + TypeScript + Tailwind foundation is set up.
          </p>
          <p className="mt-4 text-sm opacity-80">
            Phase 1 Complete: Framework scaffolded with custom theme (brown #2B1D14 + green #55DD52/#2A6F2A)
          </p>
        </div>
      </div>
    </main>
  );
}
