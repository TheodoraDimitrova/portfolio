import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { Footer } from "@/components/Footer/Footer";
import { Reveal } from "@/components/motion/Reveal";

export const HomePage = () => {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <ExperienceSection />

      <WorkSection />

      <ContactSection />

      <Reveal delay={0.05}>
        <Footer />
      </Reveal>
    </>
  );
};
