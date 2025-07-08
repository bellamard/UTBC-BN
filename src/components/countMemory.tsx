import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link';
import {
  FaBookOpenReader,
  FaBook,
  FaHospital,
  FaScaleBalanced,
  FaLaptopCode,
  FaLandmark,
  FaTv,
} from "react-icons/fa6";

countMemory.propTypes = {};

function countMemory(props: any) {
  const { countBook, countBookDepartment } = props;
  const bookDepartment = countBookDepartment.length;
  console.log(bookDepartment);

  return (
    <div className="backgroundBanner flex flex-col justify-between m-2 p-4 flex-col flex-wrap rounded rounded-l">
      <div>
        <div className="flex flex-row justify-center items-center border-b pb-2">
          <FaBook className="text-2xl" />
          <h3 className="titleBannert">LIVRES</h3>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Total: {countBook}</h3>
          <p className="text-sm text-yellow-600">Nombre total de memoires</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">
            Categories : {bookDepartment}
          </h3>
          <p className="text-sm text-yellow-600">Nombre de categories</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mt-4 ">
          {countBookDepartment.map((bookDepartment: any, key: number) => (
            <div
              key={key}
              className="w-[240px] border border-blue-800 p-2 justify-between rounded items-right mb-4 bg-gradient-to-br from-blue-500 to-purple-600 hover:bg-opacity-25  transition duration-300 ease-in-out  transform hover:scale-105 transition duration-200 ease-in-out shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <Link href={`/dashboard/${bookDepartment.name}`} >
                {bookDepartment.name === "Informatique" ? (
                  <FaLaptopCode className="text-5xl " />
                ) : bookDepartment.name === "Droit" ? (
                  <FaScaleBalanced className="text-5xl " />
                ) : bookDepartment.name === "Economie" ? (
                  <FaLandmark className="text-5xl " />
                ) : bookDepartment.name === "Communication" ? (
                  <FaTv className="text-5xl " />
                ) : bookDepartment.name === "Medecine" ? (
                  <FaHospital className="text-5xl " />
                ) : (
                  <FaBookOpenReader className="text-5xl " />
                )}
                <h3 className="text-lg font-semibold">{bookDepartment.name}</h3>
                <p className="text-sm text-blue-00">
                  {bookDepartment.count} memoires
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default countMemory;
