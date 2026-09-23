import HeroSection from "./components/hero-section";
import VisiMisiSection from "./components/visi-misi-section";
import AmanahSection from "./components/amanah-section";
import DampakSection from "./components/dampak-section";
import TimelineSection from "./components/timeline-section";
import TimSection from "./components/tim-section";
import AjakSection from "./components/ajak-section";
import FiturSection from "./components/fitur-section";
import FaqSection from "./components/faq-section";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#F5F7FF] text-gray-900 pb-8">
      {/* Bagian 1: Hero */}
      <HeroSection />

      {/* Bagian 2: Visi & Misi Kami */}
      <VisiMisiSection />

      {/* Bagian 3: Setiap donasi adalah Amanah & Laporan Keuangan */}
      <AmanahSection />

      {/* Bagian 4: Bersama Kita Telah Menciptakan Dampak Nyata */}
      <DampakSection />

      {/* Bagian 5: Awal Mula Cerita Perjalanan Kami (Timeline) */}
      <TimelineSection />

      {/* Bagian 6: Happiness Team di Balik Cerita Ini (Tim Kami) */}
      <TimSection />

      {/* Bagian 7: Cerita Ini Belum usai (Ajak Bergabung) */}
      <AjakSection />

      {/* Bagian 8: Kenapa Berdonasi Bersama Kami? (Fitur Layanan) */}
      <FiturSection />

      {/* Bagian 9: Hal yang Sering Ditanyakan (FAQ) */}
      <FaqSection />
    </main>
  );
}
