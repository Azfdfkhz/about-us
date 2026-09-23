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
        style={{ fontSize: "14px" }}
      >
        Kenapa Berdonasi Bersama Kami?
      </h2>

      <div className="grid grid-cols-2 gap-3 justify-items-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-3 flex flex-col justify-between shadow-md transition-shadow hover:shadow-lg"
            style={{
              width: "100%",
              maxWidth: "230px",
              height: "82px",
              borderRadius: "8px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-md bg-[#EBF3FF] flex items-center justify-center shrink-0 p-1">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={18}
                  height={18}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3
                className="font-poppins font-semibold text-[#252A34] leading-tight truncate"
                style={{ fontSize: "10px" }}
              >
                {item.title}
              </h3>
            </div>
            <p
              className="font-poppins text-[#4A5565] leading-snug line-clamp-2"
              style={{ fontSize: "8px", fontWeight: 400 }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
