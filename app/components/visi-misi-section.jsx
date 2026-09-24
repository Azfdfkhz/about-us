import Image from "next/image";

export default function VisiMisiSection() {
  return (
    <section className="z-20 -mt-20">
      <div
        className="bg-white p-5 relative"
        style={{ borderRadius: "15px" }}
      >
        {/* Top Section: Illustration Left + Headline Right */}
        <div className="flex items-start gap-3 mb-5">
          {/* Illustration SVG */}
          <div className="shrink-0 w-[155px] pt-1">
            <Image
              src="/images/happiness-academy-2.svg"
              alt="Happiness Academy illustration"
              width={155}
              height={150}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Headline & Paragraph Right */}
          <div className="flex-1">
            <p
              className="font-poppins text-[#7B7B7B] leading-tight mb-2"
              style={{ fontSize: "20px", fontWeight: 400 }}
            >
              Setiap perjalanan besar selalu berawal dari{" "}
              <span className="font-bold text-[#7B7B7B]">satu keyakinan</span>
            </p>
            <p
              className="font-poppins text-[#7B7B7B] leading-relaxed"
              style={{ fontSize: "11px", fontWeight: 400 }}
            >
              dengan berfokus pada bantuan kemanusiaan, respon bencana, kolaborasi, serta campaign kebaikan lainnya bersama organisasi, komunitas, personal dan kreator untuk memperluas dampak kebaikan.
            </p>
          </div>
        </div>

        {/* Visi Kami */}
        <div className="mb-6 pl-3">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/images/visi-kami.svg"
              alt="Visi Kami"
              width={28}
              height={28}
            />
            <h3 className="font-poppins font-bold text-[#7B7B7B] text-[14px]">
              Visi Kami
            </h3>
          </div>

          {/* Menggunakan pl-9 (36px) agar teks sejajar tepat di bawah kata "Visi" */}
          <p className="font-poppins text-[#7B7B7B] leading-relaxed pl-9 text-[10px] font-medium">
            Menjadi platform kolaborasi digital yang menghubungkan kebaikan,
            memberdayakan masyarakat dan menciptakan perubahann sosial yang
            berkelanjutan
          </p>
        </div>

        {/* Misi Kami */}
        <div className="pl-3">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/images/misi-kami.svg"
              alt="Misi Kami"
              width={28}
              height={28}
            />
            <h3 className="font-poppins font-bold text-[#7B7B7B] text-[14px]">
              Misi Kami
            </h3>
          </div>

          {/* Menggunakan ml-9 dan pl-4 agar bullet sejajar dengan kata "Misi" */}
          <ul className="font-poppins text-[#7B7B7B] space-y-1 ml-9 pl-4 list-disc text-[10px] font-medium">
            <li>Membangun platform yang tangguh dan customer oriented.</li>
            <li>Menjalin dan memperluas kolaborasi dengan mitra strategis.</li>
            <li>Menggerakan peran aktif masyarakat dalam menyelesaikan masalah sosial.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
