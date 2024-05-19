'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

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

  return (
    <div>
      <h2>Fetched Data</h2>
      <pre>{JSON.stringify(dataBook, null, 2)}</pre>
    </div>
  );
}

export default Home;