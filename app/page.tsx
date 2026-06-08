import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ExperienceAssetSection from "@/components/ExperienceAssetSection";
import LeadershipSection from "@/components/LeadershipSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-[#0D1B2A] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ExperienceAssetSection />
      <LeadershipSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <VideoSection />
      <Footer />
    </main>
  );
}
