import Image from "next/image";

const features = [
  {
    icon: "/images/transparan.svg",
    title: "Transparan",
    description: "Setiap Donasi Dapat Dipantau Dengan Jelas Dan Terbuka.",
  },
  {
    icon: "/images/transaksi-aman.svg",
    title: "Transaksi Aman",
    description: "Sistem Pembayaran Terlindungi Untuk Menjaga Keamanan Setiap Transaksi.",
  },
  {
    icon: "/images/Menciptakan-dampak-nyata.svg",
    title: "Menciptakan Dampak Nyata",
    description: "Setiap Kontribusi Memberikan Perubahan Yang Bisa Dirasakan Langsung.",
  },
  {
    icon: "/images/kemudahan-donasi.svg",
    title: "Kemudahan Donasi",
    description: "Proses Donasi Cepat, Praktis, Dan Dapat Diakses Kapan Saja.",
  },
  {
    icon: "/images/NGO-terverifikasi.svg",
    title: "NGO Terverifikasi",
    description: "Bermitra Dengan Organisasi Terpercaya Yang Telah Terverifikasi.",
  },
  {
    icon: "/images/laporan-program-detail.svg",
    title: "Laporan Program Detail",
    description: "Update Dan Laporan Lengkap Untuk Memastikan Donasimu Tersalurkan.",
  },
];

export default function FiturSection() {
  return (
    <section className="px-4 pb-10">
      <h2
        className="font-poppins font-bold text-[#1E5BBB] text-center mb-5"
        style={{ fontSize: "16px" }}
      >
        Kenapa Berdonasi Bersama Kami?
      </h2>

      {/* px-8 dihapus & maxWidth kartu dihilangkan: kartu mengisi penuh tiap kolom */}
      <div className="grid grid-cols-2 gap-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-white p-4 flex flex-col gap-2.5 h-full transition-shadow hover:shadow-lg"
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Icon di atas */}
            <div className="w-9 h-9 rounded-lg bg-[#EBF3FF] flex items-center justify-center shrink-0 p-1.5">
              <Image
                src={item.icon}
                alt=""
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Title di bawah icon */}
            <h3
              className="font-poppins font-semibold text-[#252A34] leading-tight line-clamp-2"
              style={{ fontSize: "14px" }}
            >
              {item.title}
            </h3>

            <p
              className="font-poppins text-[#4A5565] leading-snug line-clamp-3"
              style={{ fontSize: "12px", fontWeight: 400 }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}