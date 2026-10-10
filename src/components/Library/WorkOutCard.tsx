import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#181818] transition duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:bg-[#1d1d1d]"
    >
      {/* Workout Image */}
      <div className="relative h-52 overflow-hidden bg-[#252525]">
        {workout.image ? (
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-6xl">
            🏋️
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          {workout.difficulty}
        </span>
      </div>

      {/* Workout Information */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-lime-400"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-extrabold uppercase leading-6 text-white transition group-hover:text-lime-400">
          {workout.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Equipment: {workout.equipment}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-3 border-t border-white/10 pt-5 mt-5 text-xs text-gray-300">
          <span title="Workout duration">
            <span className="mr-1 text-lime-400">◷</span>
            {workout.duration} min
          </span>

          <span title="Calories burned">
            <span className="mr-1 text-lime-400">🔥</span>
            {workout.caloriesBurned} kcal
          </span>

          <span title="Workout rating">
            <span className="mr-1 text-lime-400">★</span>
            {Number(workout.rating).toFixed(1)}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs text-gray-500">
            {workout.sets} sets · {workout.reps} reps
          </span>

          <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
            View details ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
