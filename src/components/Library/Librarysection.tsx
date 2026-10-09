import { fetchWorkouts } from "@/lib/fetchWorkouts";
import WorkoutList from "./WorkOutList";

export default async function LibrarySection() {
  const workouts = await fetchWorkouts();

  return (
    <section id="library" className="mx-auto max-w-7xl px-5 py-16 text-white">
      <h2 className="text-4xl font-black uppercase">THE LIBRARY</h2>
      <p className="mt-3 text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="mt-8">
        <WorkoutList workouts={workouts} />
      </div>
    </section>
  );
}
