import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[#ccff00]/10 blur-3xl"></div>

      {/* Glassmorphism card */}
      <div className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-12 flex flex-col items-center shadow-2xl">
        {/* Big glowing 404 */}
        <h1 className="text-8xl font-extrabold tracking-widest text-[#ccff00] drop-shadow-[0_0_15px_#ccff00] animate-pulse">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Animated gradient button */}
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-gradient-to-r from-[#ccff00] to-lime-400 px-8 py-3 font-semibold text-black shadow-lg hover:scale-105 transition-transform duration-300"
        >
          ⬅ Back to Home
        </Link>

        {/* Decorative glowing line */}
        <div className="mt-12 w-32 h-1 bg-gradient-to-r from-[#ccff00] to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
