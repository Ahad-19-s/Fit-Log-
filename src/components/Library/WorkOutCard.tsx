import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

function StatIcon({ type }: { type: "duration" | "calories" | "rating" }) {
  if (type === "duration") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2M9 2h6M12 2v3" />
      </svg>
    );
  }
  if (type === "calories") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <path d="M12 22c5 0 8-4 7-9-1-3-3-4-4-8-2 2-3 4-3 6-2-1-3-3-3-5-4 4-6 8-4 12 1 2 4 4 7 4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2Z" />
    </svg>
  );
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workOuts/${workout.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121512] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/60 hover:shadow-xl hover:shadow-black/30"
      aria-label={`View details for ${workout.name}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full border border-[#ccff00]/30 px-2.5 py-1 text-[10px] font-bold uppercase text-[#ccff00]"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-extrabold uppercase text-white">
          {workout.name}
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          Equipment: <span className="text-gray-200">{workout.equipment}</span>
        </p>

        {/* Stats */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-4 text-xs text-gray-300">
          <span className="flex items-center gap-1.5">
            <StatIcon type="duration" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <StatIcon type="calories" /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5 text-[#ff5252]">
            <StatIcon type="rating" /> {workout.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
