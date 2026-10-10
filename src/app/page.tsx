import { Suspense } from "react";
import HeroSection from "@/components/Hero-section";
import LibrarySection from "@/components/Library/LibrarySection";
import Loader from "@/components/shared/Loader";
import { fetchWorkouts } from "@/lib/fetchWorkouts";

async function WorkoutsPage() {
  const workouts = await fetchWorkouts();
  return <LibrarySection workouts={workouts} />;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <HeroSection />
      <Suspense fallback={<Loader />}>
        <WorkoutsPage />
      </Suspense>
    </main>
  );
}
