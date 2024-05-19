import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import logos from '@/assets/logos.png';

import { FaFeather, FaCalendar } from 'react-icons/fa';

card.propTypes = {

};
function card({ memory }) {

    return (
        <div className='m-8 w-[200px]  rounded'>
            <Link href={`/dashboard/book/${memory.matricule}`} className='flex flex-col justify-between'>
                <div className='w-full flex justify-center border-b border-blue-600'>
                    <Image src={memory.image ? (memory.image) : (logos)} alt={memory.title} width='200' height='212' objectFit="cover" className='rounded' />

                </div>
                <div className='flex p-2 bg-white'>
                    <FaFeather className='text-5xl mr-2' />
                    <h3 className='text-[14px]'>{memory.title}</h3>
                </div>

            </Link>
        </div>


    );
}

export default card;