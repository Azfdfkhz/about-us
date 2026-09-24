"use client";

export default function AjakSection() {
  return (
    // px-4 dihapus supaya shape biru menempel ke ujung kiri & kanan layar
    <section className="pb-10">
      <div
        className="w-full p-6 text-center text-white shadow-md"
        style={{
          borderRadius: "14px",
          backgroundColor: "#2E68B2",
        }}
      >
        <h2
          className="font-poppins font-extrabold mb-2"
          style={{ fontSize: "18px" }}
        >
          Cerita Ini Belum usai
        </h2>

        <p
          className="font-poppins text-white leading-relaxed mb-6 max-w-sm mx-auto"
          style={{ fontSize: "12px", fontWeight: 400 }}
        >
          Setiap cerita telah menjadi bagian dari perjalanan kami dan{" "}
          <span className="font-bold">#TemanBerbagi</span> lainnya. Kini saatnya Kamu menjadi bagian{" "}
          <span className="font-bold">di perjalanan selanjutnya.</span>
        </p>

        {/* 2 Buttons */}
        <div className="flex gap-3 justify-center w-full">
          <button
            className="flex-1 py-2.5 px-3 font-poppins font-bold transition-all hover:bg-gray-100 active:scale-95 shadow-sm"
            style={{
              borderRadius: "5px",
              backgroundColor: "#FFFFFF",
              color: "#1E5BBB",
              fontSize: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Mulai Berdonasi
          </button>
          <button
            className="flex-1 py-2.5 px-3 font-poppins font-bold transition-all hover:bg-white/10 active:scale-95 shadow-sm"
            style={{
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              fontSize: "12px",
              border: "1px solid #FFFFFF",
              cursor: "pointer",
            }}
          >
            Mulai Galang Dana
          </button>
        </div>
      </div>
    </section>
  );
}