import { Inter, Plus_Jakarta_Sans, Iceberg  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const iceberg = Iceberg({
  subsets: ['latin'],
  weight: '400', // Iceberg only has 400
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Marcel Grace Infotech - Modern Tech Solutions",
  description:
    "Transform your ideas into reality with our modern tech expertise. We specialize in building MVPs and scaling digital products for startups and midsize companies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className="font-sans antialiased bg-dots min-h-screen">
        <div className="fixed inset-0 glass pointer-events-none z-[-1]" style={{backdropFilter: 'blur(24px) saturate(180%)', background: 'rgba(255,255,255,0.08)'}}></div>
        <div className="relative">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-primary-50/50 via-neutral-50/80 to-secondary-50/50 -z-10" />
          <div className="relative z-0">
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
