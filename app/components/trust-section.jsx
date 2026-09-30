"use client";

import Image from "next/image";
import { ShieldCheck, ExternalLink, ArrowRight } from "lucide-react";

const legalItems = [
  {
    title: "Akta Notaris",
    code: "Irma Rachmawati, SH NO 58 Tangqal 23 April 2014",
  },
  {
    title: "Perubahan Akta Yayasan",
    code: "Ajeng Dini Pertiwi, S.H., M.Kn. NO AHU-00044.AH.02.01.TAHUN 2021 05 November 2021",
  },
  {
    title: "NPWP",
    code: "70.418.963.8-429.000",
  },
  {
    title: "Surat Keterangan Domisili",
    code: "517/123-Kel.Domisili/2023",
  },
  {
    title: "Terdaftar di Kementerian Hukum dan HAM",
    code: "AHU-000017.AH.01.05 Tahun 2019",
    driveUrl: "https://drive.google.com/file/d/1XgHAipEP1tgLng9Nd3qhTtW8_KGK_rIa/view", 
  },
  {
    title: "Memiliki Izin Pengumpulan Sumbangan Kementerian Sosial",
    code: "TU.01.02/3914-Dinsos/XI/2025",
    driveUrl: "https://drive.google.com/file/d/1TWdyohnyQkVtPlVyUhgG2ObVIAmlBCZx/view",
  },
  {
    title: "Memiliki Surat Keterangan Pengumpulan Uang dan Barang",
    code: "111.HUK-PS.2026 Yayasan Berbagi Bahagia",
    driveUrl: "https://drive.google.com/file/d/1zD2fUnDsuFsmckGL1WH09U7VOpWGTpu6/view",
  },
];

const reportYears = [
  {
    year: 2022,
    driveUrl: "https://drive.google.com/file/d/1sOEPPZXlGaEhGVeQnrPYlIKIARglUJCS/view",
  },
  {
    year: 2023,
    driveUrl: "https://drive.google.com/file/d/1vGZMgQMPVWW2MnIKar-BqyDfUPyOkJJk/view", 
  },
  {
    year: 2024,
    driveUrl: "https://drive.google.com/file/d/1s5eg7vWxw-tAtsUdBMfG2dKScAOA2oRT/view", 
  },
  {
    year: 2025,
    driveUrl: "https://drive.google.com/file/d/1pI_d8jY2FSxsdsTv8l-kI3ykP6iJl0lk/view", 
  },
];

export default function TrustSection() {
  return (
    <section className="px-6 py-6">
      <div
        className="relative overflow-hidden p-5"
        style={{
          borderRadius: "13px",
          backgroundColor: "rgba(219, 234, 254, 0.34)",
        }}
      >
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
          <h2
            className="font-poppins font-bold text-[#1E5BBB] text-center mb-1.5"
            style={{ fontSize: "14px" }}
          >
            Setiap donasi adalah Amanah
          </h2>

          <p
            className="font-poppins text-[#7B7B7B] text-center mb-4 leading-relaxed"
            style={{ fontSize: "12px", fontWeight: 500 }}
          >
            Sharing Happiness berkomitmen menjalankan seluruh program secara legal, transparan, dan dapat dipertanggungjawabkan.
          </p>

          <div className="space-y-3">
            {legalItems.map((item, idx) => (
              <div key={idx}>
                {item.driveUrl ? (
                  <a
                    href={item.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-poppins font-semibold text-black hover:text-[#1E5BBB] transition-colors"
                    style={{ fontSize: "12px" }}
                  >
                    <span>{item.title}</span>
                    <ExternalLink size={10} className="shrink-0 text-black" />
                  </a>
                ) : (
                  <span
                    className="font-poppins font-semibold text-black block"
                    style={{ fontSize: "12px" }}
                  >
                    {item.title}
                  </span>
                )}
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

      <p
        className="font-poppins text-[#7B7B7B] mt-4 px-3 leading-relaxed text-justify"
        style={{ fontSize: "12px", fontWeight: 500 }}
      >
        Kepercayaan Anda adalah tanggung jawab kami. Setiap kebaikan yang dititipkan dikelola dengan penuh kehati-hatian dan dicatat secara transparan. Laporan keuangan kami tersedia secara terbuka agar setiap kebaikan dapat dipertanggungjawabkan.
      </p>

      <h3
        className="font-poppins text-[#1E5BBB] mt-6 mb-3 sm:mb-4 px-3 text-[14px] sm:text-[17px]"
      >
        <span className="font-bold">Laporan Keuangan</span>{" "}
        <span className="font-normal">Sharing Happiness</span>
      </h3>

      <div className="flex items-center gap-2 sm:gap-3 px-1 sm:px-3">
        <div className="shrink-0">
          <Image
            src="/images/trust/report.svg"
            alt="Report icon"
            width={125}
            height={125}
            className="w-23.75 sm:w-38.5 h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-2 sm:gap-2.5 flex-1 min-w-0">
          {reportYears.map((report) => (
            <a
              key={report.year}
              href={report.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-1.5 sm:gap-2 w-full h-9 sm:h-11 px-2.5 sm:px-3 bg-white transition-colors hover:bg-blue-50 border border-[#1E5BBB] rounded-lg no-underline"
            >
              <span
                className="font-poppins font-medium text-[#1E5BBB] text-[10px] sm:text-[12px] truncate"
              >
                Laporan Keuangan {report.year}
              </span>
              <ArrowRight size={15} className="text-[#1E5BBB] shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}