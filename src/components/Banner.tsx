"use client";
import Link from "next/link";
import React from "react";
import illustrat from "@/assets/illustrat03.jpeg";
import Image from "next/image";
import { AiFillEdit } from "react-icons/ai";

const Banner = () => {
  return (
    <div
      className="section flex flex-col md:flex-row justify-between items-center min-h-[60vh] py-10 md:py-20 px-4 md:px-16"
      id="home"
    >
      {/* Bloc texte à gauche */}
      <div className="flex flex-col w-full md:w-1/2 h-full mx-auto md:mx-0 md:items-start">
        <div className="flex flex-col gap-4 py-10 px-8 rounded-2xl shadow-2xl bg-gradient-to-br from-blue-700/90 to-purple-600/80 mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-2">
            Bienvenu(e)
          </h2>
          <h3 className="text-2xl md:text-3xl text-yellow-400 leading-tight mb-2 font-semibold drop-shadow">
            dans la Bibliothèque Numérique
          </h3>
          <p className="text-white text-base md:text-lg mb-4">
            de l&apos;Université Technologique BelCampus
          </p>
          <div className="mt-2">
            <Link
              href="/login"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
            >
              <span className="p-2 rounded-full bg-white/20">
                <AiFillEdit className="text-2xl" />
              </span>
              <span className="text-lg">Commencez ici</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
