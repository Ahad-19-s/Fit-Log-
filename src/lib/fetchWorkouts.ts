import type { Workout } from "@/types/workout";

const API_URL ="https://api.abcz.workers.dev/api/fitlog";

export async function fetchWorkouts(): Promise<Workout[]> {
  if (!API_URL) {
    throw new Error("Workout API URL is missing in .env.local");
  }

  const response = await fetch(API_URL, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const result = await response.json();

  // API সরাসরি array অথবা object-এর ভেতরে array দিতে পারে।
  const workouts = Array.isArray(result)
    ? result
    : result.data ?? result.workouts ?? result.results;

  if (!Array.isArray(workouts)) {
    throw new Error("Invalid workout API response");
  }

  return workouts as Workout[];
}