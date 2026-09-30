"use client";
import { useState } from 'react';
import { Play, X } from 'lucide-react';

const withOpacity = (hex, opacity = 1) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const timelineItems = [
  {
    year: "2016",
    title: "THE GENESIS",
    description:
      "Lahirnya platform SharingHappiness yang menghapus batasan jarak untuk menghubungkan niat baik secara digital.",
    cardBg: "#FDCB09",
    cardOpacity: 0.4,
    badgeBg: "#1E5BBB",
    badgeOpacity: 1,
    badgeText: "#FFFFFF",
    textColor: "#000000",
    dotColor: "#1E5BBB",
  },
  {
    year: "2018",
    title: "Open Ecosystem",
    description:
      "Perluasan akses bagi publik untuk menginisiasi gerakan sosial secara mandiri sebagai bentuk demokratisasi kebaikan.",
    cardBg: "#1E5BBB",
    cardOpacity: 1,
    badgeBg: "#FDCB09",
    badgeOpacity: 1,
    badgeText: "#000000",
    textColor: "#FFFFFF",
    dotColor: "#93C5FD",
  },
  {
    year: "2019",
    title: "Strategic Independence",
    description:
      "Pembentukan entitas mandiri yang beroperasi secara profesional dan akuntabel guna memperkuat kepercayaan publik.",
    cardBg: "#FDCB09",
    cardOpacity: 0.4,
    badgeBg: "#1E5BBB",
    badgeOpacity: 1,
    badgeText: "#FFFFFF",
    textColor: "#000000",
    dotColor: "#1E5BBB",
  },
  {
    year: "2020",
    title: "New Identity",
    description:
      "Pelaksanaan rebranding besar untuk menciptakan identitas yang lebih inklusif, modern, dan mampu menjangkau audiens universal.",
    cardBg: "#1E5BBB",
    cardOpacity: 1,
    badgeBg: "#FDCB09",
    badgeOpacity: 1,
    badgeText: "#000000",
    textColor: "#FFFFFF",
    dotColor: "#93C5FD",
  },
  {
    year: "2021–2025",
    title: "Data-Driven Impact",
    description:
      "Pengembangan integrasi data untuk memastikan setiap dampak kebaikan terukur dan terverifikasi secara akurat serta real-time.",
    cardBg: "#FDCB09",
    cardOpacity: 0.4,
    badgeBg: "#1E5BBB",
    badgeOpacity: 1,
    badgeText: "#FFFFFF",
    textColor: "#000000",
    dotColor: "#1E5BBB",
  },
];

export default function TimelineSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="px-4 pb-10">
      <h2
        className="font-poppins font-bold text-[#1E5BBB] mb-0.5 px-3.5"
        style={{ fontSize: "14px" }}
      >
        Awal Mula Cerita Perjalanan Kami
      </h2>
      <p
        className="font-poppins text-[#1E5BBB] px-3.5 mb-5"
        style={{ fontSize: "14px", fontWeight: 400 }}
      >
        Dari Satu Langkah Kecil, hingga Perjalanan yang Terus Bertumbuh
      </p>

      <div
        onClick={() => setIsVideoOpen(true)}
        className="w-full max-w-lg mx-auto mb-8 overflow-hidden shadow-lg group rounded-2xl cursor-pointer relative"
      >
        <img
          src="https://img.youtube.com/vi/VDUBjAeCFmE/maxresdefault.jpg"
          alt="Cerita Perjalanan Kami"
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors duration-300">
          <div className="w-14 h-14 bg-[#f5f5f5] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 text-[red] ml-1 fill-[red]" />
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 transition-opacity animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition-colors"
              aria-label="Tutup Video"
            >
              <X size={20} />
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                src="https://www.youtube.com/embed/VDUBjAeCFmE?autoplay=1"
                title="Cerita Perjalanan Kami"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      <div className="relative pl-6 space-y-4">
        <div
          className="absolute left-[7px] top-15 bottom-15 sm:bottom-11 w-0.5 bg-[#3B82F6]"
          style={{ zIndex: 0 }}
        />

        {timelineItems.map((item) => (
          <div key={item.year} className="relative z-10">
            <div
              className="absolute -left-5.75 top-15 w-3.5 h-3.5 rounded-full border-2 border-[#DBEAFE] shadow-sm shrink-0"
              style={{ backgroundColor: item.dotColor }}
            />

            <div
              className="p-3.5 sm:p-4 shadow-sm relative overflow-hidden wrap-break-words rounded-xl"
              style={{
                backgroundColor: withOpacity(item.cardBg, item.cardOpacity),
              }}
            >
              <span
                className="inline-flex items-center px-3 py-1 font-poppins font-regular leading-none rounded-full mb-2 text-[11px]"
                style={{
                  backgroundColor: withOpacity(item.badgeBg, item.badgeOpacity),
                  color: item.badgeText,
                }}
              >
                {item.year}
              </span>

              <h3
                className="font-poppins font-bold mb-1 text-[13px] break-words"
                style={{ color: item.textColor }}
              >
                {item.title}
              </h3>

              <p
                className="font-poppins leading-relaxed opacity-95 text-[11px] font-normal break-words"
                style={{ color: item.textColor }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
