"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import logos from "@/assets/logos.png";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaUser,
  FaBookOpen,
  FaCalendar,
  FaFeather,
  FaUserEdit,
  FaArrowLeft,
} from "react-icons/fa";

function Home({
  params,
  searchParams,
}: {
  params: { bookId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [dataBook, setDataBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const memories = [
    {
      title: "Nouveaute",
      memory: [
        {
          matricule: "ec08123",
          title: "developpement du marche public du Numerique en RDC",
          year: "2019-2020",
          image: "SCN_0004.jpg",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du Boursier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du Boursier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du routier en RDC",
          year: "2019-2020",
        },
      ],
    },
    {
      title: "Favories",
      memory: [
        {
          matricule: "ec08123",
          title: "developpement du marche du Numerique en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du Boursier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du Boursier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du routier en RDC",
          year: "2019-2020",
        },
      ],
    },
    {
      title: "Populaire",
      memory: [
        {
          matricule: "ec08123",
          title: "developpement du marche du Numerique en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du Boursier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du Boursier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du routier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du Boursier en RDC",
          year: "2019-2020",
        },
        {
          matricule: "ec08124",
          title: "developpement du marche du routier en RDC",
          year: "2019-2020",
        },
      ],
    },
  ];
  const found = (bookId: String) => {
    return memories
      .flatMap((category) => category.memory)
      .find((item) =>
        item.matricule.toLowerCase().includes(bookId.toLowerCase())
      );
  };
  const yo: any = found(params.bookId);

  useEffect(() => {
    setDataBook(yo);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center ">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center ">
          <h2>Error!!!</h2>
        </div>
      </div>
    );
  }

  const {
    id,
    title,
    image,
    urlBook,
    Names,
    Faculte,
    option,
    directeur,
    rapporteur,
    year,
  } = dataBook;

  return (
    <div className="flex flex-col p-6 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
      >
        <FaArrowLeft className="mr-2" />
        Retour
      </button>
      <div className="flex items-center mb-6 border-b pb-4">
        <FaBookOpen className="text-blue-600 text-[100px] mr-6" />
        <h2 className="text-5xl font-extrabold text-gray-800">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src={image ? require("@/assets/" + image) : logos}
            objectFit="cover"
            className="w-full h-96 object-contain rounded-xl border"
            alt={title}
          />
        </div>

        {/* Informations */}
        <div className="flex flex-col justify-between space-y-6 text-gray-700">
          {/* Étudiant */}
          <div className="flex items-center space-x-3">
            <FaUser className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold">{Names}</h3>
          </div>

          {/* Faculté & Option */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <FaFeather className="text-blue-600 text-xl" />
              <h4 className="text-lg">{Faculte}</h4>
            </div>
            <div className="flex items-center space-x-2">
              <FaFeather className="text-blue-600 text-xl" />
              <h4 className="text-lg">{option}</h4>
            </div>
          </div>

          {/* Directeur et Rapporteur */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <FaUserEdit className="text-blue-600 text-xl" />
                <h4 className="font-medium">Directeur</h4>
              </div>
              <p className="text-lg">{directeur}</p>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <FaUserEdit className="text-blue-600 text-xl" />
                <h4 className="font-medium">Rapporteur</h4>
              </div>
              <p className="text-lg">{rapporteur}</p>
            </div>
          </div>

          {/* Année académique */}
          <div className="flex items-center space-x-3">
            <FaCalendar className="text-blue-600 text-xl" />
            <h4 className="text-lg">
              Année Académique : <span className="font-semibold">{year}</span>
            </h4>
          </div>

          {/* Bouton de lecture */}
          <div>
            <Link
              href={`/view/${id}`}
              className="inline-block w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all duration-200"
            >
              📖 Faire la lecture
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
