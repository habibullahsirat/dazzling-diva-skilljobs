export default function Footer() {
  return (
    <footer className="bg-[#3D0B37] flex justify-between px-[80px] py-[48px]">
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
      <div className="text-white flex justify-between gap-[90px]">
        <div>
          <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold">
            Shopping
          </h2>
          <p className="font-['Inter']">Whishlist</p>
          <p className="font-['Inter']">Cart</p>
          <p className="font-['Inter']">Shop by Category</p>
        </div>

        <div>
          <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold">
            Information
          </h2>
          <p className="font-['Inter']">Track My Order</p>
          <p className="font-['Inter']">Corporate Enquires</p>
          <p className="font-['Inter']">FAQs</p>
        </div>

        <div>
          <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold">
            Account
          </h2>
          <p className="font-['Inter']">My Account</p>
          <p className="font-['Inter']">My Orders</p>
        </div>
      </div>
    </footer>
  );
}
