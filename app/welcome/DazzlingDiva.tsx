import Hero from "../components/Hero";
import Category from "../components/Category";
import ThreePiece from "~/components/ThreePiece";
import TwoPiece from "~/components/TwoPiece";

export function DazzlingDiva() {
  return (
    <div className="px-[84px] py-[48px] bg-[#F2F4F8]">
      <Hero />
      <Category />
      <ThreePiece />
      <TwoPiece />
    </div>
  );
}
