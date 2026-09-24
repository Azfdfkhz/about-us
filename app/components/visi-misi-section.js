import Image from "next/image";

export default function VisiMisiSection() {
  return (
    <section className="relative z-20 -mt-20">
      <div
        className="bg-white p-5 relative"
        style={{ borderRadius: "13px" }}
      >
        {/* Top Section: Illustration Left + Headline Right */}
        <div className="flex items-start gap-3 mb-5">
          {/* Illustration SVG */}
          <div className="shrink-0 w-[190px] pt-2">
            <Image
              src="/images/happiness-academy-2.svg"
              alt="Happiness Academy illustration"
              width={245}
              height={240}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Headline & Paragraph Right */}
          <div className="flex-1">
            <p
              className="font-poppins text-[#7B7B7B] leading-tight mb-2"
              style={{ fontSize: "14px", fontWeight: 400 }}
            >
              Setiap perjalanan besar selalu berawal dari{" "}
              <span className="font-bold text-[#7B7B7B]">satu keyakinan</span>
            </p>
            <p
              className="font-poppins text-[#7B7B7B] leading-relaxed"
              style={{ fontSize: "10px", fontWeight: 400 }}
            >
              dengan berfokus pada bantuan kemanusiaan, respon bencana, kolaborasi, serta campaign kebaikan lainnya bersama organisasi, komunitas, personal dan kreator untuk memperluas dampak kebaikan.
            </p>
          </div>
        </div>

        {/* Visi Kami */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src="/images/visi-kami.svg"
              alt="Visi Kami"
              width={26}
              height={26}
            />
            <h3
              className="font-poppins font-bold text-[#7B7B7B]"
              style={{ fontSize: "12px" }}
            >
              Visi Kami
            </h3>
          </div>
          <p
            className="font-poppins text-[#7B7B7B] leading-relaxed pl-1"
            style={{ fontSize: "10px", fontWeight: 500 }}
          >
            Menjadi platform kolaborasi digital yang menghubungkan kebaikan, memberdayakan masyarakat dan menciptakan perubahann sosial yang berkelanjutan
          </p>
        </div>

        {/* Misi Kami */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Image
              src="/images/misi-kami.svg"
              alt="Misi Kami"
              width={26}
              height={26}
            />
            <h3
              className="font-poppins font-bold text-[#7B7B7B]"
              style={{ fontSize: "12px" }}
            >
              Misi Kami
            </h3>
          </div>
          <ul
            className="font-poppins text-[#7B7B7B] space-y-1 pl-4 list-disc"
            style={{ fontSize: "10px", fontWeight: 500 }}
          >
            <li>Membangun platform yang tangguh dan customer oriented.</li>
            <li>Menjalin dan memperluas kolaborasi dengan mitra strategis.</li>
            <li>Menggerakan peran aktif masyarakat dalam menyelesaikan masalah sosial.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
