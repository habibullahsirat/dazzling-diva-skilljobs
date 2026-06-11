export default function Hero() {
  return (
    <section className="">
      <div
        className="
          relative
          mx-auto
          h-[600px]
          max-w-[1440px]
          overflow-hidden
          rounded-2xl
          bg-[url('/hero-image.png')]
          bg-cover
          bg-center
        "
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end justify-center">
          <div className="text-center text-white mb-[15px]">
            <h1 className="max-w-4xl text-5xl font-bold leading-tight">
              Where Comfort And Style Hang Out
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Cool Drapes And Unique Prints That Make You Feel At Home Forever.
            </p>

            <button
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-md
                bg-yellow-400
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:bg-yellow-300
              "
            >
              ✦ Explore Collections
            </button>

            {/* Slider Indicators */}
            <div className="mt-10 flex justify-center gap-3">
              <div className="h-1 w-10 rounded-full bg-yellow-400" />
              <div className="h-1 w-10 rounded-full bg-white/40" />
              <div className="h-1 w-10 rounded-full bg-white/40" />
              <div className="h-1 w-10 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Hero() {
//   return (
//     <section className="relative top-[123px] flex h-[600px] w-full items-center justify-center px-[84px] py-[48px]">
//       {/* Hero Image Container */}
//       <div
//         className="
//           relative
//           flex
//           h-[504px]
//           w-full
//           max-w-[1272px]
//           flex-col
//           items-center
//           justify-end
//           gap-[28px]
//           rounded-[12px]
//           bg-[url('/hero-image.png')]
//           bg-cover
//           bg-center
//         "
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-transparent to-black/60" />

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center gap-[24px] pb-[24px] px-[48px]">
//           {/* Text Block */}
//           <div className="flex w-[811px] flex-col items-center gap-[12px] text-center text-white">
//             <h1 className="text-[48px] font-semibold leading-none capitalize">
//               Where Comfort And Style Hang Out
//             </h1>

//             <p className="w-[525px] text-[16px] font-medium leading-none capitalize text-white">
//               Cool Drapes And Unique Prints That Make You Feel At Home Forever.
//             </p>
//           </div>

//           {/* Button */}
//           <button className="flex h-[46px] w-[232px] items-center justify-center gap-[10px] rounded-[4px] bg-[#FFDD00] text-[#3D0B37]">
//             <span className="h-[18px] w-[18px] rounded-[2px] bg-[#3D0B37]" />
//             <span className="text-[18px] font-semibold capitalize">
//               Primary Button
//             </span>
//           </button>

//           {/* Slider Indicators */}
//           <div className="flex h-[4px] w-[200px] gap-[10px]">
//             <div className="h-[4px] w-[40px] rounded-full bg-[#FFDD00]" />
//             <div className="h-[4px] w-[30px] rounded-full bg-white/20" />
//             <div className="h-[4px] w-[30px] rounded-full bg-white/20" />
//             <div className="h-[4px] w-[30px] rounded-full bg-white/20" />
//             <div className="h-[4px] w-[30px] rounded-full bg-white/20" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
