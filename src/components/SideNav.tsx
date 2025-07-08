import React from "react";
import Link from "next/link";
import logos from "@/assets/logos.png";
import Image from "next/image";
import {
  FaBook,
  FaBookReader,
  FaSchool,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";

const navLinks = [
  {
    href: "#",
    icon: <FaBookReader className="text-2xl" />,
    label: "Mes lectures",
  },
  {
    href: "/Nouveaute",
    icon: <FaBook className="text-2xl" />,
    label: "Nouveautés",
  },
  {
    href: "#",
    icon: <FaSchool className="text-2xl" />,
    label: "Domaines",
  },
  {
    href: "/Favories",
    icon: <FaStar className="text-2xl" />,
    label: "Favoris",
  },
];

const SideNav = () => {
  return (
    <aside className="sticky top-0 flex flex-col justify-between h-screen w-[15%] min-w-[180px] bg-white/90 shadow-2xl rounded-r-3xl py-8 px-3 z-20 animate-slide-in-left">
      {/* Logo */}
      <div>
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src={logos}
              alt="logo site"
              width={70}
              height={70}
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-blue-800 font-medium hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-900 transition-all duration-300 group"
                >
                  <span className="group-hover:scale-125 group-hover:text-blue-600 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="tracking-wide">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Déconnexion */}
      <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-red-600 font-semibold hover:bg-red-50 hover:text-red-800 transition-all duration-300 shadow-sm">
        <FaSignOutAlt className="text-2xl" />
        Déconnexion
      </button>
      <style jsx global>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
      `}</style>
    </aside>
  );
};

export default SideNav;
