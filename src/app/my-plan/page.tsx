"use client";

import { usePlan } from "@/context/contexpage";
import Link from "next/link";
import Image from "next/image";

export default function MyPlanPage() {
  const { todayPlan, savedPlan, removeFromToday, removeFromSaved } = usePlan();
  const totalMinutes = todayPlan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = todayPlan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      <h1 className="text-3xl font-extrabold uppercase">MY PLAN</h1>
      <p className="mt-2 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-black/30 p-4">
          <p className="text-xl font-bold">{todayPlan.length}</p>
          <p className="text-gray-400 text-sm">Exercises</p>
        </div>
        <div className="rounded-lg bg-black/30 p-4">
          <p className="text-xl font-bold">{totalMinutes}</p>
          <p className="text-gray-400 text-sm">Minutes</p>
        </div>
        <div className="rounded-lg bg-black/30 p-4">
          <p className="text-xl font-bold">{totalCalories}</p>
          <p className="text-gray-400 text-sm">Calories</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-6 border-b border-white/10">
        <button className="pb-2 font-bold text-[#ccff00] border-b-2 border-[#ccff00]">
          Today’s Plan
        </button>
        <button className="pb-2 font-bold text-gray-400 hover:text-white">
          Saved
        </button>
      </div>

      {/* List */}
      <div className="mt-6 space-y-4">
        {todayPlan.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg font-bold">NOTHING HERE YET</p>
            <p className="text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-bold text-black hover:bg-lime-400"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          todayPlan.map((w) => (
            <div
              key={w.id}
              className="flex items-center gap-4 rounded-lg border border-white/10 p-4"
            >
              <div className="relative h-20 w-28 overflow-hidden rounded-md">
                <Image
                  src={w.image}
                  alt={w.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold uppercase">{w.name}</h3>
                <p className="text-sm text-gray-400">
                  Equipment: {w.equipment}
                </p>
                <div className="flex gap-4 text-xs text-gray-300 mt-2">
                  <span>{w.duration} min</span>
                  <span>{w.caloriesBurned} kcal</span>
                  <span>⭐ {w.rating}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/workOuts/${w.id}`}
                  className="rounded bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeFromToday(w.id)}
                  className="rounded border border-red-500 px-3 py-1 text-xs font-bold text-red-500"
                >
                  ✖ Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
