import Hero from "@/components/sections/Hero";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ConnectSection from "@/components/sections/ConnectSection";
import AcademicsSection from "@/components/sections/AcademicsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Hero />
      <MarqueeSection />
      <AboutSection />
      <AcademicsSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ConnectSection />
    </main>
  );
}
