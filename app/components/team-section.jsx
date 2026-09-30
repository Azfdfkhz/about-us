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
              className={`flex flex-col rounded-t-[30px] ${
                !isLeft ? "mt-3.5 sm:mt-4.5" : ""
              }`}
              style={{ containerType: "inline-size" }}
            >
              <div className="relative w-full aspect-[196/190] bg-[#FFCC0A] rounded-t-[30px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="50vw"
                  className="object-contain object-bottom"
                />
              </div>

              <div
                className="bg-[#1E5BBB] text-white flex flex-col justify-start"
                style={{
                  marginTop: "-5cqw",
                  padding: "4cqw 6cqw 8cqw",
                  height: "36cqw",
                  minHeight: "36cqw",
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
