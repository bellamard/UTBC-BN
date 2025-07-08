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

  const filterMemories = (
    memories: MemoryCategory[],
    filters: MemoryFilters
  ) => {
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
  };

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
  }, []);

  return (
    <div>
      <CountMemory countBook={1060} countBookDepartment={countBookDepartment} />
    </div>
  );
};

export default Home;
