"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative font-['Space_Grotesk'] bg-[#020202] text-white pt-36 pb-24 overflow-hidden">
      
      {/* Large Green Curved Background (FIXED) */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2
        w-[1400px] h-[700px]
        bg-[radial-gradient(ellipse_at_center,_rgba(124,255,0,0.25)_0%,_rgba(0,60,0,0.45)_40%,_transparent_70%)]
        blur-[40px]
        pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        
        {/* ================= TOP CTA CARD ================= */}
        <div
          className="relative rounded-[28px] overflow-hidden
          border border-white/5
          bg-[linear-gradient(90deg,#0d0f14_0%,#0a0c10_50%,#061b0f_100%)]
          shadow-[0_0_0_1px_rgba(255,255,255,0.03)] p-16 flex items-center justify-between"
        >
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl z-10">
            <h3 className="font-bold font-['Space_Grotesk'] text-[48px] leading-[115%] tracking-[-0.02em] mb-10">
              Don’t miss what’s <br /> coming next
            </h3>

            <div className="flex gap-4 items-center">
              
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-[300px] h-[52px] px-6 rounded-full
                bg-[#0b0f14] border border-lime-400/70
                text-white outline-none
                placeholder:text-gray-400 focus:border-lime-400"
              />

              <button
                className="h-[52px] px-10 rounded-full
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
          <div className="absolute w-[45%] -right-30 h-full pointer-events-none">
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
        <div className="mt-28 grid grid-cols-3 items-start">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <span className="font-medium text-xl">Traverse VPN</span>
            </div>

            <p className="text-gray-400 max-w-xs leading-relaxed">
              Take control of your digital identity and enjoy the web the way it
              was meant to be.
            </p>

            <div className="flex gap-6 mt-8 opacity-80">
              <Image src="/x.png" alt="X" width={20} height={20} />
              <Image src="/instagram.png" alt="IG" width={20} height={20} />
              <Image src="/youtube.png" alt="YT" width={20} height={20} />
              <Image src="/linkedin.png" alt="IN" width={20} height={20} />
            </div>
          </div>

          {/* CENTER BUTTON */}
          <div className="flex justify-center">
            <Button text={"Get Traverse Now!"} />
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-col items-end gap-5 text-gray-400 text-xl">
            <a href="#" className="hover:text-lime-400 transition">
              About Us
            </a>
            <a href="#" className="hover:text-lime-400 transition">
              Security
            </a>
            <a href="#" className="hover:text-lime-400 transition">
              Refund Policy
            </a>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-20 grid grid-cols-3 items-center text-gray-500 text-sm">
          <div></div>

          <div className="text-center">
            © 2025, All Rights Reserved
          </div>

          <div className="text-right">
            <span className="hover:text-lime-400 transition cursor-pointer">
              Privacy Policy
            </span>
            {" | "}
            <span className="hover:text-lime-400 transition cursor-pointer">
              Terms of Use
            </span>
          </div>
        </div>

      </div>

      {/* WATERMARK (FIXED PROPERLY) */}
      <div
        className="absolute bottom-[-140px] left-0 w-full
        opacity-5 pointer-events-none select-none mb-40"
      >
        <div className="flex items-begin">
          <img
            src="/watermarklogo.png"
            alt="Watermark Logo"
            className="h-[240px] w-auto mr-10"
          />
          <span className="text-[200px] font-extrabold text-white leading-none">
            Traverse VPN
          </span>
        </div>
      </div>

    </section>
  );
}