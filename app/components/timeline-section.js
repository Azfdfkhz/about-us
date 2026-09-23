"use client";

const timelineItems = [
  {
    year: "2016",
    title: "THE GENESIS",
    description:
      "Lahirnya platform SharingHappiness yang menghapus batasan jarak untuk menghubungkan niat baik secara digital.",
    cardBg: "#FFE87C",
    badgeBg: "#1E5BBB",
    badgeText: "#FFFFFF",
    textColor: "#000000",
    dotColor: "#1E5BBB",
  },
  {
    year: "2018",
    title: "Open Ecosystem",
    description:
      "Perluasan akses bagi publik untuk menginisiasi gerakan sosial secara mandiri sebagai bentuk demokratisasi kebaikan.",
    cardBg: "#2563EB",
    badgeBg: "#FDCB09",
    badgeText: "#000000",
    textColor: "#FFFFFF",
    dotColor: "#93C5FD",
  },
  {
    year: "2019",
    title: "Strategic Independence",
    description:
      "Pembentukan entitas mandiri yang beroperasi secara profesional dan akuntabel guna memperkuat kepercayaan publik.",
    cardBg: "#FFE87C",
    badgeBg: "#1E5BBB",
    badgeText: "#FFFFFF",
    textColor: "#000000",
    dotColor: "#1E5BBB",
  },
  {
    year: "2020",
    title: "New Identity",
    description:
      "Pelaksanaan rebranding besar untuk menciptakan identitas yang lebih inklusif, modern, dan mampu menjangkau audiens universal.",
    cardBg: "#2563EB",
    badgeBg: "#FDCB09",
    badgeText: "#000000",
    textColor: "#FFFFFF",
    dotColor: "#93C5FD",
  },
  {
    year: "2021–2025",
    title: "Data-Driven Impact",
    description:
      "Pengembangan integrasi data untuk memastikan setiap dampak kebaikan terukur dan terverifikasi secara akurat serta real-time.",
    cardBg: "#FFE87C",
    badgeBg: "#1E5BBB",
    badgeText: "#FFFFFF",
    textColor: "#000000",
    dotColor: "#1E5BBB",
  },
];

export default function TimelineSection() {
  return (
    <section className="px-4 pb-10">
      {/* Title */}
      <h2
        className="font-poppins font-bold text-[#1E5BBB] mb-0.5"
        style={{ fontSize: "14px" }}
      >
        Awal Mula Cerita Perjalanan Kami
      </h2>
      <p
        className="font-poppins text-[#1E5BBB] mb-4"
        style={{ fontSize: "10px", fontWeight: 400 }}
      >
        Dari satu langkah kecil, hingga perjalanan yang terus bertumbuh
      </p>

      {/* Gray Video Container */}
      <div
        className="bg-[#D9D9D9] w-full flex items-center justify-center p-8 mb-8 text-center shadow-inner"
        style={{ borderRadius: "16px", minHeight: "160px" }}
      >
        <a
          href="https://youtu.be/VDUBjAeCFmE"
          target="_blank"
          rel="noopener noreferrer"
          className="font-poppins font-bold text-[#1E5BBB] underline hover:opacity-80 transition-opacity"
          style={{ fontSize: "13px" }}
        >
          https://youtu.be/VDUBjAeCFmE
        </a>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-7 space-y-5">
        {/* Blue vertical connecting line */}
        <div
          className="absolute left-3 top-3 bottom-3 w-0.5 bg-[#3B82F6]"
          style={{ zIndex: 0 }}
        />

        {timelineItems.map((item, idx) => (
          <div key={idx} className="relative z-10">
            {/* Timeline Circle Dot */}
            <div
              className="absolute -left-7 top-7 w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: item.dotColor }}
            />

            {/* Content Card */}
            <div
              className="p-4 shadow-md relative overflow-hidden"
              style={{
                borderRadius: "14px",
                backgroundColor: item.cardBg,
              }}
            >
              {/* Year Badge */}
              <span
                className="inline-block px-3 py-1 font-poppins font-bold rounded-full mb-2"
                style={{
                  fontSize: "9px",
                  backgroundColor: item.badgeBg,
                  color: item.badgeText,
                }}
              >
                {item.year}
              </span>

              {/* Title */}
              <h3
                className="font-poppins font-bold mb-1"
                style={{ fontSize: "11px", color: item.textColor }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="font-poppins leading-relaxed opacity-95"
                style={{ fontSize: "10px", fontWeight: 400, color: item.textColor }}
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
