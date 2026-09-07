export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-16" aria-labelledby="hero-heading">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 text-center">
          <h1 id="hero-heading" className="text-6xl md:text-8xl font-display tracking-tight leading-tight">
            María-Teresa Carmier
          </h1>
          <p className="text-xl md:text-2xl text-ink/90 font-body">
            Interdisciplinary Artist, Design Researcher, Technologist
          </p>
          <p className="text-base md:text-lg text-ink/70">
            UC Berkeley, MDes, Master of Design, emphasis in New Media · UC Irvine, MIE, Master of Innovation and Entrepreneurship
          </p>
        </div>
      </div>
    </section>
  );
}
