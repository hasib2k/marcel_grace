import { MuseoModerno } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo",
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: "swap",
});

export const metadata = {
  title: "Marcel Grace Infotech - QA Engineer & Frontend Developer",
  description:
    "Professional QA Engineer & Frontend Developer with expertise in Python, Pytest, React, Next.js. Building modern web applications and ensuring software quality.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${museoModerno.variable} font-sans antialiased min-h-screen`}>
        {/* Glassmorphism background layers */}
        <div className="fixed inset-0 bg-gradient-to-br from-neutral-50 via-secondary-100 to-accent-200 -z-20" />
        <div className="fixed inset-0 bg-gradient-to-tr from-primary-300/20 via-transparent to-secondary-400/20 -z-19" />
        <div className="fixed inset-0 backdrop-blur-sm -z-18" />
        
        {/* Animated background particles */}
        <div className="fixed inset-0 overflow-hidden -z-17">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </div>

        <div className="relative z-0">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
