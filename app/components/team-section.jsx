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

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 items-start">
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            className={`flex flex-col h-full overflow-hidden rounded-t-[30px] ${
              idx % 2 === 1 ? "mt-2 sm:mt-4" : "-mt-4 sm:-mt-5"
            }`}
            style={{ containerType: "inline-size" }}
          >
            {/* Foto */}
            <div className="relative w-full aspect-[196/190] bg-[#FFCC0A]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="50vw"
                className="object-contain object-bottom"
              />
            </div>

            {/* Badge biru dengan sisi bawah miring */}
            <div
              className="flex-1 bg-[#1E5BBB] text-white"
              style={{
                marginTop: "-5cqw",
                padding: "4cqw 10cqw 9cqw",
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