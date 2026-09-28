import Image from "next/image";

const teamMembers = [
  {
    name: "Zaeni Ramdan",
    title: "Chief Executive Officer",
    image: "/images/zaeni-ramdan.svg",
  },
  {
    name: "Indra Sayyidina",
    title: "Program Dept. Head",
    image: "/images/indra-sayyidina.svg",
  },
  {
    name: "Dzikri Fadilah",
    title: "Product Dept. Head",
    image: "/images/dzikri-fadilah.svg",
  },
  {
    name: "Agustin Santriana",
    title: "Brand & Marketing Division Head",
    image: "/images/agustin-santriana.svg",
  },
  {
    name: "Nur Shyfa",
    title: "Marketing Dept. Head",
    image: "/images/nur-shyfa.svg",
  },
  {
    name: "Wiluk Lianawati",
    title: "Finance and Operational Dept. Head",
    image: "/images/wiluk-lianawati.svg",
  },
];

export default function TimSection() {
  return (
    <section className="px-4 sm:px-10 pb-10">
      {/* Heading */}
      <h2
        className="font-poppins font-bold text-[#1E5BBB] leading-snug"
        style={{ fontSize: "14px" }}
      >
        Happiness Team di Balik Cerita Ini
      </h2>

      <p
        className="font-poppins text-[#1E5BBB] leading-snug mb-5 text-[11px] sm:text-[14px]"
        style={{ fontWeight: 400 }}
      >
        Dari satu langkah kecil, hingga perjalanan yang terus bertumbuh
      </p>

      {/* Team Grid: 2 columns on mobile (<640px), 3 columns on desktop (>=640px) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-x-4 sm:gap-y-5 items-stretch">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col h-full overflow-hidden rounded-t-xl"
            // Container query: ukuran teks & padding mengikuti lebar kartu (cqw)
            style={{ containerType: "inline-size" }}
          >
            {/* Foto */}
            <div className="relative w-full aspect-[196/190] bg-[#FFCC0A]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-contain object-bottom"
              />
            </div>

            {/* Badge biru dengan sisi bawah miring */}
            <div
              className="flex-1 bg-[#1E5BBB] text-white"
              style={{
                marginTop: "-6cqw", // naikkan badge
                padding: "4cqw 6cqw 9cqw",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 91%)",
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
                style={{ fontSize: "6cqw", fontWeight: 400 }}
              >
                {member.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}