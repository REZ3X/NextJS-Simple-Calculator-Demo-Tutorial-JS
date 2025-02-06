"use client";

import Footer from "@/components/footer";
import Calculator from "@/components/calculator";

/**
 * Home component that serves as the main page of the application.
 * It includes a Calculator component and a Footer component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground">
      <Calculator />
      <Footer />
    </div>
  );
}