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
    title: "Job Title",
    image: "/images/nur-shyfa.svg",
  },
  {
    name: "Wiluk Lianawati",
    title: "Job Title",
    image: "/images/wiluk-lianawati.svg",
  },
];

export default function TimSection() {
  return (
    <section className="px-4 pb-10">
      <h2
        className="font-poppins font-bold text-[#1E5BBB] mb-0.5"
        style={{ fontSize: "14px" }}
      >
        Happiness Team di Balik Cerita Ini
      </h2>
      <p
        className="font-poppins text-[#1E5BBB] mb-4"
        style={{ fontSize: "10px", fontWeight: 400 }}
      >
        Dari satu langkah kecil, hingga perjalanan yang terus bertumbuh
      </p>

      {/* Grid of 6 Team Members */}
      <div className="grid grid-cols-3 gap-3">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-[#FDCB09] overflow-hidden shadow-sm"
            style={{ borderRadius: "10px" }}
          >
            {/* Image Container */}
            <div className="relative w-full h-[125px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Bottom Blue Badge */}
            <div
              className="bg-[#1E5BBB] px-1 py-1.5 text-center flex flex-col justify-center items-center"
              style={{ minHeight: "40px" }}
            >
              <p
                className="font-poppins font-bold text-white leading-tight w-full truncate"
                style={{ fontSize: "8px" }}
              >
                {member.name}
              </p>
              <p
                className="font-poppins text-white leading-tight w-full truncate opacity-90 mt-0.5"
                style={{ fontSize: "7px", fontWeight: 400 }}
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
