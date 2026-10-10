// src/components/Library/LibrarySection.tsx
"use client";

import WorkOutList from "./WorkoutList";
import Link from "next/link";

export default function LibrarySection({ workouts }) {
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

        {/* Workout list render */}
        <WorkOutList workouts={workouts} />
      </div>
    </section>
  );
}
