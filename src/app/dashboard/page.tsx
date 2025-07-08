"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderDashboard from "@/components/headerDashboard";
import Dash from "@/components/dash";
import CountMemory from "@/components/countMemory";
import Pannel from "@/components/pannel";
import image from "@/assets/SCN_0004.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Home = () => {
  // const [memories, setMemories]=useState([]);
  // const [countBookDepartment, setCountBookDepartment]=useState([]);
  const [loading, setLoading] = useState(true);
  const countBookDepartment = [
    { count: 129, name: "Informatique" },
    { count: 429, name: "Droit" },
    { count: 329, name: "Economie" },
    { count: 929, name: "Communication" },
    { count: 929, name: "Medecine" },
  ];

  const memories = [
    {
      title: "Nouveaute",
      memory: [
        {
          matricule: "ec08123",
          title: "developpement du marche public du Numerique en RDC",
          year: "2019-2020",
          image: image,
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

  const [memoriesSearch, setMemoriesSearch] = useState<MemoryCategory[]>(memories);

  type MemoryItem = {
    matricule: string;
    title: string;
    year: string;
    image?: any;
  };

  type MemoryCategory = {
    title: string;
    memory: MemoryItem[];
  };

  type MemoryFilters = {
    category?: string;
    title?: string;
    year?: string;
    matricule?: string;
  };

  const  filterMemories=(memories: MemoryCategory[], filters: MemoryFilters)=> {
    return memories
      .filter(
        (category: MemoryCategory) =>
          !filters.category ||
          category.title.toLowerCase().includes(filters.category.toLowerCase())
      )
      .map((category: MemoryCategory) => {
        const filteredMemory = category.memory.filter((item: MemoryItem) => {
          const matchTitle =
            !filters.title ||
            item.title.toLowerCase().includes(filters.title.toLowerCase());
          const matchYear = !filters.year || item.year === filters.year;
          const matchMatricule =
            !filters.matricule || item.matricule === filters.matricule;
          return matchTitle && matchYear && matchMatricule;
        });

        return {
          ...category,
          memory: filteredMemory,
        };
      })
      .filter((category: MemoryCategory) => category.memory.length > 0);
  }

  useEffect(() => {
    const getBook = async () => {
      try {
        const books = await axios.get("http://localhost:3000/representation");
        setMemories(books.data);
      } catch (errorFetch) {
        console.log(errorFetch);
      } finally {
        setLoading(false);
      }
    };
    getBook();
    console.log(memories);
  }, []);

  return (
    <div className="flex flex-col justify-between m-2 p-2 bg-gray-200  w-full flex-col flex-wrap rounded rounded-l ">
      <HeaderDashboard userName="bebe" path="DashBoard" />
      <CountMemory countBook={1060} countBookDepartment={countBookDepartment} />
      <div className="flex flex-col justify-between m-2 p-4 flex-wrap rounded-lg border-b border-blue-600 ">
        <div className="relative w-full max-w-md mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400 pointer-events-none">
            <FaMagnifyingGlass className="text-xl" />
          </span>
          <input
            type="text"
            placeholder="Rechercher un livre"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={(e) => {
              // Ajoute ici ta logique de recherche
              
              console.log(e.target.value);
              setMemoriesSearch(filterMemories(memories, { title: e.target.value }));
            }}
          />
        </div>
      </div>

      {memoriesSearch.map((category, index) => (
        <Pannel memories={category} key={index} />
      ))}
    </div>
  );
};

export default Home;
