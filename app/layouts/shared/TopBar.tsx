export default function TopBar() {
  return (
    <div className="bg-[#3D0B37] px-4 py-3 sm:px-6 lg:px-[84px]">
      {/* Mobile */}
      <div className="flex flex-col items-center justify-center gap-1 text-center text-xs text-white sm:hidden">
        <div className="flex items-center gap-1 flex-wrap justify-center">
          <span>Get</span>
          <span className="text-[#FFDD00]">30% OFF</span>
          <span>your first order</span>
          <span className="text-[#FFDD00]">30% OFF</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <img src="/star1.png" alt="star" className="w-3 h-3 object-contain" />
          <span>Order now and get</span>
          <span className="text-[#FFDD00]">Free</span>
          <span>delivery inside Dhaka city.</span>
        </div>
      </div>

      {/* Tablet & Desktop */}
      <div className="hidden sm:flex items-center justify-center gap-1 text-white text-sm lg:text-base">
        <span>Get</span>

        <span className="text-[#FFDD00] font-medium">30% OFF</span>

        <span>your first order</span>

        <span className="text-[#FFDD00] font-medium">30% OFF</span>

        <img
          src="/star1.png"
          alt="star"
          className="w-4 h-4 mx-2 object-contain"
        />

        <span>Order now and get a</span>

        <span className="text-[#FFDD00] font-medium">Free</span>

        <span>delivery inside Dhaka city.</span>
      </div>
    </div>
  );
}
