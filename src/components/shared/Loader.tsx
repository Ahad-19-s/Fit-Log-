export default function Loader() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#ccff00]"></div>
      <p className="ml-4 text-[#ccff00] font-bold">Loading workouts…</p>
    </div>
  );
}
