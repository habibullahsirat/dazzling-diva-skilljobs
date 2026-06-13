import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Orange Color Abaya With Lace & Stone Work",
    image: "/abaya.png",
    originalPrice: 8642,
    discountedPrice: 8642,
    saveAmount: 680,
  },
  {
    id: 2,
    title: "Orange Color Abaya With Lace & Stone Work",
    image: "/abaya.png",
    originalPrice: 8642,
    discountedPrice: 8642,
    saveAmount: 680,
  },
  {
    id: 3,
    title: "Orange Color Abaya With Lace & Stone Work",
    image: "/abaya.png",
    originalPrice: 8642,
    discountedPrice: 8642,
    saveAmount: 680,
  },
  {
    id: 4,
    title: "Orange Color Abaya With Lace & Stone Work",
    image: "/abaya.png",
    originalPrice: 8642,
    discountedPrice: 8642,
    saveAmount: 680,
  },
];

export default function TwoPiece() {
  return (
    <section className="bg-[#F2F4F8] py-8 sm:py-10 lg:py-12 font-['Geist']">
      <div className="mx-auto px-0 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-md bg-white p-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#3D0B37]">
            Two Piece
          </h2>

          <button className="w-full sm:w-auto rounded bg-[#FFDD00] px-5 py-3 font-semibold text-[#3D0B37] transition hover:opacity-90">
            Explore More
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
