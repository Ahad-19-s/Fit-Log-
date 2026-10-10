"use server"; // Next.js hint for server-side function
import type { Workout } from "@/types/workout";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.api-store.workers.dev/api/fitlog";

export async function fetchWorkouts(): Promise<Workout[]> {
  "use cache"; // Next.js hint → prerender safe

  try {
    const response = await fetch(API_URL, {
      // cache: "force-cache", // static data হলে
      next: { revalidate: 60 }, // প্রতি 60 সেকেন্ডে refresh হবে
    });

    if (!response.ok) {
      console.error("API not OK:", response.status);
      return [];
    }

    const result = await response.json();
    const workouts = Array.isArray(result)
      ? result
      : result.data ?? result.workouts ?? result.results;

    if (!Array.isArray(workouts)) {
      console.error("Invalid workout API response:", result);
      return [];
    }

    return workouts as Workout[];
  } catch (error) {
    console.error("Workout fetch error:", error);
    return [];
  }
}
