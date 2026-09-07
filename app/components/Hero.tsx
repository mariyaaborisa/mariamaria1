import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-16" aria-labelledby="hero-heading">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight">
              María-Teresa Carmier
            </h1>
            <p className="text-xl md:text-2xl text-brown-100 font-body">
              Interdisciplinary Artist, Design Researcher, Technologist
            </p>
            <p className="text-base md:text-lg text-brown-200">
              UC Berkeley, MDes, Master of Design Engineering · UC Irvine, MIE, Master of Innovation and Entrepreneurship
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 border border-brown-200/10">
              <Image
                src="/_old-html-site/assets/MT_headshotupdate.png"
                alt="María-Teresa Carmier"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
