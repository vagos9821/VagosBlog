import SVGComponent from "../../svg/svglogo";

export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <SVGComponent className="h-12" />
      <div className="text-2xl ml-2 text-[#ededed] font-bold flex flex-col">
        Vagos <span className="text-[#AEC157] text-lg">Blog</span>
      </div>
    </a>
  );
}
