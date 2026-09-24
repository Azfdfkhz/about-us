import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        background: "linear-gradient(to right, #2D5799, #4B91FF)",
        minHeight: "360px",
      }}
    >
      {/* Background Butterfly SVG & Dotted Lines */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "35px", right: "0px", width: "230px", height: "250px", zIndex: 1 }}
      >
        <Image
          src="/images/happiness-academy-1.svg"
          alt="Butterfly pattern"
          fill
          style={{ objectFit: "contain", objectPosition: "right top" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-5 pt-8 pb-10">
        {/* Top Header Row */}
        <div className="flex items-start justify-between">
          {/* Left: Love SVG & Text */}
          <div className="flex flex-col items-start pt-1 max-w-[260px]">
            {/* Love SVG: 40px */}
            <div className="mb-4">
              <Image
                src="/images/love.svg"
                alt="Love icon"
                width={40}
                height={40}
              />
            </div>

            {/* Typography */}
            <p
              className="font-gamja text-white leading-none mb-1"
              style={{ fontSize: "24px", fontWeight: 400 }}
            >
              Setiap Kebaikan
            </p>
            <h1
              className="font-poppins font-bold text-white leading-tight mb-2"
              style={{ fontSize: "20px" }}
            >
              Selalu Memiliki Cerita
            </h1>
            <p
              className="font-poppins text-white leading-relaxed"
              style={{ fontSize: "12px", fontWeight: 400, opacity: 0.95 }}
            >
              SharingHappiness hadir untuk menghubungkan kebaikan, mengubah kepedulian menjadi dampak nyata.
            </p>
          </div>

          {/* Right: Stacked Circle Images */}
          <div
            className="relative shrink-0"
            style={{ width: "200px", height: "240px", zIndex: 2 }}
          >
            {/* Image 1: 85 x 87 (Top Right) */}
            <div
              className="absolute"
              style={{ top: "0px", right: "100px" }}
            >
              <Image
                src="/images/1.svg"
                alt="Circle 1"
                width={85}
                height={87}
                className="rounded-full object-cover shadow-sm"
              />
            </div>

            {/* Image 2: 37 x 38 (Middle Left) */}
            <div
              className="absolute"
              style={{ top: "120px", right: "125px" }}
            >
              <Image
                src="/images/2.svg"
                alt="Circle 2"
                width={47}
                height={48}
                className="rounded-full object-cover shadow-sm"
              />
            </div>

            {/* Image 3: 53 x 54 (Bottom Right) */}
            <div
              className="absolute"
              style={{ top: "180px", right: "15px" }}
            >
              <Image
                src="/images/3.svg"
                alt="Circle 3"
                width={53}
                height={54}
                className="rounded-full object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
