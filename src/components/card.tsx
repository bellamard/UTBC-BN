import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import logos from "@/assets/logos.png";

import { FaFeather, FaCalendar } from "react-icons/fa";

card.propTypes = {};
function card({ memory }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/dashboard/book/${memory.matricule}`}>
        <Image
          src={memory.image ? memory.image : logos}
          alt={memory.title}
          className="w-full h-40 object-contain"
        />

        <div className="p-4">
          <h4 className="text-lg font-bold text-gray-800 mb-1">
            {memory.title}
          </h4>
          <div className="flex flex-row flex-wrap justify-between items-center">
            <h6 className="text-sm text-gray-600">📅 {memory.year}</h6>
            <h6 className="text-sm text-gray-500">🆔 {memory.matricule}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default card;
