
import type { Workout } from "@/types/workout";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.abcz.workers.dev/api/fitlog";

export async function fetchWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const result = await response.json();

  const workouts = Array.isArray(result)
    ? result
    : result.data ?? result.workouts ?? result.results;

  if (!Array.isArray(workouts)) {
    throw new Error("Invalid workout API response");
  }

  return workouts as Workout[];
}
