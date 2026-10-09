import HeroSection from "@/components/Hero-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section
        id="library"
        className="mx-auto min-h-60 max-w-7xl px-5 py-16 text-white"
      >
        <h2 className="text-3xl font-bold">Explore Workouts</h2>

        <p className="mt-3 text-gray-400">
          Your workout library will appear here.
        </p>
      </section>
    </main>
  );
}
