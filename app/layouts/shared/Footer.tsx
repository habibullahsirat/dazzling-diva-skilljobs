export default function Footer() {
  return (
    <footer className="bg-[#3D0B37] px-[80px] py-[48px]">
      <div className="flex justify-between mb-[30px]">
        <div>
          <div className="text-[#FFDD00] text-[24px] font-['Aclonica'] mb-[30px]">
            Dazzling Diva
          </div>
          <div className="flex gap-[10px] text-white">
            <img src="/vector-location.png" alt="" />
            <p className="font-['Inter'] text-[14px] font-[300]">
              29 SE 2nd Ave, Miami Florida 33131, United States
            </p>
          </div>
          <div className="flex gap-[10px] text-white mb-[20px]">
            <img src="/vector-mail.png" alt="" />
            <p>info@dazzingdiva.com</p>
            <img src="/vector-copy.png" alt="" />
          </div>
          <p className="text-white">(+92) 3942 7879</p>
        </div>
        <div className="text-white flex justify-between gap-[90px]">
          <div>
            <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold mb-[30px]">
              Shopping
            </h2>
            <p className="font-['Inter'] font-[300] text-[14px]">Wishlist</p>
            <p className="font-['Inter'] font-[300] text-[14px]">Cart</p>
            <p className="font-['Inter'] font-[300] text-[14px]">
              Shop by Category
            </p>
          </div>

          <div>
            <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold mb-[30px]">
              Information
            </h2>
            <p className="font-['Inter'] font-[300] text-[14px]">
              Track My Order
            </p>
            <p className="font-['Inter'] font-[300] text-[14px]">
              Corporate Enquires
            </p>
            <p className="font-['Inter'] font-[300] text-[14px]">FAQs</p>
          </div>

          <div>
            <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold mb-[30px]">
              Account
            </h2>
            <p className="font-['Inter'] font-[300] text-[14px]">My Account</p>
            <p className="font-['Inter'] font-[300] text-[14px]">My Orders</p>
          </div>
        </div>
      </div>

      <div className="border-t-1 border-white/20 flex justify-between gap-[50px] pt-[30px]">
        <div className="text-white font-['Inter'] text-[16px] font-semibold font-[600]">
          Copyright &copy; <span className="text-[#FF5F39]">Orbixon</span>
          2026. All rights reserved.
        </div>
        <div className="flex justify-between gap-[50px]">
          <img src="/facebook.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/instagram.png" alt="" />
        </div>
        <div className="flex justify-between gap-[50px] text-white">
          <div>Teams & Condition </div>
          <div>Privacy & Policy</div>
          <div>Refund Policy</div>
        </div>
      </div>
    </footer>
  );
}
