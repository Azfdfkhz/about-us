"use client";

import Image from "next/image";
import { Heart, Leaf } from "lucide-react";

export default function DampakSection() {
  return (
    <section className="pb-3">
      {/* Yellow to white gradient container */}
      <div
        className="relative overflow-hidden p-5 pt-8"
        style={{
          borderRadius: "84px 84px 28px 28px",
          background: "linear-gradient(to bottom, #FDCB09 0%, #FEDF64 45%, #FFFFFF 100%)",
        }}
      >
        {/* Title */}
        <div className="text-center mb-6">
          <h2
            className="font-poppins text-[#1E5BBB]"
            style={{ fontSize: "14px" }}
          >
            <span className="font-bold block text-[#1E5BBB]">Bersama</span>
            <span className="font-normal text-[#1E5BBB]">Kita Telah Menciptakan Dampak Nyata</span>
          </h2>
        </div>

        {/* Hero Image + Total Donasi 800M+ */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[250px] shrink-0">
            <Image
              src="/images/happines-gift.webp"
              alt="Happines Gift illustration"
              width={270}
              height={290}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex-1">
            <p
              className="font-poppins font-bold text-[#1E5BBB] uppercase tracking-wide"
              style={{ fontSize: "12px" }}
            >
              Total Donasi
            </p>
            <p
              className="font-poppins font-bold text-[#1E5BBB] tracking-tight leading-none my-1"
              style={{ fontSize: "55px" }}
            >
              800M+
            </p>
            <p
              className="font-poppins text-[#1E5BBB] leading-snug"
              style={{ fontSize: "12px", fontWeight: 400 }}
            >
              Amanah yang telah tersalurkan untuk menghadirkan kebahagian.
            </p>
          </div>
        </div>

        {/* 2 White Stat Cards (Corner Radius 9) */}
        <div className="grid grid-cols-2 gap-3 mb-6 -mt-16 pl-8">
          {/* Card 1: 40Jt+ */}
          <div
            className="bg-white p-3 relative overflow-hidden flex justify-between h-18 w-55  "
            style={{ borderRadius: "9px", minHeight: "85px" }}
          >
            <div>
              <p
                className="font-poppins font-bold text-[#1E5BBB] tracking-tight leading-none"
                style={{ fontSize: "32px" }}
              >
                40Jt+
              </p>
              <p
                className="font-poppins text-[#1E5BBB] mt-1"
                style={{ fontSize: "10px", fontWeight: 400 }}
              >
                Penerima Manfaat
              </p>
            </div>
            <div className="self-end">
              <Heart size={16} className="text-[#4B91FF]" />
            </div>
          </div>

          {/* Card 2: 300+ */}
          <div
            className="bg-white p-5 relative overflow-hidden flex justify-between h-10 w-45"
            style={{ borderRadius: "9px", minHeight: "85px" }}
          >
            <div>
              <p
                className="font-poppins font-bold text-[#1E5BBB] tracking-tight leading-none"
                style={{ fontSize: "32px" }}
              >
                300+
              </p>
              <p
                className="font-poppins text-[#1E5BBB] mt-1"
                style={{ fontSize: "10px", fontWeight: 400 }}
              >
                Titik Penyaluran
              </p>
            </div>
            <div className="self-end">
              <Leaf size={16} className="text-[#4B91FF]" />
            </div>
          </div>
        </div>

        {/* Inner Card (Sebaran Titik Kebaikan & Map) */}
        <div
          className="relative bg-[#FFFDFD] p-4 mb-4"
          style={{ borderRadius: "14px" }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="pr-28">
              <h3
                className="font-poppins font-bold text-[#1E5BBB] mb-1"
                style={{ fontSize: "14px" }}
              >
                Sebaran Titik Kebaikan
              </h3>
              <p
                className="font-poppins text-[#1E5BBB] leading-relaxed"
                style={{ fontSize: "12px", fontWeight: 400 }}
              >
                Peta ini menggambarkan luasnya jangkauan penyaluran program SharingHappiness. Setiap titik menjadi bukti hadirnya bantuan, kepedulian, dan kolaborasi untuk menciptakan dampak nyata.
              </p>
            </div>
            {/* Weather SVG icon */}
            <div className="absolute top-3 right-3 shrink-0">
              <Image
                src="/images/weather.svg"
                alt="Weather icon"
                width={105}
                height={105}
              />
            </div>
          </div>

          {/* Map Container (Corner Radius 16) */}
          {/* NOTE: no real map screenshot asset was provided in /public/images,
              so this is a stylized placeholder (dotted distribution map) matching
              the pink/purple look in the design. Swap the background for a real
              map export (e.g. from Google Maps / Mapbox) when available. */}
          <div
            className="overflow-hidden relative w-full border border-gray-100"
            style={{
              borderRadius: "16px",
              height: "210px",
              background: "radial-gradient(circle at 30% 40%, #F3D9F0 0%, #F6E4F3 45%, #FBEFF9 100%)",
            }}
          >
            {/* Faint dot-grid texture to evoke a map */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(#E8B8E0 0.5px, transparent 0.5px)",
                backgroundSize: "8px 8px",
                opacity: 0.5,
              }}
            />
            {/* Scattered "distribution point" markers */}
            {[
              { top: "18%", left: "22%" }, { top: "30%", left: "30%" },
              { top: "22%", left: "40%" }, { top: "45%", left: "55%" },
              { top: "60%", left: "35%" }, { top: "70%", left: "50%" },
              { top: "40%", left: "68%" }, { top: "55%", left: "75%" },
              { top: "78%", left: "22%" }, { top: "15%", left: "60%" },
            ].map((pos, i) => (
              <span
                key={i}
                className="absolute rounded-full"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: "5px",
                  height: "5px",
                  backgroundColor: "#7C3AED",
                  opacity: 0.75,
                }}
              />
            ))}
            {/* Zoom controls, top right */}
            <div className="absolute top-2 right-2 flex flex-col bg-white rounded shadow-sm overflow-hidden">
              <span className="w-5 h-5 flex items-center justify-center text-[10px] text-gray-500 border-b border-gray-100">+</span>
              <span className="w-5 h-5 flex items-center justify-center text-[10px] text-gray-500">–</span>
            </div>
          </div>

          {/* Text middle below map */}
          <div className="text-center px-5 py-6">
            <p
              className="font-poppins text-[#1E5BBB] leading-relaxed"
              style={{ fontSize: "14px", fontWeight: 400 }}
            >
              Dengan lebih dari <span className="font-bold">1 juta pendonor</span> dan <span className="font-bold">400+ NGO</span> terdaftar sebagai mitra. bersama-sama kita telah menyalurkan kebaikan untuk sesama.
            </p>
            <p
              className="font-poppins text-[#1E5BBB] mt-3"
              style={{ fontSize: "14px", fontWeight: 400 }}
            >
              Terima kasih, <span className="font-bold">Teman Berbagi</span>
            </p>
          </div>

          {/* Happy children graphic at bottom */}
          <div className="-mt-22 flex justify-center overflow-visible">
            <Image
              src="/images/Proposal-Aceh-Gebyar-Kemerdekaan.webp"
              alt="Anak-anak penerima manfaat Sharing Happiness"
              width={320}
              height={290}
              className="w-[620px] max-w-none object-contain"
            />
          </div>

          {/* Source / Data */}
          <div className="text-right mt-1 pr-1">
            <p
              className="font-poppins italic text-[#1E5BBB]"
              style={{ fontSize: "7px", fontWeight: 400 }}
            >
              *Berdasarkan Data 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
