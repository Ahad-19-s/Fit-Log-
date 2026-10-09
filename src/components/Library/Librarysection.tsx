import { fetchWorkouts } from "@/lib/fetchWorkouts";
import WorkoutList from "./WorkOutList";

export default async function LibrarySection() {
  const workouts = await fetchWorkouts();

  return (
    <section id="library" className="mx-auto max-w-7xl px-5 py-20 text-white">
      <div className="mb-10">
        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-lime-400">
          WORKOUT COLLECTION
        </p>

        <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">
          The Library
        </h2>

        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <WorkoutList workouts={workouts} />
    </section>
  );
}
