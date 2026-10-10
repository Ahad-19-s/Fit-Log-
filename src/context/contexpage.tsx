"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Workout } from "@/types/workout";
import { toast } from "react-toastify";

interface PlanContextType {
  todayPlan: Workout[];
  savedPlan: Workout[];
  addToToday: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromToday: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedPlan, setSavedPlan] = useState<Workout[]>([]);

  // Load from localStorage
  useEffect(() => {
    const today = localStorage.getItem("todayPlan");
    const saved = localStorage.getItem("savedPlan");
    if (today) setTodayPlan(JSON.parse(today));
    if (saved) setSavedPlan(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
  }, [todayPlan]);

  useEffect(() => {
    localStorage.setItem("savedPlan", JSON.stringify(savedPlan));
  }, [savedPlan]);

  const addToToday = (workout: Workout) => {
    setTodayPlan((prev) =>
      prev.some((w) => w.id === workout.id) ? prev : [...prev, workout],
    );
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout: Workout) => {
    setSavedPlan((prev) => [...prev, workout]);
    toast.info("Saved for later");
  };

  const removeFromToday = (id: number) => {
    setTodayPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSavedPlan((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedPlan,
        addToToday,
        addToSaved,
        removeFromToday,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
