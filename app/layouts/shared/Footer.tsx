export default function Footer() {
  return (
    <footer className="bg-[#3D0B37] flex justify-between">
      <div>
        <div className="text-[#FFDD00] text-[24px] font-['Aclonica']">
          Dazzling Diva
        </div>
        <div className="flex gap-[10px] text-white">
          <img src="/vector-location.png" alt="" />
          <p>29 SE 2nd Ave, Miami Florida 33131, United States</p>
        </div>
        <div className="flex gap-[10px] text-white">
          <img src="/vector-mail.png" alt="" />
          <p>info@dazzingdiva.com</p>
          <img src="/vector-copy.png" alt="" />
        </div>
        <p className="text-white">(+92) 3942 7879</p>
      </div>
      <div className="text-white">
        <div>
          <h2 className="text-[16px] font-[700] font-bold">Shopping</h2>
          <p>Whishlist</p>
          <p>Cart</p>
          <p>Shop by Category</p>
        </div>
      </div>
    </footer>
  );
}
