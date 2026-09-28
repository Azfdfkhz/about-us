import HeroSection from "./components/hero-section";
import VisionMissionSection from "./components/vision-mission-section";
import TrustSection from "./components/trust-section";
import ImpactSection from "./components/impact-section";
import TimelineSection from "./components/timeline-section";
import TeamSection from "./components/team-section";
import InviteSection from "./components/invite-section";
import FeaturesSection from "./components/features-section";
import FaqSection from "./components/faq-section";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pb-8">
      {/* Bagian 1: Hero */}
      <HeroSection />

      {/* Bagian 2: Visi & Misi Kami */}
      <VisionMissionSection />

      {/* Bagian 3: Setiap donasi adalah Amanah & Laporan Keuangan */}
      <TrustSection />

      {/* Bagian 4: Bersama Kita Telah Menciptakan Dampak Nyata */}
      <ImpactSection />

      {/* Bagian 5: Awal Mula Cerita Perjalanan Kami (Timeline) */}
      <TimelineSection />

      {/* Bagian 6: Happiness Team di Balik Cerita Ini (Tim Kami) */}
      <TeamSection />

      {/* Bagian 7: Cerita Ini Belum usai (Ajak Bergabung) */}
      <InviteSection />

      {/* Bagian 8: Kenapa Berdonasi Bersama Kami? (Fitur Layanan) */}
      <FeaturesSection />

      {/* Bagian 9: Hal yang Sering Ditanyakan (FAQ) */}
      <FaqSection />
    </main>
  );
}
