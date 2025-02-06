import "./globals.css";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Simple Calculator",
  description: "A simple calculator app built with Next.js",
};

/**
 * RootLayout component that provides the main layout structure for the application.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="bg-background text-foreground transition-colors duration-300">
          <div className="min-h-screen flex flex-col">
            <header className="p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">Calculator</h1>
            </header>
            <main className="flex-grow">{children}</main>
          </div>
        </body>
      </html>
    </>
  );
}