import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="relative w-fit">
        <Image
          src="/yamiop.png"
          alt="Yami the dev kitten"
          width={240}
          height={120}
          className="brightness-90 max-w-[180px] sm:max-w-[240px]"
          priority
        />
        <div className="bg-whitedenim border border-neutral-300 skew-x-12 absolute bottom-4 md:bottom-14 md:left-40 shadow-md animate-slide-in-left">
          <div className="text-2xl font-bold text-neutral-950 italic py-3 px-5 whitespace-nowrap">
            -Yami Gami
          </div>
        </div>
      </div>

      <div className="max-w-md text-right">
        <h2 className="text-lg sm:text-xl md:text-2xl leading-relaxed">
          Tinkering with code, pixels, and the occasional existential thought —
          <br />
          <span className="underline underline-offset-4 decoration-[#AEC157]">
            welcome to my corner of the web.
          </span>
        </h2>
      </div>
    </div>
  );
}
