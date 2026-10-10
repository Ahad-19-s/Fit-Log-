"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { usePlan } from "@/context/ContexPage";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { todayPlan, savedPlan } = usePlan();
  const planCount = todayPlan.length;
  const savedCount = savedPlan.length;

  const isWorkoutActive = pathname === "/" || pathname.startsWith("/workouts");
  const isMyPlanActive = pathname === "/my-plan";

  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      active
        ? "bg-[#ccff00] text-black"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0b]/95 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Hamburger - Mobile */}
        <button
          className="flex flex-col gap-1 p-2 text-white sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog Logo" width={32} height={32} />
          <span className="text-2xl font-black tracking-tight sm:text-3xl">
            FIT<span className="text-[#ccff00]">LOG</span>.
          </span>
        </Link>

        {/* Center Links - Desktop */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-2 sm:flex">
          <Link href="/workouts" className={linkClass(isWorkoutActive)}>
            Workout
          </Link>

          <Link href="/my-plan" className={linkClass(isMyPlanActive)}>
            My Plan
          </Link>
        </div>

        {/* Right-side Badges */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black sm:px-4 sm:text-sm"
          >
            <span>Plan</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-black/10 tabular-nums">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-[#ccff00]/60 px-3 py-2 text-xs font-bold text-white sm:px-4 sm:text-sm"
          >
            <span>Saved</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-white/10 tabular-nums">
              {savedCount}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="flex flex-col items-center gap-2 bg-[#0b0d0b]/95 py-4 sm:hidden">
          <Link
            href="/workouts"
            className={linkClass(isWorkoutActive)}
            onClick={() => setOpen(false)}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={linkClass(isMyPlanActive)}
            onClick={() => setOpen(false)}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
}
