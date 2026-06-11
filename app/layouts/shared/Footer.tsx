// export default function Footer() {
//   return (
//     <footer className="bg-[#3D0B37] px-[80px] py-[48px]">
//       <div className="flex justify-between mb-[30px]">
//         <div>
//           <div className="text-[#FFDD00] text-[24px] font-['Aclonica'] mb-[30px]">
//             Dazzling Diva
//           </div>
//           <div className="flex gap-[10px] text-white">
//             <img src="/vector-location.png" alt="" />
//             <p className="font-['Inter'] text-[14px] font-[300]">
//               29 SE 2nd Ave, Miami Florida 33131, United States
//             </p>
//           </div>
//           <div className="flex gap-[10px] text-white mb-[20px]">
//             <img src="/vector-mail.png" alt="" />
//             <p className="font-['Inter'] text-[14px] font-[300]">
//               info@dazzingdiva.com
//             </p>
//             <img src="/vector-copy.png" alt="" />
//           </div>
//           <p className="text-white font-['Geist'] text-[18px] font-[700] font-bold ">
//             (+92) 3942 7879
//           </p>
//         </div>
//         <div className="text-white flex justify-between gap-[90px]">
//           <div>
//             <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold mb-[30px]">
//               Shopping
//             </h2>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               Wishlist
//             </p>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               Cart
//             </p>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               Shop by Category
//             </p>
//           </div>

//           <div>
//             <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold mb-[30px]">
//               Information
//             </h2>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               Track My Order
//             </p>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               Corporate Enquires
//             </p>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               FAQs
//             </p>
//           </div>

//           <div>
//             <h2 className="text-[16px] text-[#FFDD00] font-['Geist'] font-[700] font-bold mb-[30px]">
//               Account
//             </h2>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               My Account
//             </p>
//             <p className="font-['Inter'] font-[300] text-[14px] hover:text-[#FFDD00]">
//               My Orders
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="border-t-1 border-white/20 flex justify-between gap-[50px] pt-[30px]">
//         <div className="text-white font-['Inter'] text-[16px] font-semibold font-[600]">
//           Copyright &copy; <span className="text-[#FF5F39]">Orbixon</span>
//           2026. All rights reserved.
//         </div>
//         <div className="flex justify-between gap-[50px]">
//           <img src="/facebook.png" alt="" />
//           <img src="/twitter.png" alt="" />
//           <img src="/instagram.png" alt="" />
//         </div>
//         <div className="flex justify-between gap-[50px] text-white">
//           <div>Teams & Condition </div>
//           <div>Privacy & Policy</div>
//           <div>Refund Policy</div>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-[#3D0B37] px-4 sm:px-8 lg:px-[80px] py-10 lg:py-[48px]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
        {/* Left */}
        <div>
          <div className="text-[#FFDD00] text-2xl font-['Aclonica'] mb-6">
            Dazzling Diva
          </div>

          <div className="flex gap-2 text-white mb-3">
            <img src="/vector-location.png" className="w-5 h-5" />
            <p className="text-sm font-light">
              29 SE 2nd Ave, Miami Florida 33131, United States
            </p>
          </div>

          <div className="flex gap-2 text-white mb-4">
            <img src="/vector-mail.png" className="w-5 h-5" />
            <p className="text-sm font-light">info@dazzingdiva.com</p>
            <img src="/vector-copy.png" className="w-4 h-4 ml-2" />
          </div>

          <p className="text-white text-base sm:text-lg font-bold">
            (+92) 3942 7879
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-white">
          <div>
            <h2 className="text-[#FFDD00] font-bold mb-4">Shopping</h2>
            <p className="text-sm hover:text-[#FFDD00]">Wishlist</p>
            <p className="text-sm hover:text-[#FFDD00]">Cart</p>
            <p className="text-sm hover:text-[#FFDD00]">Shop by Category</p>
          </div>

          <div>
            <h2 className="text-[#FFDD00] font-bold mb-4">Information</h2>
            <p className="text-sm hover:text-[#FFDD00]">Track My Order</p>
            <p className="text-sm hover:text-[#FFDD00]">Corporate Enquires</p>
            <p className="text-sm hover:text-[#FFDD00]">FAQs</p>
          </div>

          <div>
            <h2 className="text-[#FFDD00] font-bold mb-4">Account</h2>
            <p className="text-sm hover:text-[#FFDD00]">My Account</p>
            <p className="text-sm hover:text-[#FFDD00]">My Orders</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 pt-6 flex flex-col lg:flex-row justify-between gap-6 text-white text-sm">
        <div>
          Copyright © <span className="text-[#FF5F39]">Orbixon</span> 2026. All
          rights reserved.
        </div>

        <div className="flex gap-6">
          <img src="/facebook.png" className="w-5 h-5" />
          <img src="/twitter.png" className="w-5 h-5" />
          <img src="/instagram.png" className="w-5 h-5" />
        </div>

        <div className="flex flex-wrap gap-4">
          <div>Terms & Condition</div>
          <div>Privacy Policy</div>
          <div>Refund Policy</div>
        </div>
      </div>
    </footer>
  );
}
