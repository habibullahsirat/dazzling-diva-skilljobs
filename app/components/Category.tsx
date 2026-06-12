const categories = [
  { name: "Sharee", image: "/sharee.jpg" },
  { name: "Three Piece", image: "/three-piece.jpg" },
  { name: "Two Piece", image: "/two-piece.jpg" },
  { name: "Hijab", image: "/hijab.jpg" },
  { name: "Royal Abaya", image: "/royal-abaya.png" },
];

export default function Category() {
  return (
    <section className="bg-[#F2F4F8] py-12">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm mb-12">
          <h2 className="text-2xl font-medium">
            Category <span className="italic font-normal">Section</span>
          </h2>

          <button className="bg-[#FFDD00] px-[18px] py-3 rounded text-[#3D0B37] font-semibold">
            Explore More
          </button>
        </div>

        {/* Cards */}
        <div className="flex gap-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative flex-1 h-[400px] border border-black/10 rounded-md overflow-hidden bg-white"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-fit-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-md py-3 text-center shadow-sm">
                <span className="text-sm font-['Geist'] font-semibold text-[#3D0B37]">
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
