"use client";

import { usePlan } from "@/context/contexpage";
import type { Workout } from "@/types/workout";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToToday, addToSaved } = usePlan();

  return (
    <div className="flex gap-4 pt-4">
      <button
        onClick={() => addToToday(workout)}
        className="flex items-center gap-2 rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-bold text-black hover:bg-lime-400"
      >
        ➕ Add to today’s plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="flex items-center gap-2 rounded-lg border border-[#ccff00] px-4 py-2 text-sm font-bold text-[#ccff00] hover:bg-[#ccff00]/10"
      >
        💾 Save for later
      </button>
    </div>
  );
}
