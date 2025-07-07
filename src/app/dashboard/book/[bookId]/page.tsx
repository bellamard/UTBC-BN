'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import logos from '@/assets/logos.png';
import Link from 'next/link';
import { FaUser, FaBookOpen, FaCalendar, FaFeather, FaUserEdit } from 'react-icons/fa';

function Home({
  params,
  searchParams,
}: {
  params: { bookId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [dataBook, setDataBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${params.bookId}`);
        setDataBook(response.data);
      }
      catch (errorFetch) {
        setError('Erreur de reception des données');
        console.log('Erreur de reception des données', errorFetch);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.bookId])

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center '>
          <h2>
            Loading...
          </h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center '>
          <h2>
            Error!!!
          </h2>
        </div>
      </div>
    )
  }
  console.log(dataBook);
  const { id,title, Names, Faculte, option, directeur, rapporteur, year, urlBook } = dataBook;
  return (
    <div className='flex flex-col p-4'>
      <div className='flex justify-between items-center'>
        <FaBookOpen className='mr-2 text-[120px]' />
        <h2 className='text-4xl font-bold'>{title}</h2>
      </div>
      <div className='flex justify-between mt-8'>
        <div className='flex justify-center w-[50%]'>
          <Image src={urlBook ? `http://localhost/api/cover/${urlBook}` : logos} width="480px" height="450px" objectFit="cover" className='rounded' />
        </div>
        <div className='border-l border-blue p-4 rounded'>
          <div className='flex items-center'>
            <FaUser className='mr-2 text-3xl' />
            <h3 className='text-2xl font-bold'>
              {Names}
            </h3>
          </div>
          <div className='flex my-4 justify-between'>
            <div className='flex items-center'>
              <FaFeather className='mr-2 text-3xl' />
              <h4 className='text-2xl'>
                {Faculte}
              </h4>
            </div>
            <div className='flex items-center'>
              <FaFeather className='mr-2 text-3xl' />
              <h4 className='text-2xl'>
                {option}
              </h4>

            </div>
          </div>

          <div>


            <div>
              <div>
                <div className='flex align-text-bottom'>
                  <FaUserEdit className='mr-2 text-3xl' />
                  <h3>
                    Directeur
                  </h3>
                </div>
                <h4 className='text-2xl'>
                  {
                    directeur
                  }
                </h4>

              </div>
              <div>
                <div className='flex align-text-bottom'>
                  <FaUserEdit className='mr-2 text-3xl' />
                  <h3>
                    Rapporteur
                  </h3>
                </div>

                <h4 className='text-2xl'>
                  {
                    rapporteur
                  }
                </h4>

              </div>
            </div>
          </div>
          <div >
            <div className='flex'>
              <FaCalendar className='mr-2 text-3xl' />
              <h3>
                Année Académique
              </h3>
            </div>
            <h4 className='text-2xl'>
              {
                year
              }
            </h4>

          </div>
          <div>
            <Link href={`/dashboard/book/${id}/view/${id}`} className='border border-blue-600 bg-blue-600 p-2 rounded text-white hover:bg-blue-400 hover:text-yellow-400'>
              Faire la lecture
            </Link>
          </div>

        </div>
      </div>


    </div >
  );
}

export default Home;