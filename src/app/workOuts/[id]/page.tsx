import { Suspense } from "react";
import WorkoutPage from "./WorkoutPage";

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading workout...</div>}>
      <WorkoutPage />
    </Suspense>
  );
}
