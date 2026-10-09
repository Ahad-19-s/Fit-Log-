import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkOutCard";

interface WorkoutListProps {
  workouts: Workout[];
}

export default function WorkoutList({ workouts }: WorkoutListProps) {
  if (workouts.length === 0) {
    return (
      <p className="py-12 text-center text-gray-400">No workouts available.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
