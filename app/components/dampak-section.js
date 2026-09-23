"use client";

import Image from "next/image";
import { Heart, Leaf } from "lucide-react";

export default function DampakSection() {
  return (
    <section className="px-4 pb-6">
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
          <div className="w-[170px] shrink-0">
            <Image
              src="/images/happines-gift.webp"
              alt="Happines Gift illustration"
              width={170}
              height={190}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex-1">
            <p
              className="font-poppins font-bold text-[#1E5BBB] uppercase tracking-wide"
              style={{ fontSize: "10px" }}
            >
              Total Donasi
            </p>
            <p
              className="font-poppins font-bold text-[#1E5BBB] tracking-tight leading-none my-1"
              style={{ fontSize: "40px" }}
            >
              800M+
            </p>
            <p
              className="font-poppins text-[#1E5BBB] leading-snug"
              style={{ fontSize: "10px", fontWeight: 400 }}
            >
              Amanah yang telah tersalurkan untuk menghadirkan kebahagian.
            </p>
          </div>
        </div>

        {/* 2 White Stat Cards (Corner Radius 9) */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Card 1: 40Jt+ */}
          <div
            className="bg-white p-3 relative overflow-hidden flex flex-col justify-between"
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
            className="bg-white p-3 relative overflow-hidden flex flex-col justify-between"
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
          className="bg-[#FFFDFD] p-4 mb-4 relative shadow-sm"
          style={{ borderRadius: "14px" }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="pr-12">
              <h3
                className="font-poppins font-bold text-[#1E5BBB] mb-1"
                style={{ fontSize: "12px" }}
              >
                Sebaran Titik Kebaikan
              </h3>
              <p
                className="font-poppins text-[#1E5BBB] leading-relaxed"
                style={{ fontSize: "10px", fontWeight: 400 }}
              >
                Peta ini menggambarkan luasnya jangkauan penyaluran program SharingHappiness. Setiap titik menjadi bukti hadirnya bantuan, kepedulian, dan kolaborasi untuk menciptakan dampak nyata.
              </p>
            </div>
            {/* Weather SVG icon */}
            <div className="absolute top-3 right-3 shrink-0">
              <Image
                src="/images/weather.svg"
                alt="Weather icon"
                width={42}
                height={42}
              />
            </div>
          </div>

          {/* Map Container (Corner Radius 16) */}
          <div
            className="overflow-hidden relative w-full border border-gray-100"
            style={{ borderRadius: "16px", height: "150px" }}
          >
            <Image
              src="/images/Proposal-Aceh-Gebyar-Kemerdekaan.webp"
              alt="Indonesia map"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Text middle below map */}
        <div className="text-center px-3 py-2">
          <p
            className="font-poppins text-[#1E5BBB] leading-relaxed"
            style={{ fontSize: "12px", fontWeight: 400 }}
          >
            Dengan lebih dari <span className="font-bold">1 juta pendonor</span> dan <span className="font-bold">400+ NGO</span> terdaftar sebagai mitra. bersama-sama kita telah menyalurkan kebaikan untuk sesama.
          </p>
          <p
            className="font-poppins text-[#1E5BBB] mt-3"
            style={{ fontSize: "12px", fontWeight: 400 }}
          >
            Terima kasih, <span className="font-bold">Teman Berbagi</span>
          </p>
        </div>

        {/* Happy children graphic at bottom */}
        <div className="mt-3 flex justify-center">
          <Image
            src="/images/Proposal-Aceh-Gebyar-Kemerdekaan.png"
            alt="Happy children"
            width={360}
            height={160}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
