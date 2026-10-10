import HeroSection from "@/components/Hero-section";
import LibrarySection from "@/components/Library/Librarysection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101010] text-white">
      <HeroSection />
      <LibrarySection />
    </main>
  );
}
