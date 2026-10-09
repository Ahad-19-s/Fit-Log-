import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkOutCard";

interface WorkoutListProps {
  workouts: Workout[];
}

export default function WorkoutList({ workouts }: WorkoutListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
