export default function NavBar() {
  return (
    <div className="flex justify-between px-[84px] py-[18px] items-center">
      <div className="text-[#3D0B37] text-[24px] font-['Aclonica']">
        Dazzling Diva
      </div>
      <div className="flex justify-between text-[16px] font-semibold font-[600] text-[#3D0B37] gap-[12px] items-center">
        <div>Home</div>
        <div>Shop</div>
        <div>Three Piece</div>
        <div>Two Piece</div>
        <div>Hijab</div>
        <div className="px-[18px] py-[10px] rounded-[4px] bg-[#3D0B37] text-[#FFDD00]">
          New Arrivals
        </div>
        <div className="px-[18px] py-[10px] rounded-[4px] bg-[#FFDD00] text-[#3D0B37]">
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
