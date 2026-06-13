export default function NewArrivals() {
  const products = [
    {
      title: "Orange Color Abaya With Lace & Stone Work",
      price: "৳ 10,000.00",
      image: "/dress1.png",
    },
    {
      title: "Brown Georgette Straight Salwar Kameez",
      price: "৳ 8,642.00",
      image: "/dress2.png",
    },
    {
      title: "Orange A-Line Tunic With Shrug",
      price: "৳ 10,000.00",
      image: "/dress3.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 bg-[#F2F4F8]">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-geist text-[32px] font-medium leading-none text-center capitalize text-[#3D0B37]">
          New Arrivals
        </h2>

        <p className="text-center font-inter text-sm font-normal leading-none capitalize text-black">
          Just In Great Product With Great Deal
        </p>
      </div>

      {/* Products */}
      <div className="flex w-full items-center justify-center gap-7 px-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-1 flex-col gap-[14px]">
            {/* Card */}
            <div
              className="relative flex h-[619px] flex-col justify-between rounded-[6px] border border-black/10 bg-cover bg-center p-7"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            >
              {/* New Arrival Badge */}
              <span className="w-fit rounded-full bg-[#FFDD00] px-[10px] py-2 text-center font-geist text-xs font-normal leading-none text-[#3D0B37] shadow-[0px_22px_48px_rgba(0,0,0,0.05)]">
                New Arrival
              </span>

              {/* Price */}
              <div className="flex justify-end">
                <div className="rounded-[6px] bg-white px-[18px] py-[14px] shadow-[0px_22px_48px_rgba(0,0,0,0.05)]">
                  <span className="font-geist text-base font-bold leading-none text-[#3D0B37]">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Name */}
            <h3 className="font-geist text-base font-semibold leading-none capitalize text-black">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
