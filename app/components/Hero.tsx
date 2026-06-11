export default function Hero() {
  return (
    <section className="w-full">
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
          px-[48px]
          py-[24px]
          object-cover
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
