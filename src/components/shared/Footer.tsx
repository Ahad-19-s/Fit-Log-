export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d0b] py-6 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        {/* Left side: Logo */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#ccff00]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 10h2v4H4v-4zm14 0h2v4h-2v-4zM7 7h2v10H7V7zm8 0h2v10h-2V7zm-4 2h2v6h-2V9z" />
          </svg>

          <span className="font-bold uppercase tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Right side: Copyright */}
        <p className="text-center text-xs leading-5 text-gray-400">
          © 2026 FitLog — Workout Library.{" "}
          <span className="italic">Train hard, log honest.</span>
        </p>
      </div>
    </footer>
  );
}
