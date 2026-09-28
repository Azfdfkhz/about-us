import Image from "next/image";

const teamMembers = [
  {
    name: "Zaeni Ramdan",
    title: "Chief Executive Officer",
    image: "/images/team/zaeni-ramdan.svg",
  },
  {
    name: "Indra Sayyidina",
    title: "Program Dept. Head",
    image: "/images/team/indra-sayyidina.svg",
  },
  {
    name: "Dzikri Fadilah",
    title: "Product Dept. Head",
    image: "/images/team/dzikri-fadilah.svg",
  },
  {
    name: "Agustin Santriana",
    title: "Brand & Marketing Division Head",
    image: "/images/team/agustin-santriana.svg",
  },
  {
    name: "Nur Shyfa",
    title: "Marketing Dept. Head",
    image: "/images/team/nur-shyfa.svg",
  },
  {
    name: "Wiluk Lianawati",
    title: "Finance and Operational Dept. Head",
    image: "/images/team/wiluk-lianawati.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="px-4 sm:px-6 pb-12">
      {/* Heading */}
      <h2
        className="font-poppins font-bold text-[#1E5BBB] leading-snug"
        style={{ fontSize: "14px" }}
      >
        Happiness Team di Balik Cerita Ini
      </h2>

      <p
        className="font-poppins text-[#1E5BBB] leading-snug mb-8 text-[11px] sm:text-[14px]"
        style={{ fontWeight: 400 }}
      >
        Dari Satu Langkah Kecil, hingga Perjalanan yang Terus Bertumbuh
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 items-start">
        {teamMembers.map((member, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={member.name}
              className="flex flex-col h-full rounded-t-[30px]"
              style={{ containerType: "inline-size" }}
            >
              {/* Foto: Kolom kiri berada di atas */}
              <div
                className="relative w-full bg-[#FFCC0A] rounded-t-[30px] overflow-hidden"
                style={{
                  height: isLeft ? "105cqw" : "97cqw",
                  marginTop: isLeft ? "-8cqw" : "0cqw",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="50vw"
                  className={`object-contain object-bottom ${
                    isLeft ? "-translate-y-[2cqw]" : ""
                  }`}
                />
              </div>

              {/* Badge biru dengan sisi bawah miring: Tetap sejajar dengan yang sebelahnya */}
              <div
                className="flex-1 bg-[#1E5BBB] text-white flex flex-col justify-center min-h-[30cqw]"
                style={{
                  marginTop: "-5cqw",
                  padding: "4cqw 6cqw 8cqw",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
                }}
              >
                <p
                  className="font-poppins font-semibold leading-tight"
                  style={{ fontSize: "7.5cqw" }}
                >
                  {member.name}
                </p>

                <p
                  className="font-poppins leading-tight mt-[1cqw]"
                  style={{ fontSize: "5.5cqw", fontWeight: 400 }}
                >
                  {member.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
