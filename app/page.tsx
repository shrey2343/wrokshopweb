import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ImagineSection from "@/components/ImagineSection";
import DoctoralJourneySection from "@/components/DoctoralJourneySection";
import NowWhatSection from "@/components/NowWhatSection";
import ExperienceAssetSection from "@/components/ExperienceAssetSection";
import LeadershipSection from "@/components/LeadershipSection";
import RoadmapSection from "@/components/RoadmapSection";
import ConsultingMenuSection from "@/components/ConsultingMenuSection";
import AuthoritySection from "@/components/AuthoritySection";
import WhyBuyFromDoctorSection from "@/components/WhyBuyFromDoctorSection";
import FiveWaysSection from "@/components/FiveWaysSection";
import AcademiaRoadmapSection from "@/components/AcademiaRoadmapSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-[#0D1B2A] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ImagineSection />
      <DoctoralJourneySection />
      <NowWhatSection />
      <ExperienceAssetSection />
      <LeadershipSection />
      <RoadmapSection />
      <ConsultingMenuSection />
      <AuthoritySection />
      <WhyBuyFromDoctorSection />
      <FiveWaysSection />
      <AcademiaRoadmapSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <VideoSection />
      <Footer />
    </main>
  );
}
