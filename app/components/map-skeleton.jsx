// Skeleton peta: meniru tampilan InteractiveMap (kotak rounded, tombol zoom
// di kanan atas, marker ungu, dan atribusi di kanan bawah).
const markerDots = [
  { top: "34%", left: "30%" },
  { top: "40%", left: "44%" },
  { top: "48%", left: "52%" },
  { top: "55%", left: "60%" },
  { top: "50%", left: "70%" },
  { top: "44%", left: "80%" },
  { top: "60%", left: "46%" },
];

export default function MapSkeleton({ className = "" }) {
  return (
    <div
      role="status"
      aria-label="Memuat peta"
      className={`relative overflow-hidden bg-blue-50 ${className}`}
    >
      <span className="sr-only">Memuat Peta Sebaran Titik Kebaikan...</span>

      <div className="absolute inset-0 animate-pulse">
        {/* Bentuk daratan samar */}
        <div className="absolute top-[30%] left-[22%] h-[18%] w-[34%] rounded-full bg-blue-100/80 rotate-[-12deg]" />
        <div className="absolute top-[46%] left-[48%] h-[22%] w-[38%] rounded-full bg-blue-100/80 rotate-[8deg]" />
        <div className="absolute top-[22%] left-[8%] h-[14%] w-[16%] rounded-full bg-blue-100/60" />

        {/* Marker */}
        {markerDots.map((pos, i) => (
          <span
            key={i}
            style={pos}
            className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-violet-300 shadow"
          />
        ))}

        {/* Tombol zoom (kanan atas) */}
        <div className="absolute top-2.5 right-2.5 flex w-[29px] flex-col overflow-hidden rounded bg-white shadow">
          <span className="h-[29px] border-b border-gray-200" />
          <span className="h-[29px]" />
        </div>

        {/* Atribusi (kanan bawah) */}
        <span className="absolute right-0 bottom-0 h-4 w-24 rounded-tl bg-white/70" />
      </div>
    </div>
  );
}
