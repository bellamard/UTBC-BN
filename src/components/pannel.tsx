import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import Link from 'next/link';


pannel.propTypes = {

};

function pannel({ memories }) {

    return (
        <div className='w-full p-2'>
            <h3 className='text-3xl'>
                <Link href={`/dashBoard/${memories.title}`}>
                    {memories.title}
                </Link>

            </h3>
            <div className='flex w-full flex-wrap justify-start border-b border-blue-600'>
                {
                    memories.memory.map((book, index) => (
                        <Card key={index} memory={book} />
                    )
                    )
                }
            </div>



        </div>
    );
}

export default pannel;