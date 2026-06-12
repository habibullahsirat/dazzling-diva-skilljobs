export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[48px]">
      <div
        className="
          relative
          mx-auto
          h-[420px] sm:h-[500px] lg:h-[600px]
          max-w-[1440px]
          overflow-hidden
          rounded-2xl
          bg-[url('/hero-image.png')]
          bg-cover bg-center
        "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end justify-center px-4 pb-10">
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Where Comfort And Style Hang Out
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-xl mx-auto">
              Cool Drapes And Unique Prints That Make You Feel At Home Forever.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 sm:px-6 py-2 sm:py-3 font-semibold text-black hover:bg-yellow-300 transition">
              ✦ Explore Collections
            </button>

            {/* Indicators */}
            <div className="mt-8 flex justify-center gap-2">
              <div className="h-1 w-8 sm:w-10 bg-yellow-400 rounded-full" />
              <div className="h-1 w-8 sm:w-10 bg-white/40 rounded-full" />
              <div className="h-1 w-8 sm:w-10 bg-white/40 rounded-full" />
              <div className="h-1 w-8 sm:w-10 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
