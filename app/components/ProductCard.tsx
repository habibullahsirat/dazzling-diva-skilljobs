import React from "react";

type ProductCardProps = {
  title: string;
  image: string;
  alt?: string;
  originalPrice: number;
  discountedPrice: number;
  saveAmount: number;
};

function formatPrice(amount: number) {
  return amount.toLocaleString("en-BD", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function ProductCard({
  title,
  image,
  alt,
  originalPrice,
  discountedPrice,
  saveAmount,
}: ProductCardProps) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-[6px]">
        <div className="absolute left-0 top-[12px] z-10 rounded-[0px_100px_100px_0px] bg-[#FD0] px-2.5 py-2 text-xs shadow-[0_543px_152px_0_rgba(0,0,0,0),0_348px_139px_0_rgba(0,0,0,0.01),0_196px_117px_0_rgba(0,0,0,0.03),0_87px_87px_0_rgba(0,0,0,0.04),0_22px_48px_0_rgba(0,0,0,0.05)] text-[#3D0B37] text-center leading-none">
          Save: ৳ {formatPrice(saveAmount)}
        </div>

        <img
          src={image}
          alt={alt ?? title}
          className="h-[383px] w-full object-cover"
        />
      </div>

      <h3 className="mt-4.5 text-base font-semibold leading-none capitalize text-black">
        {title}
      </h3>

      <div className="mt-2.5 flex items-center gap-3 text-sm font-bold leading-none">
        <span>৳ {formatPrice(originalPrice)}</span>
        <span>-</span>
        <span>৳ {formatPrice(discountedPrice)}</span>
      </div>

      <div className="mt-4.5 flex gap-2.5">
        <button className="flex flex-grow justify-center gap-2.5 rounded-[4px] bg-[#3D0B37] px-4.5 py-3 font-semibold text-[#FD0] leading-none text-base">
          <img src="/Basket.svg" /> <span>Add to Cart</span>
        </button>

        <button className="rounded-[4px] text-[#3D0B37] px-4.5 py-3 font-semibold bg-[#FD0] leading-none text-base">
          Buy Now
        </button>
      </div>
    </div>
  );
}
