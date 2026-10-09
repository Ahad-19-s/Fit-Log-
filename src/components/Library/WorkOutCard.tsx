import Link from "next/link";
import Image from "next/image";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workOuts/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-[#171717] transition duration-300 hover:-translate-y-1 hover:border-lime-400/60"
    >
      <div className="relative h-52 overflow-hidden bg-[#242424]">
        {workout.image ? (
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-6xl">
            🏋️
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="min-h-12 text-lg font-extrabold uppercase leading-6 text-white">
          {workout.name}
        </h3>

        <p className="mt-3 text-sm text-gray-400">
          Equipment: {workout.equipment}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-gray-300">
          <span title="Duration">◷ {workout.duration} min</span>
          <span title="Calories">🔥 {workout.caloriesBurned} kcal</span>
          <span title="Rating">★ {workout.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}
