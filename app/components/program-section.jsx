import Image from "next/image";

const programs = [
  {
    title: "Program Kemanusiaan",
    description: "Bantuan langsung kepada mereka yang membutuhkan",
    color: "#FDCB09",
  },
  {
    title: "Respon Bencana",
    description: "Cepat tanggap untuk korban bencana alam",
    color: "#4B91FF",
  },
  {
    title: "Kolaborasi NGO",
    description: "Bersinergi bersama lembaga sosial terpercaya",
    color: "#FDCB09",
  },
  {
    title: "Campaign Kreatif",
    description: "Inovasi dalam menggerakkan kebaikan",
    color: "#4B91FF",
  },
];

export default function ProgramSection() {
  return (
    <section className="px-4 pb-6">
      <h2
        className="font-poppins font-bold text-[#1E5BBB] mb-4"
        style={{ fontSize: "14px" }}
      >
        Program Unggulan
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {programs.map((prog, i) => (
          <div
            key={i}
            className="p-4 flex flex-col gap-2"
            style={{
              borderRadius: "12px",
              backgroundColor: prog.color,
            }}
          >
            <p
              className="font-poppins font-bold text-white"
              style={{ fontSize: "11px" }}
            >
              {prog.title}
            </p>
            <p
              className="font-poppins text-white"
              style={{ fontSize: "10px", fontWeight: 400 }}
            >
              {prog.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
