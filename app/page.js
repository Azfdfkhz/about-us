import HeroSection from "./components/hero-section";
import VisionMissionSection from "./components/vision-mission-section";
import TrustSection from "./components/trust-section";
import ImpactSection from "./components/impact-section";
import TimelineSection from "./components/timeline-section";
import TeamSection from "./components/team-section";
import InviteSection from "./components/invite-section";
import FeaturesSection from "./components/features-section";
import FaqSection from "./components/faq-section";
import PageLoader from "./components/page-loader";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pb-8">
      <PageLoader>
        <HeroSection />

        <VisionMissionSection />

        <TrustSection />

        <ImpactSection />

        <TimelineSection />

        <TeamSection />

        <InviteSection />

        <FeaturesSection />

        <FaqSection />
      </PageLoader>
    </main>
  );
}
