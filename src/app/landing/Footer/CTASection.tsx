"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative font-['Space_Grotesk'] text-white lg:pt-36 pb-0 overflow-hidden bg-[#030A00]">
      
      {/* Large Green Curved Background (FIXED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[2/1] pointer-events-none">
        {/* Curved Horizon Line */}
        <div
          className="
            absolute
            top-[40px] lg:top-[100px]
            left-0
            w-full
            h-full
            rounded-[100%]
            border-t
            border-lime-400/40
            shadow-[0_-30px_80px_rgba(16,255,0,0.35)]
          "
        />
        
      </div>
 
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ================= TOP CTA CARD ================= */}
        <div
          className="relative -mt-32 rounded-[28px] overflow-hidden
          border border-white/5
          bg-[linear-gradient(90deg,#0d0f14_0%,#0a0c10_50%,#061b0f_100%)]
          p-12 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl z-10 text-center lg:text-left">
            <h3 className="font-bold font-['Space_Grotesk'] text-[32px] md:text-[40px] lg:text-[48px] leading-[115%] tracking-[-0.02em] mb-6 lg:mb-10">
              Don’t miss what’s <br className="hidden lg:block" /> coming next
            </h3>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full md:w-[300px] h-[52px] px-6 rounded-full
                bg-[#0b0f14] border border-lime-400/70
                text-white outline-none
                placeholder:text-gray-400 focus:border-lime-400"
              />

              <button
                className="w-full md:w-auto h-[52px] px-10 rounded-full
                bg-lime-400 text-black font-semibold
                border-2 border-lime-400
                transition-all duration-300 ease-in-out
                hover:bg-transparent hover:text-lime-400"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Earth Image */}
          {/* Hidden on mobile to prevent layout breakage, visible from lg up */}
          <div className="absolute hidden lg:block w-[45%] -right-30 -top-1 h-full pointer-events-none">
            <Image
              src="/earth.png"
              alt="Earth"
              fill
              className="object-cover object-top-left scale-[1.1]
              drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            />
          </div>
        </div>
        {/* ================= FOOTER AREA ================= */}
        {/* Stacked on mobile, grid on desktop */}
        <div className="mt-9 lg:mt-16 lg:mb-0 flex flex-col lg:grid lg:grid-cols-3 items-center lg:items-start gap-12 lg:gap-0 ml-12">
          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-0">
              <Image src="/logo.png" alt="Logo" width={25} height={50} />
              <span className="font-['Inter'] font-large text-2xl lg:text-2xl">Traverse VPN</span>
            </div>

            <p className="font-['DM_Sans'] font-light text-white text-lg lg:text-s max-w-xs mb-10 leading-relaxed ml-1 mt-2">
              Take control of your digital <br/> identity and enjoy the web <br/> the way it
              was meant to be.
            </p>

            
         <div className="flex justify-center order-first lg:order-none">
            <Button text={"Get Traverse Now!"} />
          </div>

            
          </div>

          

         <div className="flex gap-24 ml-32">

  {/* Company Section */}
  <div className="font-['DM_Sans'] flex flex-col items-start gap-3 text-white ml-40">
    <a href="#" className="transition text-lg lg:text-2xl">
      Company
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg"
    >
      About Us
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg"
    >
      Contact Us
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg whitespace-nowrap"
    >
      Refund Policy
    </a>
  </div>

  {/* Platforms Section */}
  <div className="font-['DM_Sans'] flex flex-col items-start gap-3 text-white">
    <a href="#" className="transition text-lg lg:text-2xl">
      Platforms
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg whitespace-nowrap"
    >
      VPN for Android
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg whitespace-nowrap"
    >
      VPN for iPhone
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg whitespace-nowrap"
    >
      VPN for Business
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg whitespace-nowrap"
    >
      VPN for Streaming
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg whitespace-nowrap"
    >
      VPN for Gaming
    </a>

    <a
      href="#"
      className="hover:text-lime-400 font-light transition text-lg lg:text-lg whitespace-nowrap"
    >
      VPN for Security
    </a>
  </div>

</div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-3 items-center mt-6 mb-4 text-[#5C5C5C] ml-16 mr-12">

  {/* Left - Social Icons */}
 <div className="flex gap-6 opacity-80">
  {[
    { src: '/x.svg', alt: 'X' },
    { src: '/instagram.svg', alt: 'IG' },
    { src: '/youtube.svg', alt: 'YT' },
    { src: '/linkedin.svg', alt: 'IN' }
  ].map((icon) => (
    <div
      key={icon.alt}
      style={{
        maskImage: `url(${icon.src})`,
        WebkitMaskImage: `url(${icon.src})`,
        maskRepeat: 'no-repeat',
        maskSize: 'contain'
      }}
      className="w-6 h-6 bg-[#FFFFFF] cursor-pointer transition-colors duration-300 hover:bg-lime-400"
    />
  ))}
</div>
  {/* Center */}
  
</div>
<div className="mt-12 font-['DM_Sans'] ml-12 text-xl text-[#5C5C5C] mb-4">

  {/* Divider Line */}
  <div className="w-full h-[1px] bg-white/20 mb-6"></div>

  {/* Bottom Row */}
  <div className="flex justify-between items-center text-[20px] text-[#5C5C5C];
">

    {/* Left */}
    <div>
      © 2025, All Rights Reserved
    </div>

    {/* Right */}
    <div className="flex items-center gap-2">

      <span className="hover:text-lime-400 transition cursor-pointer">
        Privacy Policy
      </span>

      <span className="text-[#5C5C5C];
">|</span>

      <span className="hover:text-lime-400 transition cursor-pointer">
        Terms of Use
      </span>

      <span className="text-[#5C5C5C];
">|</span>

      <span className="hover:text-lime-400 transition cursor-pointer">
        Sitemap
      </span>

    </div>

  </div>

</div>
      </div>

      
    </section>
  );
}