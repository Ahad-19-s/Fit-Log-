// types.ts
export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];   // e.g. ["Chest", "Arms"]
  equipment: string;        // e.g. "Barbell, Bench"
  difficulty: string;       // e.g. "Intermediate"
  duration: number;         // minutes
  caloriesBurned: number;   // kcal
  sets: number;
  reps: string;             // e.g. "6-8"
  rating: number;           // e.g. 4.8
  description: string;
  instructions: string[];   // array of steps
}
