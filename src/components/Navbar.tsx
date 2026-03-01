import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Languages } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Plans", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  ">
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}
      </style>
      <div className="max-w-11/12 mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex  items-center">
            <Image
              src="/logo.png"
              alt="Traverse Logo"
              width={32}
              height={32}
              className="object-contain w-[60px] h-[60px] "
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=" hover:text-green-400 transition-colors text-lg font"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Language and CTA */}
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Languages size={20} />
          </button>

          {/* Gradient Border Button */}
          <Link
            href="/get-started"
            className="relative group p-[1.5px] inline-flex items-center justify-center rounded-full overflow-hidden transition-transform active:scale-95"
          >
            {/* The Animated Spinning Gradient Layer */}
            <span
              className="absolute inset-[-1000%] animate-spin-slow opacity-100 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 60%, #22c55e 90%, #4ade80 100%)",
              }}
            />

            {/* The Button Body (Masks the center of the spinning gradient) */}
            <div className="relative px-6 py-2 bg-black rounded-full transition-all group-hover:bg-zinc-900 flex items-center gap-2">
              <span className="text-white text-lg font-semibold tracking-wide">
                Get Traverse
              </span>

              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-shadow pointer-events-none" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
