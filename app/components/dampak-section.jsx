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
        <div className="flex items-center gap-2 sm:gap-4 mb-4 pb-8">
          <div className="w-[195px] sm:w-[210px] shrink-0">
            <Image
              src="/images/dampak-nyata/happines-gift.webp"
              alt="Happines Gift illustration"
              width={350}
              height={270}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex-1 min-w-0 pr-1">
            <p
              className="font-poppins font-bold text-[#1E5BBB] uppercase tracking-wide text-[10px] sm:text-[12px]"
            >
              Total Donasi
            </p>
            <p
              className="font-poppins font-extrabold text-[#1E5BBB] tracking-tight leading-none my-1 text-[34px] sm:text-[48px] md:text-[54px]"
            >
              800M+
            </p>
            <p
              className="font-poppins text-[#1E5BBB] leading-snug text-[10px] sm:text-[12px] font-normal break-words"
            >
              Amanah yang telah tersalurkan untuk menghadirkan kebahagian.
            </p>
          </div>
        </div>

        {/* 2 White Stat Cards (Naik ke atas menumpuk bagian bawah ilustrasi) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mb-6 px-1 -mt-17 sm:-mt-19 relative z-10">
          {/* Card 1: 40Jt+ */}
          <div
            className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex items-end justify-between border border-yellow-100/60 min-h-[76px] sm:min-h-[85px]"
          >
            <div className="min-w-0">
              <p
                className="font-poppins font-bold text-[#1E5BBB] tracking-tight leading-none text-[24px] sm:text-[32px]"
              >
                40Jt+
              </p>
              <p
                className="font-poppins text-[#1E5BBB] mt-1 text-[9.5px] sm:text-[11px] font-normal leading-tight"
              >
                Penerima Manfaat
              </p>
            </div>
            <div className="shrink-0 ml-1">
              <img 
                src="/images/dampak-nyata/oval-love-two.svg" 
                alt="Heart" 
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
              />
            </div>
          </div>

          {/* Card 2: 300+ */}
          <div
            className="bg-white p-3 sm:p-4 rounded-xl shadow-sm flex items-end justify-between border border-yellow-100/60 min-h-[76px] sm:min-h-[85px]"
          >
            <div className="min-w-0">
              <p
                className="font-poppins font-bold text-[#1E5BBB] tracking-tight leading-none text-[24px] sm:text-[32px]"
              >
                300+
              </p>
              <p
                className="font-poppins text-[#1E5BBB] mt-1 text-[9.5px] sm:text-[11px] font-normal leading-tight"
              >
                Titik Penyaluran
              </p>
            </div>
            <div className="shrink-0 ml-1">
              <img 
                src="/images/dampak-nyata/leaf-1.svg" 
                alt="leaf" 
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
              />
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
            <div className="absolute top-5 right-0 shrink-0">
              <Image
                src="/images/dampak-nyata/weather.svg"
                alt="Weather icon"
                width={130}
                height={150}
              />
            </div>
          </div>

          <div className="overflow-hidden relative w-full border border-gray-100">
            <img
              src="/images/dampak-nyata/maps-lokasi.webp"
              alt="maps lokasi"
              className="w-full h-52.5 object-cover"
              style={{
                borderRadius: "16px",
              }}
            />
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
          <div className="-mt-20 sm:-mt-22 flex justify-center overflow-visible">
            <Image
              src="/images/dampak-nyata/Proposal-Aceh-Gebyar-Kemerdekaan.webp"
              alt="Anak-anak penerima manfaat Sharing Happiness"
              width={650}
              height={400}
              className="w-[550px] max-w-none object-contain pointer-events-none select-none"
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
