"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Bagaimana cara daftar dan berlangganan donasi rutin?",
    answer:
      "Masuk website sharinghappiness.org, pilih daftar atau masuk (jika sudah punya akun SH) kemudian klik Donasi Rutin, isi identitas, pilih program donasi rutin (harian/pekanan/bulanan), lalu klik OK.",
  },
  {
    question: "Bagaimana saya mengetahui program yang saya ikuti sudah disalurkan?",
    answer:
      "Laporan penyaluran donasi dikirimkan secara berkala melalui email dan dapat dilihat langsung pada halaman update program di platform.",
  },
  {
    question: "Bagaimana saya mengetahui program yang saya ikuti sudah disalurkan?",
    answer:
      "Anda juga dapat memantau secara berkala pada menu Laporan Program di akun SharingHappiness Anda.",
  },
  {
    question: "Bagaimana saya mengetahui program yang saya ikuti sudah disalurkan?",
    answer:
      "Tim kami selalu mempublikasikan transparansi penyaluran donasi beserta dokumentasi di setiap kampanye.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="pb-12">
      {/* Top White Card with Rounded Top 70px */}
      <div
        className="bg-white px-5 pt-8 pb-6 mb-6"
        style={{ borderRadius: "70px 70px 20px 20px" }}
      >
        <h2
          className="font-poppins font-extrabold text-black text-center mb-6"
          style={{ fontSize: "18px" }}
        >
          Hal yang Sering Ditanyakan
        </h2>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-[#D9D9D9] pb-4"
            >
              <button
                onClick={() => toggle(idx)}
                aria-expanded={openIdx === idx}
                className="w-full flex items-center justify-between text-left gap-3 py-1"
              >
                <span
                  className="font-poppins font-semibold text-[#5093D3] leading-snug"
                  style={{ fontSize: "14px" }}
                >
                  {item.question}
                </span>
                <span className="shrink-0 text-[#5093D3]">
                  {openIdx === idx ? (
                    <ChevronUp size={22} />
                  ) : (
                    <ChevronDown size={22} />
                  )}
                </span>
              </button>

              {openIdx === idx && (
                <p
                  className="font-poppins text-[#686C71] mt-2 leading-relaxed"
                  style={{ fontSize: "13px", fontWeight: 500 }}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Help Card */}
      <div
        className="mx-4 p-5 flex items-center gap-4 relative"
        style={{
          borderRadius: "10px",
          backgroundColor: "#F0F8FE",
          border: "0.5px solid #3A70C4",
        }}
      >
        <div className="shrink-0">
          <Image
            src="/images/bubbles-question.svg"
            alt="Bubbles question icon"
            width={76}
            height={76}
          />
        </div>

        <div className="flex-1">
          <h3
            className="font-poppins font-bold text-[#0047CA] mb-1"
            style={{ fontSize: "15px" }}
          >
            Masih Perlu Bantuan?
          </h3>
          <p
            className="font-poppins text-[#0047CA] leading-snug mb-3"
            style={{ fontSize: "12px", fontWeight: 400 }}
          >
            Temukan informasi lebih lengkap di <span className="font-bold">pusat bantuan kami</span> atau hubungi <span className="font-bold">Customer Service Kami.</span>
          </p>

          {/* flex-wrap: tombol turun ke baris berikutnya bila layar sempit */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              className="px-4 py-2 font-poppins font-bold text-white rounded-md text-[12px] shadow-sm active:scale-95 transition-transform"
              style={{ backgroundColor: "#2E68B2" }}
            >
              Pusat Bantuan
            </button>
            <span className="font-poppins text-[#0047CA] text-[12px]">atau</span>
            <button
              className="px-4 py-2 font-poppins font-bold text-[#0047CA] bg-white rounded-md border border-[#3A70C4] text-[12px] shadow-sm active:scale-95 transition-transform"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}