"use client";

import Image from "next/image";
import { ShieldCheck, ExternalLink, ArrowRight } from "lucide-react";

const legalItems = [
  {
    title: "Terdaftar di Kementerian Hukum dan HAM",
    code: "AHU-000017.AH.01.05 Tahun 2019",
  },
  {
    title: "Memiliki Izin Pengumpulan Sumbangan Kementerian Sosial",
    code: "TU.01.02/3914-Dinsos/XI/2025",
  },
  {
    title: "Memiliki Surat Keterangan Pengumpulan Uang dan Barang",
    code: "111.HUK-PS.2026 Yayasan Berbagi Bahagia",
  },
];

const reportYears = [2021, 2022, 2023, 2024];

export default function AmanahSection() {
  return (
    <section className="px-4 py-6">
      {/* Light blue shape container */}
      <div
        className="relative overflow-hidden p-5"
        style={{
          borderRadius: "13px",
          backgroundColor: "rgba(219, 234, 254, 0.34)",
        }}
      >
        {/* ShieldCheck Watermark Icon */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "-15px",
            bottom: "-5px",
            color: "#1E5BBB",
            opacity: 0.12,
          }}
        >
          <ShieldCheck size={160} strokeWidth={1.2} />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <h2
            className="font-poppins font-bold text-[#1E5BBB] text-center mb-1.5"
            style={{ fontSize: "14px" }}
          >
            Setiap donasi adalah Amanah
          </h2>

          {/* Subtitle */}
          <p
            className="font-poppins text-[#7B7B7B] text-center mb-4 leading-relaxed"
            style={{ fontSize: "12px", fontWeight: 500 }}
          >
            Sharing Happiness berkomitmen menjalankan seluruh program secara legal, transparan, dan dapat dipertanggungjawabkan.
          </p>

          {/* 3 Legal Items */}
          <div className="space-y-3">
            {legalItems.map((item, idx) => (
              <div key={idx}>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-poppins font-semibold text-black hover:text-[#1E5BBB] transition-colors"
                  style={{ fontSize: "12px" }}
                >
                  <span>{item.title}</span>
                  <ExternalLink size={10} className="shrink-0 text-black" />
                </a>
                <p
                  className="font-poppins text-[#7B7B7B] mt-0.5"
                  style={{ fontSize: "11px", fontWeight: 500 }}
                >
                  {item.code}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description below shape */}
      <p
        className="font-poppins text-[#7B7B7B] mt-4 px-3 leading-relaxed text-justify"
        style={{ fontSize: "12px", fontWeight: 500 }} 
      >
        Kepercayaan Anda adalah tanggung jawab kami. Setiap kebaikan yang dititipkan dikelola dengan penuh kehati-hatian dan dicatat secara transparan. Laporan keuangan kami tersedia secara terbuka agar setiap kebaikan dapat dipertanggungjawabkan.
      </p>

      {/* Laporan Keuangan Header */}
      <h3
        className="font-poppins text-[#1E5BBB] mt-5 mb-3 px-3"
        style={{ fontSize: "14px" }}
      >
        <span className="font-bold">Laporan Keuangan</span>{" "}
        <span className="font-normal">Sharing Happiness</span>
      </h3>

      {/* Laporan Keuangan Section with report.svg */}
      <div className="flex items-center justify-between gap-3 px-8">
        {/* Report SVG: 107 x 107 */}
        <div className="shrink-0">
          <Image
            src="/images/report.svg"
            alt="Report icon"
            width={137}
            height={137}
          />
        </div>

        {/* 4 Report Buttons: w:203 h:28 */}
        <div className="flex flex-col gap-2 flex-1 items-end">
          {reportYears.map((year) => (
            <a
              key={year}
              href="#"
              className="flex items-center justify-between px-3 bg-white transition-colors hover:bg-blue-50"
              style={{
                width: "233px",
                height: "38px",
                borderRadius: "7px",
                border: "1px solid #1E5BBB",
                textDecoration: "none",
              }}
            >
              <span
                className="font-poppins text-[#1E5BBB]"
                style={{ fontSize: "10px", fontWeight: 400 }}
              >
                Laporan Keuangan {year}
              </span>
              <ArrowRight size={12} color="#1E5BBB" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
