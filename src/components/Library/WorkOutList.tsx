import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkOutCard";

interface WorkOutListProps {
  workouts: Workout[];
}

export default function WorkOutList({ workouts }: WorkOutListProps) {
  if (workouts.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#181818] px-5 py-16 text-center">
        <p className="text-lg font-bold text-white">No workouts found</p>
        <p className="mt-2 text-sm text-gray-400">
          Please check your workout API data.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
