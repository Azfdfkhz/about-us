import MapSkeleton from "./map-skeleton";

const tones = {
  gray: "bg-gray-200",
  blue: "bg-blue-100",
  onBlue: "bg-white/30",
  onLight: "bg-white/60",
  white: "bg-white/70",
};

function Bone({ className = "", tone = "gray" }) {
  return (
    <div className={`animate-pulse rounded ${tones[tone]} ${className}`} />
  );
}

function HeroSkeleton() {
  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        background: "linear-gradient(to right, #2D5799, #4B91FF)",
        minHeight: "360px",
      }}
    >
      <div className="relative z-10 px-5 pt-8 pb-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col items-start pt-1 flex-1 min-w-0 sm:max-w-[260px]">
            <Bone tone="onBlue" className="mb-3 h-8 w-8 rounded-full sm:h-10 sm:w-10" />
            <Bone tone="onBlue" className="mb-2 h-5 w-28" />
            <Bone tone="onBlue" className="mb-3 h-6 w-44" />
            <Bone tone="onBlue" className="mb-1.5 h-3 w-full" />
            <Bone tone="onBlue" className="mb-1.5 h-3 w-full" />
            <Bone tone="onBlue" className="h-3 w-2/3" />
          </div>

          <div className="relative shrink-0 w-[142px] h-[185px] sm:w-[200px] sm:h-[240px]">
            <Bone tone="onBlue" className="absolute right-[70px] top-0 h-[62px] w-[62px] rounded-full" />
            <Bone tone="onBlue" className="absolute right-[90px] top-[86px] h-[34px] w-[34px] rounded-full" />
            <Bone tone="onBlue" className="absolute right-[10px] top-[130px] h-[38px] w-[38px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSkeleton() {
  return (
    <section className="z-20 -mt-28 sm:-mt-20 relative">
      <div className="bg-white p-5 relative" style={{ borderRadius: "15px" }}>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-3 mb-5">
          <div className="shrink-0 flex justify-center w-full sm:w-38.75 pt-1">
            <Bone className="h-[150px] w-[155px] rounded-xl" />
          </div>
          <div className="flex-1 w-full">
            <Bone className="mb-1.5 h-5 w-full" />
            <Bone className="mb-3 h-5 w-3/5" />
            <Bone className="mb-1.5 h-2.5 w-full" />
            <Bone className="mb-1.5 h-2.5 w-full" />
            <Bone className="h-2.5 w-4/5" />
          </div>
        </div>

        {[3, 3].map((lines, i) => (
          <div key={i} className={`pl-3 ${i === 0 ? "mb-6" : ""}`}>
            <div className="flex items-center gap-3 mb-2">
              <Bone className="h-7 w-7 rounded-full" />
              <Bone className="h-3.5 w-24" />
            </div>
            <div className="pl-9 space-y-1.5">
              {Array.from({ length: lines }).map((_, j) => (
                <Bone key={j} className={`h-2.5 ${j === lines - 1 ? "w-3/5" : "w-full"}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSkeleton() {
  return (
    <section className="px-6 py-6">
      <div
        className="relative overflow-hidden p-5"
        style={{ borderRadius: "13px", backgroundColor: "rgba(219, 234, 254, 0.34)" }}
      >
        <Bone tone="blue" className="mx-auto mb-2 h-3.5 w-48" />
        <Bone tone="blue" className="mx-auto mb-1.5 h-3 w-full" />
        <Bone tone="blue" className="mx-auto mb-4 h-3 w-4/5" />

        <div className="space-y-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i}>
              <Bone className="h-3 w-40" />
              <Bone className="mt-1.5 h-2.5 w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-1.5 px-3">
        <Bone className="h-3 w-full" />
        <Bone className="h-3 w-full" />
        <Bone className="h-3 w-full" />
        <Bone className="h-3 w-3/5" />
      </div>

      <Bone tone="blue" className="mt-6 mb-3 mx-3 h-4 w-56" />

      <div className="flex items-center gap-2 px-1 sm:px-3">
        <Bone className="h-24 w-24 shrink-0 rounded-xl" />
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex h-9 items-center justify-between rounded-lg border border-blue-200 bg-white px-2.5 sm:h-11"
            >
              <Bone tone="blue" className="h-2.5 w-2/3" />
              <Bone tone="blue" className="h-3.5 w-3.5 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSkeleton() {
  return (
    <section className="pb-3">
      <div
        className="relative overflow-hidden p-5 pt-8"
        style={{
          borderRadius: "84px 84px 28px 28px",
          background: "linear-gradient(to bottom, #FDCB09 0%, #FEDF64 45%, #FFFFFF 100%)",
        }}
      >
        <div className="mb-6 flex flex-col items-center gap-2">
          <Bone tone="onLight" className="h-3.5 w-20" />
          <Bone tone="onLight" className="h-3.5 w-64 max-w-full" />
        </div>

        <div className="flex items-center gap-2 sm:gap-4 mb-4 pb-8">
          <Bone tone="onLight" className="h-[150px] w-[195px] shrink-0 rounded-xl sm:w-[210px]" />
          <div className="flex-1 min-w-0 pr-1">
            <Bone tone="onLight" className="h-2.5 w-16" />
            <Bone tone="onLight" className="my-2 h-9 w-28" />
            <Bone tone="onLight" className="mb-1.5 h-2.5 w-full" />
            <Bone tone="onLight" className="h-2.5 w-2/3" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mb-6 px-1 -mt-17 sm:-mt-19 relative z-10">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex min-h-[76px] items-end justify-between rounded-xl border border-yellow-100/60 bg-white p-3 shadow-sm sm:min-h-[85px] sm:p-4"
            >
              <div className="min-w-0">
                <Bone className="mb-2 h-6 w-16" />
                <Bone className="h-2.5 w-20" />
              </div>
              <Bone className="ml-1 h-5 w-5 shrink-0 rounded-full" />
            </div>
          ))}
        </div>

        <div className="relative bg-[#FFFDFD] p-4 mb-4" style={{ borderRadius: "14px" }}>
          <div className="mb-3 pr-28">
            <Bone className="mb-2 h-3.5 w-44" />
            <Bone className="mb-1.5 h-3 w-full" />
            <Bone className="mb-1.5 h-3 w-full" />
            <Bone className="h-3 w-3/4" />
          </div>

          <MapSkeleton className="my-2 h-60 w-full rounded-2xl border border-gray-100" />

          <div className="flex flex-col items-center gap-2 px-5 py-6">
            <Bone className="h-3.5 w-full" />
            <Bone className="h-3.5 w-4/5" />
            <Bone className="mt-2 h-3.5 w-40" />
          </div>

          <div className="flex justify-center">
            <Bone className="h-40 w-full max-w-[340px] rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSkeleton() {
  return (
    <section className="px-4 pb-10">
      <Bone className="mb-1.5 ml-3.5 h-3.5 w-64 max-w-[85%]" />
      <Bone className="mb-5 ml-3.5 h-3.5 w-80 max-w-[95%]" />

      <div className="relative mx-auto mb-8 aspect-video w-full max-w-lg overflow-hidden rounded-2xl shadow-lg">
        <Bone className="absolute inset-0 rounded-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-white/80 shadow-lg" />
        </div>
      </div>

      <div className="relative pl-6 space-y-4">
        <div className="absolute left-[7px] top-15 bottom-15 w-0.5 bg-blue-200 sm:bottom-11" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="relative z-10">
            <div className="absolute -left-5.75 top-15 h-3.5 w-3.5 rounded-full border-2 border-[#DBEAFE] bg-blue-300 shadow-sm" />
            <div
              className={`rounded-xl p-3.5 shadow-sm sm:p-4 ${
                i % 2 === 0 ? "bg-yellow-100" : "bg-blue-100"
              }`}
            >
              <Bone tone="onLight" className="mb-2 h-5 w-16 rounded-full" />
              <Bone tone="onLight" className="mb-2 h-3.5 w-36" />
              <Bone tone="onLight" className="mb-1.5 h-2.5 w-full" />
              <Bone tone="onLight" className="mb-1.5 h-2.5 w-full" />
              <Bone tone="onLight" className="h-2.5 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamSkeleton() {
  return (
    <section className="px-4 sm:px-6 pb-12">
      <Bone className="mb-1.5 h-3.5 w-64 max-w-full" />
      <Bone className="mb-8 h-3 w-80 max-w-full" />

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 items-start">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-t-[30px] ${i % 2 === 1 ? "mt-3.5 sm:mt-4.5" : ""}`}
          >
            <div className="aspect-[196/190] w-full animate-pulse rounded-t-[30px] bg-yellow-100" />
            <div className="-mt-3 flex h-16 flex-col gap-2 bg-blue-200 px-3 pt-4">
              <Bone tone="onBlue" className="h-3 w-3/4" />
              <Bone tone="onBlue" className="h-2.5 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InviteSkeleton() {
  return (
    <section className="pb-10">
      <div
        className="w-full bg-blue-200 p-6 shadow-md"
        style={{ borderRadius: "14px" }}
      >
        <div className="flex flex-col items-center">
          <Bone tone="onBlue" className="mb-3 h-5 w-48" />
          <Bone tone="onBlue" className="mb-1.5 h-3 w-full max-w-sm" />
          <Bone tone="onBlue" className="mb-1.5 h-3 w-full max-w-sm" />
          <Bone tone="onBlue" className="mb-6 h-3 w-2/3 max-w-xs" />
        </div>
        <div className="flex gap-3">
          <Bone tone="white" className="h-9 flex-1 rounded-[5px]" />
          <Bone tone="onBlue" className="h-9 flex-1 rounded-[5px]" />
        </div>
      </div>
    </section>
  );
}

function FeaturesSkeleton() {
  return (
    <section className="relative z-10 px-4 pb-10">
      <Bone className="mx-auto mb-5 h-4 w-56 max-w-full" />
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex w-[calc(50%-6px)] flex-col gap-2.5 bg-white p-4"
            style={{ borderRadius: "12px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)" }}
          >
            <Bone tone="blue" className="h-9 w-9 rounded-lg" />
            <Bone className="h-3.5 w-3/4" />
            <Bone className="h-2.5 w-full" />
            <Bone className="h-2.5 w-2/3" />
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqSkeleton() {
  return (
    <section className="pb-12">
      <div
        className="bg-white px-5 pt-8 pb-6 mb-6"
        style={{ borderRadius: "70px 70px 20px 20px" }}
      >
        <Bone className="mx-auto mb-6 h-5 w-56 max-w-full" />
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 border-b border-[#D9D9D9] pb-4"
            >
              <div className="flex-1">
                <Bone tone="blue" className="mb-1.5 h-3.5 w-full" />
                <Bone tone="blue" className="h-3.5 w-2/3" />
              </div>
              <Bone className="h-8 w-8 shrink-0 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative mx-3 flex items-center gap-3 p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "#F0F8FE",
          border: "0.5px solid #3A70C4",
        }}
      >
        <Bone tone="blue" className="h-[54px] w-[54px] shrink-0 rounded-full" />
        <div className="min-w-0 flex-1">
          <Bone tone="blue" className="mb-2 h-3.5 w-36" />
          <Bone tone="blue" className="mb-1.5 h-2.5 w-full" />
          <Bone tone="blue" className="mb-3 h-2.5 w-3/4" />
          <div className="flex items-center gap-1.5">
            <Bone tone="blue" className="h-7 w-24" />
            <Bone tone="blue" className="h-3 w-6" />
            <Bone tone="blue" className="h-7 w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PageSkeleton() {
  return (
    <div role="status" aria-label="Memuat halaman">
      <span className="sr-only">Memuat halaman...</span>
      <HeroSkeleton />
      <VisionMissionSkeleton />
      <TrustSkeleton />
      <ImpactSkeleton />
      <TimelineSkeleton />
      <TeamSkeleton />
      <InviteSkeleton />
      <FeaturesSkeleton />
      <FaqSkeleton />
    </div>
  );
}
