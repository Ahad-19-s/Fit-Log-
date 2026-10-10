import { Suspense } from "react";
import { fetchWorkouts } from "@/lib/fetchWorkouts";
import WorkOutList from "./WorkOutList";
import Link from "next/link";

async function WorkoutContent() {
  try {
    const workouts = await fetchWorkouts();

    return <WorkOutList workouts={workouts} />;
  } catch (error) {
    console.error("Failed to load workout library:", error);

    return (
      <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-8 text-center">
        <p className="font-bold text-white">Could not load workouts</p>
        <p className="mt-2 text-sm text-gray-400">
          Please check the API URL and try again.
        </p>
      </div>
    );
  }
}

export default function LibrarySection() {
  return (
    <section
      id="library"
      className="scroll-mt-24 border-t border-white/5 bg-[#101010] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-extrabold tracking-[0.3em] text-lime-400">
              FIND YOUR NEXT CHALLENGE
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
              The Library<span className="text-lime-400">.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <Link
            href="#library"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-lime-400 transition hover:text-lime-300"
          >
            Explore all workouts <span>↓</span>
          </Link>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-96 animate-pulse rounded-xl border border-white/10 bg-[#181818]"
                />
              ))}
            </div>
          }
        >
          <WorkoutContent />
        </Suspense>
      </div>
    </section>
  );
}
