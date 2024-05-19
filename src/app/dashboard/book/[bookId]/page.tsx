'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import logos from '@/assets/logos.png';
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
        const response = await axios.get(`https://localhost/api/${params.bookId}`);
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
  const { title, author, domain, director, rapport, year, urlBook } = dataBook;
  return (
    <div>
      <div>
        <FaBookOpen />
        <h2>{title}</h2>
      </div>
      <div>
        <div>
          <Image src={urlBook ? `http://localhost/api/cover/${urlBook}` : logos} width="280px" height="350px" objectFit="cover" className='rounded' />
        </div>
        <div>
          <div>
            <FaUser />
            <h3>
              {author}
            </h3>
          </div>
          <div>
            <FaFeather />
            {domain}
          </div>
          <div>
            <FaUserEdit />
            <div>
              <div>

                <h3>
                  Directeur
                </h3>
                {
                  director
                }
              </div>
              <div>
                <h3>
                  Rapporteur
                </h3>
                {
                  rapport
                }
              </div>
            </div>
          </div>
          <div>
            <FaCalendar />
            {
              year
            }
          </div>

        </div>
      </div>

      <pre>{JSON.stringify(dataBook, null, 2)}</pre>

    </div>
  );
}

export default Home;