import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:gap-20 lg:py-28">
        {/* Left Content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-xs font-bold tracking-[0.22em] text-lime-400">
              WORKOUT LIBRARY
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Train with
            <br />
            <span className="text-lime-400">intent.</span>
            <br />
            Log every set.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#library"
              className="inline-flex items-center gap-3 rounded-md bg-lime-400 px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-black transition hover:bg-lime-300"
            >
              Browse Workouts
              <span aria-hidden="true" className="text-xl">
                ↘
              </span>
            </a>

            <span className="text-sm text-gray-500">
              Build your plan. Track your progress.
            </span>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-black text-white">12</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                Exercises
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">3</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                Skill levels
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-lime-400">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                Your pace
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Hero Image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-lime-400/10 blur-[90px]" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#191919] p-3 shadow-2xl">
            <div
              style={{ position: "relative" }}
              className="relative h-[350px] overflow-hidden rounded-xl bg-gradient-to-br from-[#30352b] via-[#20221e] to-[#111111] sm:h-[460px]"
            >
              <Image
                src="/banner.png" // ✅ public ফোল্ডার থেকে সরাসরি path
                alt="Fitness workout illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90" // ✅ Tailwind এ valid opacity
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold tracking-[0.25em] text-lime-400">
                  SHOW UP. PUT IN THE WORK.
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                  Stronger every set.
                </h2>
              </div>
            </div>

            {/* Session information */}
            <div className="flex items-center justify-between gap-4 px-3 py-4">
              <div>
                <p className="text-xs text-gray-500">YOUR NEXT SESSION</p>
                <p className="mt-1 font-bold text-white">
                  Start training today
                </p>
              </div>

              <a
                href="#library"
                aria-label="Explore workout library"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xl font-bold text-black transition hover:bg-lime-300"
              >
                ↗
              </a>
            </div>
          </div>

          {/* Floating label */}
          <div className="absolute -left-3 top-10 rounded-lg border border-white/10 bg-[#202020] px-4 py-3 shadow-xl sm:-left-8">
            <p className="text-xs text-gray-400">STAY CONSISTENT</p>
            <p className="mt-1 text-sm font-extrabold text-lime-400">
              ONE SET AT A TIME
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
