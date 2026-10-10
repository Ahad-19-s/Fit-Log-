import { fetchWorkouts } from "@/lib/fetchWorkouts";
import LibrarySection from "@/components/Library/LibrarySection";

export default async function WorkoutsPage() {
  // API থেকে workouts আনবে
  const workouts = await fetchWorkouts();

  return (
    <main className="bg-[#101010] text-white">
      {/* workouts props হিসেবে পাঠাও */}
      <LibrarySection workouts={workouts} />
    </main>
  );
}
