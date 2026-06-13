"use client";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#3D0B37] px-4 sm:px-8 lg:px-[84px] py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#3D0B37] text-xl sm:text-2xl font-['Aclonica']">
          Dazzling Diva
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 text-[#3D0B37] text-sm xl:text-base font-semibold">
          <div className="hover:text-[#FFDD00] cursor-pointer">Home</div>
          <div className="hover:text-[#FFDD00] cursor-pointer">Shop</div>
          <div className="hover:text-[#FFDD00] cursor-pointer">Three Piece</div>
          <div className="hover:text-[#FFDD00] cursor-pointer">Two Piece</div>
          <div className="hover:text-[#FFDD00] cursor-pointer">Hijab</div>

          <div className="px-4 py-2 rounded bg-[#3D0B37] text-[#FFDD00] font-bold">
            New Arrivals
          </div>

          <div className="px-4 py-2 rounded bg-[#FFDD00] text-[#3D0B37] font-bold">
            Deals & Offers
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <img src="/vector-search.png" className="w-5 h-5" />
          <img src="/vector-user.png" className="w-5 h-5" />
          <img src="/vector-basket.png" className="w-5 h-5" />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#3D0B37] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-4 flex flex-col gap-3 text-[#3D0B37] font-medium">
          <div>Home</div>
          <div>Shop</div>
          <div>Three Piece</div>
          <div>Two Piece</div>
          <div>Hijab</div>
          <div className="font-bold text-[#FFDD00]">New Arrivals</div>
          <div className="font-bold">Deals & Offers</div>

          <div className="flex gap-4 pt-2">
            <img src="/vector-search.png" className="w-5 h-5" />
            <img src="/vector-user.png" className="w-5 h-5" />
            <img src="/vector-basket.png" className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );
}
