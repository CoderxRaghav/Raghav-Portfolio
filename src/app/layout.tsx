import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/effects/Preloader";
import ClickSpark from "@/components/effects/ClickSpark";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import PageTransition from "@/components/effects/PageTransition";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Raghav Tiwari — Full Stack Developer",
  description: "Personal portfolio of Raghav Tiwari, a B.Tech Computer Science student at PSIT Kanpur, specializing in MERN stack, data analysis, and generative AI.",
  keywords: ["Raghav Tiwari", "Portfolio", "PSIT Kanpur", "Full Stack Developer", "MERN Stack", "Data Analyst", "Gemini Student Ambassador", "Software Engineer"],
  authors: [{ name: "Raghav Tiwari" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen relative overflow-x-clip ${kanit.variable}`}>
        {/* Core Visual & Animation Providers */}
        <Preloader />
        <ClickSpark />
        <CustomCursor />
        <ScrollProgress />
        
        {/* Page transitions and main content */}
        <PageTransition>
          <div className="relative z-10">{children}</div>
        </PageTransition>
      </body>
    </html>
  );
}
