import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLog | Workout Planner",
  description:
    "Explore workouts, build your daily training plan, and track your fitness journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-screen bg-[#0b0d0b] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
