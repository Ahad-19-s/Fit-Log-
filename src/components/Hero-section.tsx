import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        {/* Left Content */}
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-[family-name:var(--font-oswald)] text-5xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Train with intent.
            <span className="mt-2 block text-lime-400">Log every set.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-lime-400 px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-black transition hover:bg-lime-300"
          >
            Browse Workouts
            <span aria-hidden="true" className="text-xl">
              ↘
            </span>
          </a>
        </div>

        {/* Right Hero Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/banner.png"
              alt="Athlete training in the gym"
              width={900}
              height={1000}
              priority
              className="h-[360px] w-full object-cover sm:h-[480px] md:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
