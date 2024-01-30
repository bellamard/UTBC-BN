import Link from 'next/link';
import React from 'react';
import illustrat from '@/assets/illustrat03.jpeg'
import Image from 'next/image';
import { AiFillEdit } from "react-icons/ai";

const Banner = () => {
    return (
        <div className='section flex flex-row justify-between items-center place-content-center'>
            <div className='flex flex-col m-4 w-1/2 h-full '>
                <div className="flex flex-col py-2  p-4 rounded bg-gray-600/25">
                    <h2 className='text-[64px] font-bold text-white'>
                        Bienvenu(e)
                    </h2>
                    <h3 className='text-[42px] text-yellow-400 leading-none mb-2'>
                        dans la Bibliotheque Numérique

                    </h3>
                    <p className='text-white'>
                        de l&apos;Universitaire Technologique BelCampus
                    </p>
                    <div className='my-4 w-1/3'>
                        <Link href='' className='p-1 border border-sky-500 rounded-full  text-white flex items-center bg-gradient-to-r from-purple-500 to-pink-500/25 hover:bg-white hover:text-white/50'>
                            <div className="p-3 mr-4 rounded-full bg-sky-500">
                                <AiFillEdit />
                            </div>
                            <h3 className='text-xl'>
                                Commencez ici
                            </h3>

                        </Link>

                    </div>

                </div>



            </div>
            {/* <div className='m-8  flex justify-center bg-blue-800'>
                <Image src={illustrat} alt='illustration de la bibliothèque Numérique'  className='w-50 rounded-full' />
            </div> */}
        </div>
    );
};

export default Banner;