export default function NavBar() {
  return (
    <div className="flex justify-between px-[84px] py-[18px] items-center border-b border-[#3D0B37]">
      <div className="text-[#3D0B37] text-[24px] font-['Aclonica']">
        Dazzling Diva
      </div>
      <div className="flex justify-between text-[16px] font-semibold font-[600] font-['Geist'] text-[#3D0B37] gap-[12px] items-center">
        <div className="hover:text-[#FFDD00]">Home</div>
        <div className="hover:text-[#FFDD00]">Shop</div>
        <div className="hover:text-[#FFDD00]">Three Piece</div>
        <div className="hover:text-[#FFDD00]">Two Piece</div>
        <div className="hover:text-[#FFDD00]">Hijab</div>
        <div className="px-[18px] py-[10px] rounded-[4px] bg-[#3D0B37] text-[#FFDD00] text-[16px] font-[700] font-bold">
          New Arrivals
        </div>
        <div className="px-[18px] py-[10px] rounded-[4px] bg-[#FFDD00] text-[#3D0B37] text-[16px] font-[700] font-bold">
          Deals & Offers
        </div>
      </div>
      <div className="flex justify-between gap-[14px] items-center">
        <div>
          <img src="/vector-search.png" alt="" />
        </div>
        <div>
          <img src="/vector-user.png" alt="" />
        </div>
        <div>
          <img src="/vector-basket.png" alt="" />
        </div>
      </div>
    </div>
  );
}
