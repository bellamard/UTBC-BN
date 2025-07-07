import Image from "next/image";
import logos from "@/assets/logos.png";
import React from "react";
import Link from "next/link";
import { FaUserPlus, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    // <div className="bg-white shadow-md">
    //   <div className="flex flex-row items-center">
    //     <Image src={logos} alt="logo site" className="h-32 w-auto"/>
    //     <div className="flex flex-col">
    //       <Link href="#">
    //         <h1 className="text-4xl font-bold items-center text-blue-400">
    //           UTBC
    //         </h1>
    //         <p className="font-light text-xs text-black-400">
    //           bibliotheque Numérique
    //         </p>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="flex flex-col md:flex-row justify-between items-center mt-2 md:mt-0">
    //     <ul className="flex flex-row justify-between items-center">
    //       <li className="p-1 text-blue-400">
    //         <Link href="/login" className="flex flex-col items-center text-3xl">
    //           <FaUser />
    //           <h3 className="font-light text-[10px]">Se Connecter</h3>
    //         </Link>
    //       </li>
    //       <li className="mx-2 p-1 text-blue-400">
    //         <Link
    //           href="/register"
    //           className="flex flex-col items-center text-3xl"
    //         >
    //           <FaUserPlus className="mr-0.5 " />
    //           <h3 className="font-light text-[10px]">s&apos;inscrire</h3>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="bg-white/50 backdrop-blur-md shadow-md py-4 px-6">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    
   
    <div className="flex items-center space-x-3">
      <Image src={logos} alt="logo site" className="h-20 w-auto transition-transform duration-300 hover:scale-105" />
      <Link href="#" className="group">
        <div>
          <h1 className="text-3xl font-bold text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            UTBC
          </h1>
          <p className="font-light text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
            Bibliothèque Numérique
          </p>
        </div>
      </Link>
    </div>

    
    <ul className="flex space-x-6">
      <li>
        <Link href="/login" className="flex flex-col items-center text-blue-500 hover:text-blue-700 transition-colors duration-300">
          <FaUser className="text-2xl mb-1 hover:scale-110 transition-transform duration-300" />
          <span className="text-xs font-light">Se connecter</span>
        </Link>
      </li>
      <li>
        <Link href="/register" className="flex flex-col items-center text-blue-500 hover:text-blue-700 transition-colors duration-300">
          <FaUserPlus className="text-2xl mb-1 hover:scale-110 transition-transform duration-300" />
          <span className="text-xs font-light">S’inscrire</span>
        </Link>
      </li>
    </ul>
  </div>
</div>

  );
};

export default Header;
