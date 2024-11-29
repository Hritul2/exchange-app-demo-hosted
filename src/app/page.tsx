import HeroSection from "@/components/landing-page/HeroSection";
import KeyFeatures from "@/components/landing-page/KeyFeatures";
import PerformanceMetrics from "@/components/landing-page/PerformanceMetrics";
import SystemArchitecture from "@/components/landing-page/SystemArchitecture";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SystemArchitecture />
      <KeyFeatures />
      <PerformanceMetrics />
    </main>
  );
}
