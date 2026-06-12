const categories = [
  { name: "Sharee", image: "/sharee.jpg" },
  { name: "Three Piece", image: "/three-piece.jpg" },
  { name: "Two Piece", image: "/two-piece.jpg" },
  { name: "Hijab", image: "/hijab.jpg" },
  { name: "Royal Abaya", image: "/royal-abaya.png" },
];

export default function Category() {
  return (
    <section className="bg-[#F2F4F8] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto px-0 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-md bg-white p-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#3D0B37]">
            Category <span className="italic font-normal">Section</span>
          </h2>

          <button className="w-full sm:w-auto rounded bg-[#FFDD00] px-5 py-3 font-semibold text-[#3D0B37] transition hover:opacity-90">
            Explore More
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category.name}
              className="
                group
                relative
                overflow-hidden
                rounded-md
                border
                border-black/10
                bg-white
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <img
                src={category.image}
                alt={category.name}
                className="
                  w-full
                  h-[180px]
                  sm:h-[240px]
                  md:h-[280px]
                  lg:h-[400px]
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 rounded-md bg-white py-2 sm:py-3 text-center shadow-md">
                <span className="text-xs sm:text-sm lg:text-base font-semibold text-[#3D0B37]">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
