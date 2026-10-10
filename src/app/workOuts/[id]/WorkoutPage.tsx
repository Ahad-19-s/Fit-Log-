"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchWorkouts } from "@/lib/fetchWorkouts";
import type { Workout } from "@/types/workout";
import WorkoutActions from "@/components/Library/WorkOutActions";
import Image from "next/image";

export default function WorkoutPage() {
  const { id } = useParams();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorkout = async () => {
      const workouts = await fetchWorkouts();
      const found = workouts.find((w: Workout) => String(w.id) === String(id));
      setWorkout(found || null);
      setLoading(false);
    };
    loadWorkout();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold animate-pulse">Loading workout...</h2>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold">Workout not found</h2>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left side: Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/20">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right side: Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold uppercase">{workout.name}</h1>
          <p className="text-gray-400">{workout.description}</p>

          {/* Category tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-[#ccff00]/40 px-3 py-1 text-xs font-bold uppercase text-[#ccff00]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-gray-400">Equipment</h3>
              <p className="text-gray-200">{workout.equipment}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Difficulty</h3>
              <p className="text-gray-200">{workout.difficulty}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Sets</h3>
              <p className="text-gray-200">{workout.sets}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Reps</h3>
              <p className="text-gray-200">{workout.reps}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Duration</h3>
              <p className="text-gray-200">{workout.duration} min</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Calories</h3>
              <p className="text-gray-200">{workout.caloriesBurned} kcal</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400">Rating</h3>
              <p className="text-gray-200">{workout.rating.toFixed(1)}</p>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400">
              Instructions
            </h3>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-gray-200">
              {workout.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {/* CTA buttons */}
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </section>
  );
}
