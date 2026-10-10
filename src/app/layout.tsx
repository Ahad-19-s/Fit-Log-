import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";
import { PlanProvider } from "@/context/ContexPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[#0b0d0b] text-white">
        <PlanProvider>
          <Suspense fallback={<div>Loading navbar...</div>}>
            <Navbar />
          </Suspense>
          {children}
          <ToastContainer position="bottom-right" autoClose={2000} />
        </PlanProvider>
        <Footer />
      </body>
    </html>
  );
}
