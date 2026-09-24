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
        <div className="grid grid-cols-2 gap-9 mb-6 -mt-16 pl-3.5">
          {/* Card 1: 40Jt+ */}
          <div
            className="bg-white p-5 relative overflow-hidden flex justify-between h-18 w-60  "
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
              <div className="self-end translate-y-1">
                <img 
                  src="/images/oval-love-two.svg" 
                  alt="Heart" 
                  className="w-6 h-6 object-contain" 
                />
              </div>
          </div>

          {/* Card 2: 300+ */}
          <div
            className="bg-white p-5 relative overflow-hidden flex justify-between h-10 w-50"
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
            <div className="self-end translate-y-3">
                <img 
                  src="/images/leaf-1.svg" 
                  alt="leaf" 
                  className="w-8 h-8 object-contain" 
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
                src="/images/weather.svg"
                alt="Weather icon"
                width={130}
                height={150}
              />
            </div>
          </div>

          <div className="overflow-hidden relative w-full border border-gray-100">
            <img
              src="/images/maps-lokasi.webp"
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
