import React from 'react';

function Home({
  params,
  searchParams,
}: {
  params: { bookId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <div>
            Livre
            <p>{params.bookId}</p>
        </div>
    );
}

export default Home;